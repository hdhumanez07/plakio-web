export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-white">
      <div className="text-center">
        <p className="text-blue-600 text-sm font-medium mb-2">404</p>
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
          Page not found / Página no encontrada
        </h1>
        <p className="text-gray-500 max-w-md mx-auto mb-8">
          Sorry, the page you are looking for does not exist.
        </p>
      </div>
    </div>
  );
}
