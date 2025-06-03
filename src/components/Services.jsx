import { motion } from "framer-motion";

const services = [
  { title: "Étiquettes personnalisées", desc: "Des designs uniques pour bouteilles, sachets, et plus encore." },
  { title: "Cadeaux invités", desc: "Porte-clés, stickers et goodies à offrir aux enfants." },
  { title: "Bâches & Posters", desc: "Personnalisez votre décoration avec des visuels géants." },
];

export default function Services() {
  return (
    <section className="bg-[#05df72] py-16 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Nos Services
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white text-[#05df72] rounded-xl p-6 shadow-md"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 * index, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p>{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}