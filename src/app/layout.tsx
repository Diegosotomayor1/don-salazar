import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import { Provider } from "jotai";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "Don Salazar",
  description: "Specialty Coffee",
  icons: {
    icon: "/logo-don-salazar-variant.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${raleway.variable} antialiased`}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
