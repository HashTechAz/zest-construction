import type { Metadata } from "next";
import { Poppins } from "next/font/google"; 
import "./globals.css";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { Preloader } from "@/components/ui/preloader/preloader";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Zest Development",
  description: "Zest Development website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`min-h-dvh bg-background text-foreground antialiased ${poppins.className}`}>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Preloader />
            {children}
          </ThemeProvider>
      </body>
    </html>
  );
}