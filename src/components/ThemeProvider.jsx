"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeProvider({ children }) {
  const [mounted, setMounted] = useState(false);

  // Add script to document head to set theme before render
  useEffect(() => {
    // Add theme detection script to head, to prevent flickering
    const themeScript = document.createElement('script');
    themeScript.innerHTML = `
      (function() {
        try {
          const storedTheme = localStorage.getItem('theme');
          const theme = storedTheme ? storedTheme : (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
          document.documentElement.classList.toggle('dark', theme === 'dark');
        } catch (e) {}
      })()
    `;
    themeScript.id = 'theme-script';
    
    // Only add if it doesn't exist yet
    if (!document.getElementById('theme-script')) {
      document.head.prepend(themeScript);
    }
    
    setMounted(true);
    
    return () => {
      // Clean up script when component unmounts
      const existingScript = document.getElementById('theme-script');
      if (existingScript) existingScript.remove();
    };
  }, []);

  return (
    <NextThemesProvider 
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {/* Hide content until mounted to prevent flash */}
      <div style={{ visibility: mounted ? 'visible' : 'hidden' }}>
        {children}
      </div>
    </NextThemesProvider>
  );
}