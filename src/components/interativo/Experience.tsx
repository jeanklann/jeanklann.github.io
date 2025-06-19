import { motion, type Variants } from 'framer-motion';
import { useIntersectionObserver } from '../../hooks/useAnimations';
import { Calendar } from 'lucide-react';
import type { Curriculo, Linguas, Palavras } from '../../tipos';
import { formatPeriodo } from '../../Functions';

type Props = {
    dados: Curriculo,
    palavras: Palavras,
    language: Linguas
};

const Experience = (props: Props) => {
  const [ref, isIntersecting] = useIntersectionObserver();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants:Variants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="experience" className="py-20 bg-white dark:bg-slate-800">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isIntersecting ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              Experiência Profissional
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6"></div>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Minha jornada profissional construindo soluções inovadoras e liderando equipes de desenvolvimento.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-600"></div>

            {/* Experience Items */}
            {props.dados.experienciaProfissional.map((exp) => (
              <>
                {
                exp.cargos.map((cargo, index) => (
                  <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative flex items-start mb-12 last:mb-0"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full border-4 border-white dark:border-slate-800 z-10"></div>

                  {/* Content Card */}
                  <div className="ml-16 w-full">
                    <motion.div
                      className="bg-slate-50 dark:bg-slate-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                      whileHover={{ y: -5 }}
                      transition={{ duration: 0.2 }}
                    >
                      {/* Header */}
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                            {cargo.nome[props.language]}
                          </h3>
                          <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-2">
                            {exp.nomeEmpresa}
                          </h4>
                        </div>
                        <div className="flex items-center text-slate-500 dark:text-slate-400 text-sm">
                          <Calendar className="w-4 h-4 mr-1" />
                          {formatPeriodo(props.language, cargo.periodo)}
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                        {cargo.descricao[props.language]}
                      </p>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 grid grid-cols-5">
                        {cargo.habilidades.map((tech, techIndex) => (
                          
                          <>
                            <div
                              key={techIndex}
                              className="px-3 py-1 text-blue-800 dark:text-blue-200 text-xs font-medium"
                            >
                              {tech.nome[props.language]}
                            </div>
                            
                            <div className="px-3 py-1 text-blue-800 dark:text-blue-200 rounded-full text-xs font-medium col-span-4">
                              {tech.valores.map((valor, valorIndex) => (
                                  <span className="font-semibold">{valorIndex > 0 ? "|" : null} {valor} </span>
                              ))}
                              </div>
                          </>
                          
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
                ))}
              </>
              
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-12"
          >
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">
                Interessado em trabalhar comigo?
              </h3>
              <p className="text-blue-100 mb-6">
                Estou sempre aberto a novos desafios e oportunidades de colaboração.
              </p>
              <motion.button
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Entre em Contato
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;

