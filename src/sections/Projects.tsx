import { motion } from "framer-motion";
import { FolderGit2 } from "lucide-react";
import { cvData } from "../data";

const Projects = () => {
  const { projects } = cvData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  return (
    <section
      id="projects"
      className="py-24 bg-zinc-950 relative border-t border-zinc-900/50"
    >
      <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-orange-600/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Dự Án <span className="text-orange-500">Nổi Bật</span>
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-orange-500 mx-auto rounded-full"
          />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid lg:grid-cols-2 gap-10"
        >
          {projects.map((project, idx) => (
            <motion.div
              variants={cardVariants}
              key={idx}
              whileHover={{ y: -10 }}
              className="bg-zinc-900/40 rounded-3xl border border-zinc-800/80 p-8 hover:border-orange-500/50 transition-all duration-300 group relative overflow-hidden flex flex-col h-full shadow-lg hover:shadow-orange-500/10"
            >
              {/* Card Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="flex justify-between items-start mb-6 relative z-10">
                <motion.div
                  whileHover={{ rotate: 180, scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                  className="w-14 h-14 rounded-2xl bg-orange-500/10 text-orange-500 flex items-center justify-center border border-orange-500/20 shadow-inner"
                >
                  <FolderGit2 size={28} />
                </motion.div>
                <div className="flex flex-col items-end gap-2">
                  <span className="text-sm font-semibold text-orange-400 bg-orange-500/10 px-4 py-1.5 rounded-full border border-orange-500/20">
                    {project.period}
                  </span>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors z-10 relative">
                {project.title}
              </h3>
              <div className="text-orange-500/80 font-medium mb-6 flex items-center gap-2 z-10 relative text-sm tracking-wider uppercase">
                <span>{project.role}</span>
              </div>

              <p className="text-zinc-400 leading-relaxed mb-8 flex-grow z-10 relative">
                {project.title === "DaNang-Sakai"
                  ? "Phát triển frontend cho Hệ thống Quản lý Học tập (LMS) lấy cảm hứng từ Sakai. Nền tảng cung cấp không gian cho giảng viên và sinh viên truy cập tài liệu học tập và tham gia làm bài đánh giá trực tuyến."
                  : "Là lập trình viên Frontend đầy nhiệt huyết, xây dựng mạng gia đình số thông minh giúp kết nối các thế hệ lập cây gia phả, tham gia đóng góp cho dự án thực tế và cái thiện hiệu suất hệ thống dữ liệu phân cấp."}
              </p>

              <div className="space-y-8 z-10 relative border-t border-zinc-800/50 pt-8 mt-auto">
                <div>
                  <h4 className="text-white text-sm font-bold mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-orange-500" />
                    Thành Tựu & Tính Năng
                  </h4>
                  <ul className="space-y-3">
                    {project.achievements.map((achievement, aIdx) => (
                      <motion.li
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: aIdx * 0.1 + 0.3 }}
                        key={aIdx}
                        className="text-zinc-400 text-sm flex items-start gap-3 group-hover:text-zinc-300 transition-colors"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-zinc-600 group-hover:bg-orange-500 mt-1.5 shrink-0 transition-colors" />
                        {project.title === "DaNang-Sakai" &&
                          achievement.includes("Built") &&
                          "Xây dựng UI tương thích đa thiết bị bằng React.js và Tailwind CSS."}
                        {project.title === "DaNang-Sakai" &&
                          achievement.includes("Developed key") &&
                          "Phát triển các trang chính bao gồm Trang chủ, Tài liệu học tập và Thi trực tuyến."}
                        {project.title === "DaNang-Sakai" &&
                          achievement.includes("Integrated") &&
                          "Tích hợp RESTful APIs để hiển thị dữ liệu động (dynamic data)."}
                        {project.title === "DaNang-Sakai" &&
                          achievement.includes("Enhanced") &&
                          "Nâng cao trải nghiệm người dùng với các hiệu ứng Framer Motion."}

                        {project.title !== "DaNang-Sakai" &&
                          achievement.includes("Built") &&
                          "Xây dựng các component UI tương thích đa thiết bị, thân thiện với người dùng."}
                        {project.title !== "DaNang-Sakai" &&
                          achievement.includes("Integrated") &&
                          "Tích hợp RESTful APIs để render dữ liệu cấu trúc cây gia phả."}
                        {project.title !== "DaNang-Sakai" &&
                          achievement.includes("Improved") &&
                          "Cải thiện hiệu suất hệ thống khi xử lý dữ liệu lớn (hierarchical datasets)."}
                        {project.title !== "DaNang-Sakai" &&
                          achievement.includes("Collaborated") &&
                          "Làm việc chặt chẽ với backend để triển khai các tính năng CRUD."}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-white text-sm font-bold mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-zinc-600 group-hover:bg-orange-500 transition-colors" />
                    Công Nghệ Sử Dụng
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, tIdx) => (
                      <motion.span
                        whileHover={{
                          scale: 1.1,
                          backgroundColor: "#f97316",
                          color: "#fff",
                          borderColor: "#f97316",
                        }}
                        key={tIdx}
                        className="px-3 py-1 bg-zinc-950/50 rounded-lg border border-zinc-800 text-xs font-semibold text-zinc-300 transition-colors cursor-default"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
