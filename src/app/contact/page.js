import { ContactForm } from "@/components/contact-form";
import Footer from "@/components/footer";
import Header from "@/components/header";

export default function Contact() {
  return (
    <>
      <Header theme="dark" />

      <main>
        <section className="dark bg-background flex flex-col md:flex-row gap-8 py-16 px-6 sm:px-8 md:px-12 xl:px-16">
          <div className="flex flex-col w-full md:w-1/2 gap-4 text-white">
            <h2 className="text-4xl md:text-5xl md:w-7/12">Contact our team</h2>
            <p className="md:w-7/12">Fill out the form and a member of the Kenny Otesile team will reach out to you.</p>
          </div>
          <div className="w-full md:w-1/2 bg-white rounded-md p-6 sm:p-8">
            <ContactForm />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
