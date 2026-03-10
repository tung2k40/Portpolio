import { motion } from "framer-motion";
import { BookOpen, Award, CheckCircle2 } from "lucide-react";
import { cvData } from "../data";

const About = () => {
  const { education, certifications, personalInfo } = cvData;

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const listContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const listItem = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  return (
    <section
      id="about"
      className="py-24 bg-zinc-950 relative border-t border-zinc-900/50 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-40 right-[-5%] w-64 h-64 bg-orange-600/5 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Về <span className="text-orange-500">Tôi</span>
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-orange-500 mx-auto rounded-full"
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Column - Objective */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            <h3 className="text-2xl font-semibold text-white mb-6 flex items-center gap-3">
              <motion.span
                whileHover={{ rotate: 15, scale: 1.1 }}
                className="w-10 h-10 rounded-xl bg-orange-500/10 text-orange-500 flex items-center justify-center border border-orange-500/20"
              >
                <CheckCircle2 size={20} />
              </motion.span>
              Tôi là ai?
            </h3>
            <p className="text-zinc-400 text-lg leading-relaxed mb-6">
              Tôi là {personalInfo.name}, một {personalInfo.title} tại{" "}
              {personalInfo.location}.
            </p>
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative p-6 rounded-2xl border border-zinc-800 bg-gradient-to-br from-zinc-900/80 to-zinc-900/40 shadow-xl overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-orange-500 transform origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-300" />
              <p className="text-zinc-300 text-lg leading-relaxed italic z-10 relative">
                "{personalInfo.objective}"
              </p>
            </motion.div>
          </motion.div>

          {/* Right Column - Ed & Certs */}
          <div className="space-y-12">
            {/* Education */}
            <motion.div
              variants={listContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              <h3 className="text-2xl font-semibold text-white mb-8 flex items-center gap-3">
                <motion.span
                  whileHover={{ rotate: -15, scale: 1.1 }}
                  className="w-10 h-10 rounded-xl bg-orange-500/10 text-orange-500 flex items-center justify-center border border-orange-500/20"
                >
                  <BookOpen size={20} />
                </motion.span>
                Học Vấn
              </h3>
              <div className="space-y-8">
                {education.map((edu, idx) => (
                  <motion.div
                    variants={listItem}
                    key={idx}
                    className="relative pl-8 before:absolute before:left-0 before:top-2 before:w-3 before:h-3 before:bg-orange-500 before:rounded-full before:shadow-[0_0_10px_rgba(249,115,22,0.8)] after:absolute after:left-[5px] after:top-6 after:w-[2px] after:h-[calc(100%+16px)] after:bg-zinc-800 last:after:hidden group"
                  >
                    <div className="text-orange-500 font-semibold mb-1 tracking-wide">
                      {edu.period}
                    </div>
                    <div className="text-white text-xl font-bold group-hover:text-orange-400 transition-colors">
                      {edu.degree}
                    </div>
                    <div className="text-zinc-400 text-lg mt-1">
                      {edu.institution}
                    </div>
                    <div className="text-zinc-500 mt-2 bg-zinc-900/50 p-3 rounded-lg border border-zinc-800/50 inline-block">
                      {edu.description}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Certifications */}
            <motion.div
              variants={listContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              <h3 className="text-2xl font-semibold text-white mb-6 flex items-center gap-3">
                <motion.span
                  whileHover={{ rotate: 15, y: -5 }}
                  className="w-10 h-10 rounded-xl bg-orange-500/10 text-orange-500 flex items-center justify-center border border-orange-500/20"
                >
                  <Award size={20} />
                </motion.span>
                Chứng Chỉ
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {certifications.map((cert, idx) => (
                  <motion.div
                    variants={listItem}
                    whileHover={{ scale: 1.05, y: -5 }}
                    key={idx}
                    className="bg-zinc-900/50 p-5 rounded-xl border border-zinc-800/80 hover:border-orange-500/50 transition-all shadow-lg hover:shadow-orange-500/10 group cursor-default"
                  >
                    <div className="flex items-center gap-2 text-orange-500 text-sm font-bold mb-2">
                      <Award size={14} className="group-hover:animate-bounce" />
                      {cert.date}
                    </div>
                    <div className="text-white font-medium leading-tight group-hover:text-orange-100 transition-colors">
                      {cert.title}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
