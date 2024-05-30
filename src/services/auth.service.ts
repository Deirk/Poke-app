import { mockAuthLoginService } from '../config/data/mock-login.data';
import { UserType } from '../config/stores/auth/interfaces/user.interface';

export interface LoginResponse {
  id: string;
  email: string;
  token: string;
}



export class AuthService {

  static login = async ( email: string, password: string ): Promise<UserType> => {
    try {
      const data = mockAuthLoginService( email, password );
      return data;

    } catch ( error ) {
      if(error instanceof Error) {
        throw new Error(error.message);
      }
      throw new Error('Unathorized');
    }
  };
}