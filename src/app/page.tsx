import { experiences, profile, techBlogArticles } from "@/data/profile";

function SectionHeading({
  label,
  title,
}: {
  label: string;
  title: string;
}) {
  return (
    <div className="space-y-2">
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">
        {label}
      </p>
      <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
        {title}
      </h2>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-full bg-slate-50 font-sans text-slate-900">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex w-full max-w-4xl flex-col gap-6 px-6 py-16 sm:py-20">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">
            Portfolio
          </p>
          <div className="space-y-4">
            <div className="space-y-2">
              <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
                {profile.name}
              </h1>
              <p className="text-base text-slate-500">{profile.nameReading}</p>
            </div>
            <p className="text-xl font-medium text-sky-800">{profile.role}</p>
            <p className="max-w-2xl text-lg leading-8 text-slate-600">
              {profile.tagline}
            </p>
          </div>
          <ul className="flex flex-wrap gap-2">
            {profile.focusAreas.map((area) => (
              <li
                key={area}
                className="rounded-full border border-slate-200 bg-slate-100 px-3 py-1 text-sm text-slate-700"
              >
                {area}
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-3">
            {profile.socialLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="inline-flex items-center rounded-full bg-sky-700 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-sky-800"
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </header>

      <main className="mx-auto w-full max-w-4xl px-6 py-16 sm:py-20">
        <div className="flex flex-col gap-20">
          <section aria-labelledby="about-heading" className="space-y-8">
            <SectionHeading label="About" title="自己紹介" />
            <div className="space-y-5 rounded-2xl border border-slate-200 bg-white p-6 text-base leading-8 text-slate-700 shadow-sm sm:p-8">
              {profile.introduction.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </section>

          <section aria-labelledby="tech-blog-heading" className="space-y-8">
            <SectionHeading label="Tech Blog" title="執筆記事" />
            <ul className="space-y-3">
              {techBlogArticles.map((article) => (
                <li key={article.href}>
                  <a
                    href={article.href}
                    className="group flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-sky-200 hover:bg-sky-50/50 sm:p-6"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-1 shrink-0 rounded-md bg-sky-100 px-2 py-0.5 text-xs font-medium text-sky-800"
                    >
                      Zenn
                    </span>
                    <span className="text-base font-medium leading-7 text-slate-900 group-hover:text-sky-800">
                      {article.title}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="experience-heading" className="space-y-10">
            <SectionHeading label="Experience" title="職歴" />
            <ol className="relative space-y-12 border-l-2 border-slate-200 pl-8">
              {experiences.map((experience) => (
                <li key={experience.company} className="relative">
                  <span
                    aria-hidden="true"
                    className="absolute -left-[2.15rem] top-2 h-3.5 w-3.5 rounded-full border-2 border-white bg-sky-600 shadow-sm"
                  />
                  <article className="space-y-5">
                    <div className="space-y-2">
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                        <h3 className="text-xl font-semibold text-slate-900">
                          {experience.company}
                        </h3>
                        <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-sm text-slate-600">
                          {experience.duration}
                        </span>
                      </div>
                      <p className="text-sm font-medium text-slate-600">
                        {experience.roles.join(" / ")}
                      </p>
                      <p className="text-sm font-medium text-sky-700">
                        {experience.period}
                      </p>
                    </div>

                    <div className="space-y-4">
                      {experience.projects.map((project) => (
                        <div
                          key={project.title}
                          className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6"
                        >
                          <h4 className="text-base font-semibold text-slate-900">
                            {project.title}
                          </h4>
                          <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-600">
                            {project.items.map((item) => (
                              <li
                                key={item}
                                className="relative pl-4 before:absolute before:left-0 before:top-[0.65rem] before:h-1.5 before:w-1.5 before:rounded-full before:bg-sky-500"
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

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex w-full max-w-4xl flex-wrap items-center justify-between gap-4 px-6 py-8 text-sm text-slate-500">
          <p>
            {profile.name} / {profile.role}
          </p>
          <div className="flex flex-wrap gap-4">
            {profile.socialLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition hover:text-sky-700"
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://github.com/ike-gagagami97/portfolio"
              className="transition hover:text-sky-700"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
