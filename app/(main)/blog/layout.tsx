import BlogSidebar from "@/components/BlogSidebar";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    <div className="max-w-[1260px] min-h-screen pt-32 pb-20 px-4 md:mx-4 lg:mx-auto lg:px-8">
      <BlogSidebar>
      {children}
      </BlogSidebar>
    </div>
      <Footer />
    </>
  );
}
