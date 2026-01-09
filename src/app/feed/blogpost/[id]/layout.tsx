export default function BlogpostLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="via-primary bg-linear-to-b from-transparent to-transparent">
      {children}
    </main>
  );
}
