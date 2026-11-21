# Norte: hospedagem de sites com um globo 3D ao vivo, que se gira com a mão e solta um ponto aceso até a busca de domínio

## Antes de começar: pergunte

Antes de escrever qualquer código, faça estas perguntas, uma por vez e em linguagem simples (a pessoa pode não ser programadora):

1. **O que você quer fazer com este site?**
   - **Montar a demo como ela é**, para ver funcionando e trocar depois.
   - **Fazer o site da minha marca** com esta estrutura e estas animações. Serve a hospedagem e a qualquer serviço digital ou de tecnologia (SaaS, provedor de internet, agência, consultoria, logística, telecom): o globo com pontos acesos vira "onde estamos", "onde atendemos" ou "onde ficam nossos servidores", e a busca de domínio pode sair.
   - **Usar só algumas peças** (o globo que se gira com a mão, a busca de domínio com o ponto que pousa, os planos em tipografia com mensal e anual, a linha de formulário, os números que chegam desfocados, o relógio de quem visita, o nome gigante do rodapé) num site que já tenho.
2. Se for a marca dela: o nome, o que vende e para quem, os planos e preços, onde atende (as cidades ou regiões que vão acender no globo), os contatos, as cores (se tiver) e **que material já tem** (logo, fotos da equipe ou de clientes). Avise desde já:
   - o globo é código e dados públicos da NASA: fica igual com qualquer marca, e o que muda são os pontos acesos e a cor da luz;
   - as duas fotos (a mulher no notebook e a atendente de headset) são de banco (Pexels, licença livre) e vêm no pacote já tratadas; para o site dela, servem fotos da equipe, desde que escuras e com luz quente (um script do pacote trata as fotos novas do mesmo jeito);
   - preços, números ("99,99%", "0,4 s", "2 minutos") e o CNPJ da demo são inventados: no site dela, entram os dela ou ficam marcados para preencher.
3. Se forem peças: quais, e onde está o site que vai recebê-las.

Depois, em qualquer caminho, **monte primeiro a demo completa como descrita abaixo** e confira que ela roda: é o caminho testado e fica de referência. Só então aplique a marca ou extraia as peças, seguindo a seção "Personalizar" do guia. Termine com uma lista curta do que ainda é da demo e do que falta a pessoa mandar.

## A demo

Construa a landing page da **Norte** (marca fictícia), uma empresa de hospedagem de sites e servidores em nuvem (hospedagem, servidores, domínios, planos a partir de R$ 19,90 e suporte 24 horas). Leia antes o guia do projeto desta pasta (`CLAUDE.md`, ou `AGENTS.md` no Codex e outros agentes: arquitetura, design system, regras de movimento e do celular, como conferir e como personalizar) e olhe as imagens em `arquivos/conceito/`: são prints do site pronto, o alvo de cada trecho (`01-hero` a `11-rodape`, `-desktop` e `-mobile`).

**Tudo o que o site usa já vem pronto em `arquivos/`**: o `index.html`, o `vite.config.js` (com o plugin que monta as seções), o código inteiro em `arquivos/src/` (dez seções em HTML, as folhas de estilo e os dezesseis módulos: o globo, o roteiro dele, o giro com a mão, o ponto que voa, a busca, os planos, o formulário, os números, o relógio, a nav, a barra, o toque) e as texturas do globo, as duas fotos já tratadas e o ícone em `arquivos/public/`. Use tudo isso como está: não reescreva os módulos e não troque nada por uma versão "mais simples". O trabalho é montar o projeto, instalar as dependências com as versões certas, copiar os arquivos e conferir.

A ideia da página: **uma noite só, do topo ao rodapé.** O hero é a palavra "Online" gigante em baixo contraste com um globo grafite subindo pelo pé por cima dela, os pontos laranja das regiões acesos (doze no globo, oito à vista no hero). Descendo, o globo sobe mais devagar que a página e gira; as frases passam pelos lados dele. No hero dá para **girar o globo com a mão** (mouse ou dedo). Quando ele sai pelo alto, **um ponto aceso se solta, cai e pousa no ponto do ".com" da busca de domínio**, que fica aceso. O nome que o visitante digita segue para o resumo dos planos e volta no fecho, com o ponto aceso do "no ar". Fotos reais, escuras e quentes, costuram o meio; números enormes entram desfocados como coisa que chegou rápido; o rodapé fecha com "Norte" gigante cortado pela borda.

