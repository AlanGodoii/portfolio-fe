export default function ListaTecnologias({ itens }) {
  return <ul className="tecnologias">{itens.map((item) => <li key={item}>{item}</li>)}</ul>
}
