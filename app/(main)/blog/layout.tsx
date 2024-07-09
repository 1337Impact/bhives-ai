import BlogSidebar from "@/components/BlogSidebar";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    <div className="flex flex-col md:flex-row gap-4 max-w-[1260px] min-h-screen pt-32 pb-20 px-4 md:mx-4 lg:mx-auto lg:px-8">
      <BlogSidebar />
      {children}
    </div>
      <Footer />
    </>
  );
}
