
# PortfolioHUB — Portfólio Digital

**Autor:** Daniel Scartezini

**GitHub:** [danielscartezini](https://github.com/danielscartezini)

## 1. Sobre o Projeto

O PortfolioHUB é um portfólio digital desenvolvido para centralizar e apresentar meus projetos acadêmicos, estudos e experiências na área de tecnologia e desenvolvimento de software.

O projeto faz parte da atividade acadêmica de criação de repositório com versionamento, com o objetivo de aplicar boas práticas de organização, documentação, controle de versão e compartilhamento de projetos.

A plataforma também busca contribuir para a construção do meu perfil profissional e facilitar o acesso aos meus trabalhos.

## 2. Objetivos

- Desenvolver um portfólio pessoal para apresentar projetos acadêmicos e pessoais.
- Aplicar conceitos de desenvolvimento web utilizando Next.js e TypeScript.
- Praticar o controle de versão com Git e GitHub.
- Organizar e documentar projetos utilizando arquivos README.md.
- Disponibilizar os projetos para consulta pública.
- Integrar o portfólio às minhas plataformas profissionais.

## 3. Tecnologias Utilizadas

| Tecnologia | Finalidade |
|---|---|
| Next.js | Framework utilizado no desenvolvimento da aplicação web. |
| React | Construção de componentes e interfaces. |
| TypeScript | Tipagem estática e organização do código. |
| Tailwind CSS | Estilização e construção da interface. |
| Git | Controle de versão do projeto. |
| GitHub | Hospedagem do código e gerenciamento do repositório. |

## 4. Funcionalidades

O portfólio possui as seguintes funcionalidades:

- Página inicial com apresentação pessoal.
- Seção sobre mim, com informações sobre meus interesses profissionais.
- Página de projetos com descrição e tecnologias utilizadas.
- Links para acessar os repositórios dos projetos no GitHub.
- Navegação entre a página inicial e a página de projetos.
- Interface organizada e responsiva, utilizando classes do Tailwind CSS.

## 5. Projetos em Destaque

### 5.1 CS50P — Introdução à Programação com Python

Projeto acadêmico relacionado ao curso CS50P, da Universidade de Harvard.

O repositório reúne exercícios práticos de programação em Python e estudos sobre fundamentos da linguagem, incluindo tratamento de exceções, testes, depuração, expressões regulares, programação orientada a objetos e manipulação de arquivos.

- **Tecnologia:** Python
- **Repositório:** [CS50P - Harvard](https://github.com/danielscartezini/CS50P-Harvard-s-Introduction-to-Programming-with-Python)

### 5.2 Habit Tracker — Acompanhamento de Hábitos

Projeto de aplicação voltada ao registro e acompanhamento de hábitos diários.

A proposta é auxiliar na organização pessoal e no acompanhamento do progresso na criação e manutenção de hábitos.

- **Tecnologia:** Python
- **Repositório:** [Habit Tracker](https://github.com/danielscartezini/habit_tracker)

## 6. Estrutura do Repositório

A estrutura principal do projeto está organizada da seguinte forma:

```text
portifoliohub/
├── migrations/
├── src/
│   ├── app/
│   │   ├── projects/
│   │   │   └── page.tsx
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   └── ui/
│   ├── hooks/
│   └── lib/
├── public/
├── README.md
├── package.json
├── next.config.ts
├── tailwind.config.ts
└── tsconfig.json
```

A pasta `src/app` contém as páginas e os estilos principais da aplicação.

O arquivo `src/app/page.tsx` representa a página inicial, enquanto `src/app/projects/page.tsx` contém a página de projetos.

A pasta `src/components` é destinada aos componentes reutilizáveis, e as pastas `hooks` e `lib` organizam funções auxiliares e lógica compartilhada.

## 7. Como Executar o Projeto Localmente

### Pré-requisitos

É necessário possuir o Node.js e um gerenciador de pacotes compatível com o projeto instalado.

### Clonar o repositório

```bash
git clone https://github.com/danielscartezini/portifoliohub.git
```

Acessar a pasta do projeto:

```bash
cd portifoliohub
```

Instalar as dependências:

```bash
npm install
```

Iniciar o servidor de desenvolvimento:

```bash
npm run dev
```

Após iniciar o servidor, acessar no navegador:

http://localhost:3000

Para encerrar o servidor, utilizar `Ctrl + C` no terminal.

## 8. Versionamento e Controle de Versão

O projeto utiliza Git para registrar as alterações realizadas no código-fonte e GitHub para hospedar o repositório.

As alterações são organizadas por meio de commits, permitindo acompanhar a evolução do projeto e manter um histórico de desenvolvimento.

Exemplos de mensagens de commit:

```text
docs: adiciona documentação do PortfolioHUB
feat: melhora página inicial do portfólio
feat: organiza apresentação dos projetos
fix: corrige links dos repositórios
```

A versão 1.0 será identificada por meio de uma tag Git após a conclusão e validação da versão inicial do portfólio.

## 9. Publicação e Compartilhamento

O código-fonte do projeto está disponível no GitHub:

[https://github.com/danielscartezini/portifoliohub](https://github.com/danielscartezini/portifoliohub)

A publicação da página web será realizada por meio de uma plataforma de hospedagem compatível com o projeto Next.js, conforme a configuração de implantação adotada.

Após a publicação, o endereço do site será disponibilizado nesta documentação.

## 10. Considerações Finais

O PortfolioHUB representa uma etapa importante do meu desenvolvimento acadêmico e profissional.

Por meio deste projeto, aplico conhecimentos de desenvolvimento web, organização de código, versionamento com Git e documentação de software.

O portfólio continuará sendo atualizado com novos projetos, estudos e experiências, acompanhando minha evolução na área de tecnologia.

---

Desenvolvido por **Daniel Scartezini**.

Projeto acadêmico — Criação de Repositório com Versionamento.
