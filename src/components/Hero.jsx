function Hero() {
  return (
    <section
      id="inicio"
      className="relative bg-[#F4FAFA] pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Text content */}
        <div className="flex flex-col items-start">
          <span className="inline-flex items-center gap-2 bg-teal-50 text-teal-700 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold tracking-wide mb-6">
            <span className="w-2 h-2 rounded-full bg-teal-500"></span>
            ODONTOLOGIA INTEGRADA
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-800 leading-tight tracking-tight mb-6">
            Um sorriso saudável começa com um{" "}
            <span className="text-teal-600">bom atendimento.</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl mb-8">
            Sua saúde bucal merece atenção profissional e personalizada.
            Acompanhamos você para que cuidar do seu sorriso seja uma
            experiência confortável e tranquila.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a
              href="#contacto"
              className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-full font-semibold text-center transition-all duration-300 shadow-lg shadow-teal-600/20">
              Agendar consulta
            </a>

            <a
              href="#tratamientos"
              className="border border-slate-300 hover:border-teal-600 hover:text-teal-700 text-slate-700 px-8 py-4 rounded-full font-semibold text-center transition-all duration-300">
              Nossos tratamentos
            </a>
          </div>

          {/* Trust message */}
          <div className="mt-10 flex items-center gap-3">
            <div className="flex -space-x-2">
              <span className="w-9 h-9 rounded-full bg-teal-100 border-2 border-[#F4FAFA] flex items-center justify-center text-teal-700 text-sm">
                ✓
              </span>
            </div>

            <p className="text-sm text-slate-600">
              Atendimento profissional e personalizado
            </p>
          </div>
        </div>

        {/* Image */}
        <div className="relative">
          <div className="absolute -top-6 -right-4 w-32 h-32 bg-teal-200/50 rounded-full blur-2xl"></div>

          <div className="relative rounded-4xl overflow-hidden shadow-2xl shadow-slate-300/40">
            <img
              src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=1200&q=85"
              alt="Consultório odontológico moderno"
              className="w-full h-87.5 sm:h-112.5 lg:h-137.5 object-cover"
            />
          </div>

          {/* Floating information card */}
          <div className="absolute -bottom-6 left-4 sm:left-8 bg-white rounded-2xl shadow-xl p-5 max-w-60">
            <p className="text-sm font-semibold text-slate-800">
              Seu sorriso importa
            </p>
            <p className="text-xs text-slate-500 mt-1">
              Cuidamos de cada detalhe da sua saúde bucal.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
