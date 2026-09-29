
import { useState } from "react";
import { Heart, X } from "lucide-react";

function App() {
  const [show, setShow] = useState(true);

  return (
    <div className="relative min-h-[100svh] w-full overflow-hidden bg-gradient-to-br from-[#160d25] via-[#401b42] to-[#a83d69]">

      {/* 100 Moving Sorry */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {Array.from({ length: 100 }, (_, i) => (
          <span
            key={i}
            className="absolute bottom-[-50px] whitespace-nowrap font-bold text-pink-200/70"
            style={{
              left: `${(i * 37) % 100}%`,
              fontSize: `${10 + (i % 5) * 3}px`,
              animation: `sorryUp ${5 + (i % 8)}s linear infinite`,
              animationDelay: `-${(i * 0.47) % 12}s`,
              opacity: 0.25 + (i % 5) * 0.1,
            }}
          >
            Sorry 💗
          </span>
        ))}
      </div>

      {/* Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-500/25 blur-[80px] sm:h-96 sm:w-96" />

      {/* Modal */}
      {show && (
        <div className="relative z-10 flex  items-center  justify-center px-4 py-6 sm:px-6">

          <div className="relative w-full px-5 py-9 text-center shadow-2xl sm:px-10 sm:py-12">

           

            {/* Hearts */}
            <Heart
              className="absolute left-4 top-16 animate-pulse fill-pink-400 text-pink-400 sm:left-8 sm:top-20"
              size={22}
            />
            <Heart
              className="absolute right-5 top-24 animate-bounce fill-rose-300 text-rose-300 sm:right-10 sm:top-32"
              size={20}
            />
            <Heart
              className="absolute bottom-32 right-5 animate-pulse fill-pink-400 text-pink-400 sm:right-8"
              size={18}
            />

            {/* Teddy */}
            <div className="relative mx-auto mb-3 flex h-40 items-center justify-center sm:mb-5 sm:h-56">
              <div className="absolute h-32 w-32 rounded-full bg-pink-400/30 blur-3xl sm:h-44 sm:w-44" />

              <div className="relative animate-[teddy_3s_ease-in-out_infinite] text-[105px] drop-shadow-2xl sm:text-[145px]">
                🧸
                <span className="absolute -bottom-1 left-1/10 -translate-x-1/2 text-4xl sm:text-5xl">
                  ❤️
                </span>
              </div>
            </div>

            {/* Heading */}
            <p className="font-sans  text-5xl font-medium tracking-wide text-white drop-shadow-lg sm:text-[20px]">
              <div className="flex flex-col">
                <p>
                  MERI PYARI SI NATKHAT GUSSE WALI
                </p>
                <p>ZAINAB</p>
              </div>
               AB MAAN BHI JAYIYE GALTI HO GAYI MUJHSE SORRY NAAA
              <span className="ml-1 inline-block animate-pulse text-pink-300 sm:ml-2">
                ♥
              </span>
            </p>

            {/* Emojis */}
            <div className="mt-4 flex justify-center gap-2 sm:mt-5 sm:gap-3">
              {["🥺", "💗", "🥹", "💗", "🥺"].map((emoji, i) => (
                <span
                  key={i}
                  className="animate-bounce text-xl sm:text-2xl"
                  style={{ animationDelay: `${i * 0.15}s` }}
                >
                  {emoji}
                </span>
              ))}
            </div>

            {/* Button */}
            <button
              onClick={() => alert("Thank you ❤️")}
              className="mt-8 flex min-h-14 w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 px-3 py-4 text-sm font-extrabold text-white shadow-[0_10px_35px_rgba(244,63,120,0.45)] transition duration-300 hover:scale-105 active:scale-95 sm:mt-10 sm:gap-3 sm:px-6 sm:py-5 sm:text-lg"
            >
              <Heart fill="white" size={19} />
              <span>Please Forgive Me</span>
              <Heart fill="white" size={19} />
            </button>

          </div>
        </div>
      )}

      <style>{`
        @keyframes sorryUp {
          0% {
            transform: translateY(0) rotate(-8deg);
          }
          100% {
            transform: translateY(-115svh) rotate(12deg);
          }
        }

        @keyframes teddy {
          0%, 100% {
            transform: translateY(0) rotate(-4deg);
          }
          50% {
            transform: translateY(-12px) rotate(4deg);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            scroll-behavior: auto !important;
          }
        }
      `}</style>
    </div>
  );
}

export default App;