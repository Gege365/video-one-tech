# Guia do projeto — Norte

(Salve como `CLAUDE.md` na raiz do projeto se você usa o Claude Code, ou como `AGENTS.md` se usa o Codex, o Cursor ou outro agente. O conteúdo é o mesmo.)

Landing page da Norte, hospedagem de sites e servidores. Vite sem framework, Three.js para o globo e Lenis na roda do mouse: **sem GSAP, sem pin, nada prende a página**. O impacto vem de três coisas, nessa ordem: o hero com o globo grafite subindo **por cima** da palavra "Online"; o globo que gira com a mão no hero, acompanha a descida e **solta um ponto aceso que pousa no ponto do ".com" da busca de domínio**; e a página inteira numa noite só, com o nome digitado pelo visitante voltando no fim. A régua é site de premiação: se uma passagem parece "ok", ainda não está pronta.

O código já vem pronto em `arquivos/src/`, a página no `arquivos/index.html` e as texturas do globo e as duas fotos já tratadas em `arquivos/public/`: o trabalho é montar, conferir e, depois, personalizar. Depois de montado, o projeto de verdade é o da raiz (`index.html`, `src/`, `public/`): é ali que tudo se edita; `arquivos/` fica como a demo original, para consulta. O site foi feito para ser mudado: os textos, os planos, as terminações e os pontos do globo estão no HTML, as cores num arquivo só, e cada módulo lê o que o HTML tem e confere se a seção dele existe.

## Arquitetura
- **Uma seção por arquivo.** O `index.html` tem o `<head>`, as camadas fixas (o `<canvas class="globo">`, a lista de pontos `<ol class="globo__regioes">`, o ponto que voa, a barra de rolagem e o filtro SVG dos números) e a ordem das seções (`<!-- @secao hero -->` etc.); o plugin `secoes` do `vite.config.js` troca cada marca pelo `src/sections/<nome>.html` no dev e no build.

  | seção (`src/sections/`) | o que tem | estilo | movimento |
  |---|---|---|---|
  | `nav.html` | a nav (links, marca, Entrar, Suporte, botão Menu) e o menu de tela cheia do celular | `nav.css` | `nav.js` |
  | `hero.html` | "Online", o texto, o preço "a partir de", os botões | `hero.css` | `layout.js` (medidas), `arrasto.js` (giro com a mão) |
  | `regioes.html` | as duas frases que passam pelos lados do globo (a segunda com `data-falha`) | `regioes.css` | `coreografia.js` |
  | `dominio.html` | o título, o campo da busca, as terminações (`.tld` com `data-tld`, `data-preco` e, se quiser, `data-ocupacao`) | `dominio.css` | `busca.js`, `voo.js` |
  | `planos.html` | o alternador mensal/anual, os planos (`.plano` com `data-plano`, `data-mensal`, `data-anual`; o marcado tem `aria-checked="true"`), o resumo | `planos.css` | `planos.js`, `estado.js` |
  | `migracao.html` | a foto, o texto, o formulário e a mensagem de enviado | `migracao.css` | `migracao.js` |
  | `numeros.html` | os dois números grandes com as legendas | `numeros.css` | `numeros.js` |
  | `suporte.html` | a foto, o relógio, o texto, o botão | `suporte.css` | `relogio.js`, `numeros.js` |
  | `fecho.html` | o domínio escolhido com o ponto "no ar", o preço, os botões | `fecho.css` | `planos.js` (o preço), `layout.js` (o tamanho) |
  | `rodape.html` | o status, as colunas de links, o legal, "Norte" gigante | `fecho.css` | `layout.js` |

