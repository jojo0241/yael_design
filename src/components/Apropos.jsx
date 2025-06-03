import { motion } from "framer-motion";

export default function Apropos() {
  return (
    <section className="bg-[#fdc700] py-16 text-gray-800">
      <motion.div
        className="max-w-4xl mx-auto px-6 text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6">À propos de nous</h2>
        <p className="text-lg leading-relaxed">
          Nous sommes passionnés par la création de gadgets personnalisés pour enfants ! Notre mission est de rendre chaque anniversaire unique et magique.
        </p>
      </motion.div>
    </section>

  )
}

