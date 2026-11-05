export default function Footer({ autor }) {
  return (
    <footer className="mt-12 border-t border-slate-200 py-4 text-center text-xs text-slate-500">
      <p>
        Desenvolvido por <strong>{autor}</strong> | EFG / UFG - 2026
      </p>
    </footer>
  );
}