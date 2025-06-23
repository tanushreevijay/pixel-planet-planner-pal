
import { TaskItem } from "./TaskItem";
import { Task } from "@/pages/Index";

interface TaskListProps {
  tasks: Task[];
  onToggleTask: (id: string) => void;
  onDeleteTask: (id: string) => void;
}

export const TaskList = ({ tasks, onToggleTask, onDeleteTask }: TaskListProps) => {
  const activeTasks = tasks.filter(task => !task.completed);
  const completedTasks = tasks.filter(task => task.completed);

  return (
    <div className="space-y-6">
      {/* Active Tasks */}
      {activeTasks.length > 0 && (
        <div className="space-y-3">
          <h2 className="text-xl font-semibold text-purple-700 flex items-center gap-2">
            🚀 Active Missions ({activeTasks.length})
          </h2>
          <div className="space-y-2">
            {activeTasks.map((task, index) => (
              <TaskItem
                key={task.id}
                task={task}
                onToggle={onToggleTask}
                onDelete={onDeleteTask}
                delay={index * 100}
              />
            ))}
          </div>
        </div>
      )}

      {/* Completed Tasks */}
      {completedTasks.length > 0 && (
        <div className="space-y-3">
          <h2 className="text-xl font-semibold text-green-600 flex items-center gap-2">
            ✅ Completed Missions ({completedTasks.length})
          </h2>
          <div className="space-y-2">
            {completedTasks.map((task, index) => (
              <TaskItem
                key={task.id}
                task={task}
                onToggle={onToggleTask}
                onDelete={onDeleteTask}
                delay={index * 100}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