**A página é inteira e solta, do topo ao rodapé, com a roda do mouse suavizada pelo Lenis (o toque continua o nativo). Nada de GSAP, nada de pin, nada de trava de rolagem, nada de seção presa ao scroll.** O movimento vem de CSS (transições e `animation-timeline: view()` com `@supports`), de `IntersectionObserver` (texto que entra uma vez, por tempo) e de um `requestAnimationFrame` só, que roda o Lenis e lê a rolagem (para o globo, o ponto que voa e nada mais). O globo é uma camada fixa atrás do conteúdo: o conteúdo nunca para.

Nível de acabamento: site de premiação. Menos é mais: pouco texto, muito ar, uma ideia por seção, nenhuma grade de cards, nenhum enfeite de interface (HUD, órbitas, "role para baixo", rótulos com traço).

---

## Parte 1 — O site

### Marca e tom
- Público: dono de pequeno negócio, freelancer e agência que querem o site no ar sem pensar em servidor.
- Tom calmo e concreto: número no lugar de adjetivo ("99,99%", "0,4 s", "2 minutos"). Nada de "solução robusta", "infraestrutura de ponta".
- **Cores em papéis** (`src/styles/tokens.css`; nenhuma cor solta nas seções, transparência com `color-mix`): preto quente `--preto-topo` `#161412` no topo, `--preto` `#0E0D0C` na página, `--preto-fim` `#0C0B0A` no fim (o fundo do `body` é um degradê com esses três; nenhuma seção tem bloco de outra cor); palavra gigante `--fantasma` `#24211F`; texto `--tinta` `#F2EDE6`, secundário `--tinta-2` `#A39D96`, terciário `--tinta-3` `#6F6A64`; fios `--fio` e `--fio-forte` (a tinta a 14% e 32%). **Um acento só, `--acento` laranja `#F2A65A`, sempre como luz** (pontos do globo, cursor da busca, ponto do plano escolhido, ponto "no ar", fio do campo em foco, erro, anel de foco), com o miolo dos pontos em `--acento-claro`. Nunca em fundo de bloco. O globo lê o acento do CSS: `?tema=azul` e `?tema=verde` trocam a luz da página inteira, pontos do globo inclusive.
- **Tipo: Archivo variável, uma família só, com o eixo de largura** (`@fontsource-variable/archivo`, arquivo `wdth.css`; família `'Archivo Variable'`, `font-stretch` de 62% a 125%):
  - palavras gigantes, marca, nomes de plano, preços, números grandes e o campo da busca: `font-stretch: 125%`, peso 400–500 (a marca, 700);
  - títulos H2: `font-stretch: 118%`, peso 450, `clamp(34px, 3.9vw, 64px)`, entrelinha 1,02, tracking −0,022em, **no máximo 2 linhas**, cada linha num `<span class="linha"><span>…</span></span>` com `white-space: nowrap`;
  - lead: `font-stretch: 108%`, 20–31 px, entrelinha 1,12–1,3; corpo: 100%, 15–17 px, entrelinha 1,5, `max-width: 34ch`; interface: 104%, 13–15 px, peso 450–500.
- Grade: 12 colunas, margem `clamp(20px, 3.9vw, 72px)`, gap `clamp(14px, 1.65vw, 24px)`.
- Curvas: `--ease-out: cubic-bezier(.22,1,.36,1)` (entradas, 0,9 s), `--ease-io: cubic-bezier(.65,0,.35,1)` (nav, trocas), `--ease-snap: cubic-bezier(.3,.9,.2,1)` (microinterações, 0,45 s).

### Regras de movimento (valem para a página inteira)
1. **O scroll dirige só imagem**: posição, tamanho e giro do globo, o ponto que voa até a busca e o parallax leve das duas fotos. O resto entra **por tempo** quando chega na tela.
2. **Texto entra uma vez, pela máscara**: cada `.linha > span` começa em `translateY(112%)` e vai a zero em 0,9 s `--ease-out`, com 70 ms entre linhas; a máscara tem folga de 0,14em em cima e 0,22em embaixo (o acento e a perna do "g" nunca são comidos). Parágrafos e botões sobem 14 px com fade, 180 ms depois. Rolando rápido, tudo assenta no estado final. Nada é scrubado.
3. Títulos com no máximo 2 linhas, quebradas à mão.
4. Nenhum corte seco: as fotos entram e saem esfumadas no preto por `mask-image` (sem borda reta passando por cima de nada).
5. O globo nunca cobre texto: no desktop as frases passam pelas colunas livres ao lado dele; no celular a primeira frase empurra o globo para cima.
6. `prefers-reduced-motion`: globo sem balanço e sem suavização, sem girar com a mão, ponto pousado sem voo, textos sem deslocamento, números sem desfoque, sem parallax, sem piscar, sem Lenis; `scroll-behavior` volta a `auto`.

