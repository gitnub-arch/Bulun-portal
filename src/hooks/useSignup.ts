import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { useState } from 'react';
import { auth, db, storage } from '../firebase/config';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { doc, setDoc } from 'firebase/firestore';
import { useDispatch } from 'react-redux';
import { setUser } from '@/features/user/userSlice';

interface SignupProps {
  email: string;
  password: string;
  displayName: string;
  avatar: File;
}

export const useSignup = () => {
  const [error, setError] = useState<string | null>(null);
  const [isPending, setIsPending] = useState<boolean>(false);
  const dispatch = useDispatch();

  const signup = async ({
    email,
    password,
    displayName,
    avatar,
  }: SignupProps) => {
    setError(null);
    setIsPending(true);

    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      if (!response) {
        setError('Не получилось создать пользователя');
      }

      const uploadPath = `avatars/${response.user.uid}/${avatar.name}`;
      const storageRef = ref(storage, uploadPath);
      await uploadBytes(storageRef, avatar);
      const photoURL = await getDownloadURL(storageRef);

      await updateProfile(response.user, {
        displayName,
        photoURL,
      });

      await setDoc(doc(db, 'users', response.user.uid), {
        online: true,
        displayName,
        photoURL,
      });

      dispatch(setUser(response.user));

      return response;
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsPending(false);
    }
  };

  return { error, isPending, signup };
};
