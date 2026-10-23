# Sobre mim · React

Página pessoal em React + Vite, organizada em componentes e com modo escuro usando `useState`.

## Executar

Requer Node.js 22.12+ (ambiente validado com Node.js 24).

```sh
npm ci
npm run dev -- --host 0.0.0.0
```

```sh
npm run lint
npm run build
```

## Personalizar

Edite as constantes no topo de `src/App.jsx`: nome, frase, LinkedIn, tecnologias e interesses. A foto é um avatar ilustrativo local em `src/assets/perfil.svg`: substitua pelo seu retrato e ajuste o import. Os textos são uma base editável porque o HTML da aula anterior não foi fornecido.

- `Cabecalho`: recebe `nome`, `frase`, `foto`, `linkedin`.
- `Secao`: recebe `titulo` e `children`.
- `ListaTecnologias`: recebe `itens` e renderiza com `.map()` e `key`.
- `Rodape`: não recebe props.
- `src/index.css`: reset, variáveis, estilos e responsividade.

## Entrega

A pasta `src/` contém o código solicitado. Para criar um arquivo sem dependências: `tar -czf /tmp/portfolio-src.tar.gz src`.
O print da página pode ser feito com ela rodando. Não inclua `node_modules` na entrega.
