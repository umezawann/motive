import axios from 'axios';
import { useState, useEffect } from 'react';
import { get } from '@/lib/storage'

const instance = axios.create({
  baseURL: 'http://localhost:3001',
  timeout: 1000,
  headers: {},
});

// ref: https://dev.to/ms_yogii/useaxios-a-simple-custom-hook-for-calling-apis-using-axios-2dkj
axios.defaults.baseURL = 'http://localhost:3001'
export const useAxios = (axiosParams: any) => {
  const [response, setResponse] = useState<any | undefined>(undefined);
  const [error, setError] = useState<any>('');
  const [loading, setLoading] = useState(true);
  // const token = get('accessToken')
  // console.log('token is', token)
  const fetchData = async (params: any) => {
    try {
      const result = await axios.request(params);

      // const result = await axios.request({...params, headers: {
      //   Authorization: `token ${token}`
      // }});
      setResponse(result.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(axiosParams);
  }, []); // execute once only

  return { response, error, loading };
};

export default instance;
