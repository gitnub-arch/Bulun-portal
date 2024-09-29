import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useSignup } from '@/hooks/useSignup';
import { useState } from 'react';
import { useLogin } from '@/hooks/useLogin';
import Spinner from '@/components/ui/spinner';

interface LayoutProps {
  children: React.ReactNode;
}

export default function AuthorizationDrawer(props: LayoutProps) {
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [avatar, setAvatar] = useState<File>();
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const { signup } = useSignup();
  const { login } = useLogin();

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    setIsLoading(false);
  };

  const handleLogin = async () => {
    setIsLoading(true);
    await login(email, password);
    handleClose();
  };

  const handleSignUp = async () => {
    if (!avatar) return;

    setIsLoading(true);

    await signup({
      displayName,
      email,
      password,
      avatar,
    });
    handleClose();
  };

  return (
    <Sheet open={isOpen}>
      <SheetTrigger onClick={handleOpen} asChild>
        {props.children}
      </SheetTrigger>
      <SheetContent className="pt-12">
        <Tabs defaultValue="sign-in">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="sign-in">Авторизация</TabsTrigger>
            <TabsTrigger value="sign-up">Регистрация</TabsTrigger>
          </TabsList>
          {/* Здесь Авторизация */}
          <TabsContent value="sign-in">
            <div className="mb-4">
              <Label htmlFor="email" className="inline-block mb-2">
                Почта
              </Label>
              <Input
                onChange={(e) => setEmail(e.target.value)}
                id="email"
                placeholder="Jyldyzakylbekova@gamil.com"
                className=" bg-[#F2F2FE] text-base font-bold text-[#4E3F6F]"
              />
            </div>
            <div className="mb-4">
              <Label htmlFor="password" className="inline-block mb-2">
                Пароль
              </Label>
              <Input
                onChange={(e) => setPassword(e.target.value)}
                id="password"
                placeholder="ice-capuchino"
                className="bg-[#F2F2FE] text-base font-bold text-[#4E3F6F]"
              />
            </div>
            <SheetFooter>
              <SheetClose asChild>
                <Button
                  onClick={handleLogin}
                  disabled={isLoading}
                  type="submit"
                >
                  {isLoading ? <Spinner /> : 'Войти'}
                </Button>
              </SheetClose>
            </SheetFooter>
          </TabsContent>
          {/* Здесь Регистрация */}
          <TabsContent value="sign-up">
            <div className="mb-4">
              <Label htmlFor="name" className="inline-block mb-2">
                Имя
              </Label>
              <Input
                onChange={(e) => setDisplayName(e.target.value)}
                value={displayName}
                id="name"
                className=" bg-[#F2F2FE] text-base font-bold text-[#4E3F6F]"
              />
            </div>
            <div className="mb-4">
              <Label htmlFor="email" className="inline-block mb-2">
                Почта
              </Label>
              <Input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                id="email"
                className=" bg-[#F2F2FE] text-base font-bold text-[#4E3F6F]"
              />
            </div>
            <div className="mb-4">
              <Label htmlFor="password" className="inline-block mb-2">
                Пароль
              </Label>
              <Input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                id="password"
                className="bg-[#F2F2FE] text-base font-bold text-[#4E3F6F]"
              />
            </div>
            <div className="mb-4">
              <Label htmlFor="avatar" className="inline-block mb-2">
                Аватарка
              </Label>
              <Input
                onChange={(e) => setAvatar(e.target.files?.[0])}
                id="avatar"
                className=" bg-[#F2F2FE] text-base font-bold text-[#4E3F6F]"
                type="file"
              />
            </div>
            <SheetFooter>
              <SheetClose asChild>
                <Button
                  type="submit"
                  disabled={isLoading}
                  onClick={handleSignUp}
                >
                  {isLoading ? <Spinner /> : 'Зарегистрироваться'}
                </Button>
              </SheetClose>
            </SheetFooter>
          </TabsContent>
        </Tabs>
      </SheetContent>
    </Sheet>
  );
}
