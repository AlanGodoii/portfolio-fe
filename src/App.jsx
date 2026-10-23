import { useState } from 'react'
import Cabecalho from './components/Cabecalho'
import Secao from './components/Secao'
import ListaTecnologias from './components/ListaTecnologias'
import Rodape from './components/Rodape'
import foto from './assets/perfil.svg'

// Edite estas constantes com suas informações e seu LinkedIn.
const perfil = {
  nome: 'Alan',
  frase: 'Estudante de tecnologia. Desenvolvedor em construção.',
  linkedin: 'https://www.linkedin.com/',
}
const tecnologias = ['React', 'JavaScript', 'HTML', 'CSS', 'Python', 'Git']
const interesses = ['Desenvolvimento web', 'Interfaces e design', 'Aprender coisas novas']

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
            <Secao titulo="Sobre mim"><p>Sou o Alan e estou dando meus primeiros passos no desenvolvimento. Gosto de entender como as coisas funcionam e de aprender colocando a mão no código.</p><p>Este é meu espaço para compartilhar um pouco de quem sou e das tecnologias que estou explorando.</p><span className="nota">Aprendendo um pouco a cada dia.</span></Secao>
            <Secao titulo="Tecnologias favoritas"><p>Minha caixa de ferramentas está sempre crescendo. Estas são algumas das tecnologias que fazem parte da jornada.</p><ListaTecnologias itens={tecnologias} /></Secao>
            <Secao titulo="Além do código"><p>Boas ideias também nascem longe do editor.</p><ul className="interesses">{interesses.map((item, index) => <li key={item}><span className="numero">0{index + 1}</span>{item}<span aria-hidden="true">↗</span></li>)}</ul></Secao>
            <Secao titulo="Meu próximo passo"><span className="status"><span /> EM APRENDIZADO</span><h3>De uma página HTML<br />a componentes React.</h3><p>Construindo interfaces reutilizáveis, explorando props e dando vida à página com estado.</p><a className="link-texto" href="https://github.com/AlanGodoii" target="_blank" rel="noreferrer">Acompanhe no GitHub <span aria-hidden="true">↗</span></a></Secao>
          </div>
        </main>
        <Rodape />
      </div>
    </div>
  )
}