- **O CSS é uma folha só**, `src/styles/site.css` (por `@import`: a fonte, `tokens.css`, `base.css` e uma folha por seção), ligada por `<link>` no `<head>`. Antes dela, inline: o script do tema (`?tema=`), o fundo da página e a trava "nada transiciona até assentar" (o `main.js` libera depois de dois quadros). Nunca importe CSS pelo JS: no dev do Vite ele chega depois dos módulos e a página pinta crua por um instante a cada recarregamento.
- **Módulos** (`src/motion/`; cada um explica o que faz no cabeçalho):

  | arquivo | o que faz |
  |---|---|
  | `src/main.js` | a ordem: textos que rolam, linhas, busca, planos, formulário, relógio, medidas; o hero entra quando as fontes chegam; o Three.js e o globo vêm por `import()` depois da página; um laço por quadro para o giro, o roteiro e o voo |
  | `rolagem.js` | o Lenis (só a roda do mouse; o toque é o nativo) e o único `requestAnimationFrame` da página; as funções de suavização (`amortecer`, `suave`, `faixa`) |
  | `layout.js` | as medidas: as palavras gigantes ajustadas à largura (`data-palavra`), o domínio do fecho (`data-ajusta`), a posição do hero e do globo, onde cada seção começa (`L`) |
  | `globo.js` | o globo em Three.js: texturas da NASA, relevo, luz, os pontos (lidos da `<ol class="globo__regioes">`, com o shader montado para a quantidade) na cor do `--acento` |
  | `coreografia.js` | o roteiro do globo pela rolagem (quadros-chave de posição, tamanho, latitude e longitude), a entrada dos pontos de oeste para leste, a falha ("Uma para, outra assume") |
  | `arrasto.js` | girar o globo com a mão no hero, com inércia |
  | `voo.js` | o ponto que se solta do globo e pousa no ponto do ".com" |
  | `busca.js` | a busca de domínio fictícia e determinística: estados, cursor de ponto, sufixo, sugestões, erros |
  | `estado.js` | o fio da página: o nome digitado, a terminação e o plano escolhidos, que seguem para o resumo e o fecho |
  | `planos.js` | escolher um plano, mensal/anual com os algarismos rolando, o resumo e o preço do fecho |
  | `migracao.js` | o formulário da migração: foco, preenchido, erro por campo, enviando, enviado (fictício) |
  | `numeros.js` | os números que chegam com desfoque horizontal (um filtro SVG por número) |
  | `relogio.js` | a hora de quem visita |
  | `revelar.js` | o texto que entra por marco, uma vez (`data-revela`, `IntersectionObserver`) |
  | `nav.js`, `barra.js`, `toque.js` | a nav que some e volta, o menu do celular; a barra de rolagem própria; o hover desligado durante a rolagem, o estado de toque e os rótulos que rolam |

- **Parâmetros de URL**: `?tema=azul` e `?tema=verde` trocam o acento.

## Design system
- Tokens em `src/styles/tokens.css`, nunca cores soltas no CSS das seções (transparência é `color-mix(in srgb, var(--tinta) 14%, transparent)`): `--preto-topo #161412`, `--preto #0e0d0c`, `--preto-fim #0c0b0a`, `--fantasma #24211f` (palavras gigantes), `--tinta #f2ede6`, `--tinta-2 #a39d96`, `--tinta-3 #6f6a64`, `--fio`, `--fio-forte`, **`--acento #f2a65a`** (o único acento, laranja na demo), `--acento-claro` (o miolo dos pontos), `--acento-escuro` (o "−20%" sobre o alternador claro), `--acento-brilho`, `--sobre-acento` (texto escuro dos botões claros), `--apagado`. O globo lê o `--acento`: trocar a cor aqui troca os pontos. Duas paletas de exemplo: `azul` e `verde` (`?tema=`).
- O acento é **luz**, não cor de bloco: pontos do globo, o ponto do ".com", cursor da busca, ponto do plano escolhido, ponto "no ar", fio em foco, erro, anel de foco. Nada de botão laranja, faixa laranja ou fundo laranja.
- **Uma família**: Archivo variável com eixo de largura (`font-stretch` 62–125%). Palavras gigantes, marca, planos, preços e números a 125%; títulos a 118% (2 linhas no máximo, `.linha` + `nowrap`); lead a 108%; corpo a 100%; interface a 104%. Nada abaixo de 12,5 px.
- Grade de 12 colunas, margem `clamp(20px, 3.9vw, 72px)`. Pouco texto, muito ar, uma ideia por seção. Proibido: grade de cards, HUD, linhas de órbita, "role para baixo", rótulos com traço, selos.
- Camadas: o canvas do globo é fixo em `z-index: 1`; as palavras gigantes em `z-index: 0` (atrás dele); o resto do conteúdo em `z-index: 2`. `main`, `section` e `footer` nunca recebem `transform`, `opacity`, `filter` ou `z-index` (senão a palavra para de ficar atrás do globo).

