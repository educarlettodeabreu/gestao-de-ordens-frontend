import { useState } from "react"
import { fzLogin } from "../services/Autenticacao.ts"
function Login() {
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [carregando, setCarregando] = useState(false)
    const [mensagem, setMensagem] = useState("")

    async function submit(e: React.SubmitEvent<HTMLFormElement>) {

  e.preventDefault();
 try {
  setCarregando(true)
  setMensagem("")

  const resposta = await fzLogin(email, senha);

  switch (resposta.status) {
    case 200: 
    setMensagem("Login realizado com sucesso!");
    break;

    case 401:
        setMensagem("E-mail ou senha incorretos!");
        break;
    
    case 400:
  setMensagem("Dados inválidos!");
  break;

    case 429:
  setMensagem("Muitas tentativas. Tente novamente mais tarde.");
  break;

    case 500:
  setMensagem("Erro interno do servidor!");
  break;

    default:
  setMensagem("Ocorreu um erro inesperado!");
  }

 } catch (erro) {
    setMensagem("nao foi possivel conectar ao servdior!")
    console.error("erro na requisicao:", erro)
 } finally {
    setCarregando(false)
 }
  

}

    return (
        <form onSubmit={submit}>
            <label htmlFor="eml">email:</label>

            <input type="emai" value={email} onChange={(e) => setEmail(e.target.value)} id="eml"/>

            <label htmlFor="pass">sua senha:</label>

            <input type="password" value={senha} onChange={(e) => setSenha(e.target.value)}id="pass" />

            <button type="submit" disabled={carregando}>{carregando ? 'Entrando...' : "Entrar"}</button>
            {mensagem && <p>{mensagem}</p>}
        </form>


    )
}

export default Login