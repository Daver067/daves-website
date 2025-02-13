import ContactForm from "@/src/components/contact/contact_form";
import ContactHero from "@/src/components/contact/contact_hero";
import Footer from "@/src/components/footer/footer";
import FadeIn from "@/src/components/multi-use-components/fadeIn";
import PageNav from "@/src/components/navbar/Page_NavBar";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col font-poppins text-lg lg:text-xl tracking-wide ">
      <PageNav />
      <FadeIn>
        <div className="mb-auto min-h-[85vh]">
          <ContactHero />
          <ContactForm />
        </div>
      </FadeIn>
      <div className="">
        <Footer />
      </div>
    </div>
  );
}
