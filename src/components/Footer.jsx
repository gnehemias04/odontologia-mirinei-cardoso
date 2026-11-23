const footerLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre nós", href: "#nosotros" },
  { label: "Tratamentos", href: "#tratamientos" },
  { label: "Avaliações", href: "#opiniones" },
  { label: "Localização", href: "#ubicacion" },
  { label: "Contato", href: "#contacto" },
];

function Footer() {
  return (
    <footer className="bg-slate-950 px-6 pt-16 pb-8 text-white">
      <div className="mx-auto max-w-7xl">
        {/* Rodapé principal */}
        <div className="grid gap-12 border-b border-white/10 pb-12 md:grid-cols-2 lg:grid-cols-3">
          {/* Marca */}
          <div>
            <a href="#inicio" className="inline-block">
              <h2 className="text-xl font-semibold tracking-wide">
                Mirinei Cardoso
              </h2>

              <p className="mt-1 text-xs font-medium tracking-[0.2em] text-teal-400 uppercase">
                Odontologia
              </p>
            </a>

            <p className="mt-6 max-w-xs text-sm leading-relaxed text-slate-400">
              Cuidamos do seu sorriso com dedicação, compromisso e atendimento
              personalizado.
            </p>
          </div>

          {/* Navegação */}
          <div>
            <h3 className="font-semibold">Navegação</h3>

            <ul className="mt-6 grid grid-cols-2 gap-x-6 gap-y-4">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-400 transition hover:text-teal-400">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="font-semibold">Contato</h3>

            <p className="mt-6 text-sm leading-relaxed text-slate-400">
              Tem alguma dúvida? Entre em contato conosco e consulte a
              disponibilidade de horários.
            </p>

            <a
              href="#contacto"
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-teal-400 transition hover:text-teal-300">
              Solicitar informações
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        {/* Direitos autorais */}
        <div className="flex flex-col items-center justify-between gap-4 pt-8 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Odontologia Mirinei Cardoso. Todos os
            direitos reservados.
          </p>

          <a
            href="#inicio"
            className="text-xs text-slate-500 transition hover:text-teal-400">
            Voltar ao topo ↑
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
