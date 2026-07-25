import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { pageReveal } from "../lib/motion";

function MainLayout({ children }) {
  return (
    <div className="grid min-h-dvh grid-rows-[auto_1fr_auto] bg-white">
      <Navbar />
      <main className="min-h-0">
        {children ? (
          <motion.div
            className="mx-auto w-full pb-0"
            variants={pageReveal}
            initial="hidden"
            animate="show"
          >
            {children}
          </motion.div>
        ) : null}
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;
