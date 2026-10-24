import { Link } from "react-router";

function Cadastro() {
  return (
    <main className="login-page">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <div className="login-layout">
        <header className="login-brand">
          <span className="login-brand-mark" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none">
              <rect x="4" y="3" width="16" height="18" rx="3" />
              <path d="m8 9 1.5 1.5L12 8m2 2h2m-8 6h8" />
            </svg>
          </span>
          <div>
            <p className="login-brand-name">Gestão de Ordens</p>
            <p className="login-brand-caption">Sistema de gestão de serviços</p>
          </div>
        </header>

        <section className="login-card" aria-labelledby="cadastro-title">
          <header className="login-heading">
            <h1 id="cadastro-title">Crie sua conta</h1>
            <p>Preencha seus dados para começar.</p>
          </header>

          <form className="login-form" aria-labelledby="cadastro-title">
            <div className="login-field">
              <label htmlFor="cadastro-nome">Nome completo</label>
              <div className="login-input-wrapper">
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <circle cx="12" cy="8" r="4" />
                  <path d="M4 21v-2a6 6 0 0 1 6-6h4a6 6 0 0 1 6 6v2" />
                </svg>
                <input
                  type="text"
                  id="cadastro-nome"
                  name="nome"
                  autoComplete="name"
                  placeholder="Digite seu nome completo"
                />
              </div>
            </div>

            <div className="login-field">
              <label htmlFor="cadastro-email">E-mail</label>
              <div className="login-input-wrapper">
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <rect x="3" y="5" width="18" height="14" rx="3" />
                  <path d="m4 7 8 6 8-6" />
                </svg>
                <input
                  type="email"
                  id="cadastro-email"
                  name="email"
                  autoComplete="username"
                  placeholder="seu@email.com"
                />
              </div>
            </div>

            <div className="login-field">
              <label htmlFor="cadastro-senha">Senha</label>
              <div className="login-input-wrapper">
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <rect x="4" y="10" width="16" height="11" rx="3" />
                  <path d="M8 10V7a4 4 0 0 1 8 0v3m-4 5v2" />
                </svg>
                <input
                  type="password"
                  id="cadastro-senha"
                  name="senha"
                  autoComplete="new-password"
                  placeholder="Crie uma senha"
                />
              </div>
            </div>

            <div className="login-field">
              <label htmlFor="cadastro-confirmar-senha">Confirmar senha</label>
              <div className="login-input-wrapper">
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <rect x="4" y="10" width="16" height="11" rx="3" />
                  <path d="M8 10V7a4 4 0 0 1 8 0v3m-4 5v2" />
                </svg>
                <input
                  type="password"
                  id="cadastro-confirmar-senha"
                  autoComplete="new-password"
                  placeholder="Digite a senha novamente"
                />
              </div>
            </div>

            <button className="login-submit" type="button">
              Criar conta
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M5 12h14m-6-6 6 6-6 6" />
              </svg>
            </button>

            <div
              className="cadastro-feedback"
              role="status"
              aria-live="polite"
              aria-atomic="true"
            />
          </form>

          <p className="cadastro-login">
            Já possui uma conta? <Link to="/login">Entrar</Link>
          </p>
        </section>

        <p className="login-footer">Organização e controle em um só lugar.</p>
      </div>
    </main>
  );
}

export default Cadastro;
