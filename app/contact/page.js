import ContactForm from "@/components/ContactForm/ContactForm";
import { cookies } from "next/headers";

export const metadata = {
  title: "Contact",
  description: "This is the contact page from Frederico's Web Page",
  keywords: [
    "Resume",
    "Portfolio",
    "Graphic Design",
    "Industrial Design",
    "Web Design",
    "Web Development",
  ],
};

export default function Contact() {
  const cookieStore = cookies();

  return <ContactForm />;
}
