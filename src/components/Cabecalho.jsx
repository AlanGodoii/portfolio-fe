export default function Cabecalho({ nome, frase, foto, linkedin }) {
  return (
    <header className="cabecalho">
      <div className="perfil-foto"><img src={foto} alt={`Foto de ${nome}`} /></div>
      <div className="perfil-texto">
        <p className="eyebrow">OLÁ, EU SOU O</p>
        <h1>{nome}<span>.</span></h1>
        <p className="frase">{frase}</p>
        <p className="introducao">Tenho 23 anos, e sou graduando em ciências da computação.</p>
        <a className="botao" href={linkedin} target="_blank" rel="noreferrer">Vamos nos conectar <span aria-hidden="true">↗</span></a>
      </div>
    </header>
  )
}