### Camadas
- `<canvas class="globo">` fixo (`position: fixed; inset: 0; z-index: 1; pointer-events: none`), aparece com fade de 1,2 s quando as texturas chegam.
- As **palavras gigantes** ("Online" no hero, "Norte" no rodapé) ficam em `z-index: 0`, **atrás do globo**; todo o resto do conteúdo em `z-index: 2`, **na frente**. Para isso, `main`, as `section` e o `footer` não podem criar contexto de empilhamento (sem `transform`, `opacity`, `filter` ou `z-index` neles): só os filhos recebem `position: relative; z-index: 2`.
- `<span class="ponto-voo">` fixo, `z-index: 3`: o ponto que voa do globo até a busca.

### 01 — Hero "Online" (`01-hero-*`)
- Altura `100svh`. Nav: "Hospedagem · Servidores · Domínios · Preços" à esquerda, **"Norte"** no centro (Archivo 125%, peso 700, `clamp(30px, 2.95vw, 46px)`), "Entrar · Suporte 24h" à direita, 15 px.
- "Online" em `#24211F`, peso 500, `font-stretch: 125%`, **ajustado em JS à largura da tela** (borda de 0,7%); em tela muito larga, no máximo 36% da altura. O alto das letras fica a 13,7% da altura (mas abaixo da nav).
- O globo: diâmetro `min(51,5% da largura, 88% da altura)`, centrado, com o topo a 71% da altura das letras (cobre o pé do "Online" como no conceito).
- À esquerda, na margem: "Seu site no ar / 99,99% do tempo, / em 12 regiões." (h1, `font-stretch: 108%`, `clamp(21px, 1.98vw, 31px)`, entrelinha 1,14). À direita, alinhado à margem direita: "Planos a partir de / R$ 19,90 por mês" (`clamp(17px, 1.66vw, 26px)`), uma linha abaixo. Os dois começam a `clamp(34px, 6.4vh, 70px)` abaixo da linha de base do "Online".
- Sobre o globo, centrados a 42,5% do diâmetro abaixo do topo dele: o botão pílula off-white "Criar meu site" (46 px de altura) e o botão redondo da seta (46 px).
- Entrada: a palavra aparece em 1,4 s, as linhas do texto sobem (a partir de 350 ms), os botões sobem em 0,8 s, o globo surge quando as texturas carregam e **os pontos acendem um a um, de oeste para leste, a cada 110 ms**. A página não espera o globo para mostrar o texto.
- **Girar com a mão** (só no hero, `arrasto.js`): arrastar em cima do globo gira ele (a superfície acompanha a mão: um raio arrastado gira um radiano); soltar com velocidade deixa ele girando com inércia. No mouse gira para os lados e inclina (até 40°, a inclinação volta devagar); no toque só para os lados, porque o arrasto vertical continua rolando a página (`touch-action: pan-y pinch-zoom` no `.hero`). Cursor `grab` em cima do globo e `grabbing` arrastando; botões e links por cima do globo continuam clicáveis. Ao descer, o giro volta a zero pelo caminho mais curto e o roteiro da rolagem segue igual.
- **Celular**: nav com "Norte" à esquerda e "Menu" à direita (pílula com contorno); o texto vem primeiro, logo abaixo da nav ("Seu site no ar…" a 25–30 px; "Planos a partir de…" a 16 px, cinza, 18 px abaixo); "Online" na largura toda logo abaixo; o globo com **1,5× a largura da tela** (corta dos dois lados), topo a 70% da altura das letras; os botões a 36% do diâmetro.

