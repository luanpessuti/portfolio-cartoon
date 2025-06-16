'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, Github, Linkedin, MapPin } from 'lucide-react';

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Função para lidar com mudanças nos campos do formulário
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 15]);

 const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  
  const phoneNumber = "5541999356005"; // Substitua pelo seu número com código do país
  const message = `Olá Luan! Me chamo ${formData.name} (${formData.email}). Mensagem: ${formData.message}`;
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  
  window.open(whatsappUrl, '_blank');
  
  // Opcional: Resetar o formulário
  setFormData({ name: '', email: '', message: '' });
};

  return (
    <section ref={sectionRef} className="min-h-screen bg-[#f5f0ff] py-20 relative overflow-hidden" id="contact">
      {/* Textura de fundo */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/notebook.png')] opacity-10" />
      
      {/* Elementos decorativos temáticos */}
      <motion.div
        style={{ y: y1, rotate }}
        className="absolute top-20 left-10 w-32 h-32 border-4 border-black shadow-[10px_10px_0px_0px_rgba(0,0,0,0.7)]"
        animate={{
          backgroundColor: ['#ff6b6b', '#4ecdc4', '#ffe66d', '#ff6b6b'],
          borderRadius: ['20%', '50%', '30%', '20%'],
        }}
        transition={{ duration: 10, repeat: Infinity }}
      >
        <div className="absolute inset-4 border-2 border-white rounded-full opacity-50" />
      </motion.div>

      <motion.div
        style={{ y: y2 }}
        className="absolute top-32 right-20 w-24 h-40 border-4 border-black bg-[#4ecdc4] shadow-[10px_10px_0px_0px_rgba(0,0,0,0.7)]"
        animate={{
          scaleY: [1, 1.2, 0.8, 1],
        }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <div className="absolute top-2 left-2 right-2 h-1 bg-black" />
        <div className="absolute top-6 left-2 right-2 h-1 bg-black" />
      </motion.div>

      <motion.div
        style={{ y: y1 }}
        className="absolute bottom-40 left-32 w-20 h-20 border-4 border-black bg-[#ffe66d] shadow-[8px_8px_0px_0px_rgba(0,0,0,0.7)] rounded-full"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, 20, -20, 0],
        }}
        transition={{ duration: 6, repeat: Infinity }}
      >
        <div className="absolute top-2 left-2 w-2 h-2 bg-black rounded-full" />
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
          <div className="relative cartoon-border-2 cartoon-shadow-2 bg-white p-8 transform rotate-2 inline-block">
            <div className="absolute -top-3 -left-3 w-8 h-8 bg-[#ff6b6b] border-2 border-black rounded-full" />
            <h2 className="text-4xl md:text-6xl font-black text-black font-[Comic_CAT] mb-4">
              Vamos <span className="text-[#4ecdc4]">Conversar!</span>
            </h2>
            <p className="text-xl md:text-2xl font-semibold text-gray-800 font-[Comic_CAT]">
              Adoraria ouvir sobre seu próximo projeto!
            </p>
            <div className="absolute -bottom-3 -right-3 w-6 h-6 bg-[#ffe66d] border-2 border-black rounded-full" />
          </div>
        </motion.div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Formulário */}
         <motion.div
  initial={{ opacity: 0, x: -50 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="relative cartoon-border-2 cartoon-shadow-2 bg-white p-8 transform -rotate-1"
>
  {/* Detalhes decorativos */}
  <div className="absolute -top-3 -right-3 w-8 h-8 border-2 border-black rounded-full bg-[#4ecdc4]" />
  <div className="absolute -bottom-3 -left-3 w-6 h-6 border-2 border-black rounded-full bg-[#ff6b6b]" />
  
  <h3 className="text-3xl font-bold text-black mb-6 font-[Comic_CAT]">
    Mande uma <span className="text-[#ff6b6b]">mensagem</span>
  </h3>

  <form onSubmit={handleSubmit} className="space-y-6">
    <div>
      <label className="block text-lg font-semibold text-black mb-2 font-[Comic_CAT]">
        Seu nome
      </label>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
        className="w-full cartoon-border-2 p-4 text-lg bg-[#f5f0ff] focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#4ecdc4] transition-all font-[Comic_CAT]"
        placeholder="Como você se chama?"
      />
    </div>

    <div>
      <label className="block text-lg font-semibold text-black mb-2 font-[Comic_CAT]">
        Seu email
      </label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
        className="w-full cartoon-border-2 p-4 text-lg bg-[#f5f0ff] focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#4ecdc4] transition-all font-[Comic_CAT]"
        placeholder="seu@email.com"
      />
    </div>

    <div>
      <label className="block text-lg font-semibold text-black mb-2 font-[Comic_CAT]">
        Sua mensagem
      </label>
      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        required
        rows={5}
        className="w-full cartoon-border-2 p-4 text-lg bg-[#f5f0ff] focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#4ecdc4] transition-all resize-none font-[Comic_CAT]"
        placeholder="Conte sobre seu projeto ou apenas diga oi!"
      />
    </div>

    <motion.button
      type="submit"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="w-full cartoon-border-2 cartoon-shadow-2 bg-[#25D366] text-white p-4 text-xl font-bold flex items-center justify-center gap-3 hover:bg-[#128C7E] transition-colors font-[Comic_CAT]"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
      Enviar via WhatsApp
    </motion.button>
  </form>
</motion.div>

          {/* Informações de contato */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Card de localização */}
            <div className="relative cartoon-border-2 cartoon-shadow-2 bg-white p-8 transform rotate-1">
              <div className="absolute -top-3 -right-3 w-8 h-8 border-2 border-black rounded-full bg-[#ffe66d]" />
              <div className="flex items-center gap-4 mb-4">
                <MapPin size={32} className="text-[#ff6b6b]" />
                <h3 className="text-2xl font-bold text-black font-[Comic_CAT]">Onde estou</h3>
              </div>
              <p className="text-lg text-gray-800">
                📍 <span className="font-semibold">Curitiba, Paraná, Brasil</span><br />
                Disponível para trabalho <span className="text-[#4ecdc4] font-semibold">híbrido</span>, <span className="text-[#4ecdc4] font-semibold">remoto</span> e <span className="text-[#4ecdc4] font-semibold">presencial</span> (em Curitiba).
              </p>
            </div>

            {/* Redes sociais */}
            <div className="relative cartoon-border-2 cartoon-shadow-2 bg-white p-8 transform -rotate-1">
              <div className="absolute -top-3 -left-3 w-6 h-6 border-2 border-black rounded-full bg-[#4ecdc4]" />
              <h3 className="text-2xl font-bold text-black mb-6 font-[Comic_CAT]">
                Me encontre também em:
              </h3>

              <div className="space-y-4">
                <motion.a
                  href="mailto:luanpessuti@gmail.com"
                  target="_blank"
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="flex items-center gap-4 cartoon-border-2 bg-[#f5f0ff] p-4 hover:bg-white transition-colors group"
                >
                  <div className="relative">
                    <Mail size={24} className="text-[#ff6b6b]" />
                    <motion.div 
                      className="absolute -top-1 -right-1 w-3 h-3 bg-[#4ecdc4] border border-black rounded-full opacity-0 group-hover:opacity-100"
                      animate={{
                        scale: [1, 1.5, 1],
                      }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                  </div>
                  <span className="text-lg font-semibold text-black font-[Comic_CAT]">
                    luanpessuti@gmail.com
                  </span>
                </motion.a>

                <motion.a
                  href="https://github.com/luanpessuti"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="flex items-center gap-4 cartoon-border-2 bg-[#f5f0ff] p-4 hover:bg-white transition-colors group"
                >
                  <div className="relative">
                    <Github size={24} className="text-black" />
                    <motion.div 
                      className="absolute -top-1 -right-1 w-3 h-3 bg-[#ffe66d] border border-black rounded-full opacity-0 group-hover:opacity-100"
                      animate={{
                        scale: [1, 1.5, 1],
                      }}
                      transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
                    />
                  </div>
                  <span className="text-lg font-semibold text-black font-[Comic_CAT]">
                    /luanpessuti
                  </span>
                </motion.a>

                <motion.a
                  href="https://linkedin.com/in/luanpessuti"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="flex items-center gap-4 cartoon-border-2 bg-[#f5f0ff] p-4 hover:bg-white transition-colors group"
                >
                  <div className="relative">
                    <Linkedin size={24} className="text-[#0077b5]" />
                    <motion.div 
                      className="absolute -top-1 -right-1 w-3 h-3 bg-[#ff6b6b] border border-black rounded-full opacity-0 group-hover:opacity-100"
                      animate={{
                        scale: [1, 1.5, 1],
                      }}
                      transition={{ duration: 1.5, repeat: Infinity, delay: 0.6 }}
                    />
                  </div>
                  <span className="text-lg font-semibold text-black font-[Comic_CAT]">
                    /in/luanpessuti
                  </span>
                </motion.a>
              </div>
            </div>

            {/* Status */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="relative cartoon-border-2 cartoon-shadow-2 bg-white p-6 transform rotate-2"
            >
              <div className="absolute -top-2 -right-2 w-6 h-6 border-2 border-black rounded-full bg-[#ff6b6b]" />
              <div className="flex items-center gap-3 mb-3">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-4 h-4 bg-[#4ecdc4] rounded-full border border-black"
                />
                <h3 className="text-xl font-bold text-black font-[Comic_CAT]">Status atual</h3>
              </div>
              <p className="text-lg font-semibold text-gray-800">
                <span className="text-[#4ecdc4]">Disponível</span> para novos projetos!<br />
                Buscando oportunidades em <span className="text-[#ff6b6b]">front-end</span>.
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Elementos decorativos animados */}
        <motion.svg 
          className="absolute inset-0 w-full h-full pointer-events-none opacity-10"
          viewBox="0 0 1000 1000"
        >
          <motion.path
            d="M50,300 Q200,200 350,300 T650,250 T950,300"
            stroke="#ff6b6b"
            strokeWidth="5"
            fill="none"
            strokeDasharray="10 8"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 5, ease: "easeInOut" }}
          />
          <motion.circle
            cx="150"
            cy="150"
            r="60"
            stroke="#4ecdc4"
            strokeWidth="4"
            fill="none"
            strokeDasharray="15 10"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 3, delay: 1 }}
          />
          <motion.path
            d="M700,500 L750,450 L800,500 L750,550 Z"
            stroke="#ffe66d"
            strokeWidth="4"
            fill="none"
            strokeDasharray="8 6"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 2 }}
          />
        </motion.svg>
      </div>
    </section>
  );
}