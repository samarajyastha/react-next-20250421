import Header from "@/components/Header";
import "./globals.css";

export const metadata = {
  title: "E-Bazaar",
  description: "Ecommerce app on Next.js",
  keywords: "E-commerce, online shopping",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="light">
      <body>
        <Header />
        {children}
        <footer className="mt-5 bg-amber-300 text-black text-center">
          2025. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
