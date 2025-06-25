'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "HelpDesk - Projeto CRUD",
    description: "HelpDesk é um sistema de gerenciamento de tickets de suporte, desenvolvido com Next.js, TypeScript, Tailwind CSS, Prisma e React Query. A aplicação permite criar, editar e excluir tickets e usuários, com interface responsiva, suporte a tema escuro/claro e feedback em tempo real.",
    tech: ["Next.js", "TypeScript", "Tailwind", "React", "PostgreSQL", "Prisma", "API Restful", "Vercel", "Git"],
    github: "https://github.com/luanpessuti/helpdesk",
    live: "https://helpdesk-luanpessuti.vercel.app/",
    color: "#ff6b6b",
    accent: "#ff8e8e",
    icon: "🎫"
  },
  {
    id: 2,
    title: "HabitFlow - Landing Page",
    description: "Aplicação web para construção e acompanhamento de hábitos, com dashboard interativo, gamificação e análise de progresso. Desenvolvido para ajudar usuários a criarem rotinas saudáveis através de lembretes inteligentes, visualização de metas e sistema de recompensas.",
    tech: ["Next.js", "TypeScript", "Tailwind", "React", "Framer Motion", "Vercel", "Git"],
    github: "https://github.com/luanpessuti/habitflow",
    live: "https://habitflowbrazil.vercel.app/",
    color: "#4ecdc4",
    accent: "#7ad9d1",
    icon: "🎯"
  },
  {
    id: 3,
    title: "FURIA Live Chat",
    description: "Um componente de chat ao vivo desenvolvido para um cenário fictício da equipe de eSports FURIA, combinando transmissão de vídeo, painel de partidas e mensagens em tempo real.",
    tech: ["Next.js", "TypeScript", "Tailwind", "React", "Node.js", "API Routes", "MongoDB", "Git"],
    github: "https://github.com/luanpessuti/case01furia",
    live: "https://case01furia.vercel.app/",
    color: "#ffe66d",
    accent: "#fff0a3",
    icon: "🎮"
  },
  {
    id: 4,
    title: "DUCK Studio - Landing Page",
    description: "DUCK é uma landing page criativa e conceitual para uma agência fictícia de design e desenvolvimento digital que foi fortemente inspirada na identidade visual da milli.agency.",
    tech: ["Next.js", "TypeScript", "Tailwind", "React", "Node.js", "GIT"],
    github: "https://github.com/luanpessuti/duck-landing-page",
    live: "https://duck-studios.vercel.app/",
    color: "#a463f8",
    accent: "#c08cff",
    icon: "🦆"
  },
  {
    id: 5,
    title: "Portfólio - Primeira versão",
    description: "Um portfólio interativo que revive a nostalgia dos computadores dos anos 80/90, com uma interface inspirada no clássico Macintosh.",
    tech: ["REACT", "CSS", "Framer Motion", "VITE", "Git"],
    github: "https://github.com/luanpessuti/Portfolio",
    live: "https://portfolio-luanpessuti-1st-versioni.vercel.app/",
    color: "#ff9a9e",
    accent: "#fecfef",
    icon: "💻"
  }
];

