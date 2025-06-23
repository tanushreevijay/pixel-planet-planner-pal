
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

export const TaskItem = ({ task, onToggle, onDelete }: TaskItemProps) => {
  const handleDelete = () => {
    onDelete(task.id);
  };

  return (
    <div 
      className={`pixel-border p-4 ${
        task.completed 
          ? 'border-green-300 bg-green-100' 
          : 'border-purple-300 bg-purple-100'
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
            className="w-5 h-5 border-2 border-purple-400 data-[state=checked]:bg-green-400 data-[state=checked]:border-green-400"
          />
        </div>

        {/* Task Text */}
        <div className="flex-1 min-w-0">
          <p className={`text-lg ${
            task.completed 
              ? 'line-through text-green-700' 
              : 'text-purple-800'
          }`}>
            {task.text}
          </p>
          <p className="text-xs text-purple-500 mt-1">
            Created {task.createdAt.toLocaleDateString()} at {task.createdAt.toLocaleTimeString()}
          </p>
        </div>

        {/* Delete Button */}
        <div className="flex-shrink-0">
          <Button
            onClick={handleDelete}
            variant="ghost"
            size="sm"
            className="text-red-500 hover:text-red-700 hover:bg-red-100 pixel-border border border-transparent hover:border-red-300"
          >
            🗑️
          </Button>
        </div>
      </div>
    </div>
  );
};
