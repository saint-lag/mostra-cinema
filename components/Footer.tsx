
export default function Footer() {
    return (
      <footer className="border-t border-zinc-200 py-8 text-sm text-zinc-500 dark:border-zinc-800">
        <div className="mx-auto max-w-6xl px-4">
          <p>© {new Date().getFullYear()} Mostra de Cinema — Exibição via YouTube.</p>
        </div>
      </footer>
    );
  }
    