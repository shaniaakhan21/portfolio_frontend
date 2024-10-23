"use client";
import "./globals.css";
import Sidebar from "./components/Sidebar";
import { ThemeProvider } from "../context/ThemeProvider";
import RightSidebar from "./components/RightSidebar";
import { usePathname } from "next/navigation";
import Header from "./components/Header";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isDynamicPathExcluded = pathname.startsWith('/projects');
  const isLayoutExcluded = isDynamicPathExcluded;

  return (
    <html lang="en">
      <body className='antialiased'>
        {!isLayoutExcluded ? (
          <ThemeProvider>
            <Header />
            <div className="flex flex-col sm:flex-row w-full h-screen container">
              <div className="w-full sm:w-[27%] md:w-[39%] lg:w-[23%]">
                <Sidebar />
              </div>
              <div className="w-full sm:w-[63%] md:w-[75%] lg:w-[50%]">
                <main className="flex-1 overflow-y-auto top-10 sm:top-16 relative sm:px-4 sm:pt-0 sm:pb-4">
                  {children}
                </main>
              </div>
              <div className="w-full md:hidden lg:block lg:w-[26%]">
                <RightSidebar />
              </div>
            </div>
          </ThemeProvider>
        ) : (
          <>{children}</>
        )}
      </body>
    </html>
  );
}