## Regras de motion
- **Rolagem solta.** O Lenis só suaviza a roda do mouse (o toque é o nativo), no mesmo `requestAnimationFrame` de tudo. Nada segura a página, nada troca de etapa presa ao scroll. Se precisar de algo "preso", é uma camada fixa enquanto o conteúdo continua passando.
- **O scroll dirige só imagem** (globo, ponto que voa, parallax das fotos), num `requestAnimationFrame` só (`src/motion/rolagem.js`), com suavização exponencial pelo tempo (`amortecer`).
- **Texto entra por tempo**, uma vez, pelo `IntersectionObserver` (`src/motion/revelar.js`): linhas sobem da máscara em 0,9 s `--ease-out`, 70 ms entre elas; parágrafos e botões sobem 14 px com fade. Nunca texto scrubado; nunca letra comida pela máscara (folga de 0,14em em cima e 0,22em embaixo).
- Curvas só dos tokens: `--ease-out` (entradas), `--ease-io` (trocas), `--ease-snap` (microinterações, 0,45 s). Nada de `ease` padrão.
- O globo nunca cobre texto (desktop: colunas livres ao lado; celular: a frase empurra o globo).
- Rolando rápido (1200 px a cada 80 ms) e voltando: tudo assenta no estado final, o globo chega no lugar sem atravessar a tela (salto grande vai direto), o canvas fica limpo quando o globo sai.
- `prefers-reduced-motion`: sem balanço nem suavização no globo, ponto pousado, textos sem deslocamento, números sem desfoque, sem parallax, sem piscar, sem Lenis (rolagem nativa) e sem girar com a mão.

## Microinterações
- Todo clicável tem hover, foco visível e estado de clique, na linguagem da marca: links com fio que desenha e sai; botões pílula com rótulo que rola e luz quente por dentro; botão da seta que troca a seta; linhas de plano que andam 14 px; terminações que andam 4 px; anel de foco laranja.
- Hover desligado durante a rolagem (`.is-scrolling`) e o mesmo estado no toque do celular (`.is-toque`, `src/motion/toque.js`).
- Formulários com os quatro estados: foco, preenchido, erro (com mensagem e tremida) e enviado.

## Celular: regras que não se quebram
- **Nunca rolar para o lado.** Se algo vazar, conserte a origem.
- No toque, a rolagem é a do aparelho (o Lenis só suaviza a roda do mouse); o arrasto vertical em cima do globo continua rolando a página (`touch-action: pan-y pinch-zoom` no hero).
- Hover só com mouse e nunca durante a rolagem (`:where(html:not(.is-scrolling)) .x:hover`); no toque, `.is-toque` dá a mesma resposta. A barra de rolagem própria some em telas de toque.
- Alvos de toque de 44 px (o bloco "Toque" no fim de `base.css`: a marca, as terminações, o alternador, o status e os links do rodapé, que ganham altura pelo padding, com o sublinhado acompanhando pela `--sublinha`).
- Composição própria abaixo de 760 px: nav com "Menu", o texto do hero em cima e o globo com 1,5× a largura da tela, frases empilhadas com o globo no terço de cima, terminações em duas colunas, fotos verticais em cima do texto.
- Conferir em 390 × 844 e numa tela baixa (375 × 553).

## Desempenho
- 60 fps no desktop e no celular. Texturas de 4096 px no desktop e 2048 no celular (`leve`), `devicePixelRatio` até 2, o globo só desenha enquanto está na tela.
- O Three.js vem por `import()` dinâmico: o texto do hero não espera o globo.
- Fotos em WebP no tamanho em que aparecem (`srcset`), com `loading="lazy"`.

## Como checar
1. `npm run dev` (porta 5183); olhar a 1456 × 840 e a 390 × 844, no Chrome e no Safari.
2. Recarregar: "Online" aparece, o texto sobe, o globo surge e os pontos acendem um a um, de oeste para leste. Arrastar o globo (mouse e dedo): ele gira com inércia, os botões por cima continuam clicáveis, e no celular o arrasto vertical rola a página.
3. Rolar devagar até a busca: o globo sobe e gira até a América do Sul ficar de frente; as frases passam ao lado sem tocar nele; "Uma para, outra assume." faz o ponto da Europa ocidental apagar e o vizinho acender; o globo sai pelo alto e um ponto cai na vertical e pousa no ponto do ".com", que fica aceso.
4. Busca: digitar um nome (o cursor de ponto segue o texto e o ".com.br" abre espaço), ver "Procurando…", disponível/ocupado, sugestões, "Registrar" → "No carrinho"; digitar "minha loja" e ver o erro.
5. Planos: trocar Mensal/Anual (os preços rolam), escolher outro plano, conferir o resumo com o nome digitado.
6. Migração: enviar vazio (erros), preencher e enviar (enviando → enviado).
7. Números entram desfocados e assentam; o relógio do suporte mostra a hora local.
8. Fecho com o domínio digitado e o preço do plano; rodapé com "Norte" gigante cortado.
9. Rolar a página inteira rápido e voltar; repetir com movimento reduzido; abrir o menu no celular; percorrer com Tab.
10. `?tema=azul`: o acento troca na página e nos pontos do globo.
11. Console sem erros; `npm run build` passa; o `dist/` numa subpasta, com um servidor estático de verdade (o `vite preview` esconde arquivo faltando): `cp -R dist _teste/site`, `python3 -m http.server 8765 --directory _teste`, abrir `http://localhost:8765/site/` e ver o console sem 404. Depois derrubar o servidor e apagar `_teste/`.

