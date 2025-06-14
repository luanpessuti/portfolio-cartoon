'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="min-h-screen bg-[#f9f5ff] relative overflow-hidden flex items-center justify-center px-4">
      {/* Fundo com textura cartoon */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cartographer.png')] opacity-10" />

      {/* Elementos cartoon temáticos (código, design, etc) */}
      <motion.div
        className="absolute top-20 left-10 w-16 h-16 bg-[#ff6b6b] border-4 border-black rounded-full shadow-[5px_5px_0px_0px_rgba(0,0,0,0.7)]"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 10, -10, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="absolute inset-1 border-2 border-white rounded-full opacity-70" />
      </motion.div>

      <motion.div
        className="absolute top-32 right-20 w-14 h-14 bg-[#4ecdc4] border-4 border-black shadow-[5px_5px_0px_0px_rgba(0,0,0,0.7)]"
        style={{ borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%' }}
        animate={{
          y: [0, 15, 0],
          rotate: [0, -15, 15, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5
        }}
      >
        <div className="absolute top-1 left-1 w-2 h-2 bg-white rounded-full" />
      </motion.div>

      <motion.div
        className="absolute bottom-20 left-20 w-10 h-24 bg-[#ffe66d] border-4 border-black rounded-full shadow-[5px_5px_0px_0px_rgba(0,0,0,0.7)]"
        animate={{
          x: [0, 10, 0],
          scaleY: [1, 1.1, 1],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      >
        <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-6 h-1 bg-black rounded-full" />
      </motion.div>

      {/* Novo elemento - ícone de código */}
      <motion.div
        className="absolute bottom-32 right-32 w-16 h-16 bg-white border-4 border-black shadow-[5px_5px_0px_0px_rgba(0,0,0,0.7)]"
        animate={{
          scale: [1, 1.05, 1],
          rotate: [0, 5, -5, 0]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.7
        }}
      >
        <div className="grid grid-cols-2 gap-1 p-2">
          <div className="w-full h-2 bg-[#ff6b6b] rounded-sm" />
          <div className="w-full h-2 bg-[#ff6b6b] rounded-sm" />
          <div className="w-3/4 h-2 bg-[#4ecdc4] rounded-sm" />
          <div className="w-full h-2 bg-[#4ecdc4] rounded-sm" />
          <div className="w-1/2 h-2 bg-[#ffe66d] rounded-sm" />
          <div className="w-full h-2 bg-[#ffe66d] rounded-sm" />
        </div>
      </motion.div>

      {/* Conteúdo principal */}
      <div className="text-center z-10 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative cartoon-border-2 cartoon-shadow-2 bg-white p-8 mb-8 transform -rotate-1"
        >
          {/* Detalhe de canto */}
          <div className="absolute -top-3 -right-3 w-6 h-6 bg-[#ff6b6b] border-2 border-black rounded-full" />

          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-black font-[Comic_CAT]">
            Olá! Eu sou o
          </h1>
          <motion.h2
            className="text-5xl md:text-7xl font-black text-black font-[Comic_CAT] relative flex flex-col items-center"
            animate={{
              scale: [1, 1.02, 1]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            {/* Container do nome + imagem */}
            <span className="flex flex-row items-center justify-center gap-2 md:gap-4">
              <span className="block text-center">Luan Pessuti</span>
              <Image
                src="/me.png"
                alt="Descrição da imagem"
                width={1200}
                height={800}
                priority={true}
                quality={75}
                className="w-16 h-16 rounded-full border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,0.7)] align-middle"
                id="me"
              />
            </span>

            {/* Barra decorativa sempre abaixo do nome+imagem */}
            <motion.span
              className="block w-full max-w-[300px] h-2 bg-[#4ecdc4] z-[-1] opacity-80 mt-2"
              animate={{
                scaleX: [0.8, 1.2, 0.8]
              }}
              transition={{
                duration: 3,
                repeat: Infinity
              }}
            />
          </motion.h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative cartoon-border-2 cartoon-shadow-2 bg-white p-6 transform rotate-1"
        >
          {/* Detalhe de canto */}
          <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-[#ffe66d] border-2 border-black rounded-full" />

          <p className="text-2xl md:text-4xl font-semibold text-black font-[Comic_CAT]">
            Front-end Developer <span className="text-[#ff6b6b]">criativo</span> e <span className="text-[#4ecdc4]">apaixonado</span>!
          </p>
        </motion.div>

        {/* Botões de navegação animados */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-12 flex flex-wrap justify-center gap-4"
        >
          {/* Botão Sobre Mim */}
          <motion.button
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="relative bg-[#4ecdc4] text-white font-bold py-4 px-8 border-4 border-black shadow-[5px_5px_0px_0px_rgba(0,0,0,0.7)] hover:shadow-[7px_7px_0px_0px_rgba(0,0,0,0.7)] transition-all"
          >
            <span className="relative z-10 font-[Comic_CAT] text-xl">Jornada</span>
            <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-[#ffe66d] border-2 border-black rounded-full" />
          </motion.button>

          {/* Botão Projetos */}
          <motion.button
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="relative bg-[#ff6b6b] text-white font-bold py-4 px-8 border-4 border-black shadow-[5px_5px_0px_0px_rgba(0,0,0,0.7)] hover:shadow-[7px_7px_0px_0px_rgba(0,0,0,0.7)] transition-all"
          >
            <span className="relative z-10 font-[Comic_CAT] text-xl">Projetos</span>
            <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-[#ffe66d] border-2 border-black rounded-full" />
          </motion.button>

          {/* Botão Contato */}
          <motion.button
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="relative bg-[#a463f8] text-white font-bold py-4 px-8 border-4 border-black shadow-[5px_5px_0px_0px_rgba(0,0,0,0.7)] hover:shadow-[7px_7px_0px_0px_rgba(0,0,0,0.7)] transition-all"
          >
            <span className="relative z-10 font-[Comic_CAT] text-xl">Contato</span>
            <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-[#ffe66d] border-2 border-black rounded-full" />
          </motion.button>
        </motion.div>

        {/* Seta animada para scroll */}
        <motion.div
          className="absolute bottom-10 md:bottom-0 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <div className="w-10 h-10 flex items-center justify-center">
            <div className="w-8 h-8 border-l-4 border-b-4 border-black transform -rotate-45" />
          </div>
          <div className="text-sm font-bold mt-1 text-black font-[Comic_CAT]">scroll</div>
        </motion.div>
      </div>

      {/* Linhas de rabisco no fundo */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-10"
        viewBox="0 0 1000 1000"
      >
        <motion.path
          d="M50,300 Q200,100 400,300 T800,200"
          stroke="#ff6b6b"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
          strokeDasharray="10 8"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, ease: "easeInOut" }}
        />
        <motion.path
          d="M100,700 Q300,500 600,700 T900,600"
          stroke="#4ecdc4"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
          strokeDasharray="15 10"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, ease: "easeInOut", delay: 0.5 }}
        />
      </svg>
    </section>
  );
}