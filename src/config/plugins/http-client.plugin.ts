import axios from 'axios';

export const httpClientPlugin = {
  get: async ( path: string ) => {
    const { data } = await axios.get( path );
    return data;
  },
};