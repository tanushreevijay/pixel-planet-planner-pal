
interface AlienMascotProps {
  variant?: "happy" | "winking" | "sleeping" | "working" | "celebrating";
  size?: "small" | "medium" | "large";
}

export const AlienMascot = ({ variant = "happy", size = "medium" }: AlienMascotProps) => {
  const sizeClasses = {
    small: "w-8 h-8 text-2xl",
    medium: "w-12 h-12 text-4xl",
    large: "w-16 h-16 text-6xl"
  };

  const aliens = {
    happy: "👽",
    winking: "😉",
    sleeping: "😴",
    working: "🤔",
    celebrating: "🎉"
  };

  return (
    <div className={`${sizeClasses[size]} flex items-center justify-center animate-pulse`}>
      <span className="animate-bounce" style={{ animationDelay: Math.random() * 2 + "s" }}>
        {aliens[variant]}
      </span>
    </div>
  );
};
