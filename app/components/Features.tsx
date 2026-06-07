const features = [
  {
    icon: "📱",
    title: "Check-in desde el celular",
    description:
      "Registra la entrada de vehículos en segundos. Solo ingresa la placa y listo.",
  },
  {
    icon: "🎫",
    title: "Ticket digital automático",
    description:
      "Cada vehículo recibe un código único. Sin papel, sin impresoras.",
  },
  {
    icon: "💰",
    title: "Cobro automático",
    description:
      "Calcula el valor a pagar según el tiempo y la tarifa que tú definas.",
  },
  {
    icon: "📊",
    title: "Dashboard en tiempo real",
    description:
      "Ve cuántos vehículos hay dentro, ingresos del día y estadísticas históricas.",
  },
  {
    icon: "🛡️",
    title: "Seguro y confiable",
    description:
      "Datos cifrados y respaldados en la nube. Tu información siempre disponible.",
  },
  {
    icon: "📅",
    title: "Mensualidades para tus clientes",
    description:
      "Registra clientes recurrentes y cobra sus mensualidades de forma sencilla.",
  },
];

export default function Features() {
  return (
    <section
      id="como-funciona"
      className="py-20 px-4 sm:px-6 bg-gray-50"
      aria-labelledby="features-heading"
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <h2
            id="features-heading"
            className="text-3xl font-bold text-gray-900 mb-3"
          >
            Todo lo que necesitas
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto">
            Diseñado para parqueaderos de cualquier tamaño. Simple de usar,
            potente para tu negocio.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <article
              key={f.title}
              className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="text-3xl mb-4" aria-hidden="true">
                {f.icon}
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{f.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {f.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
