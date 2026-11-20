# Codi Signal — Guia completo do repositório

## 1. O que é o Codi Signal

O Codi Signal é um cockpit operacional para desenhar, simular e acompanhar automações inteligentes. A proposta do produto é tornar cada automação compreensível: a equipe consegue visualizar qual sinal aconteceu, qual regra foi avaliada, qual ação foi executada e qual foi o resultado final.

O projeto foi criado para representar a marca Codi como uma startup de tecnologia orientada a automação, inteligência operacional e clareza de processos. Em vez de apresentar apenas uma interface estática, o Codi Signal possui um fluxo funcional de simulação executado diretamente no navegador.

O produto trabalha com um modelo simples:

1. Um sinal representa um evento operacional.
2. Uma regra decide se esse evento deve gerar uma resposta.
3. Uma ação define o próximo passo.
4. Um run registra o resultado para consulta posterior.

## 2. Problema que o produto resolve

Em muitas equipes, os eventos aparecem em ferramentas diferentes, enquanto as regras de decisão ficam espalhadas em documentos, chats ou na memória das pessoas. Isso torna difícil responder perguntas como: o que disparou esta ação, qual condição foi avaliada, quem deveria ser avisado e se a automação realmente funcionou.

O Codi Signal organiza esse fluxo em uma única experiência. Ele ajuda equipes de produto, operações, engenharia e suporte a entender a relação entre eventos e automações antes de conectá-los a serviços externos.

## 3. Funcionalidades principais

### Dashboard Overview

A tela Overview é a visão geral do workspace. Ela reúne os principais indicadores do sistema:

- Total de execuções.
- Taxa de sucesso.
- Tempo médio entre o gatilho e a ação.
- Quantidade de sinais processados.
- Stream de sinais que precisam de atenção.
- Saúde dos workflows ativos.
- Gráfico de volume de execuções nos últimos sete dias.
- Acesso à documentação contextual.

Os números exibidos são dados de demonstração e também podem ser atualizados pela simulação local.

### Signal Stream

O Signal Stream apresenta os eventos operacionais que entram no sistema. Cada sinal possui:

- Tipo do evento.
- Título e descrição.
- Origem do evento.
- Horário relativo.
- Nível de severidade.
- Payload JSON de exemplo.

Os sinais incluídos no projeto representam situações comuns em operações de tecnologia:

- Violação de latência do checkout.
- Falha em pipeline de deploy.
- Pico de uso de uma workspace.
- Mudança negativa de sentimento de clientes.

Os sinais são selecionáveis. Quando um sinal é escolhido, ele fica disponível para inspeção e simulação.

### Signal Library

A página Signals funciona como uma biblioteca detalhada de eventos. Ela divide a tela entre a lista de sinais e o inspector do sinal selecionado.

No inspector, o usuário visualiza o payload original, a severidade, a origem e a descrição do evento. Também é possível copiar o payload para a área de transferência ou iniciar uma simulação diretamente daquele sinal.

A ideia importante é que sinais sejam tratados como eventos imutáveis. Em uma implementação conectada a serviços reais, o payload original seria preservado para garantir rastreabilidade e auditoria.

### Workflow Catalog

A área Workflows apresenta o catálogo de automações disponíveis. Cada workflow possui:

- Nome.
- Descrição.
- Status.
- Gatilho.
- Condição.
- Ação.
- Quantidade histórica de execuções.
- Indicador de saúde.
- Última execução.

Os status usados pelo produto são:

- **Active:** automação pronta para executar.
- **Testing:** automação em fase de validação.
- **Paused:** automação temporariamente interrompida.

É possível selecionar workflows, alternar entre pausado e ativo e visualizar o detalhe completo de uma automação.

### Visual Workflow Canvas

Ao abrir um workflow, o usuário encontra um canvas vertical com as etapas da automação. O canvas mostra visualmente o caminho percorrido pelo evento:

1. Recebimento do sinal.
2. Avaliação da regra.
3. Verificação de condição.
4. Execução de uma ação.
5. Conclusão ou encaminhamento.

Cada etapa informa se representa um trigger, uma regra ou uma ação. O canvas utiliza uma representação visual baseada em nós conectados, deixando clara a sequência lógica da automação.

### Rule Editor

O Rule Editor apresenta os elementos que determinam quando um workflow deve agir:

- Trigger obrigatório.
- Condition editável.
- Action obrigatória.
- Threshold configurável.

