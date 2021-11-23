import { useTasksOfLabel } from "@/lib/api/labels";

export const useHooks = (id: string) => {
    const { data } = useTasksOfLabel();
    return { tasks: data}
};