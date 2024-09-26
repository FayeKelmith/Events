import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Nav from "@/components/layout/nav-bar";
import { Toaster } from "sonner";
import { FooterSection } from "@/components/layout/footer";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Nav />
          {children}
          <FooterSection />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
