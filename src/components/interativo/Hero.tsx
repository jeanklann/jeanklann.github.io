import { motion, type Variants } from 'framer-motion';
import { useParallax } from '../../hooks/useAnimations';
import { ChevronDown } from 'lucide-react';
import { Button } from './ui/button';
import type { Curriculo, Linguas, Palavras } from '../../tipos';

type Props = {
    dados: Curriculo,
    palavras: Palavras,
    language: Linguas
};
const Hero = (props: Props) => {
  const parallaxY = useParallax(0.5);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants:Variants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900">
      {/* Parallax Background */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          transform: `translateY(${parallaxY}px)`,
          backgroundImage: 'url(/src/assets/hero-bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-6 max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Profile Image */}
        <motion.div
          variants={itemVariants}
          className="mb-8"
        >
          <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1">
            <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center">
              <span className="text-4xl font-bold text-white">{props.dados.nome.split('').filter(x => x != ' ' && x == x.toUpperCase())}</span>
            </div>
          </div>
        </motion.div>

        {/* Name and Title */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold text-white mb-4"
        >
          {props.dados.nome}
        </motion.h1>
        
        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-blue-200 mb-8"
        >
          {props.dados.resumo[props.language]}
        </motion.p>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-lg text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          {props.dados.resumoMenor[props.language]}
        </motion.p>

        {/* Social Links */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center space-x-6 mb-12"
        >
          {props.dados.contatos.map((contato, index) => (
            <Button
              key={index}
              variant="outline"
              size="lg"
              className="bg-white/10 border-white/20 text-white hover:bg-white/20"
              onClick={() => window.open(contato.link, '_blank')}
            >
              <i className={contato.icone + " w-5 h-5 mr-2"} />
              {contato.nome[props.language]}
            </Button>
          ))}
        </motion.div>
        {/* Scroll Indicator */}
        <motion.div
          variants={itemVariants}
          className="absolute left-1/2 transform -translate-x-1/2 cursor-pointer"
          onClick={scrollToAbout}
        >
          <div className="flex flex-col items-center text-white/70 hover:text-white transition-colors">
            <span className="text-sm mb-2">Role para baixo</span>
            <ChevronDown className="w-6 h-6 animate-bounce" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;