Atualmente, o threshold é salvo localmente durante a sessão do navegador. Isso permite demonstrar como uma regra poderia ser ajustada sem exigir uma API ou um banco de dados.

### Local Simulation

A simulação é o principal comportamento funcional do projeto. Para iniciar uma execução, o usuário pode clicar em **Simulate signal**, **Run now** ou **Simulate this signal**.

Durante a simulação, o aplicativo:

1. Identifica o sinal selecionado.
2. Escolhe o workflow correspondente.
3. Verifica se o workflow está pausado.
4. Cria um novo registro de execução.
5. Atualiza a quantidade de runs e sinais processados.
6. Processa as etapas em sequência com pequenos intervalos visuais.
7. Atualiza o status de cada etapa.
8. Calcula uma duração de execução.
9. Marca o resultado final como `Succeeded`.
10. Exibe uma notificação de sucesso.

Se o workflow estiver pausado, a simulação não é executada e o produto informa que é necessário retomá-lo antes.

### Runs e Execution History

A página Runs funciona como um histórico de execuções. Cada registro apresenta:

- Sinal que iniciou a execução.
- Workflow executado.
- Status final.
- Duração.
- Momento da conclusão.
- Etapa responsável pelo resultado.

O projeto começa com alguns registros históricos simulados. Quando o usuário executa uma nova simulação, o novo run aparece no topo da lista como `Succeeded`.

A tabela também possui estados para execuções puladas, permitindo representar casos em que uma regra não corresponde ao evento recebido.

### Feedbacks e estados de interface

A interface possui feedbacks para tornar as operações compreensíveis:

- Toast de início da simulação.
- Toast de conclusão bem-sucedida.
- Toast de erro quando a ação não pode ser executada.
- Empty state quando não existem resultados para uma busca ou filtro.
- Indicadores de workflow ativo, em teste ou pausado.
- Indicador de sistemas nominais.
- Estado de ingestão ao vivo no Signal Stream.

## 4. Identidade visual

O Codi Signal segue uma direção visual baseada em três materiais:

- **Obsidian:** usado no fundo profundo, no contraste e na sensação de produto premium.
- **Carbon:** usado nos painéis, bordas e superfícies de trabalho.
- **Emerald:** usado como cor de ação, estado saudável, foco e assinatura da marca.

A interface usa tipografia Manrope para leitura e hierarquia, com DM Mono em payloads, números e detalhes técnicos. A composição evita excesso de decoração e prioriza densidade informacional, contraste e sensação de ferramenta profissional.

O layout é responsivo. Em telas menores, a navegação lateral se transforma em uma barra compacta, os grids passam para uma coluna e os painéis continuam acessíveis sem depender de scroll horizontal.

## 5. Arquitetura técnica

O projeto utiliza uma arquitetura frontend-first e não depende de um backend para funcionar.

### Stack

- JavaScript modular.
- Vite 5 como servidor de desenvolvimento e bundler.
- CSS puro com custom properties.
- HTML sem framework visual externo.
- SVG inline para ícones.
- Nenhuma chave de API necessária.
- Nenhum banco de dados necessário.
- Nenhum serviço externo necessário para executar a demonstração.

Essa escolha torna o projeto leve, fácil de clonar e simples de adaptar para uma futura camada de produção.

### Estado da aplicação

O estado atual é mantido em memória no módulo `src/main.js`. Ele controla:

- Página ativa.
- Sinal selecionado.
- Workflow selecionado.
- Filtros.
- Termo de busca.
- Status de simulação.
- Notificações.
- Métricas.
- Histórico de runs.

Como o estado é local, uma atualização completa da página retorna o produto ao estado inicial de demonstração. Essa é uma decisão intencional para manter o repositório independente de autenticação, banco e infraestrutura externa.

## 6. Estrutura do repositório

```text
.
├── .gitignore
├── README.md
├── TODO.md
├── app.config.ts
├── index.html
├── package.json
├── package-lock.json
├── public/
│   ├── codi-mark.svg
│   └── manus-routes.json
├── docs/
│   └── REPOSITORY-GUIDE-PT-BR.md
└── src/
    ├── main.js
    └── styles.css
```

### Responsabilidade dos arquivos

**`index.html`** é o documento de entrada do Vite. Ele define o idioma, o viewport, metadados básicos e o ponto onde a aplicação é montada.

**`src/main.js`** contém os dados de demonstração, a renderização das telas, o estado da aplicação, os eventos de interação e a lógica do simulador local.

**`src/styles.css`** contém o sistema visual completo: cores, tipografia, painéis, tabelas, canvas, estados de interação, animações e breakpoints responsivos.

