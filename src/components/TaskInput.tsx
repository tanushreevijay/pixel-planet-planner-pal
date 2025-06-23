
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

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
          placeholder="NEW MISSION..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="pixel-border bg-white border-4 border-black text-black placeholder:text-gray-500 h-12 text-lg pixel-text"
        />
      </div>
      <Button
        type="submit"
        className="pixel-border bg-pink-400 hover:bg-pink-500 text-black border-4 border-black h-12 px-6 pixel-text font-bold"
      >
        ADD
      </Button>
    </form>
  );
};
