import ContactForm from "@/src/components/contact/contact_form";
import ContactHero from "@/src/components/contact/contact_hero";
import Footer from "@/src/components/footer/footer";
import PageNav from "@/src/components/navbar/Page_NavBar";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col font-poppins text-lg lg:text-xl tracking-wide ">
      <PageNav />
      <div className="mb-auto">
        <ContactHero />
        <ContactForm />
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  );
}
