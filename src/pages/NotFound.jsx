import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <section>
      <h1>404 - Página não encontrada</h1>
      <p>A rota acessada não existe neste aplicativo.</p>
      <div className="page-links">
        <Link to="/">Voltar para a Home</Link>
      </div>
    </section>
  );
}