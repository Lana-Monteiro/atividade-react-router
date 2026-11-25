import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="header">
      <div className="brand">Meu Site React</div>
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/user/1">Perfil (ID 1)</Link>
      </nav>
    </header>
  );
}

export function Sidebar() {
  return (
    <aside className="sidebar">
      <h3>Acesso Rápido</h3>
      <ul>
        <li>
          <Link to="/">Página Inicial</Link>
        </li>
        <li>
          <Link to="/about">Sobre Nós</Link>
        </li>
        <li>
          <Link to="/contact">Fale Conosco</Link>
        </li>
        <li>
          <Link to="/user/42">Usuário #42</Link>
        </li>
        <li>
          <Link to="/rota-inexistente">Testar 404</Link>
        </li>
      </ul>
    </aside>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <p>Atividade React Router • Lazy Loading & Layout Compartilhado</p>
    </footer>
  );
}

export function MainLayout({ children }) {
  return (
    <div className="app-shell">
      <Header />
      <div className="content-wrapper">
        <Sidebar />
        <main className="main-content">{children}</main>
      </div>
      <Footer />
    </div>
  );
}