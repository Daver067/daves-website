import { Inter } from "next/font/google";
import PageNav from "@/src/components/navbar/Page_NavBar";

const inter = Inter({ subsets: ["latin"] });

export default function Solitaire() {
  return (
    <div>
      <PageNav />
    </div>
  );
}
