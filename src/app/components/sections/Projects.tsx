'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "HabitFlow - Habit Tracker",
    description: "Aplicação web para construção e acompanhamento de hábitos, com dashboard interativo, gamificação e análise de progresso. Desenvolvido para ajudar usuários a criarem rotinas saudáveis através de lembretes inteligentes, visualização de metas e sistema de recompensas.",
    tech: ["Next.js", "TypeScript", "Tailwind", "React", "Framer Motrion", "Vercel", "Git"],
    github: "https://github.com/luanpessuti/habitflow",
    live: "https://habitflowbrazil.vercel.app/",
    color: "#ff6b6b",
    accent: "#ff8e8e",
    rotation: "rotate-2"
  },
  {
    id: 2,
    title: "FURIA Live Chat",
    description: "Um componente de chat ao vivo desenvolvido para um cenário fictício da equipe de eSports FURIA, combinando transmissão de vídeo, painel de partidas e mensagens em tempo real.",
    tech: ["Next.js", "TypeScript", "Tailwind", "React", "Node.js", "API Routes", "MongoDB", "Git"],
    github: "https://github.com/luanpessuti/case01furia",
    live: "https://case01furia.vercel.app/",
    color: "#4ecdc4",
    accent: "#7ad9d1",
    rotation: "-rotate-1"
  },
  {
    id: 3,
    title: "DUCK Studio - Landing Page",
    description: "DUCK é uma landing page criativa e conceitual para uma agência fictícia de design e desenvolvimento digital que foi fortemente inspirada na identidade visual da milli.agency.",
    tech: ["Next.js", "TypeScript", "Tailwind", "React", "Node.js", "GIT"],
    github: "https://github.com/luanpessuti/duck-landing-page",
    live: "https://duck-studios.vercel.app/",
    color: "#ffe66d",
    accent: "#fff0a3",
    rotation: "rotate-1"
  },
  {
    id: 4,
    title: "Portfólio - Primeira versão",
    description: "Um portfólio interativo que revive a nostalgia dos computadores dos anos 80/90, com uma interface inspirada no clássico Macintosh.",
    tech: ["REACT", "CSS", "Framer Motion", "VITE", "Git"],
    github: "https://github.com/luanpessuti/Portfolio",
    live: "https://portfolio-luanpessuti-1st-versioni.vercel.app/",
    color: "#a463f8",
    accent: "#c08cff",
    rotation: "-rotate-2"
  }
];

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <section ref={sectionRef} className="min-h-screen bg-[#f5f0ff] py-20 relative overflow-hidden" id="projects">
      {/* Textura de fundo */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cartographer.png')] opacity-10" />

      {/* Elementos decorativos temáticos */}
      <motion.div
        className="absolute top-10 left-20 w-24 h-24 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,0.7)]"
        animate={{
          backgroundColor: ['#ff6b6b', '#4ecdc4', '#ffe66d', '#ff6b6b'],
          rotate: [0, 360],
          y: [0, -20, 0],
          x: [0, 20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      >
        <div className="absolute inset-2 border-2 border-white rounded-full opacity-50" />
      </motion.div>

      <motion.div
        style={{ y: y2 }}
        className="absolute top-40 right-10 w-16 h-16 border-4 border-black bg-[#ffe66d] shadow-[8px_8px_0px_0px_rgba(0,0,0,0.7)]"
        animate={{
          borderRadius: ['20%', '50%', '20%'],
          rotate: [0, 180, 360],
        }}
        transition={{ duration: 6, repeat: Infinity }}
      >
        <div className="absolute top-2 left-2 w-3 h-3 bg-black rounded-full" />
      </motion.div>

      {/* Elemento de código */}
      <motion.div
        className="absolute bottom-20 right-20 w-32 h-24 border-4 border-black bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,0.7)]"
        animate={{
          rotate: [0, 10, -10, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          delay: 0.5
        }}
      >
        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-16 h-2 bg-gray-300 border-2 border-black" />
        <div className="p-1 h-full">
          <div className="w-full h-full bg-[#4ecdc4] opacity-70 flex items-center justify-center">
            <div className="text-xs font-bold text-black font-[Comic_CAT]">{"<code/>"}</div>
          </div>
        </div>
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Título com detalhes */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20"
        >
          <div className="relative cartoon-border-2 cartoon-shadow-2 bg-white p-8 transform -rotate-1 inline-block">
            <div className="absolute -top-3 -left-3 w-8 h-8 bg-[#ff6b6b] border-2 border-black rounded-full" />
            <h2 className="text-4xl md:text-6xl font-black text-black font-[Comic_CAT]">
              Meus <span className="text-[#4ecdc4]">Projetos</span>
            </h2>
            <p className="text-xl md:text-2xl font-semibold mt-4 text-gray-800 font-[Comic_CAT]">
              Coisas legais que já criei!
            </p>
            <div className="absolute -bottom-3 -right-3 w-6 h-6 bg-[#ffe66d] border-2 border-black rounded-full" />
          </div>
        </motion.div>

        {/* Grid de projetos */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="relative group"
            >
              {/* Card principal */}
              <div
                className={`relative cartoon-border-2 cartoon-shadow-2 p-8 ${project.rotation} h-full`}
                style={{ backgroundColor: project.color }}
              >
                {/* Detalhes decorativos do card */}
                <div className="absolute -top-3 -right-3 w-8 h-8 border-2 border-black rounded-full bg-white group-hover:opacity-0 transition-opacity" />
                <div className="absolute -bottom-3 -left-3 w-6 h-6 border-2 border-black rounded-full bg-white" />
                <div className="space-y-6">
                  <h3 className="text-2xl md:text-3xl font-bold text-black font-[Comic_CAT] group-hover:underline">
                    {project.title}
                  </h3>

                  <p className="text-gray-800 leading-relaxed text-lg">
                    {project.description}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <motion.span
                        key={tech}
                        whileHover={{ scale: 1.1 }}
                        className="cartoon-border-2 bg-white px-3 py-1 text-sm font-semibold text-black"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4 pt-4">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="cartoon-border-2 cartoon-shadow-2 bg-black text-white px-5 py-2 flex items-center gap-2 font-semibold hover:bg-gray-800 transition-colors"
                    >
                      <Github size={18} />
                      Código
                    </motion.a>

                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="cartoon-border-2 cartoon-shadow-2 text-white px-5 py-2 flex items-center gap-2 font-semibold transition-colors"
                      style={{ backgroundColor: project.accent }}
                    >
                      <ExternalLink size={18} />
                      Ver Live
                    </motion.a>
                  </div>
                </div>
              </div>

              {/* Efeito hover */}
              <motion.div
                className="absolute -top-2 -right-2 w-8 h-8 border-2 border-black rounded-full bg-white opacity-0 group-hover:opacity-100 z-10"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="relative cartoon-border-2 cartoon-shadow-2 bg-white p-8 transform rotate-1 inline-block">
            <div className="absolute -top-3 -right-3 w-8 h-8 bg-[#4ecdc4] border-2 border-black rounded-full" />
            <p className="text-xl md:text-2xl font-semibold text-black mb-6 font-[Comic_CAT]">
              Quer ver mais projetos?
            </p>
            <motion.a
              href="https://github.com/luanpessuti"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="cartoon-border-2 cartoon-shadow-2 bg-black text-white px-8 py-3 inline-flex items-center gap-3 font-bold hover:bg-gray-800 transition-colors"
            >
              <Github size={20} />
              <span>Explorar GitHub</span>
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="inline-block"
              >
                →
              </motion.span>
            </motion.a>
            <div className="absolute -bottom-3 -left-3 w-6 h-6 bg-[#ffe66d] border-2 border-black rounded-full" />
          </div>
        </motion.div>
      </div>

      {/* Elementos decorativos animados */}
      <motion.svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-10"
        viewBox="0 0 1000 1000"
      >
        <motion.path
          d="M100,100 Q200,50 300,100 T500,80 T700,120"
          stroke="#ff6b6b"
          strokeWidth="4"
          fill="none"
          strokeDasharray="10 8"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ duration: 4 }}
        />
        <motion.path
          d="M900,900 Q800,950 700,900 T500,920 T300,880"
          stroke="#4ecdc4"
          strokeWidth="4"
          fill="none"
          strokeDasharray="15 10"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ duration: 4, delay: 0.5 }}
        />
      </motion.svg>
    </section>
  );
}