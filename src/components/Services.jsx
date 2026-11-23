const services = [
  {
    number: "01",
    title: "Odontologia geral",
    description:
      "Atendimento voltado à saúde bucal e ao acompanhamento de cada paciente.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-8">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 3.75c-2.5-1.5-6.75-.5-6.75 4.5 0 4.5 2.25 12 4.5 12 1.25 0 1.25-3.75 2.25-3.75s1 3.75 2.25 3.75c2.25 0 4.5-7.5 4.5-12 0-5-4.25-6-6.75-4.5Z"
        />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Prevenção e cuidados",
    description:
      "A importância de cuidar do seu sorriso por meio de consultas regulares e bons hábitos de higiene bucal.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-8">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 3 4.5 6v5.25c0 4.5 3.25 7.75 7.5 9.75 4.25-2 7.5-5.25 7.5-9.75V6L12 3Z"
        />
        <path strokeLinecap="round" strokeLinejoin="round" d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Atendimento personalizado",
    description:
      "Cada sorriso é único. Um atendimento que busca ouvir e compreender as necessidades de cada paciente.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-8">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 6.75a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.5 20.25a7.5 7.5 0 0 1 15 0"
        />
      </svg>
    ),
  },
];

function Services() {
  return (
    <section id="tratamientos" className="bg-[#F4FAFA] px-6 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="text-sm font-semibold tracking-widest text-teal-700 uppercase">
            Nossos serviços
          </span>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Cuidamos de cada detalhe do seu sorriso
          </h2>

          <p className="mt-5 leading-relaxed text-slate-600">
            Um atendimento atencioso e profissional, focado no cuidado com a sua
            saúde bucal e o seu bem-estar.
          </p>
        </div>

        {/* Service cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.number}
              className="group rounded-4xl border border-slate-100 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="flex items-center justify-between">
                <div className="flex size-16 items-center justify-center rounded-2xl bg-teal-50 text-teal-700 transition duration-300 group-hover:bg-teal-700 group-hover:text-white">
                  {service.icon}
                </div>

                <span className="text-sm font-medium text-slate-300">
                  {service.number}
                </span>
              </div>

              <h3 className="mt-8 text-xl font-semibold text-slate-900">
                {service.title}
              </h3>

              <p className="mt-3 leading-relaxed text-slate-600">
                {service.description}
              </p>

              <a
                href="#contacto"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-teal-700 transition hover:gap-3">
                Saiba mais
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="size-4">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12h15m0 0-6.75-6.75M19.5 12l-6.75 6.75"
                  />
                </svg>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
