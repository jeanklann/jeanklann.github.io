import { useState } from 'react';
import { motion, type Variants } from 'framer-motion';
import { useIntersectionObserver } from '../../hooks/useAnimations';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import type { Curriculo, Linguas, Palavras } from '../../tipos';

type Props = {
    dados: Curriculo,
    palavras: Palavras,
    language: Linguas
};

const Contact = (props: Props) => {
  const [ref, isIntersecting] = useIntersectionObserver();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e:any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    // Aqui você implementaria o envio do formulário
    console.log('Form submitted:', formData);
    alert('Mensagem enviada com sucesso! Entrarei em contato em breve.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

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

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "joao.silva@email.com",
      link: "mailto:joao.silva@email.com"
    },
    {
      icon: Phone,
      title: "Telefone",
      value: "+55 (11) 99999-9999",
      link: "tel:+5511999999999"
    },
    {
      icon: MapPin,
      title: "Localização",
      value: "São Paulo, Brasil",
      link: "#"
    }
  ];


  return (
    <section id="contact" className="py-20 bg-slate-50 dark:bg-slate-900">
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
              Entre em Contato
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6"></div>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Estou sempre aberto a novas oportunidades e projetos interessantes. 
              Vamos conversar sobre como posso ajudar você!
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                  Informações de Contato
                </h3>
                <p className="text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
                  Prefere uma conversa mais direta? Entre em contato através dos canais abaixo. 
                  Respondo todas as mensagens em até 24 horas.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.link}
                    className="flex items-center p-4 bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 group"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-200">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white">
                        {info.title}
                      </h4>
                      <p className="text-slate-600 dark:text-slate-300">
                        {info.value}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
                  Redes Sociais
                </h4>
                <div className="flex space-x-4">
                <div className="mt-4 flex space-x-4">
                  {props.dados.contatos.filter(x => x.nome.ptBr != "Endereço" && x.nome.ptBr != "Telefone" && x.nome.ptBr != "E-mail").map((contato, index) => (
                    <motion.a
                      key={index}
                      href={contato.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 bg-white dark:bg-slate-800 rounded-lg flex items-center justify-center shadow-lg text-slate-600 dark:text-slate-400 ${contato.icone === 'github' ? 'hover:text-gray-900 dark:hover:text-white' : contato.icone === 'linkedin' ? 'hover:text-blue-600' : 'hover:text-blue-400'} transition-colors duration-200`}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      style={{fontSize: '1.5rem', textDecoration: 'none'}}
                    >
                      <i className={`${contato.icone} w-6 h-6`} />
                    </motion.a>
                  ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <div className="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                  Envie uma Mensagem
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                        Nome
                      </label>
                      <Input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Seu nome completo"
                        required
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                        Email
                      </label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="seu@email.com"
                        required
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Assunto
                    </label>
                    <Input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Assunto da mensagem"
                      required
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Mensagem
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Conte-me sobre seu projeto ou como posso ajudá-lo..."
                      rows={5}
                      required
                      className="w-full resize-none"
                    />
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 transition-all duration-200"
                    >
                      <Send className="w-5 h-5 mr-2" />
                      Enviar Mensagem
                    </Button>
                  </motion.div>
                </form>
              </div>
            </motion.div>
          </div>

          {/* Footer */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-16 pt-8 border-t border-slate-200 dark:border-slate-700"
          >
            <p className="text-slate-600 dark:text-slate-400">
              © {new Date().getFullYear()} Jean Carlos Klann. Desenvolvido com ❤️ usando React e Tailwind CSS.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

