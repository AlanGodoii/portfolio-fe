const ano = new Date().getFullYear()

export default function Rodape() {
  return <footer><p>Feito com curiosidade e <span>React</span>.</p><p>© {ano} · Sempre em construção <span aria-hidden="true">↗</span></p></footer>
}