**`public/manus-routes.json`** declara as rotas reconhecidas pelo runtime do projeto: Overview, Workflows, Signals e Runs.

**`public/codi-mark.svg`** é o ícone visual usado para representar a identidade Codi no projeto.

**`app.config.ts`** mantém o metadata de identidade do projeto, incluindo o endereço HTTPS do logo.

**`README.md`** é a documentação principal em inglês para instalação, uso, stack e validação.

**`TODO.md`** registra os critérios de entrega e o estado de conclusão do produto.

**`package.json`** define os scripts de desenvolvimento e build.

## 7. Como instalar

O projeto requer Node.js 18 ou superior e npm 9 ou superior.

```bash
npm install
npm run dev
```

Depois, abra a URL informada pelo Vite. Para criar a versão de produção:

```bash
npm run build
```

Para servir o build localmente:

```bash
npm run preview
```

## 8. Scripts disponíveis

### `npm run dev`

Inicia o servidor Vite no host `0.0.0.0` e na porta 3000, permitindo uso no Preview gerenciado.

### `npm run build`

Compila o projeto para a pasta `dist/`. O comando foi usado para validar a entrega final.

### `npm run preview`

Inicia um servidor local para revisar o resultado compilado.

## 9. Fluxo recomendado de uso

1. Abra o Overview para entender o estado geral do workspace.
2. Observe o Signal Stream e escolha um evento, como `Checkout latency breached`.
3. Clique em `Simulate signal` ou `Run now`.
4. Observe a notificação de início e o processamento das etapas.
5. Abra Runs e confirme o novo registro como `Succeeded`.
6. Acesse Workflows para inspecionar o canvas e alterar o threshold.
7. Acesse Signals para conferir o payload original do evento.
8. Abra Documentation ou `Read the model` para entender o conceito de signal, rule e action.

## 10. O que é demonstração e o que é produção

O Codi Signal já possui comportamento real no navegador, mas os dados ainda são locais e de demonstração. A aplicação não envia alertas reais, não cria tickets em serviços externos e não persiste dados em um banco.

Para transformar o projeto em uma plataforma de produção, seria necessário adicionar:

- API para armazenar workflows, sinais e runs.
- Banco de dados para persistência.
- Autenticação e workspaces reais.
- Integrações com GitHub, Slack, PagerDuty, Linear, Datadog ou ferramentas semelhantes.
- Motor de execução de workflows no servidor.
- Controle de permissões por usuário e equipe.
- Logs persistentes e auditoria.
- Fila para execução assíncrona.
- Webhooks e políticas de retry.

A separação atual entre UI, dados de demonstração e funções de simulação deixa o projeto preparado para receber essa evolução sem precisar redesenhar a experiência principal.

## 11. Inteligência artificial

O blueprint do produto reservou espaço para um recurso chamado **Signal Copilot**, que poderia receber uma descrição em linguagem natural e sugerir trigger, condição e action para um novo workflow. Essa capacidade não foi ativada na primeira versão, porque o objetivo desta entrega foi manter o produto autocontido e executável sem credenciais externas.

O layout e a organização do Codi Signal já permitem adicionar esse recurso posteriormente como um painel de sugestão conectado a um modelo de linguagem.

## 12. Validação realizada

A entrega foi validada com:

- Build de produção usando `npm run build`.
- Verificação do manifesto de rotas.
- Verificação do servidor Preview na porta 3000.
- Revisão visual em desktop.
- Revisão visual em mobile.
- Navegação entre Overview e Runs.
- Execução de uma simulação real no navegador.
- Confirmação de que o novo run foi criado com status `Succeeded`.
- Confirmação de que o repositório GitHub está público e usa a branch `main`.

## 13. Repositório público

O código está publicado em:

[https://github.com/codi-startup/codi-signal](https://github.com/codi-startup/codi-signal)

O repositório foi criado como um novo projeto público. Nenhum repositório existente foi alterado.

## 14. Próximos passos recomendados

A evolução mais natural é substituir os dados locais por uma API persistente, mantendo a mesma interface. Em seguida, o projeto pode ganhar autenticação, integrações de sinais, um motor de execução em background e o Signal Copilot para gerar workflows a partir de descrições em linguagem natural.

Outra evolução importante seria permitir que os nós do canvas fossem editáveis por drag-and-drop e que cada execução pudesse abrir um inspector detalhado com payload, decisões da regra, logs e tempo de cada etapa.
