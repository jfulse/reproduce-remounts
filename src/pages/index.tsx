import Image from "next/image";
import { Inter } from "next/font/google";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  useEffect(() => {
    console.log("💥 MOUNT HOME 💥");
    return () => console.log("🚫 UNMOUNT HOME 🚫");
  }, []);

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      HOME
    </main>
  );
}
