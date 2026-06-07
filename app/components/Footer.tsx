export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="py-8 px-4 sm:px-6 border-t border-gray-100">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-400">
        <span>
          &copy; {year}{" "}
          <span className="font-medium text-gray-700">Plakio</span>. Todos los
          derechos reservados.
        </span>
        <nav aria-label="Navegación del pie de página">
          <ul className="flex items-center gap-5">
            <li>
              <a
                href="/privacidad"
                className="hover:text-gray-700 transition-colors"
              >
                Privacidad
              </a>
            </li>
            <li>
              <a
                href="/terminos"
                className="hover:text-gray-700 transition-colors"
              >
                Términos
              </a>
            </li>
            <li>
              <a
                href="mailto:hola@plakio.app"
                className="hover:text-gray-700 transition-colors"
              >
                Contacto
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
