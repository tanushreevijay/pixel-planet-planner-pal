
import { useState } from "react";
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

export const TaskItem = ({ task, onToggle, onDelete, delay = 0 }: TaskItemProps) => {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = () => {
    setIsDeleting(true);
    setTimeout(() => onDelete(task.id), 300);
  };

  return (
    <div 
      className={`pixel-border bg-white/70 backdrop-blur-sm border-2 p-4 transition-all duration-300 animate-fade-in hover:shadow-lg hover:scale-[1.02] ${
        task.completed 
          ? 'border-green-200 bg-green-50/70' 
          : 'border-purple-200 hover:border-purple-300'
      } ${isDeleting ? 'animate-scale-out' : ''}`}
      style={{ animationDelay: `${delay}ms` }}
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
            className="w-5 h-5 border-2 border-purple-400 data-[state=checked]:bg-green-500 data-[state=checked]:border-green-500"
          />
        </div>

        {/* Task Text */}
        <div className="flex-1 min-w-0">
          <p className={`text-lg transition-all duration-300 ${
            task.completed 
              ? 'line-through text-green-600 opacity-75' 
              : 'text-purple-800'
          }`}>
            {task.text}
          </p>
          <p className="text-xs text-purple-400 mt-1">
            Created {task.createdAt.toLocaleDateString()} at {task.createdAt.toLocaleTimeString()}
          </p>
        </div>

        {/* Delete Button */}
        <div className="flex-shrink-0">
          <Button
            onClick={handleDelete}
            variant="ghost"
            size="sm"
            className="text-red-400 hover:text-red-600 hover:bg-red-50 pixel-border border border-transparent hover:border-red-200 transition-all duration-200"
          >
            🗑️
          </Button>
        </div>
      </div>
    </div>
  );
};
