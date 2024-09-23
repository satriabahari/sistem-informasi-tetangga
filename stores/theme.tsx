"use client";

import { ThemeProvider } from "next-themes";

export default function ThemeProviderContext({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      {children}
    </ThemeProvider>
  );
}
