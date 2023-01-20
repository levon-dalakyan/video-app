import create from 'zustand/react';
import { persist } from 'zustand/middleware';
import axios from 'axios';

import { IUser } from '../types';

interface IUserAuthState {
  userProfile: IUser | null;
}

export const useAuthStore = create<IUserAuthState>()(
  persist(
    (set) => ({
      userProfile: null,

      addUser: (user: IUser) => set({ userProfile: user }),
    }),
    { name: 'auth' }
  )
);
