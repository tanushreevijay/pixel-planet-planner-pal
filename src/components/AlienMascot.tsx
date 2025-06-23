
interface AlienMascotProps {
  variant?: "happy" | "winking" | "sleeping" | "working" | "celebrating";
  size?: "small" | "medium" | "large";
}

export const AlienMascot = ({ variant = "happy", size = "medium" }: AlienMascotProps) => {
  const sizeClasses = {
    small: "w-8 h-8",
    medium: "w-12 h-12",
    large: "w-16 h-16"
  };

  // Create pixelated alien using CSS
  const getAlienStyle = () => {
    const baseStyle = "relative pixel-alien";
    
    switch (variant) {
      case "happy":
        return `${baseStyle} bg-pink-400`;
      case "winking":
        return `${baseStyle} bg-purple-400`;
      case "sleeping":
        return `${baseStyle} bg-blue-300`;
      case "working":
        return `${baseStyle} bg-green-300`;
      case "celebrating":
        return `${baseStyle} bg-yellow-300`;
      default:
        return `${baseStyle} bg-pink-400`;
    }
  };

  return (
    <div className={`${sizeClasses[size]} ${getAlienStyle()}`}>
      {/* Alien body - main shape */}
      <div className="absolute inset-0 bg-current"></div>
      
      {/* Eyes */}
      <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-black pixel-square"></div>
      <div className="absolute top-1/4 right-1/4 w-1 h-1 bg-black pixel-square"></div>
      
      {/* Antennae */}
      <div className="absolute -top-1 left-1/3 w-1 h-1 bg-current pixel-square"></div>
      <div className="absolute -top-1 right-1/3 w-1 h-1 bg-current pixel-square"></div>
    </div>
  );
};
