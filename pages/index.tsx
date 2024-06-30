import { Inter } from "next/font/google";
import TopNav from "@/src/components/navbar/top_nav";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <TopNav />
    </div>
  );
}
