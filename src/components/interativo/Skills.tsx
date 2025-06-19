import { motion, type Variants } from 'framer-motion';
import { useIntersectionObserver } from '../../hooks/useAnimations';
import type { Curriculo, Linguas, Palavras } from '../../tipos';

type Props = {
    dados: Curriculo,
    palavras: Palavras,
    language: Linguas
};

const Skills = (props: Props) => {
  const [ref, isIntersecting] = useIntersectionObserver();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants:Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const progressVariants:Variants = {
    hidden: { width: 0 },
    visible: (level) => ({
      width: `${level}%`,
      transition: { duration: 1.5, ease: "easeOut", delay: 0.5 }
    })
  };

  return (
    <section id="skills" className="py-20 bg-slate-50 dark:bg-slate-900">
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
              Habilidades Técnicas
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6"></div>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Tecnologias e ferramentas que domino para criar soluções completas e eficientes.
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {props.dados.habilidadesTecnicas.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                variants={itemVariants}
                className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                {/* Category Header */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                    {category.nome[props.language]}
                  </h3>
                  <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {category.habilidades.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      {/* Skill Name and Level */}
                      <div className="flex justify-between items-center">
                        <span className="text-slate-700 dark:text-slate-300 font-medium">
                          {skill.nome[props.language]}
                        </span>
                        <span className="text-slate-500 dark:text-slate-400 text-sm">
                          {skill.percentual}%
                        </span>
                      </div>

                      {/* Progress Bar */}
                      <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2 overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
                          variants={progressVariants}
                          custom={skill.percentual}
                          initial="hidden"
                          animate={isIntersecting ? "visible" : "hidden"}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Info */}
          <motion.div
            variants={itemVariants}
            className="mt-16 text-center"
          >
            <div className="bg-gradient-to-r from-blue-500/10 to-purple-600/10 rounded-xl p-8 border border-blue-200 dark:border-blue-800">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                Sempre Aprendendo
              </h3>
              <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-6">
                A tecnologia evolui constantemente, e eu me mantenho atualizado com as 
                últimas tendências e melhores práticas do desenvolvimento web.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {['GraphQL', 'Next.js', 'Kubernetes', 'Machine Learning', 'Web3'].map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
                  >
                    {tech} 📚
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

