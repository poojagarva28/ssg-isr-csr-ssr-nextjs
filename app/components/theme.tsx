"use client";

import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";

const Theme = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return <div>{theme}</div>;
};

export default Theme;
