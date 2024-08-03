import Navbar from "./_components/Navbar";

export default function DashboardLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <section className="p-6">
      <Navbar />
      {children}
    </section>
  );
}