### 02 — Regiões (`02-regioes-*`, `03-regioes-falha-*`)
- Seção de 210vh no desktop, só com duas frases em `position: absolute`:
  - à esquerda, a 46vh do topo: **"Perto de / quem visita."** e "Seu site responde da região mais próxima de cada visitante. São doze, em cinco continentes."
  - à direita, a 128vh: **"Uma para, / outra assume."** e "Se uma região sai do ar, a vizinha assume em segundos. Quem está no seu site nem percebe."
  - largura das duas: `calc((100vw - diâmetro do globo) / 2 - margem - 36px)` (a variável `--globo-regioes` vem do JS); o título encolhe para caber (`min(tamanho do título, largura / 8.2)`).
- O globo, no meio da tela, com diâmetro `min(74% da altura, 45% da largura útil)`, gira com a rolagem para o leste (América do Sul → Europa e África → Ásia); cada ponto acende quando chega de frente. Quando "Uma para, outra assume." entra, **o ponto da Europa ocidental apaga e o da Europa central acende mais forte** por 3,2 s.
- **Os pontos são uma lista no `index.html`** (`<ol class="globo__regioes">`: latitude, longitude e um nome só para quem edita), com `data-cai` e `data-assume` (a falha) e `data-voa` (o ponto que voa até a busca). Qualquer quantidade funciona: o shader do globo é montado para os pontos que houver.
- No fim da seção o globo sobe e sai pelo alto.
- **Celular**: a seção tem `padding-top: 74vh` (espaço do globo) e as duas frases vêm empilhadas (12vh entre elas); o globo fica no terço de cima e a primeira frase o empurra para cima, até ele sair.

### 03 — Domínio (`04-dominio-*`)
- `padding: 30vh margem 16vh`. Topo em grade: **"Comece / pelo nome."** nas colunas 1–6 e, alinhado ao pé dele nas colunas 9–12, "Digite o nome que você quer. O domínio sai grátis no primeiro ano em qualquer plano anual."
- A **linha de campo**, 10vh abaixo: rótulo "Nome do seu site" (13 px, terciário), depois o campo em Archivo 125% peso 400, `clamp(40px, 7.2vw, 122px)`, com o placeholder **"seunegocio" em `#24211F`** e o sufixo **".com.br"** em cinza colado no fim do texto (o primeiro ponto num `span.busca__ponto` próprio, com a `span.busca__luz` dentro); à direita o botão redondo da seta (até 60 px). Um fio de 1 px `--fio-forte` de ponta a ponta embaixo; no foco, um fio laranja corre por cima da esquerda para a direita (0,8 s).
- **O ponto que veio do globo pousa no ponto do ".com"**: caindo na vertical, entre as letras. Pousado, o glifo do ponto fica transparente e no lugar dele acende uma luz redonda de 0,115em (o mesmo brilho do ponto que voou), centrada no glifo (`left: calc(50% + .017em)`, `top: .81em`). Trocar a terminação troca só o resto do sufixo; o ponto aceso fica.
- **O cursor é um ponto laranja de 9–13 px com brilho**, não o cursor do sistema (`caret-color: transparent`), e só aparece com o campo em foco. Vazio: o ponto fica pendurado logo antes do texto e pisca. Com texto: segue a posição do cursor, e o sufixo abre 0,24em de espaço para ele.
- Embaixo, **quatro terminações numa linha** (.com.br R$ 39,90 por ano · .com R$ 69,90 · .net R$ 79,90 · .site R$ 9,90 no 1º ano), sem caixa: ponto (contorno; aceso = disponível), nome em Archivo 125% 20–28 px, estado ("Digite um nome", "Procurando…", "Disponível", "Já tem dono"), preço (riscado quando ocupado), botão "Registrar" (pílula de contorno, só aparece quando disponível; vira "No carrinho" em laranja) e, quando ocupado, duas sugestões clicáveis. Enquanto procura, um fio laranja corre no alto de cada terminação. Clicar no nome de uma terminação troca o sufixo do campo.
- Erro (espaço, caractere inválido ou hífen na ponta): o fio fica laranja e aparece a mensagem; ao enviar com erro, a linha treme 0,42 s. As mensagens: "Sem espaço: junte as palavras ou use hífen.", "Use só letras, números e hífen." ou "O nome não pode começar nem terminar com hífen.". Busca vazia ao enviar: "Digite o nome do seu site.".
- Tudo isso está em `busca.js` (resultado fictício e determinístico: o mesmo nome dá sempre o mesmo resultado; `data-ocupacao` em cada terminação diz quanto ela costuma estar ocupada). As terminações, os preços e os planos estão no HTML: o nome do plano e o plano escolhido no começo saem dele.
- **Celular**: o campo a 7,6vw com `font-stretch: 104%` (para "seunegocio.com.br" caber com o botão de 40 px) e as terminações em duas colunas.

