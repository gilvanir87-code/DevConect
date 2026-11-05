export default function CardFeature({ icone, titulo, descricao, tag }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md">
      <div className="mb-3 flex items-center justify-between">
        <span className="text-3xl">{icone}</span>
        {tag && (
          <span className="rounded-full bg-indigo-50 px-2.5 py-1 text-xs font-medium text-indigo-600">
            {tag}
          </span>
        )}
      </div>
      <h3 className="text-lg font-bold text-slate-800">{titulo}</h3>
      <p className="mt-2 text-sm text-slate-600">{descricao}</p>
    </div>
  );
}