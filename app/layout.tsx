import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "IA Micro Lending | Empowering Your Financial Future",
  description:
    "Fast, fair micro loans in Des Moines, Iowa. Personal, emergency, and small business loans built around your life — not the other way around.",
  metadataBase: new URL("https://iamicrolending.com"),
  openGraph: {
    title: "IA Micro Lending | Empowering Your Financial Future",
    description:
      "Fast, fair micro loans in Des Moines, Iowa. Apply in minutes, hear back the same day.",
    url: "https://iamicrolending.com",
    siteName: "IA Micro Lending",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">
    <main className="relative min-h-screen">{children}</main>
    </main>
        <Footer />
      </body>
    </html>
  );
}
