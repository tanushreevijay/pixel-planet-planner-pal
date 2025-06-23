
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus } from "lucide-react";

interface TaskInputProps {
  onAddTask: (text: string) => void;
}

export const TaskInput = ({ onAddTask }: TaskInputProps) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      onAddTask(inputValue.trim());
      setInputValue("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 animate-scale-in">
      <div className="flex-1 relative">
        <Input
          type="text"
          placeholder="Enter your mission, space cadet..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="pixel-border bg-white/80 backdrop-blur-sm border-2 border-purple-200 focus:border-purple-400 text-purple-800 placeholder:text-purple-400 h-12 text-lg"
        />
      </div>
      <Button
        type="submit"
        className="pixel-border bg-gradient-to-r from-purple-400 to-pink-400 hover:from-purple-500 hover:to-pink-500 text-white border-2 border-purple-300 h-12 px-6 transition-all duration-300 hover:scale-105"
      >
        <Plus className="w-5 h-5" />
        <span className="ml-2 font-semibold">Add Mission</span>
      </Button>
    </form>
  );
};
