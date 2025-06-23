
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

  return (
    <div className={`${sizeClasses[size]} pixel-border`}>
      <img 
        src="/lovable-uploads/1e8b35fb-c883-4574-92b8-7541b3c69e83.png"
        alt="Pink Alien"
        className="w-full h-full object-contain pixel-alien"
      />
    </div>
  );
};
