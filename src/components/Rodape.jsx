const ano = new Date().getFullYear()

export default function Rodape() {
  return <footer><p>Portfólio criado como exercício prático - <span>React</span>.</p><p>© {ano} ·  <span aria-hidden="true">↗</span></p></footer>
}
