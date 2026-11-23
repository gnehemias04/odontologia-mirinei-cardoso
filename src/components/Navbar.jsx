import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Início", href: "#inicio" },
    { name: "Sobre nós", href: "#nosotros" },
    { name: "Tratamentos", href: "#tratamientos" },
    { name: "Avaliações", href: "#opiniones" },
    { name: "Localização", href: "#ubicacion" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-md shadow-sm">
      <nav className="max-w-7xl mx-auto px-5 md:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#inicio" className="flex flex-col leading-tight">
          <span className="text-xl font-bold text-slate-800 tracking-tight">
            Mirinei Cardoso
          </span>
          <span className="text-xs tracking-[0.2em] uppercase text-teal-600">
            Odontología
          </span>
        </a>

        {/* Desktop navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-600 hover:text-teal-600 transition-colors">
              {link.name}
            </a>
          ))}

          <a
            href="#contacto"
            className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-full text-sm font-semibold transition-colors">
            Agendar consulta
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-slate-700"
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isOpen}>
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.8}
              stroke="currentColor"
              className="w-7 h-7">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.8}
              stroke="currentColor"
              className="w-7 h-7">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile navigation */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 px-5 py-5 shadow-lg">
          <div className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-slate-700 font-medium hover:text-teal-600 transition-colors">
                {link.name}
              </a>
            ))}

            <a
              href="#contacto"
              onClick={() => setIsOpen(false)}
              className="bg-teal-600 text-white text-center py-3 rounded-full font-semibold">
              Agendar consulta
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
