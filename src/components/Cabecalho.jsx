export default function Cabecalho({ nome, frase, foto, linkedin }) {
  return (
    <header className="cabecalho">
      <div className="perfil-foto"><img src={foto} alt={`Avatar ilustrado de ${nome}`} /></div>
      <div className="perfil-texto">
        <p className="eyebrow">OLÁ, EU SOU</p>
        <h1>{nome}<span>.</span></h1>
        <p className="frase">{frase}</p>
        <p className="introducao">Entre uma ideia e outra, estou aprendendo a transformar código em experiências que fazem sentido.</p>
        <a className="botao" href={linkedin} target="_blank" rel="noreferrer">Vamos nos conectar <span aria-hidden="true">↗</span></a>
      </div>
    </header>
  )
}
