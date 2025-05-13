import Link from 'next/link';

const projects = [
  {
    id: 1,
    title: "CS50P - Introdução à Programação com Python (Harvard)",
    description: "Exercícios práticos do curso CS50P da Universidade de Harvard, focado na introdução à programação com Python. O curso abrange conceitos fundamentais como tratamento de exceções, depuração de código (debugging), escrita de testes unitários, utilização de bibliotecas de terceiros, aplicação de expressões regulares para validação e extração de dados, princípios de Programação Orientada a Objetos (OOP) incluindo classes e objetos, além de técnicas para manipulação de arquivos.",
    link: "https://github.com/danielcscarrtezini/CS50P-Harvard-s-Introduction-to-Programming-with-Python",
    technology: "Python"
  },
  {
    id: 2,
    title: "Habit Tracker (Aplicativo de Acompanhamento de Hábitos)",
    description: "Uma aplicação desenvolvida para auxiliar no monitoramento e gerenciamento de hábitos diários. Este projeto visa fornecer uma ferramenta simples e eficaz para que os usuários possam registrar e acompanhar seu progresso na formação de novos hábitos ou na manutenção dos existentes. (Mais detalhes sobre funcionalidades específicas podem ser adicionados conforme o desenvolvimento ou um README mais completo seja disponibilizado).",
    link: "https://github.com/danielcscarrtezini/habit_tracker",
    technology: "Python"
  }
];

export default function ProjectsPage() {
  return (
    <main className="flex flex-col items-center min-h-screen p-8 bg-gray-50 text-gray-800">
      <div className="max-w-4xl w-full">
        <header className="text-center mb-10">
          <h1 className="text-4xl font-bold text-blue-600">Meus Projetos</h1>
          <p className="text-xl text-gray-600 mt-2">Uma visão geral dos meus trabalhos e estudos recentes.</p>
        </header>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white shadow-xl rounded-lg p-6 flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-semibold text-gray-700 mb-3">{project.title}</h2>
                <p className="text-gray-600 leading-relaxed mb-4 whitespace-pre-line">{project.description}</p>
                <p className="text-sm text-gray-500 mb-1"><strong>Tecnologia:</strong> {project.technology}</p>
              </div>
              <Link href={project.link} legacyBehavior>
                <a target="_blank" rel="noopener noreferrer" className="mt-4 inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg text-center transition duration-300 ease-in-out transform hover:-translate-y-0.5">
                  Ver no GitHub
                </a>
              </Link>
            </div>
          ))}
        </div>

        <footer className="text-center mt-12">
          <Link href="/" legacyBehavior>
            <a className="text-blue-600 hover:text-blue-800 font-semibold">
              &larr; Voltar para a Página Inicial
            </a>
          </Link>
        </footer>
      </div>
    </main>
  );
}

