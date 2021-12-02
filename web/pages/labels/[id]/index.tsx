import type { NextPage } from 'next';
import BaseLayout from '@/components/templates/Layouts/BaseLayout';
import { useRouter } from 'next/router';
import { useApiClient } from '@/lib/api/apiClient';
import Task from '@/components/templates/Task/Task';
const useTasksWithLabel = (id) => {
  console.log('hogehoge', id);
  const { response, loading, error } = useApiClient({
    method: 'GET',
    url: `/labels/${id}`,
  });
  console.log('response is', response);

  return { data: response, loading, error };
};

const Labels: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data: tasksWithLabel } = useTasksWithLabel(id);

  console.log('router.query', router.query);
  console.log('tasksWithLabel', tasksWithLabel);

  // if (!id) return null;

  return (
    <BaseLayout>
      Label: {id}
      {tasksWithLabel &&
        tasksWithLabel.map((t) => (
          <div key={t.id}>
            <Task task={t.task} />
          </div>
        ))}
    </BaseLayout>
  );
};

export default Labels;