export default function Projects() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <section ref={sectionRef} className="min-h-screen bg-[#f5f0ff] py-20 relative overflow-hidden" id="projects">
      {/* Textura de fundo mantida */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cartographer.png')] opacity-10" />

      {/* Elementos decorativos temáticos mantidos */}
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

      {/* Elemento de código mantido */}
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
        {/* Título com detalhes mantido */}
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
              Uma jornada através das minhas criações!
            </p>
            <div className="absolute -bottom-3 -right-3 w-6 h-6 bg-[#ffe66d] border-2 border-black rounded-full" />
          </div>
        </motion.div>

        {/* Timeline Layout */}
        <div className="relative max-w-6xl mx-auto">
          {/* Linha central do timeline */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-2 bg-black h-full hidden md:block shadow-[4px_0px_0px_0px_rgba(0,0,0,0.3)]" />
          
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ 
                opacity: 0, 
                x: index % 2 === 0 ? -100 : 100,
                scale: 0.8
              }}
              whileInView={{ 
                opacity: 1, 
                x: 0,
                scale: 1
              }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.2,
                type: "spring",
                bounce: 0.3
              }}
              viewport={{ once: true, margin: "-50px" }}
              className={`relative flex items-center mb-20 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } flex-col group`}
            >
              {/* Card do projeto */}
              <div className="w-full md:w-5/12 relative flex flex-col items-center">
                <motion.div
                  whileHover={{ 
                    scale: 1.05, 
                    rotate: index % 2 === 0 ? 2 : -2,
                    y: -5
                  }}
                  className="cartoon-border-2 cartoon-shadow-2 p-6 relative overflow-hidden w-full"
                  style={{ backgroundColor: project.color }}
                >
                  {/* Decoração do card */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 border-2 border-black rounded-full bg-white opacity-0 group-hover:opacity-100 transition-all duration-300" />
                  <div className="absolute -bottom-2 -left-2 w-6 h-6 border-2 border-black rounded-full bg-white" />
                  
                  {/* Ícone e título */}
                  <div className="flex items-center gap-4 mb-4">
                    <motion.div 
                      className="text-4xl"
                      whileHover={{ 
                        scale: 1.2, 
                        rotate: [0, -10, 10, 0] 
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      {project.icon}
                    </motion.div>
                    <h3 className="text-xl md:text-2xl font-black text-black font-[Comic_CAT] group-hover:underline">
                      {project.title}
                    </h3>
                  </div>
                  
                  {/* Descrição */}
                  <p className="text-gray-800 mb-4 text-sm md:text-base leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.slice(0, 4).map((tech) => (
                      <motion.span
                        key={tech}
                        whileHover={{ scale: 1.1 }}
                        className="cartoon-border-2 bg-white px-2 py-1 text-xs font-semibold text-black"
                      >
                        {tech}
                      </motion.span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="cartoon-border-2 bg-gray-200 px-2 py-1 text-xs font-semibold text-black">
                        +{project.tech.length - 4}
                      </span>
                    )}
                  </div>
                  
                  {/* Links */}
                  <div className="flex gap-3">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="cartoon-border-2 cartoon-shadow-2 bg-black text-white px-4 py-2 flex items-center gap-2 font-semibold hover:bg-gray-800 transition-colors text-sm"
                    >
                      <Github size={16} />
                      Código
                    </motion.a>
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="cartoon-border-2 cartoon-shadow-2 text-black px-4 py-2 flex items-center gap-2 font-semibold transition-colors text-sm"
                      style={{ backgroundColor: project.accent }}
                    >
                      <ExternalLink size={16} />
                      Ver Live
                    </motion.a>
                  </div>
                </motion.div>
                {/* Número do projeto logo abaixo do card */}
                <motion.div
                  whileHover={{ 
                    scale: 1.2, 
                    rotate: 360,
                    backgroundColor: project.color
                  }}
                  transition={{ duration: 0.5 }}
                  className={`w-16 h-16 border-4 border-black bg-white flex items-center justify-center font-black text-xl cartoon-shadow-2 font-[Comic_CAT] mt-4`}
                >
                  {String(index + 1).padStart(2, '0')}
                </motion.div>
              </div>
              
              {/* Ponto na timeline */}
              <motion.div 
                className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 border-4 border-black rounded-full bg-white z-20 hidden md:block shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)]"
                whileHover={{ scale: 1.3 }}
                animate={{
                  boxShadow: [
                    "4px_4px_0px_0px_rgba(0,0,0,0.5)",
                    "6px_6px_0px_0px_rgba(0,0,0,0.3)",
                    "4px_4px_0px_0px_rgba(0,0,0,0.5)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <div 
                  className="w-full h-full rounded-full border-2 border-white"
                  style={{ backgroundColor: project.color }}
                />
              </motion.div>
              
              {/* Seta indicadora */}
              <motion.div
                className={`absolute ${
                  index % 2 === 0 
                    ? 'right-[calc(50%-2rem)] md:right-[calc(50%-1rem)]' 
                    : 'left-[calc(50%-2rem)] md:left-[calc(50%-1rem)]'
                } top-1/2 transform -translate-y-1/2 text-2xl hidden md:block`}
                animate={{
                  x: index % 2 === 0 ? [0, -10, 0] : [0, 10, 0],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {index % 2 === 0 ? '👉' : '👈'}
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Call to action mantido */}
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

      {/* Elementos decorativos animados mantidos */}
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