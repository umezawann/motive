import type { NextPage } from "next";
import BaseLayout from "@/components/templates/Layouts/BaseLayout";
import { useRouter } from "next/router";
import { useApiClient } from "@/lib/api/apiClient";
import Task from "@/components/templates/Task/Task";

const Labels: NextPage = () => {
  const router = useRouter();
  console.log("router", router);
  console.log("router.query", router.query);
  const { id } = router.query;

  const useTasksInYear = (id) => {
    const { response, loading, error } = useApiClient({
      method: "GET",
      url: `/labels/${id}`,
    });

    return { data: response, loading, error };
  };

  const { data: tasksInLabel } = useTasksInYear("ckw68qwc300021uvbqfeg3e2z");
  
  if (!id) return null;

  // if(!id) {return null}

  return (
    <BaseLayout>
      Post: {id}
      {tasksInLabel &&
        tasksInLabel.map((t) => (
          <div key={t.id}>
            <Task task={t.task} />
          </div>
        ))}
    </BaseLayout>
  );
};

export default Labels;
