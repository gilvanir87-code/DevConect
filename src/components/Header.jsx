export default function Header({ titulo, subtitulo }) {
  return (
    <header className="mb-8 rounded-b-xl bg-indigo-600 px-4 py-6 text-center text-white shadow-md">
      <h1 className="text-3xl font-bold">{titulo}</h1>
      <p className="mt-2 text-sm text-indigo-100 md:text-base">{subtitulo}</p>
    </header>
  );
}