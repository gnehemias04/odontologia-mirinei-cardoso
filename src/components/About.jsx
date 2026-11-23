function About() {
  return (
    <section id="nosotros" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-5 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Image */}
        <div className="relative">
          <div className="absolute -bottom-5 -left-5 w-40 h-40 bg-teal-100 rounded-4xl -z-10"></div>

          <img
            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=85"
            alt="Interior de um consultório odontológico"
            className="w-full h-87.5 sm:h-112.5 object-cover rounded-4xl shadow-xl"
          />

          <div className="absolute bottom-5 right-5 bg-white rounded-2xl shadow-lg p-5 max-w-50">
            <p className="text-3xl font-bold text-teal-600">5.0 ★</p>
            <p className="text-sm text-slate-600 mt-1">Avaliação no Google</p>
          </div>
        </div>

        {/* Content */}
        <div>
          <span className="text-teal-600 font-semibold text-sm tracking-widest uppercase">
            Sobre nós
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 leading-tight mt-4 mb-6">
            Cuidamos do seu sorriso com{" "}
            <span className="text-teal-600">dedicação e compromisso.</span>
          </h2>

          <p className="text-slate-600 leading-relaxed mb-5">
            Acreditamos que um bom atendimento odontológico começa com a escuta
            de cada paciente e a compreensão das suas necessidades.
          </p>

          <p className="text-slate-600 leading-relaxed mb-8">
            Nosso objetivo é oferecer uma experiência acolhedora, profissional e
            focada no cuidado com a sua saúde bucal.
          </p>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 shrink-0 rounded-full bg-teal-50 flex items-center justify-center text-teal-600">
                ✓
              </div>
              <div>
                <h3 className="font-semibold text-slate-800">
                  Atendimento personalizado
                </h3>
                <p className="text-sm text-slate-500 mt-1">
                  Cada paciente é único.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-10 h-10 shrink-0 rounded-full bg-teal-50 flex items-center justify-center text-teal-600">
                ✓
              </div>
              <div>
                <h3 className="font-semibold text-slate-800">
                  Compromisso profissional
                </h3>
                <p className="text-sm text-slate-500 mt-1">
                  Cuidado e dedicação em cada consulta.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
