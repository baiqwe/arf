export default function Logo() {
  return (
    <div className="flex items-center gap-2 sm:gap-3">
      <div className="relative flex-shrink-0">
        <svg
          width="40"
          height="40"
          className="sm:w-12 sm:h-12 drop-shadow-sm"
          viewBox="0 0 64 64"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden
        >
          {/* Cute cat face - solid color style */}
          {/* Head */}
          <circle cx="32" cy="32" r="28" fill="#ff7fbf"/>
          
          {/* Ears */}
          <path d="M20 12 L28 24 L24 24 Z" fill="#ff7fbf"/>
          <path d="M44 12 L36 24 L40 24 Z" fill="#ff7fbf"/>
          <path d="M20 12 L26 20 L24 20 Z" fill="#ffb3d6"/>
          <path d="M44 12 L38 20 L40 20 Z" fill="#ffb3d6"/>
          
          {/* Eyes */}
          <ellipse cx="24" cy="30" rx="4" ry="6" fill="#ffffff"/>
          <ellipse cx="40" cy="30" rx="4" ry="6" fill="#ffffff"/>
          <circle cx="24" cy="30" r="2" fill="#333333"/>
          <circle cx="40" cy="30" r="2" fill="#333333"/>
          
          {/* Nose */}
          <path d="M32 36 L30 40 L34 40 Z" fill="#ffb3d6"/>
          
          {/* Mouth */}
          <path d="M32 40 Q28 44 26 42" stroke="#333333" strokeWidth="2" fill="none" strokeLinecap="round"/>
          <path d="M32 40 Q36 44 38 42" stroke="#333333" strokeWidth="2" fill="none" strokeLinecap="round"/>
          
          {/* Cheeks */}
          <circle cx="16" cy="36" r="3" fill="#ffb3d6" opacity="0.6"/>
          <circle cx="48" cy="36" r="3" fill="#ffb3d6" opacity="0.6"/>
        </svg>
      </div>
      <div className="flex flex-col min-w-0">
        <span className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent break-words">
          Adopt Me Fonts
        </span>
        <span className="text-[10px] sm:text-xs text-zinc-500 -mt-0.5 sm:-mt-1">Free Roblox Font Generator</span>
      </div>
    </div>
  );
}