### 04 — Planos (`05-planos-*`)
- `padding: 14vh margem 12vh`. **"Escolha / o tamanho."** à esquerda e, à direita, o alternador "Mensal | Anual −20%" (pílula de contorno; o fundo off-white desliza até a opção escolhida; "−20%" em laranja).
- **Quatro linhas em tipografia larga, sem cards**, separadas por fios: ponto · nome · especificação · preço. Nome e valor em Archivo 125% peso 450, `clamp(40px, 6vw, 100px)`, tracking −0,03em; "R$" pequeno no alto e "/mês" pequeno na base do preço; especificação a 16 px alinhada à linha de base.
  - Site — 1 site · 20 GB · e-mail profissional — 19,90 (anual 15,90)
  - Negócio — 10 sites · 100 GB · domínio grátis — 39,90 (anual 31,90) — **escolhido no começo**
  - Loja — loja virtual · 200 GB · CDN nas 12 regiões — 79,90 (anual 63,90)
  - Servidor — 2 vCPU · 4 GB de RAM · 80 GB NVMe — 149,90 (anual 119,90)
- A linha escolhida fica em `#F2EDE6` com o ponto laranja aceso; as outras em `#A39D96`. Hover/foco: o nome anda 14 px, o ponto aparece em contorno. Trocar mensal/anual **rola os algarismos para cima** (cópia nova entra por baixo, 0,7 s, 60 ms entre linhas). As linhas entram uma a uma (80 ms) quando a lista aparece. É um `radiogroup`: setas do teclado escolhem.
- Embaixo: "**seunegocio.com.br** no plano **Negócio**, **R$ 39,90 por mês**." (o domínio da busca e o plano escolhido; no anual: "R$ 31,90 por mês, pago por ano") + botão "Criar meu site"; e "Todos com SSL, backup diário e migração grátis. Cancele quando quiser." (13 px).
- **Celular**: nome e preço na mesma linha (30–40 px, `font-stretch: 112%`), especificação embaixo, "/mês" escondido.

### 05 — Migração (`06-migracao-*`, `07-migracao-enviado-*`)
- **Foto e texto são uma peça só**: a foto à esquerda, o texto e o formulário à direita, para onde a mulher da foto olha. A seção tem 112vh, conteúdo centrado na vertical.
- Texto nas colunas 7–12: **"A mudança é / por nossa conta."** e "Trazemos site, e-mails e domínio de onde estiverem, sem tirar nada do ar. Você não precisa parar."
- A **linha de formulário**: "Endereço do site" (placeholder "seusite.com.br") | "Seu e-mail" (placeholder "voce@email.com") | botão "Pedir a mudança". Campo sem caixa: rótulo de 12,5 px, valor de 17 px, fio de 1 px; no foco um fio laranja corre por cima. Erro por campo ("Diga qual é o seu site." / "Confira o endereço (ex.: seusite.com.br)." / "Precisamos do seu e-mail." / "Esse e-mail parece incompleto."), com tremida. Enviando: o botão diz "Enviando…" piscando por 1,1 s. Enviado: os campos somem (e saem do Tab), o foco vai para a confirmação e entra "● Pedido recebido. Em até uma hora, alguém da Norte escreve para **voce@…**" (e-mail em laranja).
- A foto (mulher trabalhando à noite no balcão de madeira, luminária acesa) **em `position: absolute` à esquerda, 62% da largura, da altura toda da seção**, `object-position: 44% 60%`, esfumada à direita, em cima e embaixo: duas máscaras com `mask-composite: intersect`, `linear-gradient(270deg, transparent 0, #000 44%)` e `linear-gradient(180deg, transparent 0, #000 18%, #000 80%, transparent 100%)`. A luminária fica logo à esquerda do parágrafo, sem passar atrás dele. Parallax: com `@supports (animation-timeline: view())`, a imagem tem 110% de altura e anda de −6% a 0. No HTML a `figure` vem antes do `.migracao__conteudo`.
- **Celular**: a foto vertical (`migracao-vertical-*.webp`, 800 × 976) em cima, esfumada em cima e embaixo, e o texto e o formulário (campos empilhados) sobem 12vh por cima do pé dela.

