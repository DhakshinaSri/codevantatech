import { useNavigate } from "react-router-dom";

export default function Button({
  text = "Click Me",
  to,
  onClick,
  type = "button",
  className = "",
  variant = "default", 
}) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (to) {
      navigate(to);
    } else if (onClick) {
      onClick();
    }
  };

  // VARIANT STYLES
  if (variant === "gotobutton") {
  return (
    <button
      type={type}
      onClick={handleClick}
      className={`
        relative group overflow-hidden
        flex items-center justify-between 
        w-fit min-w-[200px] max-w-[260px]
        bg-black text-[#ECDFCC]
        px-4 sm:px-5 py-2 sm:py-2.5
        rounded-full 
        text-sm sm:text-base md:text-lg 
        font-semibold 
        transition-all duration-300 shadow-md
        ${className}
      `}
    >
      {/* Circular expanding background */}
      <span className="
        absolute left-1/2 top-1/2
        w-10 h-10 bg-[#3AA7C2] rounded-full
        -translate-x-1/2 -translate-y-1/2
        scale-0
        group-hover:scale-[12]
        transition-transform duration-1000 ease-out
        z-0
      "></span>

      {/* Text */}
      <span className="relative z-10 whitespace-nowrap group-hover:text-white">
        {text}
      </span>

      {/* Icon Circle */}
      <span
        className="
          relative z-10
          flex items-center justify-center 
          w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 
          bg-[#94BAC3] rounded-full ml-3 shrink-0
        "
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/545/545682.png"
          alt="arrow"
          className="
            w-3 h-3 sm:w-3.5 sm:h-3.5 invert
            transition-transform duration-1000
            group-hover:rotate-[360deg]
          "
        />
      </span>
    </button>
  );
}

  // DEFAULT BUTTON (your existing one)
  return (
    <button
      type={type}
      onClick={handleClick}
      className={`relative overflow-hidden bg-black text-white px-8 py-2 rounded-lg text-lg font-medium group ${className}`}
    >
      {/* Circular background */}
      <span className="absolute left-0 top-1/2 w-10 h-10 bg-[#3AA7C2] rounded-full -translate-y-1/2 scale-0 group-hover:scale-[12] transition-transform duration-500 ease-out"></span>

      {/* Button Text */}
      <span className="relative z-10">{text}</span>
    </button>
  );
}