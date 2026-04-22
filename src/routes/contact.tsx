import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

function ContactPage() {
  return (
    <section className="mx-auto max-w-[1152px] px-6 py-20">
      <div className="max-w-[846px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-2xl md:text-3xl">
            If it involves design, systems, or making things better. I'm in.
          </h1>
          <p className="mt-4 text-muted-foreground">
            I'm currently open to UX/UI, product design, and design systems roles across Germany and
            Europe.
          </p>
          <p className="mt-2 text-muted-foreground">
            Fastest way to reach me? Probably still this.
          </p>
        </motion.div>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="rounded-2xl bg-card p-8 text-center"
        >
          <h3 className="text-lg font-bold font-body">Let's Talk (No Bat-Signal Needed)</h3>
          <p className="mt-1 text-sm text-muted-foreground">Say Hello!</p>
          <a
            href="tel:+4915213629639"
            className="mt-4 block font-display text-2xl text-primary hover:underline md:text-3xl"
          >
            +49 1521 3 629 639
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="rounded-2xl bg-card p-8 text-center"
        >
          <h3 className="text-lg font-bold font-body">Carrier Pigeons / Emails (or both)</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Got an idea? A role? A random thought? I'm listening.
          </p>
          <a
            href="mailto:saurabhjha95@gmail.com"
            className="mt-4 block font-display text-2xl text-primary hover:underline md:text-3xl"
          >
            saurabhjha95@gmail.com
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mt-8 rounded-2xl bg-card p-8 text-center"
      >
        <h3 className="text-lg font-bold font-body">The Professional Stuff</h3>
        <p className="mt-1 text-sm text-muted-foreground">Proof I'm Legit.</p>
        <div className="mt-6 flex items-center justify-center gap-6">
          <a
            href="https://www.linkedin.com/in/saurabhjha95"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#0077B5] text-primary-foreground text-2xl font-bold"
          >
            in
          </a>
          <a
            href="https://www.behance.net/saurabhjha"
            className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#1769FF] text-primary-foreground text-2xl font-bold"
          >
            Bē
          </a>
          <a
            href="https://www.dribbble.com/saurabhjha"
            className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#EA4C89] text-primary-foreground text-2xl font-bold"
          >
            ✦
          </a>
        </div>
      </motion.div>
    </section>
  );
}

export default ContactPage;
