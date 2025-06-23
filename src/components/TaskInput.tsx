
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
    <form onSubmit={handleSubmit} className="flex gap-2">
      <div className="flex-1 relative">
        <Input
          type="text"
          placeholder="Enter your mission, space cadet..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="pixel-border bg-purple-100 border-2 border-purple-300 focus:border-purple-500 text-purple-800 placeholder:text-purple-400 h-12 text-lg"
        />
      </div>
      <Button
        type="submit"
        className="pixel-border bg-pink-200 hover:bg-pink-300 text-purple-800 border-2 border-purple-300 h-12 px-6"
      >
        <Plus className="w-5 h-5" />
        <span className="ml-2 font-semibold">Add Mission</span>
      </Button>
    </form>
  );
};
