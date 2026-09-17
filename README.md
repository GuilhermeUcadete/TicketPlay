# TicketPlay

Aplicação mobile em desenvolvimento para centralizar eventos e ingressos em um único aplicativo.

O projeto está sendo desenvolvido em equipe durante a graduação em Engenharia de Software na FIAP e recebe novas funcionalidades conforme as etapas propostas na disciplina.

> **Status atual:** em desenvolvimento.

## Integrantes

| Nome                  | RM       | GitHub                                                   |
| --------------------- | -------- | -------------------------------------------------------- |
| Eduardo da Silva Lima | RM554804 | [@Eduardo-25](https://github.com/Eduardo-25)             |
| Estevam Melo          | RM555124 | [@StkStevens](https://github.com/StkStevens)             |
| Enzo Bonacasata Motta | RM555372 | [@Enzo-B-Motta](https://github.com/Enzo-B-Motta)         |
| Guilherme Ulacco      | RM558418 | [@GuilhermeUcadete](https://github.com/GuilhermeUcadete) |
| Matheus Hostim        | RM556517 | [@MatheusHostim](https://github.com/MatheusHostim)       |

---

## Tecnologias utilizadas

O projeto utiliza React Native e Expo como base para o desenvolvimento da aplicação mobile.

| Tecnologia                                                                  | Utilização                                |
| --------------------------------------------------------------------------- | ----------------------------------------- |
| [React Native](https://reactnative.dev/)                                    | Desenvolvimento da aplicação mobile       |
| [Expo](https://expo.dev/)                                                   | Ambiente e ferramentas de desenvolvimento |
| [Expo Router](https://docs.expo.dev/router/introduction/)                   | Navegação e organização das rotas         |
| JavaScript                                                                  | Linguagem utilizada no desenvolvimento    |
| [Axios](https://axios-http.com/)                                            | Requisições HTTP                          |
| [AsyncStorage](https://react-native-async-storage.github.io/async-storage/) | Armazenamento local                       |

O projeto também utiliza bibliotecas do ecossistema React Navigation e React Native para componentes e funcionalidades da aplicação.

## Instalação

Clone o repositório:

```bash
git clone https://github.com/GuilhermeUcadete/TicketPlay.git
```

Entre na pasta:

```bash
cd TicketPlay
```

Instale as dependências:

```bash
npm install
```

## Executando o projeto

Para iniciar o Expo:

```bash
npx expo start
```

Também é possível utilizar:

```bash
npm start
```

Depois de iniciar, o Expo disponibiliza opções para executar o projeto em diferentes ambientes.

### Navegador

```bash
npm run web
```

### Android

```bash
npm run android
```

### iOS

```bash
npm run ios
```

Para testes em dispositivo físico, também é possível utilizar o Expo Go.

Os scripts acima estão definidos no `package.json` atual do projeto.

---

# Documento de Escopo

## Problema

Encontrar e comprar ingressos para eventos pode exigir o uso de diferentes plataformas, dificultando a comparação de informações como datas, horários, locais e disponibilidade.

Além disso, organizadores de eventos precisam de ferramentas que ajudem na divulgação dos eventos, gerenciamento das vendas e acompanhamento dos ingressos.

O TicketPlay foi pensado como uma plataforma para centralizar essas experiências em um único aplicativo.

### Principais problemas identificados

* Informações de eventos espalhadas em diferentes plataformas.
* Dificuldade para comparar informações e encontrar eventos.
* Processos de compra que podem ser demorados.
* Necessidade de ferramentas para organizadores acompanharem vendas.
* Dificuldade de divulgação de eventos menores.

## Público-alvo

O projeto considera dois grupos principais.

### Público primário

Pessoas interessadas em shows, festivais, palestras, congressos, eventos esportivos e eventos culturais, especialmente usuários que preferem pesquisar e comprar ingressos pela internet.

### Público secundário

Organizadores de eventos, produtores independentes, instituições de ensino e responsáveis por eventos esportivos e culturais.

## Proposta de valor

A proposta do TicketPlay é reunir informações e funcionalidades relacionadas a eventos e ingressos em uma única aplicação.

Entre os diferenciais planejados estão a centralização dos eventos, busca facilitada, acesso digital aos ingressos e recursos voltados para organizadores.

> As funcionalidades descritas no documento de escopo representam a proposta do produto e não significam que todas já estejam implementadas na versão atual.

---

# Desenvolvimento da marca

## Nome

### TicketPlay

O nome combina *Ticket* (ingresso) e *Play* (diversão/entretenimento), representando a proposta de facilitar o acesso a eventos e experiências de entretenimento.

**Slogan:**
*"Seu próximo evento começa aqui."*

## Identidade visual

A identidade visual foi pensada para combinar elementos relacionados a entretenimento, tecnologia e facilidade de uso.

### Paleta de cores

| Cor         | Código    | Utilização                    |
| ----------- | --------- | ----------------------------- |
| Roxo        | `#7C3AED` | Destaques e elementos visuais |
| Azul escuro | `#2563EB` | Botões e elementos principais |
| Branco      | `#FFFFFF` | Fundo                         |
| Preto       | `#000000` | Texto                         |

### Tipografia

**Títulos:** Poppins Bold

**Textos:** Inter Regular

As fontes foram escolhidas buscando manter boa legibilidade e uma identidade visual adequada para uma aplicação mobile.

---

# Ideia de negócio

A parte de negócio representa uma proposta para o produto e poderá ser alterada conforme o desenvolvimento do projeto.

## Modelo de negócio

Uma das possibilidades estudadas é um modelo híbrido, combinando comissão sobre vendas, planos para organizadores e divulgação de eventos.

### Comissão sobre vendas

Cobrança de uma pequena taxa sobre ingressos vendidos pela plataforma.

### Plano freemium

**Plano gratuito**

* Cadastro de eventos.
* Venda básica de ingressos.
* Relatórios simples.

**Plano premium**

* Destaque de eventos.
* Relatórios avançados.
* Ferramentas adicionais de divulgação.
* Suporte prioritário.

### Divulgação de eventos

Organizadores poderiam pagar para destacar seus eventos dentro da plataforma.

### Parcerias

Também foi considerada a possibilidade de parcerias com empresas de alimentação, hospedagem, transporte e outros serviços relacionados a eventos.

## Diferenciais planejados

O projeto também considera funcionalidades que podem ser desenvolvidas nas próximas etapas, como:

* recomendação de eventos com base nos interesses do usuário;
* sugestões relacionadas à localização;
* avaliações de eventos;
* atualização da disponibilidade de ingressos;
* carteira digital;
* maior destaque para eventos locais.

Esses itens fazem parte da proposta do produto e podem ser alterados conforme os requisitos das próximas etapas.

---

# Protótipos das telas

As telas abaixo foram desenvolvidas como parte do planejamento visual do projeto e servem como referência para o desenvolvimento da aplicação.

## Login ou cadastro

A tela prevê o acesso de usuários cadastrados e a criação de novas contas.

<img width="351" height="716" alt="Protótipo de login e cadastro" src="https://github.com/user-attachments/assets/af01035d-adca-475d-8229-0cb04d844b8d" />

## Página inicial

A página inicial foi planejada com busca de eventos, destaques e categorias de navegação.

Entre as categorias previstas estão:

* Início
* Shows
* Filmes
* Perfil
* Ingressos

<img width="318" height="664" alt="Protótipo da página inicial" src="https://github.com/user-attachments/assets/55ec4279-034f-4f34-a23d-39bb261c5b88" />

## Pagamento

A tela de pagamento foi planejada com diferentes formas de pagamento, incluindo PIX, cartão e boleto.

<img width="348" height="701" alt="Protótipo da tela de pagamento" src="https://github.com/user-attachments/assets/669bd614-cc70-4ad1-919f-dfb787e2bc99" />

## Meus ingressos

A tela foi planejada para reunir os ingressos associados ao usuário, incluindo QR Code, histórico de eventos e opções de compartilhamento.

<img width="942" height="609" alt="Protótipo da tela de ingressos" src="https://github.com/user-attachments/assets/5f59b2ba-ee05-4a11-a3c6-1b5e38cfb8fa" />

## Perfil do usuário

A tela de perfil prevê informações do usuário e opções para alteração dos dados cadastrados.

<img width="406" height="740" alt="Protótipo do perfil do usuário" src="https://github.com/user-attachments/assets/17d99744-5aaf-4052-afc9-7beb894a3cda" />

---

# Desenvolvimento

O TicketPlay está sendo desenvolvido por etapas. A cada nova atividade proposta na disciplina, novas funcionalidades e requisitos são incorporados ao projeto.

Por esse motivo, o estado atual do aplicativo pode ser diferente dos protótipos e da proposta inicial descrita neste README.

O repositório é atualizado conforme o desenvolvimento continua.
