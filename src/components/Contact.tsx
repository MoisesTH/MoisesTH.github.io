import React, { useState } from 'react';
import { Mail, Github, Linkedin, Send, Copy, Check, MessageSquare, AlertCircle, Sparkles } from 'lucide-react';
import { personalData } from '../data/personal';

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState<boolean>(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleCopyEmail = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(personalData.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    }
  };

  const handleSubmitMailto = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoSubject = encodeURIComponent(formState.subject || `Contacto desde Portafolio Web - ${formState.name}`);
    const mailtoBody = encodeURIComponent(
      `Nombre: ${formState.name}\nCorreo: ${formState.email}\n\nMensaje:\n${formState.message}`
    );
    window.location.href = `mailto:${personalData.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#0E0E0E] text-neutral-100 border-b border-[#222222]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-neutral-800 gap-4">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-neutral-500 block mb-2">
              11 / INQUIRIES & COLLABORATION
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-light text-white tracking-tight">
              Ponte en <span className="italic font-serif text-neutral-400">contacto</span>
            </h2>
          </div>
          <p className="text-xs uppercase font-mono tracking-[0.2em] text-neutral-500 max-w-xs">
            Proyectos de investigación, consultoría en IA y capacitación técnica
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-6xl mx-auto">
          
          {/* Contact Details Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#141414] p-6 sm:p-8 border border-[#262626] space-y-6">
              
              <h3 className="text-xl font-serif text-white flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-neutral-400" />
                <span>Información Directa</span>
              </h3>

              {/* Email Box */}
              <div className="p-4 bg-neutral-900 border border-neutral-800 space-y-2">
                <p className="text-[10px] font-mono uppercase tracking-widest text-neutral-500">
                  Correo Electrónico
                </p>
                <div className="flex items-center justify-between gap-2">
                  <span className="font-mono text-xs sm:text-sm text-neutral-200 truncate">
                    {personalData.email}
                  </span>
                  <button
                    onClick={handleCopyEmail}
                    id="copy-email-btn"
                    className="p-2 border border-neutral-700 bg-neutral-800 text-neutral-300 hover:text-white hover:border-white transition-all shrink-0"
                    title="Copiar correo"
                  >
                    {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
                {copiedEmail && (
                  <p className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest">
                    ¡Correo copiado al portapapeles!
                  </p>
                )}
              </div>

              {/* Social Channels */}
              <div className="space-y-3 pt-2">
                <p className="text-[10px] font-mono uppercase tracking-widest text-neutral-500">
                  Redes & Repositorios
                </p>

                <a
                  href={personalData.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="contact-github-link"
                  className="flex items-center justify-between p-3.5 bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 hover:border-neutral-600 transition-all text-neutral-200 group"
                >
                  <div className="flex items-center gap-3">
                    <Github className="w-4 h-4 text-neutral-400 group-hover:text-white" />
                    <div>
                      <p className="text-xs font-mono uppercase tracking-wider text-white">GitHub</p>
                      <p className="text-[10px] text-neutral-500 font-mono truncate max-w-[200px]">{personalData.githubUrl}</p>
                    </div>
                  </div>
                  <Send className="w-3.5 h-3.5 text-neutral-500 group-hover:text-white group-hover:translate-x-1 transition-all" />
                </a>

                <a
                  href={personalData.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="contact-linkedin-link"
                  className="flex items-center justify-between p-3.5 bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 hover:border-neutral-600 transition-all text-neutral-200 group"
                >
                  <div className="flex items-center gap-3">
                    <Linkedin className="w-4 h-4 text-neutral-400 group-hover:text-white" />
                    <div>
                      <p className="text-xs font-mono uppercase tracking-wider text-white">LinkedIn</p>
                      <p className="text-[10px] text-neutral-500 font-mono truncate max-w-[200px]">{personalData.linkedinUrl}</p>
                    </div>
                  </div>
                  <Send className="w-3.5 h-3.5 text-neutral-500 group-hover:text-white group-hover:translate-x-1 transition-all" />
                </a>
              </div>

              {/* Location Badge */}
              <div className="pt-2 border-t border-neutral-800">
                <p className="text-xs text-neutral-400 font-light">
                  Ubicación principal: <strong className="text-neutral-200 font-mono">{personalData.location}</strong> (Disponible para proyectos remotos y presenciales).
                </p>
              </div>

            </div>
          </div>

          {/* Interactive Form Column */}
          <div className="lg:col-span-7">
            <div className="bg-[#141414] p-6 sm:p-8 border border-[#262626]">
              
              <h3 className="text-xl font-serif text-white mb-1">
                Enviar un Mensaje
              </h3>
              <p className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-6">
                Completa el formulario para redactar un correo electrónico directo
              </p>

              <form onSubmit={handleSubmitMailto} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-name" className="block text-[10px] font-mono uppercase tracking-widest text-neutral-400 mb-1">
                      Nombre completo *
                    </label>
                    <input
                      type="text"
                      id="contact-name"
                      required
                      placeholder="Tu nombre o empresa"
                      value={formState.name}
                      onChange={e => setFormState({ ...formState, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs bg-neutral-900 border border-neutral-800 text-white placeholder-neutral-600 focus:outline-none focus:border-neutral-400 font-mono"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="block text-[10px] font-mono uppercase tracking-widest text-neutral-400 mb-1">
                      Correo electrónico *
                    </label>
                    <input
                      type="email"
                      id="contact-email"
                      required
                      placeholder="tu.correo@ejemplo.com"
                      value={formState.email}
                      onChange={e => setFormState({ ...formState, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs bg-neutral-900 border border-neutral-800 text-white placeholder-neutral-600 focus:outline-none focus:border-neutral-400 font-mono"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-subject" className="block text-[10px] font-mono uppercase tracking-widest text-neutral-400 mb-1">
                    Asunto del mensaje
                  </label>
                  <input
                    type="text"
                    id="contact-subject"
                    placeholder="Ej. Oportunidad de capacitación / Proyecto Python"
                    value={formState.subject}
                    onChange={e => setFormState({ ...formState, subject: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs bg-neutral-900 border border-neutral-800 text-white placeholder-neutral-600 focus:outline-none focus:border-neutral-400 font-mono"
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-[10px] font-mono uppercase tracking-widest text-neutral-400 mb-1">
                    Mensaje *
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    placeholder="Escribe aquí los detalles de tu consulta..."
                    value={formState.message}
                    onChange={e => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs bg-neutral-900 border border-neutral-800 text-white placeholder-neutral-600 focus:outline-none focus:border-neutral-400 font-mono"
                  />
                </div>

                <button
                  type="submit"
                  id="send-message-btn"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-mono uppercase tracking-widest text-neutral-900 bg-white hover:bg-neutral-200 transition-colors font-semibold"
                >
                  <Send className="w-3.5 h-3.5 text-neutral-900" />
                  <span>Enviar Mensaje (Abrir Cliente de Correo)</span>
                </button>
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
