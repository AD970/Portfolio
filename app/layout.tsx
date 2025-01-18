import type { Metadata } from "next";
import "./globals.css";
import { Montserrat } from "next/font/google";
import Navbar from "@/components/Navbar";
import { Toaster } from "@/components/ui/toaster";
import { ToastProvider } from "@radix-ui/react-toast";
const montserrat = Montserrat({
  subsets: ["latin"], // Specify the subsets you need
  weight: ["400", "700"], // Add specific weights if needed
});
export const metadata: Metadata = {
  title: "Portfolio",
  description: "Portfolio for straycat",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="night" suppressHydrationWarning={true}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
    (function() {
        const theme = localStorage.getItem('theme') || 'night';
        document.documentElement.setAttribute('data-theme', theme);
      })();
    `,
          }}
        />
      </head>
      <body
        className={`${montserrat.className}  bg-base-100 min-h-screen antialiased text-base-content`}
      >
        <ToastProvider>

        <Navbar />
        <div className="">{children}</div>
        </ToastProvider>
      </body>
    </html>
  );
}