### 06 — Números (`08-numeros-*`)
- Dois números em off-white, Archivo 125% peso 400, `clamp(76px, 14.6vw, 250px)`, entrelinha 0,86, tracking −0,045em, em diagonal: **"99,99%"** nas colunas 1–8 com "no ar no último ano. / Foram 52 minutos fora, somando tudo." nas 9–12; **"0,4 s"** à direita (colunas 5–12) com "para a primeira página abrir. / Disco NVMe e cache em todos os planos." nas 1–4. Legendas alinhadas ao pé do número.
- Entrada (uma vez, quando aparecem): **desfoque só na horizontal**, de 70 a 0 em 1,15 s, com um deslocamento de 5% que zera e opacidade que sobe no primeiro terço (`numeros.js`, um filtro SVG `feGaussianBlur` por número). As legendas sobem depois de 0,55 s.
- **Celular**: um embaixo do outro, `clamp(64px, 21vw, 96px)`, o segundo alinhado à direita.

### 07 — Suporte 24h (`09-suporte-*`)
- Seção de 108vh. **O relógio de quem visita** (hora local, `HH:MM`, sem cidade; os dois-pontos piscam a cada segundo) na mesma escala dos números, nas colunas 1–6, com "é a hora aí." embaixo. Depois **"Alguém atende / a qualquer hora."**, "Chat, telefone e e-mail, 24 horas, com quem entende de site. A resposta chega em 2 minutos, em média." e o botão "Falar com alguém".
- A foto (atendente de headset, luz quente) ocupa os 64% da direita, altura toda, com duas máscaras cruzadas (esfuma à esquerda até 42% e no alto e no pé) e o mesmo parallax.
- **Celular**: a foto vertical 6:7 (`suporte-vertical-*.webp`) em cima e o relógio e o texto embaixo, subindo 9vh sobre o pé esfumado da foto.

### 08 — Fecho e rodapé (`10-fecho-*`, `11-rodape-*`)
- **"seunegocio.com.br"** em off-white, Archivo 125% peso 450, ajustado à largura útil (teto de 20% da altura da tela; 64 px no celular): é o domínio escolhido na busca (nome + terminação), ou o exemplo. Antes dele, na margem, **um ponto laranja que respira** (o site no ar); no celular o ponto fica em cima. Embaixo: "no ar hoje, por **R$ 39,90** por mês." (preço do plano escolhido) e os botões "Criar meu site" + seta.
- Rodapé: fio no alto; "● Tudo no ar agora" (ponto respirando) nas colunas 1–3; quatro colunas de links nas 5–12 — Hospedagem (Site, Negócio, Loja), Servidores (Servidor em nuvem, As 12 regiões, Migração grátis), Domínios (Registrar, Transferir), Ajuda (Suporte 24h, Central de ajuda, Status); embaixo "© 2026 Norte Hospedagem Ltda. · CNPJ 00.000.000/0001-00" e "Termos · Privacidade · Voltar ao topo"; e **"Norte" gigante** em `#24211F`, ajustado à largura, centrado com `text-indent: -0.045em` (centro ótico) e cortado pela borda de baixo (`margin-bottom: -0.24em` com `overflow: hidden` no rodapé).

### Nav, barra e microinterações
- **Nav fixa** de 96 px (64 no celular): some ao descer (depois de 12 px na mesma direção), volta ao subir (24 px); depois de 60% da primeira tela, ao voltar, ganha fundo de `--preto` a 74% com `backdrop-filter: blur(18px)`. `:focus-within` a traz de volta. Os itens aparecem com fade na entrada.
- **Menu do celular**: tela cheia no preto, links em Archivo 125% peso 450 a 34–46 px subindo um a um (55 ms), "Entrar" e "Criar meu site" no pé; o botão vira "Fechar" (fundo off-white); Esc fecha.
- **Links**: fio de 1 px que cresce da esquerda no hover e sai pela direita (`background-size` + `background-position`), 0,45 s `--ease-snap`.
- **Botão pílula**: o rótulo rola (sobe e a cópia entra por baixo), uma luz laranja sobe por dentro (gradiente radial) e uma sombra laranja difusa aparece; `:active` 0,97. **Botão da seta**: a seta sai pela direita e a cópia entra pela esquerda; `:active` 0,94.
- **Foco** de teclado em tudo: anel laranja de 2 px, deslocado 4–6 px, com o canto do elemento.
- **Hover desligado enquanto a página rola** (classe `.is-scrolling` no `<html>`, tirada no primeiro movimento real do mouse; todo hover escrito como `:where(html:not(.is-scrolling)) .x:hover`). **Toque**: a classe `.is-toque` aparece 70 ms depois do toque e some 260 ms depois de soltar (cancelada se o dedo arrastar mais de 8 px), com o mesmo visual do hover. No celular, todo alvo de toque tem pelo menos 44 px de altura (os links do rodapé ganham altura pelo padding).
- **Barra de rolagem própria**: a nativa escondida (`scrollbar-width: none` e `::-webkit-scrollbar { display: none }`, nunca `scrollbar-gutter`); um polegar de 3 px `--fio-forte` sobreposto à direita, que aparece ao rolar (some 0,9 s depois), engrossa para 6 px no hover, é arrastável e o clique no trilho rola até o ponto. Escondida em telas de toque.

