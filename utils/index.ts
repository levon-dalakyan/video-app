import axios from 'axios';
import jwt_decode from 'jwt-decode';
import { CredentialResponse } from '@react-oauth/google';

interface IUserInfo {
  name: string;
  picture: string;
  sub: string;
}

export const createOrGetUser = async (response: CredentialResponse) => {
  const decodedUserInfo: IUserInfo = jwt_decode(response.credential!);

  const { name, picture, sub } = decodedUserInfo;

  const user = {
    _id: sub,
    _type: 'user',
    userName: name,
    image: picture,
  };

  await axios.post('http://localhost:3000/api/auth', user);
};
