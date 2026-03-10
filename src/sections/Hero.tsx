import { motion, useScroll, useTransform } from "framer-motion";
import { Github, Mail, Phone, MapPin } from "lucide-react";
import { cvData } from "../data";

const Hero = () => {
  const { personalInfo } = cvData;
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -200]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring" as const, stiffness: 80, damping: 15 },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-zinc-950 pt-20"
    >
      {/* Animated Background Ornaments */}
      <motion.div
        style={{ y: y1 }}
        animate={{ scale: [1, 1.1, 1], rotate: [0, 90, 0] }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        className="absolute top-[-10%] left-[-10%] w-[30rem] h-[30rem] bg-orange-500/10 rounded-full blur-[120px]"
      />
      <motion.div
        style={{ y: y2 }}
        animate={{ scale: [1, 1.2, 1], x: [0, 50, 0] }}
        transition={{ repeat: Infinity, duration: 15, ease: "easeInOut" }}
        className="absolute bottom-[-10%] right-[-10%] w-[40rem] h-[40rem] bg-orange-600/10 rounded-full blur-[150px]"
      />
      <motion.div
        animate={{ y: [0, -30, 0], x: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
        className="absolute top-[20%] right-[20%] w-32 h-32 bg-orange-400/20 rounded-full blur-[60px]"
      />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10 w-full">
        {/* Left Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-6"
        >
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 w-max cursor-default"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-orange-500"></span>
            </span>
            Sẵn sàng làm việc
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl lg:text-7xl font-bold tracking-tight text-white"
          >
            Xin chào, tôi là <br />
            <motion.span
              initial={{ backgroundPosition: "0% 50%" }}
              animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
              className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-yellow-500 to-orange-600 bg-[length:200%_auto]"
            >
              {personalInfo.name}
            </motion.span>
          </motion.h1>

          <motion.h2
            variants={itemVariants}
            className="text-2xl lg:text-3xl text-zinc-400 font-medium"
          >
            {personalInfo.title}
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-lg text-zinc-500 leading-relaxed max-w-xl"
          >
            {personalInfo.objective}
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4 mt-4"
          >
            <motion.a
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 30px rgba(249,115,22,0.5)",
              }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              className="px-8 py-3 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-medium shadow-[0_0_20px_rgba(249,115,22,0.3)] transition-all"
            >
              Xem Dự Án
            </motion.a>
            <motion.a
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(255,255,255,0.05)",
              }}
              whileTap={{ scale: 0.95 }}
              href="#about"
              className="px-8 py-3 rounded-full border border-zinc-700 text-zinc-300 font-medium transition-colors"
            >
              Về Tôi
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={containerVariants}
            className="flex items-center gap-6 mt-8 pt-8 border-t border-zinc-900/50"
          >
            {[
              { icon: Github, href: personalInfo.github, label: "GitHub" },
              {
                icon: Mail,
                href: `mailto:${personalInfo.email}`,
                label: "Email",
              },
              {
                icon: Phone,
                href: `tel:${personalInfo.phone}`,
                label: "Phone",
              },
            ].map((social, idx) => (
              <motion.a
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -5, color: "#f97316" }}
                href={social.href}
                target={social.label === "GitHub" ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="text-zinc-500 transition-colors"
              >
                <social.icon size={24} />
                <span className="sr-only">{social.label}</span>
              </motion.a>
            ))}

            <motion.div
              variants={itemVariants}
              className="flex items-center gap-2 text-zinc-500 ml-4 group cursor-default"
            >
              <MapPin
                size={24}
                className="group-hover:text-orange-500 transition-colors"
              />
              <span className="text-sm font-medium group-hover:text-orange-500 transition-colors">
                {personalInfo.location.split(",")[0]}
              </span>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Right Content - Photo/Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, type: "spring", bounce: 0.4, delay: 0.2 }}
          className="relative hidden lg:flex justify-center"
        >
          <motion.div
            animate={{ y: [-10, 10, -10] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            className="relative w-80 h-[28rem] rounded-2xl overflow-hidden shadow-2xl shadow-orange-500/20 border border-zinc-800/50 group"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent z-10 opacity-80 group-hover:opacity-40 transition-opacity duration-500" />
            <motion.img
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5 }}
              src={personalInfo.photo}
              alt={personalInfo.name}
              className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700"
            />
          </motion.div>

          {/* Decorative rotating border */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            className="absolute -inset-4 rounded-3xl border border-dashed border-orange-500/30 -z-10"
          />
          <div className="absolute -inset-0.5 bg-gradient-to-tr from-orange-500 to-transparent opacity-20 blur-2xl rounded-3xl -z-20 animate-pulse" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
