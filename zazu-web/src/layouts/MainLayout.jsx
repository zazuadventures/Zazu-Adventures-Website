import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { pageReveal } from "../lib/motion";

function MainLayout({ children }) {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />
      <main className="flex flex-1 flex-col">
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
