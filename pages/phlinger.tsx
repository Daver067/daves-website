import { Inter } from "next/font/google";
import PageNav from "@/src/components/navbar/Page_NavBar";

const inter = Inter({ subsets: ["latin"] });

export default function Phlinger() {
  return (
    <div>
      <PageNav />
      <iframe
        className="w-[50%] aspect-video self-stretch md:min-h-96"
        src="https://www.youtube.com/embed/SR2PQSKpWY4"
        frameBorder="0"
        title="Product Overview Video"
        aria-hidden="true"
      />{" "}
    </div>
  );
}
