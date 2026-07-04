export default function Home() {
  return (
    <div className="flex min-h-full flex-col bg-zinc-950 font-sans text-zinc-50">
      <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col justify-center gap-8 px-6 py-24">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-400">
          Portfolio
        </p>
        <div className="space-y-4">
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Hello, I&apos;m building my portfolio.
          </h1>
          <p className="max-w-xl text-lg leading-8 text-zinc-400">
            This Next.js app is ready for projects, experience, and contact
            sections. Edit <code className="text-zinc-200">src/app/page.tsx</code>{" "}
            to start customizing.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a
            href="https://github.com/ike-gagagami97/portfolio"
            className="rounded-full bg-zinc-50 px-5 py-2.5 text-sm font-medium text-zinc-950 transition hover:bg-zinc-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>
          <a
            href="https://nextjs.org/docs"
            className="rounded-full border border-zinc-700 px-5 py-2.5 text-sm font-medium text-zinc-200 transition hover:border-zinc-500 hover:bg-zinc-900"
            target="_blank"
            rel="noopener noreferrer"
          >
            Next.js Docs
          </a>
        </div>
      </main>
    </div>
  );
}
