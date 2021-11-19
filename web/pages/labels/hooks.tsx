import { useTasksOfLabel } from "@/lib/api/labels";

export const useHooks = (id) => {
    const { date } = useTasksOfLabel(id);
    return { tasks: date}
};