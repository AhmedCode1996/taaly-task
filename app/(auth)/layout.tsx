export default function AuthLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="h-full grid place-content-center bg-[#e9e6f8] p-5">
      {children}
    </main>
  );
}
