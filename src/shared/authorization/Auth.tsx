import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useEffect, useState } from "react";
import { useSignup } from "../../hooks/useSignup";
import { useLogin } from "../../hooks/useLogin";
import Spinner from "../../components/ui/spinner";

interface LayoutProps {
  children: React.ReactNode;
}

export function Auth(props: LayoutProps) {
  const [displayName, setDisplayName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [avatar, setAvatar] = useState<File>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<string>('auth');
  const [error, setError] = useState<string>('');

  const { signup, error: signupError } = useSignup();
  const { login, error: loginError } = useLogin();

  const handleOpen = () => setIsOpen(true);

  const handleClose = () => {
    setIsOpen(false);
    setIsLoading(false);
  };

  const handleLogin = async () => {
    setIsLoading(true);

    const res = await login(email, password);

    setError(loginError);

    if (res) return handleClose();

    setIsLoading(false);
  };

  const handleSignUp = async () => {
    if (!avatar) return;

    setIsLoading(true);

    const res = await signup({
      displayName,
      email,
      password,
      avatar,
    });

    setError(signupError as string);

    if (res) {
      handleClose();
      return;
    }

    setIsLoading(true);
  };

  useEffect(() => {
    setEmail('');
    setPassword('');
    setDisplayName('');
    setAvatar(undefined);
    setError('')
  }, [activeTab]);

  return (
    <Dialog open={isOpen}>
      <DialogTrigger onClick={handleOpen} asChild>{props.children}</DialogTrigger>
      <DialogContent сlassName="flex justify-center items-center min-w-[462px] min-h-[380px] sm:max-w-[328px] max-h-[366px] mx-auto">
        <Tabs defaultValue="auth">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="auth" onClick={() => setActiveTab('auth')}>Авторизация</TabsTrigger>
            <TabsTrigger value="registration" onClick={() => setActiveTab('registration')}>Регистрация</TabsTrigger>
          </TabsList>
          <TabsContent value="auth">
            <Card>
              <CardHeader>
                <CardTitle className="text-center font-semibold text-[22px]">
                  Авторизация
                </CardTitle>
                <CardDescription></CardDescription>
              </CardHeader>
              <CardContent className="space-y-5">
                <div>
                  <Input onChange={(e) => setEmail(e.target.value)} id="username" placeholder="Логин" type="email" />
                </div>
                <div>
                  <Input onChange={(e) => setPassword(e.target.value)} id="password" placeholder="Пароль" type="password" />
                </div>
                {loginError && <p className="text-red-500">{error}</p>}
                <div className="flex items-center gap-3 pt-6 pb-4">
                  <Checkbox id="terms" className="border-[#A0A0A2]" />
                  <label
                    htmlFor="terms"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Запомнить меня
                  </label>
                  <a
                    href="#"
                    className="text-xs font-medium text-[#1875F0] pl-[150px]"
                  >
                    Забыли пароль?
                  </a>
                </div>
              </CardContent>
              <CardFooter>
              <Button
                  onClick={handleLogin}
                  disabled={isLoading}
                  type="submit"
                >
                  {isLoading ? <Spinner /> : 'Войти'}
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="registration">
            <Card>
              <CardHeader>
                <CardTitle className="text-center font-semibold text-[22px]">
                  Регистрация
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-5">
                <div>
                  <Label htmlFor="current"></Label>
                  <Input onChange={(e) => setDisplayName(e.target.value)} id="current" placeholder="Имя" />
                </div>
                <div>
                  <Label htmlFor="new"></Label>
                  <Input  onChange={(e) => setEmail(e.target.value)} id="new" placeholder="Почта" type="email" />
                </div>
                <div>
                  <Input onChange={(e) => setPassword(e.target.value)} id="new" type="password" placeholder="Пароль" />
                </div>
                {signupError && <p className="text-red-500">{error}</p>}
              </CardContent>
              <CardFooter>
                <Button className="w-full"
                  type="submit"
                  disabled={isLoading}
                  onClick={handleSignUp}
                >
                  {isLoading ? <Spinner /> : 'Зарегистрироваться'}
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}
