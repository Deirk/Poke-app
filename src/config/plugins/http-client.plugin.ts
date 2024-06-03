import axios, { AxiosError } from 'axios';

export const httpClientPlugin = {
  get: async ( path: string ) => {
    try {
      const { data } = await axios.get( path );
      return data;
    } catch ( error ) {
      if ( error instanceof AxiosError ) {
        throw error.response?.data;
      }
    }
  },
};