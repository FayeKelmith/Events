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
      <body suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Nav />
          <main className="mx-auto container max-w-7xl">{children}</main>
          <FooterSection />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
