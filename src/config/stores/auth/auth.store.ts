import { StateCreator, create } from 'zustand';

import { AuthService } from '../../../services/auth.service';
import { devtools, persist } from 'zustand/middleware';
import { AuthStatus } from './interfaces/auth-status.interface';
import { UserType } from './interfaces/user.interface';

export interface AuthState {
  status: AuthStatus;
  token?: string;
  user?: UserType;

  loginUser: ( email: string, password: string ) => Promise<void>;
  logoutUser: () => void;
}

const storeApi: StateCreator<AuthState> = ( set ) => ( {
  status: 'pending',
  token: undefined,
  user: undefined,

  loginUser: async ( email: string, password: string ) => {
    try {
      const data = await AuthService.login( email, password );
      set( { status: 'authorized', token: data.token, user: data } );
    } catch ( error ) {
      set( { status: 'unauthorized', token: undefined, user: undefined } );
      if(error instanceof Error) {
        throw new Error( error.message );
      }
    }
  },
  logoutUser: () => {
    set( { status: 'unauthorized', token: undefined, user: undefined } );
  },

} );

export const useAuthStore = create<AuthState>()(
  devtools(
    persist(
      storeApi,
      { name: 'auth-store' }
    )
  )
);