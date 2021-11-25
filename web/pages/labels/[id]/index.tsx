import type { NextPage } from 'next';
import BaseLayout from '@/components/templates/Layouts/BaseLayout'
import { useRouter } from 'next/router';
import { useApiClient } from '@/lib/api/apiClient';


const Labels: NextPage = () => {
  const router = useRouter();
  console.log('router', router)
  console.log('router.query', router.query)
  const { id } = router.query
  const useTasksInYear = () => {
    const { response, loading, error } = useApiClient({
      method: 'GET',
      url: '/tasks',
    });
  
    return { data: response, loading, error };
  };


  return (
    <BaseLayout>
      Post: {id}
    </BaseLayout>
  );
};

export default Labels;
