import Header from "./components/Header";
import CardFeature from "./components/CardFeature";
import Footer from "./components/Footer";

export default function App() {
  const recursos = [
    {
      id: 1,
      icone: "🧩",
      titulo: "Componentização",
      descricao:
        "Código modular dividindo a interface em pequenos blocos fáceis de manter.",
      tag: "React",
    },
    {
      id: 2,
      icone: "🎨",
      titulo: "Tailwind CSS",
      descricao:
        "Estilização utilitária e responsiva aplicada diretamente nos componentes.",
      tag: "CSS",
    },
    {
      id: 3,
      icone: "⚡",
      titulo: "Vite + React",
      descricao: "Servidor local ultrarrápido e estrutura SPA moderna.",
      tag: "Build",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 pb-8 font-sans text-slate-800">
      <Header
        titulo="Meu Projeto Front-end"
        subtitulo="Componentização Reutilizável e Props na Prática"
      />

      <main className="mx-auto max-w-4xl px-4">
        <h2 className="mb-4 text-xl font-bold text-slate-700">
          Recursos do Sistema:
        </h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {recursos.map((item) => (
            <CardFeature
              key={item.id}
              icone={item.icone}
              titulo={item.titulo}
              descricao={item.descricao}
              tag={item.tag}
            />
          ))}
        </div>
      </main>

      <Footer autor="Seu Nome Aqui" />
    </div>
  );
}
