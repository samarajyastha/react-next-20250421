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
      </body>
    </html>
  );
}
