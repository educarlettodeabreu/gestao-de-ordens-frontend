import { useState } from "react"
import { fzLogin } from "../services/Autenticacao.ts"
function Login() {
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")

    async function submit(e: React.SubmitEvent<HTMLFormElement>) {
  e.preventDefault();
  const resposta = await fzLogin(email, senha);
}

    return (
        <form onSubmit={submit}>
            <label htmlFor="eml">email:</label>

            <input type="emai" value={email} onChange={(e) => setEmail(e.target.value)} id="eml"/>

            <label htmlFor="pass">sua senha:</label>

            <input type="password" value={senha} onChange={(e) => setSenha(e.target.value)}id="pass" />

            <button type="submit">enviar</button>
        </form>

    )
}

export default Login