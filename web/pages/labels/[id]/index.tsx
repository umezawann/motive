import type { NextPage } from 'next';
import BaseLayout from '@/components/templates/Layouts/BaseLayout'
import { useRouter } from 'next/router'

const Labels: NextPage = () => {
  const router = useRouter()
  console.log('router is', router)
  console.log('router.query is', router.query)
  const { pid } = router.query

  return (
    <BaseLayout>
      Post: {pid}
    </BaseLayout>
  );
};

export default Labels;
