"use client";

import { FiSun, FiMoon, FiMonitor } from "react-icons/fi";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";

export default function ThemeToggler() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme, theme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted)
    return (
      <Image
        src="data:image/svg+xml;base64,PHN2ZyBzdHJva2U9IiNGRkZGRkYiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjIwMHB4IiB3aWR0aD0iMjAwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB4PSIyIiB5PSIyIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjIiIHJ4PSIyIj48L3JlY3Q+PC9zdmc+Cg=="
        width={36}
        height={36}
        sizes="36x36"
        alt="Loading Light/Dark Toggle"
        priority={false}
        title="Loading Light/Dark Toggle"
      />
    );

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => setTheme("light")}
        className={`p-2 rounded-full hover:bg-gray-200 transition ${
          theme === "light" ? "bg-gray-300" : ""
        }`}
        title="Switch to Light Mode"
      >
        <FiSun
          className={`text-xl ${
            resolvedTheme === "light" ? "text-yellow-500" : ""
          }`}
        />
      </button>
      <button
        onClick={() => setTheme("dark")}
        className={`p-2 rounded-full hover:bg-gray-200 transition ${
          theme === "dark" ? "bg-gray-300" : ""
        }`}
        title="Switch to Dark Mode"
      >
        <FiMoon
          className={`text-xl ${
            resolvedTheme === "dark" ? "text-blue-500" : ""
          }`}
        />
      </button>
      <button
        onClick={() => setTheme("system")}
        className={`p-2 rounded-full hover:bg-gray-200 transition ${
          theme === "system" ? "bg-gray-300" : ""
        }`}
        title="Switch to System Mode"
      >
        <FiMonitor
          className={`text-xl ${theme === "system" ? "text-green-500" : ""}`}
        />
      </button>
    </div>
  );
}