---

## Parte 2 — Como construir (stack)

- **Vite sem framework**: HTML, CSS e JS puros, Three.js para o globo e Lenis para a roda do mouse. Crie o arquivo `package.json` escrevendo-o direto (não use `npm init` nem um template do `npm create`, que trazem campos e arquivos a mais), com `"type": "module"`, `"private": true` e os scripts `"dev": "vite"`, `"build": "vite build"` e `"preview": "vite preview"` (nome e versão à sua escolha), e instale com versão travada, escrito por extenso (`npm install`, não `npm i`), um comando por linha:
  - `npm install -E three@0.186.1 lenis@1.3.26 @fontsource-variable/archivo@5.3.0`;
  - `npm install -E -D vite@8.3.4` (dependência de desenvolvimento).

  O npm pode avisar de vulnerabilidades em dependências internas do Vite (as ferramentas de desenvolvimento, que não vão para o site publicado). Não rode `npm audit fix --force`: ele troca o Vite de versão e o projeto deixa de bater com o testado.
- Crie um `.gitignore` com `node_modules/`, `dist/`, `fonte/`, `.venv/` e `_teste/`.
- **Copie os arquivos** com `cp` (as pastas inteiras de uma vez, um comando por linha, sem encadear com `&&`: em sessões com permissões restritas, comando composto pede aprovação):

  | de | para |
  |---|---|
  | `arquivos/index.html` | a raiz |
  | `arquivos/vite.config.js` | a raiz (o plugin `secoes` troca cada `<!-- @secao nome -->` do `index.html` por `src/sections/nome.html`; `base: './'`: o `dist/` abre em qualquer pasta da hospedagem; o servidor de desenvolvimento e o `preview` abrem na porta 5183; se ela estiver ocupada, passe outra: `npm run preview -- --port 5184`) |
  | `arquivos/src/` (a pasta inteira) | `src/` |
  | `arquivos/public/` (a pasta inteira) | `public/` |

  Os comandos, da raiz do projeto: `cp arquivos/index.html .`, `cp arquivos/vite.config.js .`, `cp -R arquivos/src src` e `cp -R arquivos/public public` (sem barra no fim do nome da pasta). Copie antes de existir uma pasta `src/` ou `public/` na raiz (senão o `cp -R` cria `src/src/`); se alguma já existir de uma tentativa anterior, apague-a antes de copiar. A pasta `arquivos/` continua onde está: não entra no site nem no `dist/`.

  Confira depois da cópia: `src/main.js`; `src/motion/` com 16 módulos (`arrasto.js`, `barra.js`, `busca.js`, `coreografia.js`, `estado.js`, `globo.js`, `layout.js`, `migracao.js`, `nav.js`, `numeros.js`, `planos.js`, `relogio.js`, `revelar.js`, `rolagem.js`, `toque.js`, `voo.js`); `src/sections/` com 10 HTML (`nav`, `hero`, `regioes`, `dominio`, `planos`, `migracao`, `numeros`, `suporte`, `fecho`, `rodape`) e 9 folhas CSS; `src/styles/` com 3 folhas (`site.css`, `tokens.css`, `base.css`); `public/favicon.svg`; `public/textures/` com 4 texturas (`terra-cor-2048.webp`, `terra-cor-4096.webp`, `terra-relevo-2048.webp`, `terra-relevo-4096.webp`); `public/img/` com as 10 larguras das duas fotos (`migracao-1100/1800/2400.webp`, `migracao-vertical-800/1200.webp`, `suporte-1000/1600/2200.webp`, `suporte-vertical-800/1200.webp`).
