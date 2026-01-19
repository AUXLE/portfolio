import { motion } from "framer-motion";

export default function Skills() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          width: "584px",
          height: "176px",
          position: "absolute",
          top: "3884px",
          left: "773px",
          transform: "rotate(0deg)",
          opacity: 1,
          borderRadius: "30px",
        }}
      >
        <h2>Skills</h2>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        style={{
          width: "655px",
          height: "88px",
          position: "absolute",
          top: "4184px",
          left: "187px",
          transform: "rotate(0deg)",
          opacity: 1,
        }}
      >
        <p>User Interviews, Usability Testing, Analytic Research, Competitive Audits</p>
      </motion.div>
    </>
  );
}
