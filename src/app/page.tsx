import { experiences, profile } from "@/data/profile";

function SectionHeading({
  label,
  title,
}: {
  label: string;
  title: string;
}) {
  return (
    <div className="space-y-2">
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
        {label}
      </p>
      <h2 className="text-2xl font-semibold tracking-tight text-zinc-50 sm:text-3xl">
        {title}
      </h2>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-full bg-zinc-950 font-sans text-zinc-50">
      <header className="border-b border-zinc-800/80">
        <div className="mx-auto flex w-full max-w-4xl flex-col gap-6 px-6 py-16 sm:py-20">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
            Portfolio
          </p>
          <div className="space-y-4">
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              {profile.role}
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-zinc-400">
              {profile.tagline}
            </p>
          </div>
          <ul className="flex flex-wrap gap-2">
            {profile.focusAreas.map((area) => (
              <li
                key={area}
                className="rounded-full border border-zinc-800 bg-zinc-900/80 px-3 py-1 text-sm text-zinc-300"
              >
                {area}
              </li>
            ))}
          </ul>
        </div>
      </header>

      <main className="mx-auto w-full max-w-4xl px-6 py-16 sm:py-20">
        <div className="flex flex-col gap-20">
          <section aria-labelledby="about-heading" className="space-y-8">
            <SectionHeading label="About" title="自己紹介" />
            <div className="space-y-5 text-base leading-8 text-zinc-300">
              {profile.introduction.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </section>

          <section aria-labelledby="experience-heading" className="space-y-10">
            <SectionHeading label="Experience" title="職歴" />
            <ol className="relative space-y-12 border-l border-zinc-800 pl-8">
              {experiences.map((experience) => (
                <li key={experience.company} className="relative">
                  <span
                    aria-hidden="true"
                    className="absolute -left-[2.05rem] top-2 h-3 w-3 rounded-full border-2 border-zinc-950 bg-sky-400"
                  />
                  <article className="space-y-5">
                    <div className="space-y-2">
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                        <h3 className="text-xl font-semibold text-zinc-50">
                          {experience.company}
                        </h3>
                        <span className="text-sm text-zinc-500">
                          {experience.duration}
                        </span>
                      </div>
                      <p className="text-sm text-zinc-400">
                        {experience.roles.join(" / ")}
                      </p>
                      <p className="text-sm font-medium text-sky-300/90">
                        {experience.period}
                      </p>
                    </div>

                    <div className="space-y-6">
                      {experience.projects.map((project) => (
                        <div
                          key={project.title}
                          className="rounded-2xl border border-zinc-800/80 bg-zinc-900/40 p-5 sm:p-6"
                        >
                          <h4 className="text-base font-medium text-zinc-100">
                            {project.title}
                          </h4>
                          <ul className="mt-3 space-y-2 text-sm leading-7 text-zinc-400">
                            {project.items.map((item) => (
                              <li
                                key={item}
                                className="relative pl-4 before:absolute before:left-0 before:top-[0.65rem] before:h-1.5 before:w-1.5 before:rounded-full before:bg-zinc-600"
                              >
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </article>
                </li>
              ))}
            </ol>
          </section>
        </div>
      </main>

      <footer className="border-t border-zinc-800/80">
        <div className="mx-auto flex w-full max-w-4xl flex-wrap items-center justify-between gap-4 px-6 py-8 text-sm text-zinc-500">
          <p>QA Engineer / Engineering Manager Portfolio</p>
          <a
            href="https://github.com/ike-gagagami97/portfolio"
            className="transition hover:text-zinc-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
      </footer>
    </div>
  );
}
