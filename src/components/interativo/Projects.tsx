{/* }
import { useState } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { useIntersectionObserver } from '../../hooks/useAnimations';
import { projectsData } from '../../data/portfolioData';
import { ExternalLink, Github, Filter } from 'lucide-react';
import { Button } from './ui/button';
import type { Curriculo, Linguas, Palavras } from '../../tipos';

type Props = {
    dados: Curriculo,
    palavras: Palavras,
    language: Linguas
};

const Projects = (props: Props) => {
  const [ref, isIntersecting] = useIntersectionObserver();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = [
    { id: 'all', label: 'Todos' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'mobile', label: 'Mobile' },
    { id: 'data', label: 'Data' }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projectsData 
    : projectsData.filter(project => project.category === selectedCategory);

  const containerVariants:Variants = {
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

  const cardVariants:Variants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    },
    exit: {
      scale: 0.8,
      opacity: 0,
      transition: { duration: 0.3 }
    }
  };

  return (
    <section id="projects" className="py-20 bg-white dark:bg-slate-800">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isIntersecting ? "visible" : "hidden"}
          className="max-w-7xl mx-auto"
        >
          {// Section Header
          }
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              Meus Projetos
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6"></div>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Uma seleção dos meus trabalhos mais recentes, demonstrando diferentes tecnologias e abordagens.
            </p>
          </motion.div>

          {// Filter Buttons 
          }
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className={`${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                    : 'border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300'
                } hover:scale-105 transition-transform duration-200`}
              >
                <Filter className="w-4 h-4 mr-2" />
                {category.label}
              </Button>
            ))}
          </motion.div>

          {// Projects Grid
    }
          <motion.div 
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="wait">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  layout
                  className="group bg-slate-50 dark:bg-slate-700 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
                >
                  {// Project Image 
                  }
                  <div className="relative h-48 bg-gradient-to-br from-blue-500 to-purple-600 overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-16 h-16 object-contain opacity-80"
                      />
                    </div>
                    
                    {// Overlay 
                    }
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                      <Button
                        size="sm"
                        variant="secondary"
                        className="bg-white/90 text-slate-900 hover:bg-white"
                        onClick={() => setSelectedProject(project)}
                      >
                        Ver Detalhes
                      </Button>
                      <Button
                        size="sm"
                        variant="secondary"
                        className="bg-white/90 text-slate-900 hover:bg-white"
                      >
                        <ExternalLink className="w-4 h-4 mr-1" />
                        Demo
                      </Button>
                    </div>
                  </div>

                  {// Project Info 
                  }
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300 mb-4 text-sm leading-relaxed">
                      {project.description}
                    </p>

                    {// Technologies 
                    }
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-slate-200 dark:bg-slate-600 text-slate-600 dark:text-slate-300 rounded text-xs">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>

                    {// Action Buttons 
                    }
                    <div className="flex space-x-3">
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex-1 border-slate-300 dark:border-slate-600"
                      >
                        <Github className="w-4 h-4 mr-1" />
                        Código
                      </Button>
                      <Button
                        size="sm"
                        className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white"
                      >
                        <ExternalLink className="w-4 h-4 mr-1" />
                        Demo
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {// Call to Action 
          }
          <motion.div
            variants={itemVariants}
            className="text-center mt-16"
          >
            <div className="bg-gradient-to-r from-blue-500/10 to-purple-600/10 rounded-xl p-8 border border-blue-200 dark:border-blue-800">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                Tem um projeto em mente?
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mb-6 max-w-2xl mx-auto">
                Estou sempre interessado em novos desafios e oportunidades de colaboração. 
                Vamos conversar sobre como posso ajudar a transformar sua ideia em realidade.
              </p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:scale-105 transition-transform duration-200"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Vamos Conversar
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {// Project Modal 
      }
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white dark:bg-slate-800 rounded-xl p-6 max-w-2xl w-full max-h-[80vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                {selectedProject.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mb-6">
                {selectedProject.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex space-x-4">
                <Button variant="outline" className="flex-1">
                  <Github className="w-4 h-4 mr-2" />
                  Ver Código
                </Button>
                <Button className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Ver Demo
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;

{/* */}