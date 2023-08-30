import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header>
          <nav className="py-3 text-3xl flex justify-center">
            <Link href="/">Logo</Link>
          </nav>
        </header>
        <main className="flex justify-center">
          <section className="m-3 p-3 border rounded-md w-4/6">
            {children}
          </section>
        </main>
      </body>
    </html>
  );
}
