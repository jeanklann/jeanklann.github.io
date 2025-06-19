import { motion, type Variants } from 'framer-motion';
import { useIntersectionObserver } from '../../hooks/useAnimations';
import { Code, Palette, Database, Smartphone } from 'lucide-react';
import type { Curriculo, Linguas, Palavras } from '../../tipos';

type Props = {
    dados: Curriculo,
    palavras: Palavras,
    language: Linguas
};
const About = (props: Props) => {
  const [ref, isIntersecting] = useIntersectionObserver();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants:Variants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const features = [
    {
      icon: Code,
      title: "Frontend Development",
      description: "Criação de interfaces modernas e responsivas com React, Bootstrap, Tailwind e tecnologias de ponta."
    },
    {
      icon: Database,
      title: "Backend Development",
      description: "Desenvolvimento de APIs robustas e escaláveis com C# e bancos de dados relacionais."
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Aplicações móveis com tecnologias cross-platform com flutter."
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Design de experiências intuitivas e interfaces atrativas focadas no usuário."
    }
  ];

  return (
    <section id="about" className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isIntersecting ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              {props.palavras.sobreMenu[props.language]}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6"></div>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Desenvolvedor apaixonado por tecnologia com mais de 5 anos de experiência 
              criando soluções digitais inovadoras e eficientes.
            </p>
          </motion.div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Text Content */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-6">
                Transformando ideias em realidade digital
              </h3>
              {(props.dados.coverLetterTexto[props.language]??"").split('\n').filter((_,i) => i < 1).map((line, index) => (
                              <p key={index} className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                              {line}
                              </p>
                          ))}
              <div className="flex flex-wrap gap-3">
                {['React', 'Node.js', 'Python', 'TypeScript', 'AWS', 'MongoDB'].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-white dark:bg-slate-800 rounded-xl shadow-lg">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">50+</div>
                <div className="text-slate-600 dark:text-slate-300">Projetos Concluídos</div>
              </div>
              <div className="text-center p-6 bg-white dark:bg-slate-800 rounded-xl shadow-lg">
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">10+</div>
                <div className="text-slate-600 dark:text-slate-300">Anos de Experiência</div>
              </div>
              <div className="text-center p-6 bg-white dark:bg-slate-800 rounded-xl shadow-lg">
                <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">30+</div>
                <div className="text-slate-600 dark:text-slate-300">Clientes Satisfeitos</div>
              </div>
              <div className="text-center p-6 bg-white dark:bg-slate-800 rounded-xl shadow-lg">
                <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">24/7</div>
                <div className="text-slate-600 dark:text-slate-300">Suporte Dedicado</div>
              </div>
            </motion.div>
          </div>

          {/* Features Grid */}
          <motion.div variants={itemVariants} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="p-6 bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                  {feature.title}
                </h4>
                <p className="text-slate-600 dark:text-slate-300 text-sm">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

