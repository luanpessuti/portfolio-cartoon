'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Efeitos de parallax mais pronunciados
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <section ref={sectionRef} className="min-h-screen bg-[#f5f0ff] py-20 relative overflow-hidden" id="about">
      {/* Textura de fundo cartoon */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/notebook.png')] opacity-10" />

      {/* Elementos decorativos temáticos */}
      <motion.div
        style={{ y: y1 }}
        className="absolute top-20 right-10 w-24 h-24 border-4 border-black bg-[#ff6b6b] shadow-[8px_8px_0px_0px_rgba(0,0,0,0.7)]"
        animate={{
          borderRadius: ['20%', '50%', '20%'],
          rotate: [0, 180, 360]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute inset-2 border-2 border-white rounded-full opacity-50" />
      </motion.div>

      <motion.div
        className="absolute bottom-120 left-10 w-20 h-40 border-4 border-black bg-[#ffe66d] shadow-[8px_8px_0px_0px_rgba(0,0,0,0.7)]"
        animate={{
          skew: ['0deg', '5deg', '-5deg', '0deg'],
        }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <div className="absolute top-2 left-2 right-2 h-2 bg-black" />
        <div className="absolute top-6 left-2 right-2 h-2 bg-black" />
      </motion.div>

      {/* Novo elemento - Laptop cartoon */}
      <motion.div
        className="absolute bottom-400 right-20 w-32 h-32 flex items-center justify-center"
        animate={{
          rotate: [0, 10, -10, 0],
          scale: [1, 1.05, 1]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          delay: 0.5
        }}
      >
        {/* Hexágono cartoon */}
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full"
        >
          <polygon
            points="50,10 90,30 90,70 50,90 10,70 10,30"
            fill="#3178c6"
            stroke="#222"
            strokeWidth="6"
            style={{ filter: "drop-shadow(8px 8px 0px rgba(0,0,0,0.7))" }}
          />
          <text
            x="50"
            y="58"
            textAnchor="middle"
            fontFamily="Comic Sans MS, Comic_CAT, sans-serif"
            fontWeight="bold"
            fontSize="28"
            fill="#ff8e8e"
            stroke="#222"
            strokeWidth="1"
            dominantBaseline="top"
          >
            {"< />"}
          </text>
        </svg>
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-5xl mx-auto"
        >
          {/* Título com detalhes */}
          <div className="relative cartoon-border-2 cartoon-shadow-2 bg-white p-8 mb-16 transform -rotate-1">
            <div className="absolute -top-3 -left-3 w-8 h-8 bg-[#4ecdc4] border-2 border-black rounded-full" />
            <h2 className="text-4xl md:text-6xl font-black text-black text-center font-[Comic_CAT]">
              Minha <span className="text-[#ff6b6b]">Jornada</span>
            </h2>
            <div className="absolute -bottom-3 -right-3 w-6 h-6 bg-[#ffe66d] border-2 border-black rounded-full" />
          </div>

          <div className="relative">
            {/* Linha da timeline */}
            <div className="absolute left-8 md:left-1/2 top-0 h-full w-1 bg-black transform -translate-x-1/2" />

            {/* Items da timeline */}
            <div className="space-y-16 pl-10 md:pl-0">

              {/* Experiência 1 */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="relative md:w-1/2 md:pr-16"
              >
                <div className="absolute left-0 md:left-full top-6 w-8 h-8 bg-[#4ecdc4] border-4 border-black rounded-full transform -translate-x-1/2" />
                <div className="cartoon-border-2 cartoon-shadow-2 bg-white p-8 transform hover:-rotate-1 transition-transform">
                  <h3 className="text-2xl font-bold mb-4 text-black font-[Comic_CAT]">O Início</h3>
                  <p className="text-lg text-gray-800 leading-relaxed">
                    Em 2020, ingressei no curso de Engenharia de Software e descobri minha paixão por desenvolvimento web. Comecei com HTML, CSS e JavaScript, criando sites simples e aprendendo os fundamentos.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="bg-[#ff6b6b] text-white px-3 py-1 text-sm font-bold border-2 border-black">HTML</span>
                    <span className="bg-[#ff6b6b] text-white px-3 py-1 text-sm font-bold border-2 border-black">CSS</span>
                    <span className="bg-[#ff6b6b] text-white px-3 py-1 text-sm font-bold border-2 border-black">JavaScript</span>
                  </div>
                </div>
              </motion.div>

              {/* Certificado 1 */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative md:w-1/2 md:ml-auto md:pl-16"
              >
                <div className="absolute left-0 top-6 w-8 h-8 bg-[#ff6b6b] border-4 border-black rounded-full transform -translate-x-1/2" />
                <div className="cartoon-border-2 cartoon-shadow-2 bg-white p-4 transform hover:scale-105 transition-transform">
                  <h4 className="text-lg font-bold mb-2 text-center font-[Comic_CAT]">Certificado de Programação Inicial</h4>
                  <Image
                    src="/inicial.jpg"
                    alt="Certificado HTML e CSS"
                    width={400}
                    height={300}
                    className="w-full h-auto border-2 border-black"
                    quality={80}
                    priority={false}
                  />
                  <a
                    href="/inicial.jpg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center mt-2 text-[#4ecdc4] font-bold font-[Comic_CAT] hover:underline"
                  >
                    Ver credencial
                  </a>
                </div>
              </motion.div>

              {/* Experiência 2 */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
                className="relative md:w-1/2 md:pr-16"
              >
                <div className="absolute left-0 md:left-full top-6 w-8 h-8 bg-[#a463f8] border-4 border-black rounded-full transform -translate-x-1/2" />
                <div className="cartoon-border-2 cartoon-shadow-2 bg-white p-8 transform hover:rotate-1 transition-transform">
                  <h3 className="text-2xl font-bold mb-4 text-black font-[Comic_CAT]">A Evolução</h3>
                  <p className="text-lg text-gray-800 leading-relaxed">
                    Mergulhei em React, TypeScript e Next.js. Cada projeto trouxe novos desafios: estados complexos, integração com APIs, performance. Adoro transformar problemas em soluções elegantes!
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="bg-[#4ecdc4] text-white px-3 py-1 text-sm font-bold border-2 border-black">React</span>
                    <span className="bg-[#4ecdc4] text-white px-3 py-1 text-sm font-bold border-2 border-black">TypeScript</span>
                    <span className="bg-[#4ecdc4] text-white px-3 py-1 text-sm font-bold border-2 border-black">Next.js</span>
                  </div>
                </div>
              </motion.div>

              {/* Certificado 2 */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="relative md:w-1/2 md:ml-auto md:pl-16"
              >
                <div className="absolute left-0 top-6 w-8 h-8 bg-[#68a063] border-4 border-black rounded-full transform -translate-x-1/2" />
                <div className="cartoon-border-2 cartoon-shadow-2 bg-white p-4 transform hover:scale-105 transition-transform">
                  <h4 className="text-lg font-bold mb-2 text-center font-[Comic_CAT]">Certificado Lógica Avançada</h4>
                  <Image
                    src="/avancado.jpg"
                    alt="Certificado HTML e CSS"
                    width={400}
                    height={300}
                    className="w-full h-auto border-2 border-black"
                    quality={80}
                    priority={false}
                  />
                  <a
                    href="/avancado.jpg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center mt-2 text-[#4ecdc4] font-bold font-[Comic_CAT] hover:underline"
                  >
                    Ver credencial
                  </a>
                </div>
              </motion.div>

              {/* Item 3 */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
                className="relative md:w-1/2 md:pr-16"
              >
                <div className="absolute left-0 md:left-full top-6 w-8 h-8 bg-[#3178c6] border-4 border-black rounded-full transform -translate-x-1/2" />
                <div className="cartoon-border-2 cartoon-shadow-2 bg-white p-8 transform hover:rotate-1 transition-transform">
                  <h3 className="text-2xl font-bold mb-4 text-black font-[Comic_CAT]">O Diferencial</h3>
                  <p className="text-lg text-gray-800 leading-relaxed">
                    Não sou apenas um dev, sou um criador de experiências. Combino código com design para construir interfaces que encantam. Acredito que tecnologia deve ser tão bela quanto funcional!
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="bg-[#ffe66d] text-black px-3 py-1 text-sm font-bold border-2 border-black">UI/UX</span>
                    <span className="bg-[#ffe66d] text-black px-3 py-1 text-sm font-bold border-2 border-black">Animação</span>
                    <span className="bg-[#ffe66d] text-black px-3 py-1 text-sm font-bold border-2 border-black">Criatividade</span>
                  </div>
                </div>
              </motion.div>

              {/* Certificado 3 */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="relative md:w-1/2 md:ml-auto md:pl-16"
              >
                <div className="absolute left-0 top-6 w-8 h-8 bg-[#ffe66d] border-4 border-black rounded-full transform -translate-x-1/2" />
                <div className="cartoon-border-2 cartoon-shadow-2 bg-white p-4 transform hover:scale-105 transition-transform">
                  <h4 className="text-lg font-bold mb-2 text-center font-[Comic_CAT]">Certificado Web Full-Stack</h4>
                 <Image
                    src="/web.jpg"
                    alt="Certificado HTML e CSS"
                    width={400}
                    height={300}
                    className="w-full h-auto border-2 border-black"
                    quality={80}
                    priority={false}
                  />
                  <a
                    href="/web.jpg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center mt-2 text-[#4ecdc4] font-bold font-[Comic_CAT] hover:underline"
                  >
                    Ver credencial
                  </a>
                </div>
              </motion.div>
            </div>
          </div>


          {/* Skills com animação */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="mt-24"
          >
            <div className="relative cartoon-border-2 cartoon-shadow-2 bg-white p-8 transform rotate-1">
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#ff6b6b] border-2 border-black rounded-full" />
              <h3 className="text-3xl font-bold mb-8 text-black text-center font-[Comic_CAT]">
                Minha <span className="text-[#4ecdc4]">Caixa de Ferramentas</span>
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
                {[
                  { name: 'React', color: '#4ecdc4' },
                  { name: 'TypeScript', color: '#3178c6' },
                  { name: 'Next.js', color: '#000000' },
                  { name: 'Tailwind', color: '#38bdf8' },
                  { name: 'Node.js', color: '#68a063' },
                  { name: 'Git', color: '#f14e32' },
                  { name: 'JavaScript', color: '#ffe66d' },
                  { name: 'PostgreSQL', color: '#a259ff' }
                ].map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    className="relative"
                  >
                    <div
                      className="cartoon-border-2 px-6 py-3 text-lg font-semibold text-white cursor-pointer flex items-center"
                      style={{ backgroundColor: skill.color }}
                    >
                      {skill.name}
                      <motion.span
                        className="absolute -bottom-1 -right-1 w-3 h-3 bg-white border-2 border-black rounded-full"
                        whileHover={{ scale: 1.5 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Elementos decorativos animados */}
      <motion.svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-10"
        viewBox="0 0 1000 1000"
      >
        <motion.path
          d="M100,100 Q300,50 500,100 T900,80"
          stroke="#ff6b6b"
          strokeWidth="4"
          fill="none"
          strokeDasharray="10 8"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ duration: 2 }}
        />
        <motion.path
          d="M900,900 Q700,950 500,900 T100,920"
          stroke="#4ecdc4"
          strokeWidth="4"
          fill="none"
          strokeDasharray="15 10"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 0.3 }}
        />
      </motion.svg>
    </section>
  );
}