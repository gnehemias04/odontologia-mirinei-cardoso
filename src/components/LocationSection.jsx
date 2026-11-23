function LocationSection() {
  return (
    <section id="ubicacion" className="bg-[#F4FAFA] px-6 py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
        {/* Location information */}
        <div>
          <span className="text-sm font-semibold tracking-widest text-teal-700 uppercase">
            Onde nos encontrar
          </span>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Estamos perto para cuidar do seu sorriso
          </h2>

          <p className="mt-5 leading-relaxed text-slate-600">
            Encontre nosso consultório e descubra como chegar para sua próxima
            consulta odontológica.
          </p>

          {/* Address */}
          <div className="mt-10 space-y-7">
            <div className="flex gap-4">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-white text-teal-700 shadow-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                  />
                </svg>
              </div>

              <div>
                <h3 className="font-semibold text-slate-900">Localização</h3>
                <p className="mt-1 text-sm leading-relaxed text-slate-600">
                  Odontologia Florencia Durso
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-white text-teal-700 shadow-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6l4 2"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </div>

              <div>
                <h3 className="font-semibold text-slate-900">
                  Horários de atendimento
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-slate-600">
                  Consulte os horários disponíveis pelo WhatsApp.
                </p>
              </div>
            </div>
          </div>

          {/* Directions button */}
          <a
            href="https://www.google.com/maps/search/?api=1&query=Odontolog%C3%ADa+Florencia+Durso"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-teal-700 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-teal-800">
            Como chegar
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
                d="M7 17 17 7M7 7h10v10"
              />
            </svg>
          </a>
        </div>

        {/* Google Maps */}
        <div className="overflow-hidden rounded-4xl shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3475.6613828781187!2d-46.585!3d-23.5833!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5c0e74ffd9f3%3A0x271d702650534bc7!2sR.%20Ibitirama%2C%20166%20-%20Vila%20Prudente%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2003133-000%2C%20Brazil!5e1!3m2!1sen!2sar!4v1795445842415!5m2!1sen!2sar"
            title="Localização do consultório odontológico no Google Maps"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            className="block"
          />
        </div>
      </div>
    </section>
  );
}

export default LocationSection;
