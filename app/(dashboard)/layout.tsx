import Navbar from "../../components/navbar/Navbar";

export default function DashboardLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <section className="min-h-screen grid gap-4 grid-rows-custom-layout-height p-4">
      <Navbar />
      {children}
    </section>
  );
}