## Personalizar

O site chega como a demo da Norte, uma marca inventada. Esta seção vale sempre que a pessoa pedir uma mudança, hoje ou daqui a meses: trocar a marca, um texto, uma foto, os pontos do globo, a área do negócio, ou levar uma peça para outro site.

### As três perguntas
Se ainda não sabe, pergunte (uma por vez, em linguagem simples):
1. É **a demo**, **o site da marca da pessoa** (hospedagem ou outro serviço) ou **peças soltas** num site que já existe?
2. Que material ela já tem (logo, cores, fotos da equipe) e o que falta? Nome, o que vende e para quem, planos e preços, onde atende (os pontos do globo), contatos: pergunte o que não sabe, sem pedir tudo de uma vez.
3. O que ela quer manter da demo (o globo com o giro da mão, o ponto que voa até a busca, a busca de domínio, os planos em tipografia, o formulário, os números, o relógio)?

Diga com clareza o que muda só com texto e o que depende de material novo (tabela abaixo). O globo não depende de material: é código e dados públicos da NASA.

Para peças soltas: leia o código do site de destino antes. Se for React, Next ou outro framework, leve o HTML da seção, a folha dela (com os tokens que ela usa) e os módulos de `src/motion/` que ela chama, adaptados ao framework (cada módulo vira um efeito que roda depois de o componente montar e se desfaz ao desmontar; o globo é um `<canvas>` com Three.js, com o laço de `rolagem.js`), em vez de colar esta página inteira.

