import { get, set } from '@/lib/storage';
import { apiClient } from '@/lib/axios';
import axios from '@/lib/axios';
import { useAxios } from '@/lib/axios';

export const useUser = () => {
  // TODO: 実装する
  // - もしログインしていなかったらリダイレクト
  const { response, loading, error } = useAxios({
    method: 'GET',
    url: '/users/me',
  });

  console.log('response is', response)
  // const token = get('accessToken');
};


// export async function login(body) {
//   const user = await ApiClient.post('/api/login', body)

//   storage.set('token', user.token)

//   return user
// }

// export function logout() {
//   storage.remove('token')
//   return null
// }
