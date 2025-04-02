import "@/app/styles/globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Inter } from "next/font/google";
import Navbar from "@/components/sections/Navbar";


const inter = Inter({subsets: ['latin']});

export const metadata = {
  title: "Quizzly",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <ThemeProvider>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
              {children}  
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
