import { useState } from 'react'
import Cabecalho from './components/Cabecalho'
import Secao from './components/Secao'
import ListaTecnologias from './components/ListaTecnologias'
import Rodape from './components/Rodape'
import foto from './assets/perfil.jpeg'

const perfil = {
  nome: 'Alan',
  frase: 'no momento estudo desenvolvimento web, e administro minha empresa de suporte em TI.',
  linkedin: 'https://www.linkedin.com/in/alan-godoi-bba485281/',
}
const tecnologias = ['Python', 'JavaScript', 'HTML', 'CSS', 'Git']
const interesses = ['Desenvolvimento web', 'Hardwares', 'Investimento']

export default function App() {
  const [modoEscuro, setModoEscuro] = useState(false)

  return (
    <div className="pagina" data-tema={modoEscuro ? 'escuro' : 'claro'}>
      <div className="container">
        <nav className="barra" aria-label="Navegação principal">
          <a className="marca" href="#inicio">alan<span>/</span>dev</a>
          <button className="tema" type="button" aria-pressed={modoEscuro} onClick={() => setModoEscuro(!modoEscuro)}>
            <span aria-hidden="true">{modoEscuro ? '☀' : '☾'}</span> {modoEscuro ? 'Modo claro' : 'Modo escuro'}
          </button>
        </nav>
        <main id="inicio">
          <Cabecalho {...perfil} foto={foto} />
          <div className="separador"><span>UM POUCO MAIS SOBRE MIM</span><span aria-hidden="true">↓</span></div>
          <div className="grade">
            <Secao titulo="Sobre mim"><p>Sou o Alan Gabriel da silva de godoi, comecei na área como suporte, e agora estou dando meus primeiros passos como desenvolvedor front-end na empresa stara.</p><p>Passei por toda a esteira, analista de negócio - analista de sistema.. e agora estou em desenvolvedor, cheguei onde desejava.</p><span className="nota">Me superando dia após dia.</span></Secao>
            <Secao titulo="Tecnologias favoritas"><p>Minha caixa de ferramentas está sempre crescendo. Estas são algumas das tecnologias que fazem parte da jornada.</p><ListaTecnologias itens={tecnologias} /></Secao>
            <Secao titulo="Dentro da minha área"><p>O que eu mais gosto de estudar.</p><ul className="interesses">{interesses.map((item, index) => <li key={item}><span className="numero">0{index + 1}</span>{item}<span aria-hidden="true">↗</span></li>)}</ul></Secao>
            <Secao titulo="Meu próximo passo"><span className="status"><span /> EM ANDAMENTO</span><h3>Criação de SaaS<br />abusando da IA.</h3><p>Dentro da minha microempresa, ajudo as pessoas no suporte de TI, e também alavancar empresas com sites interativos.</p><a className="link-texto" href="https://github.com/AlanGodoii" target="_blank" rel="noreferrer">Acompanhe no GitHub <span aria-hidden="true">↗</span></a></Secao>
          </div>
        </main>
        <Rodape />
      </div>
    </div>
  )
}
