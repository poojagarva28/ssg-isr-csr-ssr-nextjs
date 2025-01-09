"use client";

import { useTheme } from "next-themes";
import Theme from "./theme";

const ThemeChanger = () => {
  const { setTheme } = useTheme();

  return (
    <div>
      <Theme />
      <br />
      <button onClick={() => setTheme("light")}>Light Mode</button>
      <br />
      <button onClick={() => setTheme("dark")}>Dark Mode</button>
      <br />
      <button onClick={() => setTheme("system")}>System</button>
    </div>
  );
};

export default ThemeChanger;
