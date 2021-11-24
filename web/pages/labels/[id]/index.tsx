import type { NextPage } from 'next';
import BaseLayout from '@/components/templates/Layouts/BaseLayout'
import { useRouter } from 'next/router';

const Labels: NextPage = () => {
  const router = useRouter();
  console.log('router', router)
  console.log('router.query', router.query)
  const { id } = router.query

  return (
    <BaseLayout>
      Post: {id}
    </BaseLayout>
  );
};

export default Labels;
