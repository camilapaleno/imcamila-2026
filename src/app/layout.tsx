import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import '@/app/globals.css';


export const metadata: Metadata = {
  title: "Camila Paleno Web Development & Design",
  description: "Connecting web development with brand design. I work with web builders and Javascript frameworks for websites and Adobe CS, Lottie, and Blender for graphic creation to create a web site or application that tells your story.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {Nav()}  
        {children}
        {Footer()}  
      </body>
    </html>
  );
}