- **CSS numa folha só, por `<link>`**: o `arquivos/index.html` já traz, no `<head>`, o script que escolhe a paleta (`?tema=`) antes de qualquer arquivo, o fundo da página e a trava "nada transiciona até assentar" inline, e depois `<link rel="stylesheet" href="/src/styles/site.css">` (a fonte, os tokens, a base e as seções por `@import`). Mantenha assim e nunca importe CSS pelo JS: no dev do Vite ele chega depois dos módulos e a página aparece crua por um instante a cada recarregamento.
- Leia o cabeçalho dos módulos antes de mexer em qualquer coisa: `src/main.js` monta os textos que rolam e os formulários, mede a página, mostra o hero quando as fontes chegam e carrega o Three.js num pedaço próprio, depois da página, para o globo. O mapa de cada arquivo está no guia.
- `arquivos/conceito/` e `arquivos/receitas/` não entram no site; `arquivos/fonte/` traz os dois scripts de imagem (`fotos.py`, para tratar fotos novas, e `texturas.py`, para refazer as cores do globo).
- No fim:
  - `npm run build` passa sem erro e sem aviso de arquivo faltando;
  - `npm run preview` abre o site em `http://localhost:5183/` (rodando em segundo plano, o PID do servidor é o do processo `node` do Vite, não o do `npm`: `lsof -ti tcp:5183 -sTCP:LISTEN` mostra qual é): o primeiro quadro já é o preto da página (recarregar nunca mostra a página sem estilo); "Online" aparece, as linhas do texto sobem, os botões entram, o globo surge e os pontos acendem um a um de oeste para leste; o console fica limpo; `?tema=azul` troca a luz da página e dos pontos;
  - com o mouse no hero: arrastar em cima do globo gira ele, soltar com velocidade deixa ele girando, e os botões por cima continuam clicáveis;
  - rolando devagar e depressa, e de volta: o globo sobe mais devagar que a página e gira; "Perto de quem visita." e "Uma para, outra assume." passam pelos lados dele, e na segunda um ponto da Europa apaga e o vizinho brilha mais; quando o globo sai pelo alto, um ponto se solta e pousa no ponto do ".com" da busca; digitar um nome mostra o cursor laranja, as quatro terminações procuram e respondem (disponível ou já tem dono, com sugestões), e o nome aparece no resumo dos planos e no fecho; mensal e anual rolam os algarismos; o formulário da migração mostra os erros e o "Pedido recebido"; os números chegam desfocados e assentam; o relógio mostra a hora de quem visita; o "Norte" gigante fecha o rodapé;
  - o Tab passa por tudo com o anel laranja visível;
  - no celular (390 × 844) nada rola para o lado (`document.documentElement.scrollWidth` igual à largura da tela): a nav com "Menu", o globo largo no hero, as frases empilhadas, as terminações em duas colunas, as fotos verticais;
  - o `dist/` sobe em qualquer hospedagem estática, inclusive numa subpasta. Confira com um servidor estático de verdade, não com o `vite preview` (ele devolve o `index.html` para qualquer caminho e esconde arquivo faltando): crie uma pasta de teste dentro do projeto (`mkdir -p _teste`), copie o `dist/` para dentro dela com o nome `norte/` (`cp -R dist _teste/norte`), rode `python3 -m http.server 8765 --directory _teste` (ou outra porta, se essa estiver ocupada), abra `http://localhost:8765/norte/` e confira o console sem nenhum 404, o globo com as texturas, as duas fotos e a fonte. Sem navegador, faça essa parte pelo terminal: peça com `curl -I` cada arquivo que o `index.html`, o CSS e o JS do `dist/` citam (a fonte, as texturas, as fotos, os pedaços de JS e o CSS) e confira que todos respondem 200. Só arquivo conta: `href="#…"` e `url(#…)` (âncoras e o filtro SVG) não são arquivos. Depois derrube o servidor e apague a pasta `_teste/`;
  - as conferências de tela (a entrada, o globo, a rolagem, o mouse, o celular) pedem um navegador. Se você não tiver como ver a página, abra o site para a pessoa e confira com ela, item por item, em vez de dar por conferido; se não houver ninguém para olhar, termine dizendo com todas as letras o que ficou sem conferir.
