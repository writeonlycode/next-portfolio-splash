import { Contact } from "contentlayer/generated";
import Image from "next/image";
import contactBackground from "@/assets/images/contact-background.png";
import ContactForm from "./ui/ContactForm";

export default function ContactSection({ data }: { data: Contact }) {

  return (
    <section id="contact" className="relative overflow-hidden py-32">
      <Image src={contactBackground} alt="Contact Background Image" className="absolute w-full h-full top-0 left-0 -z-10 object-cover" />
      <div className="relative container mx-auto px-8 lg:px-24">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-4 bg-light p-10">
          <div className="col-span-7 flex flex-col h-full">
            <h2 className="text-4xl font-bold text-primary mx-2 mb-8">
              {data.title}
            </h2>
            <ContactForm button={data.button} />
          </div>
          <div className="col-span-5 flex flex-col justify-center h-full lg:order-first">
            <p className="text-5xl font-semibold text-dark text-center lg:text-start">{data.lead}</p>
            <div className="flex gap-4"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
