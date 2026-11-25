import { Link } from "react-router-dom";

export function About() {
  return (
    <section>
      <h1>About</h1>
      <p>
        Esta aplicação demonstra navegação entre páginas, componentes de layout
        compartilhados e carregamento sob demanda com lazy loading.
      </p>
      <div className="page-links">
        <Link to="/">Voltar para Home</Link>
        <Link to="/contact">Ir para Contact</Link>
      </div>
    </section>
  );
}