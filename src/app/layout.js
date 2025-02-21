import { League_Spartan } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/theme-provider";
import { Sidebar } from "@/components/sidebar";

const spartan = League_Spartan({
  subsets: ["latin"],
  variable: "--font-spartan",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${spartan.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Sidebar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
