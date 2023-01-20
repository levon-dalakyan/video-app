import axios from 'axios';
import jwt_decode from 'jwt-decode';
import { CredentialResponse } from '@react-oauth/google';

import { useAuthStore } from '../store/authStore';
import { IUser } from '../types';

interface IUserInfo {
  name: string;
  picture: string;
  sub: string;
}

export const createOrGetUser = async (response: CredentialResponse) => {
  const decodedUserInfo: IUserInfo = jwt_decode(response.credential!);

  const { name, picture, sub } = decodedUserInfo;

  const user: IUser = {
    _id: sub,
    _type: 'user',
    userName: name,
    image: picture,
  };

  const addUser = useAuthStore((state) => state.addUser);

  addUser(user);

  await axios.post('http://localhost:3000/api/auth', user);
};
