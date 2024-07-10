import Navbar from "@/components/navbar";
import ScrollToTop from "@/components/ScrollToTop";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar /> {children}
      <ScrollToTop />
    </>
  );
}
