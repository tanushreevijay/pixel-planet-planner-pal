
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Task } from "@/pages/Index";
import { AlienMascot } from "./AlienMascot";

interface TaskItemProps {
  task: Task;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  delay?: number;
}

export const TaskItem = ({ task, onToggle, onDelete }: TaskItemProps) => {
  const handleDelete = () => {
    onDelete(task.id);
  };

  return (
    <div 
      className={`pixel-border border-4 border-black p-4 ${
        task.completed 
          ? 'bg-green-300' 
          : 'bg-purple-300'
      }`}
    >
      <div className="flex items-center gap-4">
        {/* Alien Mascot */}
        <div className="flex-shrink-0">
          <AlienMascot 
            variant={task.completed ? "celebrating" : "working"} 
            size="small" 
          />
        </div>

        {/* Checkbox */}
        <div className="flex-shrink-0">
          <Checkbox
            checked={task.completed}
            onCheckedChange={() => onToggle(task.id)}
            className="w-6 h-6 border-4 border-black pixel-border data-[state=checked]:bg-black"
          />
        </div>

        {/* Task Text */}
        <div className="flex-1 min-w-0">
          <p className={`text-lg pixel-text font-bold ${
            task.completed 
              ? 'line-through text-black' 
              : 'text-black'
          }`}>
            {task.text}
          </p>
        </div>

        {/* Delete Button */}
        <div className="flex-shrink-0">
          <Button
            onClick={handleDelete}
            className="pixel-border bg-red-400 hover:bg-red-500 text-black border-4 border-black w-8 h-8 p-0 pixel-text font-bold"
          >
            X
          </Button>
        </div>
      </div>
    </div>
  );
};
