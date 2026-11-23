function Contact() {
  const whatsappNumber = "5491170153125";

  const message = encodeURIComponent(
    "Olá, gostaria de fazer uma consulta e saber mais sobre os horários disponíveis.",
  );

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <section id="contacto" className="bg-white px-6 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-4xl bg-teal-800 px-7 py-16 text-center sm:px-12 lg:px-20 lg:py-20">
          {/* Elementos decorativos */}
          <div className="absolute -right-20 -top-20 size-72 rounded-full border border-white/10" />

          <div className="absolute -bottom-32 -left-20 size-80 rounded-full border border-white/10" />

          {/* Conteúdo */}
          <div className="relative z-10 mx-auto max-w-2xl">
            <span className="text-sm font-semibold tracking-widest text-teal-200 uppercase">
              Estamos aqui para ajudar
            </span>

            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Seu próximo sorriso começa com uma consulta
            </h2>

            <p className="mx-auto mt-6 max-w-xl leading-relaxed text-teal-100">
              Entre em contato conosco para tirar suas dúvidas ou consultar a
              disponibilidade de horários. Será um prazer atender você!
            </p>

            {/* Botão do WhatsApp */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-9 inline-flex items-center justify-center gap-3 rounded-full bg-white px-8 py-4 font-semibold text-teal-800 shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-teal-50">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6">
                <path d="M20.52 3.48A11.86 11.86 0 0 0 12.05 0C5.48 0 .13 5.34.13 11.91c0 2.1.55 4.15 1.6 5.96L0 24l6.3-1.65a11.9 11.9 0 0 0 5.74 1.46h.01c6.57 0 11.91-5.34 11.92-11.91a11.84 11.84 0 0 0-3.45-8.42ZM12.05 21.8a9.9 9.9 0 0 1-5.05-1.39l-.36-.21-3.74.98 1-3.65-.23-.37a9.88 9.88 0 0 1-1.52-5.25c0-5.46 4.45-9.9 9.91-9.9a9.84 9.84 0 0 1 7.01 2.91 9.84 9.84 0 0 1 2.9 7.01c0 5.46-4.45 9.9-9.92 9.9Zm5.44-7.42c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.47-2.4-1.49-.89-.79-1.49-1.76-1.66-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.48-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.2 5.09 4.49.71.31 1.27.49 1.7.63.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
              </svg>
              Fale pelo WhatsApp
            </a>

            <p className="mt-5 text-sm text-teal-200">
              Atendimento e informações sobre horários.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
