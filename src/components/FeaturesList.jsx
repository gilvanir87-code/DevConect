import { useState } from 'react';

const funcionalidadesIniciais = [
  { icon: '📝', texto: 'Cadastro de novos itens' },
  { icon: '🔍', texto: 'Filtro e busca em tempo real' },
  { icon: '📋', texto: 'Listagem dinâmica de dados' },
  { icon: '📱', texto: 'Interface responsiva e reativa' },
];

export default function FeaturesList() {
  const [funcionalidades, setFuncionalidades] = useState(funcionalidadesIniciais);
  const [novoItem, setNovoItem] = useState('');
  const [mensagem, setMensagem] = useState('Adicione uma funcionalidade ao projeto.');

  const handleChange = (event) => {
    setNovoItem(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const valorLimpo = novoItem.trim();

    if (!valorLimpo) {
      setMensagem('Digite uma funcionalidade antes de enviar.');
      return;
    }

    const novaFuncionalidade = {
      icon: '✨',
      texto: valorLimpo,
    };

    setFuncionalidades((atual) => [...atual, novaFuncionalidade]);
    setNovoItem('');
    setMensagem('Nova funcionalidade adicionada com sucesso!');
  };

  const removerFuncionalidade = (texto) => {
    setFuncionalidades((atual) =>
      atual.filter((item) => item.texto !== texto)
    );
  };

  return (
    <section className="bg-slate-900 py-16 text-white">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-cyan-300">
              Funcionalidades do Projeto
            </p>
            <h2 className="mt-2 text-3xl font-bold text-white">Projeto Pessoal</h2>
          </div>

          <span className="inline-flex items-center rounded-full border border-slate-700 bg-slate-800 px-3 py-2 text-sm text-slate-300">
            {funcionalidades.length} itens ativos
          </span>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mb-8 flex flex-col gap-3 rounded-2xl border border-slate-700 bg-slate-800/80 p-4 shadow-xl shadow-slate-950/30 sm:flex-row"
        >
          <input
            type="text"
            value={novoItem}
            onChange={handleChange}
            placeholder="Ex: dashboard de tarefas"
            className="w-full rounded-xl border border-slate-600 bg-slate-950 px-4 py-3 text-base text-white placeholder:text-slate-400 focus:border-cyan-400 focus:outline-none"
          />
          <button
            type="submit"
            className="rounded-xl bg-cyan-500 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400"
          >
            Adicionar
          </button>
        </form>

        <p className="mb-5 text-sm text-slate-300">{mensagem}</p>

        <ul className="grid gap-4 sm:grid-cols-2">
          {funcionalidades.map((item, index) => (
            <li
              key={`${item.texto}-${index}`}
              className="flex items-center justify-between gap-4 rounded-2xl border border-slate-700 bg-slate-800 p-4"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10 text-2xl">
                  {item.icon}
                </span>
                <span className="text-base text-slate-100">{item.texto}</span>
              </div>

              <button
                type="button"
                onClick={() => removerFuncionalidade(item.texto)}
                className="rounded-lg border border-slate-600 px-3 py-1.5 text-sm text-slate-200 transition hover:border-rose-400 hover:text-rose-300"
              >
                Remover
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
