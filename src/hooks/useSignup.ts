import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { useContext, useState } from 'react';
import { auth, db } from '../firebase/config'; // Удалили import storage
import { AuthContext } from '../context/AuthContext';
import { doc, setDoc } from 'firebase/firestore';

interface SignupProps {
  email: string;
  password: string;
  userName: string; // Используем displayName вместо userName
}

export const useSignup = () => {
  const [error, setError] = useState<string | null>(null);
  const [isPending, setIsPending] = useState<boolean>(false);
  const { dispatch } = useContext<any>(AuthContext);

  const signup = async ({ email, password, userName }: SignupProps) => {
    setError(null);
    setIsPending(true);

    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      if (!response.user) {
        setError('Не получилось создать пользователя');
        return;
      }

      await updateProfile(response.user, {
        displayName: userName, // Используем displayName для имени пользователя в Firebase
      });

      await setDoc(doc(db, 'users', response.user.uid), {
        online: true,
        userName, // Используем displayName для имени пользователя в Firebase
      });

      dispatch({ type: 'LOGIN', payload: response.user });
    } catch (err: any) {
      setError(err.message);
      console.error("Ошибка создания пользователя:", err); 
    } finally {
      setIsPending(false);
    }
  };

  return { error, isPending, signup };
};