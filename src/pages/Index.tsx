
import { useState } from "react";
import { TaskInput } from "@/components/TaskInput";
import { TaskList } from "@/components/TaskList";
import { AlienMascot } from "@/components/AlienMascot";

export interface Task {
  id: string;
  text: string;
  completed: boolean;
  createdAt: Date;
}

const Index = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (text: string) => {
    const newTask: Task = {
      id: crypto.randomUUID(),
      text,
      completed: false,
      createdAt: new Date(),
    };
    setTasks(prev => [newTask, ...prev]);
  };

  const toggleTask = (id: string) => {
    setTasks(prev => 
      prev.map(task => 
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id: string) => {
    setTasks(prev => prev.filter(task => task.id !== id));
  };

  const completedCount = tasks.filter(task => task.completed).length;
  const totalCount = tasks.length;

  return (
    <div className="min-h-screen bg-gray-200 p-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-4 mb-4">
            <AlienMascot variant="happy" />
            <h1 className="text-4xl font-bold text-black pixel-text">
              ALIEN TASKS
            </h1>
            <AlienMascot variant="winking" />
          </div>
          <p className="text-black text-lg pixel-text">
            COMPLETE YOUR MISSIONS
          </p>
          {totalCount > 0 && (
            <div className="mt-4 text-sm text-black pixel-text">
              {completedCount}/{totalCount} COMPLETE
            </div>
          )}
        </div>

        {/* Task Input */}
        <div className="mb-8">
          <TaskInput onAddTask={addTask} />
        </div>

        {/* Task List */}
        <div className="space-y-4">
          {tasks.length === 0 ? (
            <div className="text-center py-12">
              <AlienMascot variant="sleeping" size="large" />
              <p className="text-black mt-4 text-lg pixel-text">
                NO MISSIONS YET
              </p>
            </div>
          ) : (
            <TaskList 
              tasks={tasks} 
              onToggleTask={toggleTask} 
              onDeleteTask={deleteTask} 
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Index;
