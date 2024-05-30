import bcrypt from "bcryptjs";
import { UserType } from '../stores/auth/interfaces/user.interface';

export interface MockLoginDataType {
  email: string;
  password: string;
}

const mockLoginData: MockLoginDataType = {
  email: 'user@test.com',
  password: 'Test@123',
};

const mockUserData: UserType = {
  user: 'user@test.com',
  id: "1",
  token: 'thisIsAJWTToken',
};

export const mockAuthLoginService = ( email: string, password: string ): UserType => {
  const encryptedPassword = bcrypt.hashSync( mockLoginData.password );

  if ( !email || !password ) throw new Error( 'Email and password is required' );
  if ( ( email !== mockLoginData.email ) || ( !bcrypt.compareSync( password, encryptedPassword ?? '' ) ) ) throw new Error( 'Email or password invalid' );

  return mockUserData;
};

