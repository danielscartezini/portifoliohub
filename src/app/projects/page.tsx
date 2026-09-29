
import Link from 'next/link';

const projects = [
  {
    id: 1,
    title: 'CS50P - Introdução à Programação com Python (Harvard)',
    description:
      'Exercícios práticos do curso CS50P da Universidade de Harvard, com foco nos fundamentos da programação com Python. O conteúdo inclui tratamento de exceções, depuração, testes unitários, bibliotecas de terceiros, expressões regulares, programação orientada a objetos e manipulação de arquivos.',
    link: 'https://github.com/danielscartezini/CS50Python',
    technology: 'Python',
  },
  {
    id: 2,
    title: 'Habit Tracker - Acompanhamento de Hábitos',
    description:
      'Aplicação desenvolvida para auxiliar no registro e acompanhamento de hábitos diários. O projeto tem como objetivo apoiar a organização pessoal e permitir que o usuário acompanhe seu progresso na criação e manutenção de hábitos.',
    link: 'https://github.com/danielscartezini/habit_tracker',
    technology: 'Python',
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-gray-50 px-6 py-12 text-gray-800">
      <div className="mx-auto max-w-5xl">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-blue-600">
            Meus Projetos
          </h1>

          <p className="mt-3 text-lg text-gray-600">
            Uma visão geral dos meus trabalhos acadêmicos
            e projetos de desenvolvimento.
          </p>
        </header>

        <section
          aria-label="Lista de projetos"
          className="grid gap-8 md:grid-cols-2"
        >
          {projects.map((project) => (
            <article
              key={project.id}
              className="flex flex-col justify-between rounded-xl bg-white p-6 shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div>
                <span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
                  {project.technology}
                </span>

                <h2 className="mb-4 mt-4 text-2xl font-semibold text-gray-800">
                  {project.title}
                </h2>

                <p className="leading-relaxed text-gray-600">
                  {project.description}
                </p>
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block rounded-lg bg-blue-600 px-5 py-3 text-center font-semibold text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Ver projeto no GitHub
              </a>
            </article>
          ))}
        </section>

        <footer className="mt-12 text-center">
          <Link
            href="/"
            className="font-semibold text-blue-600 hover:text-blue-800"
          >
            &larr; Voltar para a página inicial
          </Link>
        </footer>
      </div>
    </main>
  );
}
