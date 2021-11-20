import { useTasksOfLabel } from "@/lib/api/labels";

export const useHooks = (id: string) => {
    const { data } = useTasksOfLabel(id);
    return { tasks: data}
};