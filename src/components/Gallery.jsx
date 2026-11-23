const images = [
  {
    src: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=85",
    alt: "Interior de um consultório odontológico",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=800&q=85",
    alt: "Espaço de atendimento odontológico",
    className: "",
  },
  {
    src: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=800&q=85",
    alt: "Equipamentos odontológicos",
    className: "",
  },
  {
    src: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=85",
    alt: "Atendimento em consultório odontológico",
    className: "",
  },
  {
    src: "https://images.unsplash.com/photo-1606265752439-1f18756aa5fc?auto=format&fit=crop&w=800&q=85",
    alt: "Ambiente de uma clínica odontológica",
    className: "",
  },
];

function Gallery() {
  return (
    <section id="galeria" className="bg-white px-6 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="text-sm font-semibold tracking-widest text-teal-700 uppercase">
            Nosso espaço
          </span>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Um espaço pensado para o seu bem-estar
          </h2>

          <p className="mt-5 leading-relaxed text-slate-600">
            Conheça nosso espaço e descubra um ambiente onde o atendimento e o
            cuidado com o seu sorriso são prioridades.
          </p>
        </div>

        {/* Gallery grid */}
        <div className="grid auto-rows-56 grid-cols-1 gap-4 sm:grid-cols-2 md:auto-rows-64 md:grid-cols-3">
          {images.map((image, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-4xl ${image.className}`}>
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-slate-900/0 transition duration-500 group-hover:bg-slate-900/10" />
            </div>
          ))}
        </div>

        {/* Bottom message */}
        <div className="mt-12 text-center">
          <a
            href="#contacto"
            className="inline-flex items-center justify-center rounded-full bg-teal-700 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-teal-800">
            Saiba mais sobre nós
          </a>
        </div>
      </div>
    </section>
  );
}

export default Gallery;
