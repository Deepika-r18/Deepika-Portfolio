import React from "react";
import { FaWhatsapp, FaGithub } from "react-icons/fa";
import {
  IoCallOutline,
  IoMailOutline,
} from "react-icons/io5";
import { AiOutlineLinkedin } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";

export default function Contact() {
  const contacts = [
    {
      name: "Email",
      icon: <IoMailOutline size={24} />,
      link: "mailto:deepikaravindran1801@gmail.com",
      detail: "For professional enquiries",
    },
    {
      name: "LinkedIn",
      icon: <AiOutlineLinkedin size={24} />,
      link: "https://www.linkedin.com/in/deepika-ravindran-727798281/",
      detail: "Connect professionally",
    },
    {
      name: "GitHub",
      icon: <FaGithub size={24} />,
      link: "https://github.com/Deepika-r18",
      detail: "Explore my projects",
    },
    {
      name: "WhatsApp",
      icon: <FaWhatsapp size={24} />,
      link: "https://wa.me/919944945347",
      detail: "Send me a message",
    },
    {
      name: "Phone",
      icon: <IoCallOutline size={24} />,
      link: "tel:+919944945347",
      detail: "Let's have a conversation",
    },
    {
      name: "Instagram",
      icon: <BsInstagram size={24} />,
      link: "https://www.instagram.com/deepika._ravindran/?hl=en",
      detail: "Find me on Instagram",
    },
  ];

  return (
    <section
      id="contact"
      className="bg-white px-5 py-20 font-hero-font md:px-12"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section Heading */}
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-pink-600">
            Get in Touch
          </p>

          <h2 className="mt-3 text-4xl font-bold text-gray-900 md:text-5xl">
            Let's <span className="text-pink-500">Connect</span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl leading-7 text-gray-600">
            I'm interested in entry-level Data Analyst opportunities
            and professional connections. Feel free to reach out.
          </p>

          <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-pink-400" />
        </div>

        {/* Contact Information */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {contacts.map((contact) => {
            const directLink =
              contact.name === "Email" || contact.name === "Phone";

            return (
              <a
                key={contact.name}
                href={contact.link}
                target={directLink ? undefined : "_blank"}
                rel={directLink ? undefined : "noopener noreferrer"}
                aria-label={`${contact.name}: ${contact.detail}`}
                className="group flex items-center gap-4 rounded-xl border border-gray-200 bg-white p-5 transition duration-300 hover:border-pink-300 hover:bg-pink-50/50"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-pink-50 text-pink-600 transition group-hover:bg-pink-500 group-hover:text-white">
                  {contact.icon}
                </div>

                <div className="min-w-0 flex-1">
                  <h3 className="font-semibold text-gray-900">
                    {contact.name}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    {contact.detail}
                  </p>
                </div>

                <span className="text-lg text-pink-500 transition group-hover:translate-x-1">
                  →
                </span>
              </a>
            );
          })}
        </div>

        {/* Professional Contact Banner */}
        <div className="mt-12 flex flex-col items-center justify-between gap-5 rounded-2xl bg-pink-50 p-7 text-center sm:flex-row sm:text-left md:px-10">
          <div>
            <h3 className="text-xl font-bold text-gray-900">
              Have a Data Analyst opportunity?
            </h3>
            <p className="mt-2 text-sm leading-6 text-gray-600">
              I'd be happy to discuss how I can contribute to your team.
            </p>
          </div>

          <a
            href="mailto:deepikaravindran1801@gmail.com?subject=Data%20Analyst%20Opportunity"
            className="shrink-0 rounded-lg bg-pink-500 px-6 py-3 font-semibold text-white transition hover:bg-pink-600"
          >
            Contact Me ↗
          </a>
        </div>

        {/* Footer */}
        <footer className="mt-12 border-t border-gray-200 pt-6 text-center">
          {/* <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Deepika Ravindran
          </p> */}
          <p className="mt-2 text-sm text-pink-600">
            Data Analysis · Visualization · Business Insights
          </p>
        </footer>
      </div>
    </section>
  );
}