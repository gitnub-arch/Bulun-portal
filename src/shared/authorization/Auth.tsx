import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import { Checkbox } from "@/components/ui/checkbox";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useSignup } from "../../hooks/useSignup";
import { useLogin } from "../../hooks/useLogin";

interface LayoutProps {
  children: React.ReactNode;
}

export function Auth(props: LayoutProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signup } = useSignup();
  const { login } = useLogin();

  const handleLogin = async () => {
    await login(email, password);
  };
  const handleSignUp = async () => {
    await signup({
      email,
      password,
      avatar: null,
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>{props.children}</DialogTrigger>
      <DialogContent сlassName="flex justify-center items-center min-w-[462px] min-h-[380px] sm:max-w-[328px] max-h-[366px] mx-auto">
        <Tabs defaultValue="auth">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="auth">Авторизация</TabsTrigger>
            <TabsTrigger value="registration">Регистрация</TabsTrigger>
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
                  <Input id="username" placeholder="Логин" type="email" />
                </div>
                <div>
                  <Input id="password" placeholder="Пароль" type="password" />
                </div>
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
                <Button  className="w-full" onClick={handleLogin}>
                  Войти
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
                  <Input id="current" placeholder="Имя" />
                </div>
                <div>
                  <Label htmlFor="new"></Label>
                  <Input id="new" placeholder="Почта" type="email" />
                </div>
                <div>
                  <Input id="new" type="password" placeholder="Пароль" />
                </div>
              </CardContent>
              <CardFooter>
                <Button  className="w-full" onClick={handleSignUp}>
                  Войти
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}
