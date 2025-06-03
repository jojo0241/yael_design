// ContactSection.jsx
import { motion } from "framer-motion";

export default function Contacts() {
  return (
    <section className="bg-[#51a2ff] py-16 text-white">
      <div className="max-w-4xl mx-auto px-6">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Contactez-nous
        </motion.h2>

        <motion.form
          className="bg-white text-gray-800 p-6 rounded-xl shadow-md space-y-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <input type="text" placeholder="Votre nom" className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#51a2ff]" />
          <input type="email" placeholder="Votre email" className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#51a2ff]" />
          <textarea placeholder="Votre message..." rows="4" className="w-full px-4 py-2 rounded-lg border resize-none focus:outline-none focus:ring-2 focus:ring-[#51a2ff]"></textarea>
          <button type="submit" className="bg-[#51a2ff] text-white font-semibold px-6 py-2 rounded-lg hover:bg-blue-600 transition">
            Envoyer
          </button>
        </motion.form>
      </div>
    </section>
  );
}
