import { motion } from "framer-motion";
import { Code2, Users, Flame } from "lucide-react";
import { cvData } from "../data";

const Skills = () => {
  const { skills } = cvData;

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const item = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { type: "spring" as const, stiffness: 200, damping: 10 },
    },
  };

  const cardContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 },
    },
  };

  const cardItem = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring" as const, stiffness: 100 },
    },
  };

  return (
    <section
      id="skills"
      className="py-24 bg-zinc-950 relative border-t border-zinc-900/50 overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-600/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-[-10%] w-[300px] h-[300px] bg-orange-400/5 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto px-6 z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Kỹ Năng <span className="text-orange-500">Chuyên Môn</span>
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-orange-500 mx-auto rounded-full"
          />
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12">
          {/* Technical Skills */}
          <div className="lg:col-span-7">
            <h3 className="text-2xl font-semibold text-white mb-8 flex items-center gap-3">
              <span className="w-10 h-10 rounded-xl bg-orange-500/10 text-orange-500 flex items-center justify-center border border-orange-500/20">
                <Code2 size={20} />
              </span>
              Kỹ Thuật
            </h3>
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="flex flex-wrap gap-4"
            >
              {skills.technical.map((skill, idx) => (
                <motion.div
                  key={idx}
                  variants={item}
                  whileHover={{
                    scale: 1.1,
                    y: -5,
                    boxShadow: "0 10px 25px -5px rgba(249, 115, 22, 0.3)",
                    borderColor: "rgba(249, 115, 22, 0.5)",
                  }}
                  drag
                  dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
                  dragElastic={0.2}
                  className="px-6 py-3 bg-zinc-900/80 rounded-full border border-zinc-800 text-zinc-300 font-medium cursor-grab active:cursor-grabbing transition-colors duration-300 hover:text-orange-400 hover:bg-orange-500/5 select-none"
                >
                  {skill}
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Soft Skills */}
          <div className="lg:col-span-5">
            <h3 className="text-2xl font-semibold text-white mb-8 flex items-center gap-3">
              <span className="w-10 h-10 rounded-xl bg-orange-500/10 text-orange-500 flex items-center justify-center border border-orange-500/20">
                <Users size={20} />
              </span>
              Kỹ Năng Mềm
            </h3>
            <motion.div
              variants={cardContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="space-y-6"
            >
              {skills.soft.map((skill, idx) => (
                <motion.div
                  key={idx}
                  variants={cardItem}
                  whileHover={{ x: 10, scale: 1.02 }}
                  className="bg-zinc-900/50 p-6 rounded-2xl border border-zinc-800/50 hover:border-orange-500/30 transition-all group"
                >
                  <h4 className="text-white font-medium text-lg mb-3 flex items-center gap-2 group-hover:text-orange-400 transition-colors">
                    <motion.div
                      whileHover={{ rotate: 180 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Flame size={18} className="text-orange-500" />
                    </motion.div>
                    {skill.name === "Communication skills" &&
                      "Kỹ năng giao tiếp"}
                    {skill.name === "Group leadership skills" &&
                      "Kỹ năng làm việc nhóm/lãnh đạo"}
                    {skill.name === "Time management skills" &&
                      "Quản lý thời gian"}
                  </h4>
                  <ul className="space-y-3">
                    {skill.details.map((detail, dIdx) => (
                      <li
                        key={dIdx}
                        className="text-zinc-400 text-sm flex items-start gap-3 group-hover:text-zinc-300 transition-colors"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-1.5 shrink-0 shadow-[0_0_8px_rgba(249,115,22,0.8)]" />
                        {detail.includes("Communicate") &&
                          "Giao tiếp ý tưởng rõ ràng trong các cuộc thảo luận."}
                        {detail.includes("Listen") &&
                          "Lắng nghe và đưa ra phản hồi mang tính xây dựng."}
                        {detail.includes("Collaborate") &&
                          "Phối hợp hiệu quả với các thành viên trong nhóm."}
                        {detail.includes("Share") &&
                          "Chia sẻ ý tưởng, hỗ trợ đồng đội đạt được mục tiêu."}
                        {detail.includes("Prioritize") &&
                          "Ưu tiên công việc và quản lý thời gian hiệu quả."}
                        {detail.includes("Ensure") &&
                          "Đảm bảo tiến độ công việc được hoàn thành đúng kế hoạch."}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
