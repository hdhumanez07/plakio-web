export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 text-center">
      <div className="max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-medium mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
          Prueba gratis por 30 días
        </div>

        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-5">
          El software más sencillo para
          <span className="text-blue-600"> gestionar tu parqueadero</span>
        </h1>

        <p className="text-lg text-gray-500 max-w-xl mx-auto mb-10">
          Check-in y check-out desde el celular, tickets digitales y cobro
          automático. Sin complicaciones.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="/descargar"
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors shadow-sm"
          >
            Descargar la app
          </a>
          <a
            href="#como-funciona"
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-lg border border-gray-200 text-gray-700 font-medium hover:bg-gray-50 transition-colors"
          >
            Cómo funciona
          </a>
        </div>

        <p className="mt-5 text-xs text-gray-400">
          Disponible para Android e iOS · Prueba gratis 30 días
        </p>
      </div>
    </section>
  );
}
