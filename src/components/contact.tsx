import { Contact } from "contentlayer/generated";
import Image from "next/image";
import contactBackground from "@/assets/images/contact-background.png";

export default function ContactSection({ data }: { data: Contact }) {
  return (
    <section id="contact" className="relative overflow-hidden py-32">
      <Image src={contactBackground} alt="Contact Background Image" className="absolute w-full h-full top-0 left-0 -z-10 object-cover" />
      <div className="relative container mx-auto px-8 lg:px-24">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-4 bg-light p-10">
          <div className="col-span-5 flex flex-col justify-center h-full">
            <p className="text-5xl font-semibold text-dark">{data.lead}</p>
            <div className="flex gap-4"></div>
          </div>
          <div className="col-span-7 flex flex-col h-full">
            <h2 className="text-4xl font-bold text-primary mx-2 mb-8">
              {data.title}
            </h2>
            <form className="">
              <div className="mb-6">
                <input type="text" className="w-full border border-dark text-xl p-2" name="name" placeholder="Name" />
              </div>
              <div className="mb-6">
                <input type="text" className="w-full border border-dark text-xl p-2" name="email" placeholder="Email" />
              </div>
              <div className="mb-6">
                <textarea rows={8} className="w-full border border-dark text-xl p-2" name="message" placeholder="Message" />
              </div>
              <div className="mb-6">
                <button className="text-light font-medium bg-dark px-6 py-4">
                  {data.button}
                </button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