### O que muda e onde
| o quê | onde | precisa de material novo? |
|---|---|---|
| Nome da marca, textos, links, rodapé, CNPJ | o HTML da seção (tabela da Arquitetura): a marca na `nav.html`, o "Norte" gigante em `.rodape__palavra` (`rodape.html`), o `<title>`, a `description` e o `theme-color` no `index.html`, e o ícone `public/favicon.svg` (o N com o ponto laranja) | não |
| Palavra gigante do hero ("Online") | `.hero__palavra` em `hero.html`; o tamanho se ajusta sozinho (`layout.js`); 5 a 8 letras ficam melhor | não |
| Cores | `tokens.css` (o acento e as variações dele; o globo lê o `--acento` sozinho). Os temas de exemplo podem sair (os blocos `[data-tema]` em `tokens.css` e a linha do script no `<head>`) | não |
| Cores do globo (continentes, oceano) | `TERRA_ESCURA`, `TERRA_CLARA`, `GELO`, `OCEANO` no topo de `arquivos/fonte/texturas.py`, rodado da raiz do projeto (`python3 arquivos/fonte/texturas.py`); precisa dos arquivos da NASA em `fonte/nasa/` (links no `arquivos/receitas/LEIA.md`) | só os dados da NASA (grátis) |
| Pontos do globo (quantos e onde) | a lista `<ol class="globo__regioes">` no `index.html`: um `<li data-lat data-lon>` por ponto (o nome é só para quem edita; 4 a 30 ficam bem). `data-voa`: o ponto que voa até a busca (um que fique de frente quando o globo sai pelo alto, na demo a Ásia); `data-cai` e `data-assume`: a falha da segunda frase (dois pontos vizinhos que estejam de frente nela). As posições contam do 0 | não |
| Caminho do globo na rolagem | os quadros-chave de `quadros()` em `coreografia.js` (`lat`/`lon` de frente, posição, tamanho). Com pontos só no Brasil, por exemplo, deixe a `lon` perto de −50 nos quadros para o país ficar de frente | não |
| Planos, especificações e preços | `planos.html`: cada `.plano` com `data-plano` (um id), `data-mensal`, `data-anual`, o nome, a especificação e o preço; o marcado no começo tem `aria-checked="true"`. Qualquer quantidade; o resumo e o fecho leem o nome e o preço daqui. Preço que não é número ("sob consulta") funciona: ponha o texto em `data-mensal` e no `.plano__valor`; a linha mostra o texto no tamanho do título, sem "R$" nem "/mês", e o resumo e o fecho mostram o texto como está | não |
| Mensal e anual | o `.alternador` em `planos.html`; sem ele (só um preço), apague o alternador e deixe `data-anual` igual a `data-mensal` | não |
| Terminações e preços de domínio | `dominio.html`: cada `.tld` com `data-tld`, `data-preco` e, se quiser, `data-ocupacao` (0 a 1, quanto ela costuma estar ocupada; sem ele, 0,3); a terminação marcada no começo tem `aria-pressed="true"`. A busca é fictícia: num site real, ligue `disponivel()` de `busca.js` à API do registrador | não |
| Números (99,99%, 0,4 s) | `numeros.html` (`.numero`: o valor, o `aria-label` e a legenda). A grade foi feita para valores de 4 a 6 caracteres ("99,99%", "0,4 s"): com um número curto ("8"), escreva-o com a unidade ("8 centros") ou aproxime a legenda dele em `numeros.css` | não, mas são fatos: só os da pessoa |
| Relógio e frase do suporte | `suporte.html` (a legenda "é a hora aí."); a hora é a de quem visita (`relogio.js`). O relógio diz "alguém atende agora": só serve para atendimento 24 horas. Fora disso, troque o bloco `.numero--c` pelo horário de atendimento, escrito no mesmo tamanho (sem `data-relogio`) | não |
| Formulário (os campos e as mensagens) | `migracao.html`: cada `.campo` com um `<input>`; o tipo decide a conferência (`type="email"` confere o e-mail, `inputmode="url"` confere o endereço, os outros pedem pelo menos 2 letras); as mensagens de erro em `data-vazio` e `data-ruim`; campo opcional com `data-opcional`. O envio é fictício: ligue ao destino real (e-mail, WhatsApp, um serviço de formulários) | não |
| Fotos da migração e do suporte | `public/img/migracao-*.webp` e `suporte-*.webp` (e as `-vertical`), tratadas por `arquivos/fonte/fotos.py` (foto nova: salve em `fonte/fotos/` e rode o script, ver "Material da pessoa") | sim: foto escura e quente |

### Outro negócio
A estrutura é de serviço digital com planos; o que é de hospedagem está em pontos marcados. Para um SaaS, um provedor de internet, uma agência, uma consultoria, uma transportadora:
- **O globo** vira "onde estamos" ou "onde atendemos": troque os pontos (as cidades da pessoa) e os quadros-chave de `quadros()` em `coreografia.js` para a região dela ficar de frente (`lat` e `lon` de cada quadro, nos dois blocos: o do celular e o do computador). O globo mostra o planeta inteiro: um negócio regional vira um grupo pequeno de pontos. Escolha cidades a pelo menos 3° uma da outra (as muito próximas se sobrepõem; para a falha, `data-cai` e `data-assume` precisam estar a uns 5°), e deixe a região no centro dos quadros. Aproximar o globo (o `r` dos quadros) faz ele cobrir o texto: não aumente sem conferir as duas frases. As duas frases das regiões viram o argumento dela ("Perto de quem compra.", "Se um centro para, outro despacha.").
- **A busca de domínio** só faz sentido em hospedagem e registro. Sem ela: apague a linha `<!-- @secao dominio -->` (o ponto do globo não voa, e o resumo dos planos e o fecho mostram o domínio escrito neles, em `planos.html` e `fecho.html`: troque pelo da pessoa ou tire do texto). O fecho perde o conceito do "seu nome no ar": a palavra grande dele (`.fecho__dominio`, com `data-ajusta`, que ajusta o tamanho) pode virar o telefone, o e-mail ou a chamada do negócio, e o ponto que respira ao lado vira "estamos atendendo". Outra saída é reaproveitar a linha de campo como uma busca do negócio dela (CEP, rastreio), reescrevendo `busca.js`.
- **Os planos** servem a qualquer assinatura; para serviço sob orçamento, troque os preços por "sob consulta" e o resumo por um convite ao contato.
- **"Online"** e **"Norte"** gigantes: a palavra do negócio (até 8 letras) e o nome da marca.
- **Os números** são fatos: só os da pessoa, ou a seção sai.
- **As fotos**: as da equipe dela, escuras e quentes.

