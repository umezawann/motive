import type { NextPage } from 'next';
import BaseLayout from '@/components/templates/Layouts/BaseLayout'
import { useRouter } from 'next/router'

const Labels: NextPage = () => {
  const router = useRouter()
  console.log('router is', router)
  console.log('router.query is', router.query)

  return (
    <BaseLayout>
      foobar
    </BaseLayout>
  );
};

export default Labels;
