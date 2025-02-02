import "./globals.css";
import { Inter } from "next/font/google";
import SpiderWebAnimation from "./components/SpiderWebAnimation";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ML Image Processor",
  description: "Upload and process images with machine learning",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} relative`}>
        <SpiderWebAnimation />
       
        {children}
      </body>
    </html>
  );
}
