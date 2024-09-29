import { signInWithEmailAndPassword } from 'firebase/auth';
import { useContext, useState } from 'react';
import { auth, db } from '../firebase/config';
import { AuthContext } from '../context/AuthContext';
import { doc, updateDoc } from 'firebase/firestore';

export const useLogin = () => {
  const [error, setError] = useState<string>('');
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useContext<any>(AuthContext);

  const login = async (email: string, password: string) => {
    setError('');
    setIsPending(true);

    try {
      const response = await signInWithEmailAndPassword(auth, email, password);

      if (!response) {
        setError('Не получилось создать пользователя');
      }

      const userDoc = doc(db, 'users', response.user.uid);

      await updateDoc(userDoc, { online: true });

      dispatch({ type: 'LOGIN', payload: response.user });
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsPending(false);
    }
  };

  return { error, isPending, login };
};
