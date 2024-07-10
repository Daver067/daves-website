import { Inter } from "next/font/google";
import TopNav from "@/src/components/navbar/top_nav";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <TopNav
        children={[
          { name: "Home", route: "#" },
          { name: "My Projects", route: "#" },
          { name: "About Me", route: "#" },
          { name: "Contact", route: "#" },
        ]}
      />
    </div>
  );
}
