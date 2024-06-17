export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <main>
            SIDEBAR
            {children}
        </main>
    </html>
  );
}
