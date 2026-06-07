import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-white">
      <div className="text-center">
        <p className="text-blue-600 text-sm font-medium mb-2">404</p>
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
          Página no encontrada
        </h1>
        <p className="text-gray-500 max-w-md mx-auto mb-8">
          Lo sentimos, la página que buscas no existe o ha sido movida. ¿Quieres
          volver al inicio?
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors shadow-sm"
          >
            Volver al inicio
          </Link>
          <a
            href="https://wa.me/573003046919"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-lg border border-gray-200 text-gray-700 font-medium hover:bg-gray-50 transition-colors"
          >
            Contáctanos
          </a>
        </div>
      </div>
    </div>
  );
}
