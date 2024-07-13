import BlogSidebar from "@/components/BlogSidebar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="max-w-[1260px] min-h-screen pt-32 pb-20 px-4 md:mx-4 lg:mx-auto lg:px-8">
        <BlogSidebar>{children}</BlogSidebar>
      </div>
      <div className="mt-20 py-10 w-full flex flex-col justify-center items-center bg-orange-400">
        <h1 className="text-4xl font-bold text-white text-center max-w-[600px]">
          Ready to transform your business with AI?
        </h1>
        <Link href="/#contact">
          <button className="bg-white border-2 border-white text-orange-400 font-bold px-6 py-3 rounded-lg mt-4 hover:bg-orange-400 hover:text-white transition-all ease-in-out duration-300">
            Get Started Now
          </button>
        </Link>
      </div>
      <Footer />
    </>
  );
}
