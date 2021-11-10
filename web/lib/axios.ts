import axios, {AxiosRequestConfig} from 'axios';
import { useState, useEffect } from 'react';
import { get as getFromStorage } from '@/lib/storage';

const instance = axios.create({
  baseURL: 'http://localhost:3001',
  timeout: 1000,
  headers: {},
});

// ref: https://dev.to/ms_yogii/useaxios-a-simple-custom-hook-for-calling-apis-using-axios-2dkj
axios.defaults.baseURL = 'http://localhost:3001';
export const useAxios = (axiosParams: AxiosRequestConfig) => {
  const [response, setResponse] = useState<any | undefined>(undefined);
  const [error, setError] = useState<any>('');
  const [loading, setLoading] = useState(true);
  const token = getFromStorage('accessToken');

  useEffect(() => {
    const func = async () => {
      try {
        const result = await axios.request({
          ...axiosParams,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setResponse(result.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }

    func()
  }, []); // execute once only

  return { response, error, loading };
};

async function post(path: string, body: any) {
  const token = getFromStorage('accessToken');

  return await axios.post(path, body, { headers: { Authorization: `Bearer ${token}` } });
}

async function _delete(path: string) {
  const token = getFromStorage('accessToken');

  return await axios.delete(path, { headers: { Authorization: `Bearer ${token}` } });
}

export const apiClient = {
  post,
  delete: _delete,
};

export default instance;
