'use client';

import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const [currentPage, setCurrentPage] = useState(0);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);

  const pages = [
    {
      id: 'inicio',
      title: 'O Início',
      subtitle: '2020 - Primeiros Passos',
      content: 'Em 2020, ingressei no curso de Engenharia de Software e descobri minha paixão por desenvolvimento web. Comecei com HTML, CSS e JavaScript, criando sites simples e aprendendo os fundamentos.',
      skills: ['HTML', 'CSS', 'JavaScript'],
      skillsColor: '#ff6b6b',
      certificate: {
        title: 'Certificado de Programação Inicial',
        image: '/inicial.jpg',
        link: '/inicial.jpg'
      },
      decorColor: '#4ecdc4'
    },
    {
      id: 'evolucao',
      title: 'A Evolução',
      subtitle: '2021-2022 - Frameworks Modernos',
      content: 'Mergulhei em React, TypeScript e Next.js. Cada projeto trouxe novos desafios: estados complexos, integração com APIs, performance. Adoro transformar problemas em soluções elegantes!',
      skills: ['React', 'TypeScript', 'Next.js'],
      skillsColor: '#4ecdc4',
      certificate: {
        title: 'Certificado Lógica Avançada',
        image: '/avancado.jpg',
        link: '/avancado.jpg'
      },
      decorColor: '#a463f8'
    },
    {
      id: 'diferencial',
      title: 'O Diferencial',
      subtitle: '2023-2024 - Criador de Experiências',
      content: 'Não sou apenas um dev, sou um criador de experiências. Combino código com design para construir interfaces que encantam. Acredito que tecnologia deve ser tão bela quanto funcional!',
      skills: ['UI/UX', 'Animação', 'Criatividade'],
      skillsColor: '#ffe66d',
      certificate: {
        title: 'Certificado Web Full-Stack',
        image: '/web.jpg',
        link: '/web.jpg'
      },
      decorColor: '#3178c6'
    },
    {
      id: 'ferramentas',
      title: 'Caixa de Ferramentas',
      subtitle: 'Stack Atual',
      content: 'Aqui estão as tecnologias que domino e uso no dia a dia para criar aplicações incríveis. Cada ferramenta tem seu propósito especial no meu arsenal de desenvolvimento!',
      allSkills: [
        { name: 'React', color: '#4ecdc4' },
        { name: 'TypeScript', color: '#3178c6' },
        { name: 'Next.js', color: '#000000' },
        { name: 'Tailwind', color: '#38bdf8' },
        { name: 'Node.js', color: '#68a063' },
        { name: 'Git', color: '#f14e32' },
        { name: 'JavaScript', color: '#ffe66d' },
        { name: 'PostgreSQL', color: '#a259ff' }
      ],
      decorColor: '#ff6b6b'
    },
    {
      id: 'curriculo',
      title: 'Meu Currículo',
      subtitle: 'Experiências Profissionais',
      content: 'Aqui está meu currículo completo com todas as informações detalhadas sobre minha formação, experiências e projetos. Perfeito para quem quer conhecer mais sobre meu perfil profissional!',
      skills: ['Formação', 'Experiência', 'Projetos'],
      skillsColor: '#68a063',
      certificate: {
        title: 'Currículo',
        image: '/cv-preview.png', // Você pode criar uma imagem preview do seu CV
        link: '/curriculo.pdf', // Seu arquivo PDF
        isPdf: true
      },
      decorColor: '#68a063'
    }
  ];

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % pages.length);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + pages.length) % pages.length);
  };

  const goToPage = (pageIndex: number) => {
    setCurrentPage(pageIndex);
  };

  return (
    <section ref={sectionRef} className="min-h-screen bg-[#f5f0ff] py-20 relative overflow-hidden" id="about">
      {/* Textura de fundo */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/notebook.png')] opacity-10" />

      {/* Elementos decorativos flutuantes */}
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
        className="absolute bottom-32 left-10 w-20 h-40 border-4 border-black bg-[#ffe66d] shadow-[8px_8px_0px_0px_rgba(0,0,0,0.7)]"
        animate={{ skew: ['0deg', '5deg', '-5deg', '0deg'] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <div className="absolute top-2 left-2 right-2 h-2 bg-black" />
        <div className="absolute top-6 left-2 right-2 h-2 bg-black" />
      </motion.div>

      {/* Hexágono código */}
      <motion.div
        className="absolute bottom-96 right-20 w-32 h-32 flex items-center justify-center"
        animate={{
          rotate: [0, 10, -10, 0],
          scale: [1, 1.05, 1]
        }}
        transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <polygon
            points="50,10 90,30 90,70 50,90 10,70 10,30"
            fill="#3178c6"
            stroke="#222"
            strokeWidth="6"
            style={{ filter: "drop-shadow(8px 8px 0px rgba(0,0,0,0.7))" }}
          />
          <text
            x="50" y="58" textAnchor="middle"
            fontFamily="Comic Sans MS, Comic_CAT, sans-serif"
            fontWeight="bold" fontSize="28" fill="#ff8e8e"
            stroke="#222" strokeWidth="1" dominantBaseline="top"
          >
            {"< />"}
          </text>
        </svg>
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          {/* Título principal */}
          <div className="relative cartoon-border-2 cartoon-shadow-2 bg-white p-8 mb-12 transform -rotate-1">
            <div className="absolute -top-3 -left-3 w-8 h-8 bg-[#4ecdc4] border-2 border-black rounded-full" />
            <h2 className="text-4xl md:text-6xl font-black text-black text-center font-[Comic_CAT]">
              Minha <span className="text-[#ff6b6b]">Jornada</span>
            </h2>
            <div className="absolute -bottom-3 -right-3 w-6 h-6 bg-[#ffe66d] border-2 border-black rounded-full" />
          </div>

          {/* Livro Container */}
          <div className="relative max-w-4xl mx-auto">
            {/* Lombada do livro */}
            <div className="absolute -left-4 top-8 bottom-8 w-8 bg-gradient-to-b from-[#8b5a2b] to-[#654321] border-2 border-black rounded-l-lg shadow-lg z-10">
              <div className="absolute top-4 left-1 right-1 h-1 bg-[#d4af37] rounded-full" />
              <div className="absolute bottom-4 left-1 right-1 h-1 bg-[#d4af37] rounded-full" />
            </div>

            {/* Página do livro */}
            <motion.div
              className="relative bg-[#faf9f7] border-4 border-black rounded-r-lg shadow-[12px_12px_0px_0px_rgba(0,0,0,0.3)] min-h-[600px]"
              whileHover={{ rotate: 0.5 }}
              transition={{ duration: 0.3 }}
            >
              {/* Textura de papel */}
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0iIzAwMDAwMCIgZmlsbC1vcGFjaXR5PSIwLjAzIi8+Cjwvc3ZnPgo=')] opacity-20 rounded-r-lg" />
              
              {/* Conteúdo da página atual */}
              <div className="relative z-10 p-8 h-full flex flex-col">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentPage}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.5 }}
                    className="flex-1"
                  >
                    {/* Cabeçalho da página */}
                    <div className="mb-8">
                      <div className="flex items-center justify-between mb-4">
                        <div className={`w-4 h-4 rounded-full border-2 border-black`} 
                             style={{ backgroundColor: pages[currentPage].decorColor }} />
                        <span className="text-sm font-bold text-gray-600 font-[Comic_CAT]">
                          {pages[currentPage].subtitle}
                        </span>
                        <div className="text-sm font-bold text-gray-400">
                          {currentPage + 1} / {pages.length}
                        </div>
                      </div>
                      <h3 className="text-3xl md:text-4xl font-black text-black font-[Comic_CAT] mb-4">
                        {pages[currentPage].title}
                      </h3>
                      <div className="w-16 h-1 bg-black rounded-full" />
                    </div>

                    {/* Conteúdo específico da página */}
                    {pages[currentPage].id === 'ferramentas' ? (
                      <>
                        <p className="text-lg text-gray-800 leading-relaxed mb-8">
                          {pages[currentPage].content}
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                          {pages[currentPage].allSkills && pages[currentPage].allSkills.map((skill, index) => (
                            <motion.div
                              key={skill.name}
                              initial={{ opacity: 0, scale: 0 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.4, delay: index * 0.1 }}
                              whileHover={{ scale: 1.05, y: -2 }}
                              className="relative"
                            >
                              <div
                                className="cartoon-border-2 px-4 py-3 text-center text-white font-bold rounded cursor-pointer"
                                style={{ backgroundColor: skill.color }}
                              >
                                {skill.name}
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="grid md:grid-cols-2 gap-8 mb-8">
                          {/* Texto */}
                          <div>
                            <p className="text-lg text-gray-800 leading-relaxed mb-6">
                              {pages[currentPage].content}
                            </p>
                            {pages[currentPage].skills && (
                              <div className="flex flex-wrap gap-2">
                                {pages[currentPage].skills.map((skill, index) => (
                                  <motion.span
                                    key={skill}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="px-3 py-1 text-sm font-bold text-white border-2 border-black rounded"
                                    style={{ backgroundColor: pages[currentPage].skillsColor }}
                                  >
                                    {skill}
                                  </motion.span>
                                ))}
                              </div>
                            )}
                          </div>

                          {/* Certificado */}
                          {pages[currentPage].certificate && (
                            <motion.div
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.5 }}
                              className="cartoon-border-2 cartoon-shadow-2 bg-white p-4 transform hover:scale-105 transition-transform"
                            >
                              <h4 className="text-lg font-bold mb-3 text-center font-[Comic_CAT]">
                                {pages[currentPage].certificate.title}
                              </h4>
                              <Image
                                src={pages[currentPage].certificate.image}
                                alt={pages[currentPage].certificate.title}
                                width={300}
                                height={200}
                                className="w-full h-auto border-2 border-black rounded"
                                quality={80}
                              />
                              <a
                                href={pages[currentPage].certificate.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block text-center mt-3 text-[#4ecdc4] font-bold font-[Comic_CAT] hover:underline"
                              >
                                {pages[currentPage].certificate.isPdf ? 'Baixar/Visualizar PDF' : 'Ver credencial'}
                              </a>
                            </motion.div>
                          )}
                        </div>
                      </>
                    )}
                  </motion.div>
                </AnimatePresence>

                {/* Navegação inferior */}
                <div className="flex items-center justify-between mt-8 pt-6 border-t-2 border-dashed border-gray-300">
                  {/* Botão anterior */}
                  <motion.button
                    onClick={prevPage}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2 bg-[#4ecdc4] text-white font-bold border-2 border-black rounded hover:bg-[#3db5b0] transition-colors"
                  >
                    <ChevronLeft size={20} />
                    Anterior
                  </motion.button>

                  {/* Indicadores de página */}
                  <div className="flex gap-2">
                    {pages.map((_, index) => (
                      <motion.button
                        key={index}
                        onClick={() => goToPage(index)}
                        whileHover={{ scale: 1.2 }}
                        className={`w-3 h-3 rounded-full border-2 border-black transition-colors ${
                          index === currentPage ? 'bg-[#ff6b6b]' : 'bg-white'
                        }`}
                      />
                    ))}
                  </div>

                  {/* Botão próximo */}
                  <motion.button
                    onClick={nextPage}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2 bg-[#ff6b6b] text-white font-bold border-2 border-black rounded hover:bg-[#e55555] transition-colors"
                  >
                    Próximo
                    <ChevronRight size={20} />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Linhas decorativas animadas */}
      <motion.svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-10"
        viewBox="0 0 1000 1000"
      >
        <motion.path
          d="M100,200 Q300,150 500,200 T900,180"
          stroke="#ff6b6b"
          strokeWidth="4"
          fill="none"
          strokeDasharray="10 8"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ duration: 2 }}
        />
        <motion.path
          d="M900,800 Q700,850 500,800 T100,820"
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