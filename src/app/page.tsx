import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8 bg-gray-50 text-gray-800">
      <div className="max-w-2xl w-full bg-white shadow-xl rounded-lg p-10">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-blue-600">Daniel Scartezini</h1>
          <p className="text-xl text-gray-600 mt-2">Portfólio Digital e Projetos</p>
        </header>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-3">Sobre Mim</h2>
          <p className="text-gray-600 leading-relaxed">
            Olá! Sou Daniel Scartezini, um entusiasta de tecnologia e desenvolvimento de software, atualmente buscando oportunidades de estágio para aplicar e expandir meus conhecimentos.
            Este espaço centraliza meus projetos e contribuições.
          </p>
          <p className="text-gray-600 leading-relaxed mt-2">
            Você pode encontrar mais sobre meu trabalho e contribuições no meu perfil do GitHub.
          </p>
        </section>

        <section className="text-center mb-8">
          <Link href="https://github.com/danielcscarrtezini" legacyBehavior>
            <a target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1">
              Visite meu GitHub
            </a>
          </Link>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-700 mb-3">Projetos em Destaque</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Acesse a seção de projetos para ver mais detalhes sobre o que tenho desenvolvido.
          </p>
          <div className="text-center">
            <Link href="/projects" legacyBehavior>
              <a className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1">
                Ver Projetos
              </a>
            </Link>
          </div>
        </section>

        <footer className="text-center mt-10 pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-500">
            Plataforma desenvolvida com Next.js e Tailwind CSS.
          </p>
        </footer>
      </div>
    </main>
  );
}