### Tirar, repetir ou trocar seções
- **Tirar uma seção**: apague a linha `<!-- @secao nome -->` do `index.html`. Cada módulo confere se a seção dele existe e, sem ela, não faz nada: não é preciso mexer no JS. Sem `regioes`, o globo sobe e sai pelo alto quando o hero acaba; sem `dominio`, o ponto não voa; sem `hero`, a página fica sem o globo. Confira se algum link `href="#..."` apontava para ela (a nav, o menu e o rodapé usam `#planos`, `#dominio`, `#suporte`, `#regioes`, `#migracao`, `#topo`) e, se a folha dela não for mais usada, tire o `@import` do `site.css`.
- **Mudar a ordem**: mova as linhas `<!-- @secao -->`. O globo foi feito para o hero e as regiões, em sequência e no começo; o ponto que voa sai do fim das regiões até a busca. Ao mudar a ordem perto deles, confira a passagem.
- **Mais ou menos itens**: planos, terminações, pontos do globo, colunas e links do rodapé aceitam qualquer quantidade.
- **Seção nova no mesmo estilo** (perguntas, depoimentos reais, clientes): um arquivo `src/sections/<nome>.html` com `data-secao`, uma folha `<nome>.css` importada no `site.css`, título com as linhas em `<span class="linha"><span>…</span></span>` dentro de um bloco com `data-revela` (entra pelo `revelar.js`), corpo em `.corpo`, botões `.botao` e `.botao-seta`. Nada de cards nem de enfeite; muito ar.

### Material da pessoa
Para cada foto, ofereça estes caminhos, do mais simples para o mais trabalhoso, e deixe a pessoa escolher:
1. **Manter as fotos da demo por enquanto** (banco de imagens de uso livre; links e autores em `arquivos/receitas/LEIA.md`). O site fica pronto hoje.
2. **Usar fotos que ela já tem.** Foto **escura, com luz quente e fundo que cai no preto** (a borda é esfumada no preto da página; foto clara ou de fundo branco vira um retângulo cinza), sem marca de terceiros à vista, com boa resolução (2400 px de largura ou mais na migração, 2200 no suporte). Proporção: 3:2 na migração (a parte de cima escura, porque fica por baixo do formulário) e qualquer horizontal no suporte, com o rosto à esquerda do centro. Salve em `fonte/fotos/` com os nomes da demo (`pexels-30215681.jpg` na migração, `pexels-7709199.jpg` no suporte) e rode `python3 arquivos/fonte/fotos.py`; se a pessoa estiver em outro ponto da foto, ajuste os recortes do celular (`crop`) no script.
3. **Buscar outra foto de banco** (Pexels ou Unsplash, licença livre, nunca "premium"): "person working laptop night lamp", "customer support headset warm light". Mesmas regras do caminho 2.
4. **Sem foto**: a migração funciona só com texto e formulário, e o suporte com o relógio e o texto: apague a `<figure>` da seção.

### Regras ao trocar
- As regras de movimento continuam valendo: título em 2 linhas no máximo, texto nunca preso à rolagem, nada de GSAP nem de trava de rolagem, globo nunca atrás de texto.
- O acento continua sendo só luz. Se a marca tem outra cor de acento, troque o acento inteiro por ela em `tokens.css` (o globo acompanha), não some uma segunda cor.
- Fato nunca se inventa: preço, número (99,99%, 0,4 s, 2 minutos, 52 minutos), CNPJ, endereço, telefone, cidade de atendimento e depoimento que a pessoa não deu ficam `[preencher]` (nunca na palavra gigante nem no nome) e entram na lista do fim. Texto que não é fato (uma frase de título, uma legenda) pode ser escrito no tom da marca a partir do que ela contou, avisado como provisório na lista do fim.
- Os botões e formulários da demo são fictícios ("Criar meu site", "Registrar", "Pedir a mudança", "Falar com alguém"): ligue cada um ao destino real da pessoa (checkout, WhatsApp, formulário, chat) e diga isso a ela.
- Depois de cada troca, rode o "Como checar" nos trechos que mudaram e, no fim, liste para a pessoa o que ainda é da demo (fotos, números, textos, CNPJ, links) e o que falta ela mandar.
