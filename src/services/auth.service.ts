import { mockAuthLoginService } from '../config/data/mock-login.data';
import { UserType } from '../config/stores/auth/interfaces/user.interface';

export interface LoginResponse {
  id: string;
  email: string;
  token: string;
}

export class AuthService {
  static login = ( email: string, password: string ): UserType => {
    const data = mockAuthLoginService( email, password );
    return data;
  };
}