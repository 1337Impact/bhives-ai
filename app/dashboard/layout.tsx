import { ProtectedMain } from "@/components/protected/main";


export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col h-screen">
      <ProtectedMain>{children}</ProtectedMain>
    </div>
  );
}
