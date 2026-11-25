import { Link } from "react-router-dom";

export function Home() {
  return (
    <section>
      <h1>Home</h1>
      <p>Bem-vindo ao projeto de rotas com React Router, Layout e Suspense.</p>
      <div className="page-links">
        <Link to="/about">Ir para About</Link>
        <Link to="/contact">Ir para Contact</Link>
        <Link to="/user/10">Ver Usuário 10</Link>
      </div>
    </section>
  );
}