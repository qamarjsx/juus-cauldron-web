import React from "react";
import Header from "../../utils/Header.jsx";
import Footer from "../../utils/Footer";
import { motion } from "framer-motion";
import ContactCards from "../../utils/ContactCards.jsx";
import ContactForm from "../../utils/ContactForm.jsx";

function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div>
        <Header />
      </div>
      <main className="pt-32">
        <h1 className="text-center text-3xl lg:text-4xl font-light lg:font-normal">Get In Touch</h1>
        <ContactForm />
        <ContactCards />
      </main>
      <div>
        <Footer />
      </div>
    </motion.div>
  );
}

export default Contact;
