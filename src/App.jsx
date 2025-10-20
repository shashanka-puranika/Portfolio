import React from 'react'

// Single-file React component portfolio for Shashanka Puranika
// Usage: paste into a Vite + React + Tailwind project (App.jsx) or similar.
// Tailwind CSS required. Replace images and links as needed.

export default function Portfolio() {
  const projects = [
    {
      title: 'Photoacoustic Spectroscopy Review',
      desc: 'Literature meta-analysis on PAS and breast tumor diagnosis.',
      tags: ['Research', 'Meta-analysis', 'Python'],
      link: '#'
    },
    {
      title: 'SLC7A11 In Silico Pipeline',
      desc: 'Structure-based drug design automation (homology, docking).',
      tags: ['CADD', 'Linux', 'Automation'],
      link: '#'
    },
    {
      title: 'Signalborn — Animated Series (Concept)',
      desc: 'Creator/Writer for a 22-episode sci-fi mystery series.',
      tags: ['Writing', 'Concept Art'],
      link: '#'
    }
  ]

  const publications = [
    {
      title: 'Thread-based Karaya gum detection',
      venue: 'Scientific Reports',
      date: 'Sept 29, 2025',
      link: 'https://doi.org/10.1038/s41598-025-19210-4 '
    },
    {
      title: 'Methoxy Chalcones therapeutic activities',
      venue: 'Journal',
      date: '2025',
      link: '#'
    },
    {
      title: 'Pyridyl nitrogen antibacterial activity',
      venue: 'Scientific Reports',
      date: 'July 30, 2025',
      link: ' https://www.nature.com/articles/s41598-025-09049-0 '
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors">
      <header className="max-w-5xl mx-auto p-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Shashanka Puranika K</h1>
          <p className="text-sm text-muted-foreground">MSc Systems Biology | Computational Biology & Bioinformatics</p>
        </div>
        <nav className="space-x-4 hidden md:block">
          <a href="#about" className="hover:underline">About</a>
          <a href="#projects" className="hover:underline">Projects</a>
          <a href="#publications" className="hover:underline">Publications</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>
      </header>

      <main className="max-w-5xl mx-auto p-6">
        {/* Hero */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center mb-10">
          <div className="md:col-span-2">
            <h2 className="text-4xl font-extrabold leading-tight">Researcher • Coder • Visual Creator</h2>
            <p className="mt-4 text-lg text-muted-foreground">Postgraduate Systems Biology student at MSLS-MAHE focusing on computational biology, protein modelling, genome analysis and data-driven life-sciences research.</p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a href="/Resume.pdf" className="px-4 py-2 rounded-xl border border-gray-200 dark:border-gray-700">Download Resume</a>
              <a href="https://www.linkedin.com/in/shashanka-puranika-k" target="_blank" rel="noreferrer" className="px-4 py-2 rounded-xl bg-gray-800 text-white">LinkedIn</a>
            </div>
          </div>

          <div className="w-full flex justify-center md:justify-end">
            <div className="w-44 h-44 rounded-2xl bg-gradient-to-br from-indigo-400 to-pink-400 flex items-center justify-center text-white font-bold">SP</div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="mb-12">
          <h3 className="text-2xl font-semibold mb-4">About</h3>
          <p className="text-muted-foreground">Passionate and driven postgraduate student with strong skills in Python, PERL, Linux, protein modelling, molecular docking, and biological data analysis. Interested in non-invasive diagnostics (photoacoustic spectroscopy), CADD workflows, and computational pipelines.</p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-sm">
              <h4 className="font-semibold">Technical</h4>
              <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                <li>Python • PERL • Shell • Linux</li>
                <li>Protein Modelling • Docking • MD</li>
                <li>Genome Analysis • Biopython</li>
              </ul>
            </div>
            <div className="p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-sm">
              <h4 className="font-semibold">Lab</h4>
              <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                <li>Microbiology • Biochemistry</li>
                <li>Aseptic Technique • Microfluidics</li>
              </ul>
            </div>
            <div className="p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-sm">
              <h4 className="font-semibold">Interests</h4>
              <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                <li>Photoacoustic Imaging • Diagnostic ML</li>
                <li>Science fiction storytelling • Photography</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="mb-12">
          <h3 className="text-2xl font-semibold mb-4">Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((p, idx) => (
              <article key={idx} className="p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-sm">
                <h4 className="font-semibold">{p.title}</h4>
                <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map((t) => (<span key={t} className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-full">{t}</span>))}
                </div>
                <a href={p.link} className="mt-3 inline-block text-sm text-indigo-600 dark:text-indigo-400">Read more →</a>
              </article>
            ))}
          </div>
        </section>

        {/* Publications */}
        <section id="publications" className="mb-12">
          <h3 className="text-2xl font-semibold mb-4">Publications</h3>
          <ul className="space-y-3">
            {publications.map((pub, i) => (
              <li key={i} className="p-3 bg-white dark:bg-gray-800 rounded-2xl shadow-sm flex justify-between items-start">
                <div>
                  <strong>{pub.title}</strong>
                  <div className="text-sm text-muted-foreground">{pub.venue} • {pub.date}</div>
                </div>
                <a href={pub.link} className="text-sm">View</a>
              </li>
            ))}
          </ul>
        </section>

        {/* Contact */}
        <section id="contact" className="mb-24">
          <h3 className="text-2xl font-semibold mb-4">Contact</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-sm">
              <p>Email: <a href="mailto:shashankapuranika747@gmail.com" className="text-indigo-600">shashankapuranika747@gmail.com</a></p>
              <p className="mt-2">Location: Udupi, Karnataka, India</p>
              <p className="mt-2">LinkedIn: <a href="https://www.linkedin.com/in/shashanka-puranika-k" className="text-indigo-600">View Profile</a></p>
            </div>

            <form className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-sm" onSubmit={(e)=>{e.preventDefault(); alert('Thanks!');}}>
              <label className="block text-sm">Message</label>
              <textarea className="w-full mt-2 p-2 rounded-md bg-gray-50 dark:bg-gray-900" rows={4} placeholder="Hi Shashanka — I liked your work..." />
              <div className="mt-3 flex justify-end">
                <button className="px-4 py-2 rounded-xl bg-indigo-600 text-white">Send</button>
              </div>
            </form>
          </div>
        </section>

      </main>

      <footer className="max-w-5xl mx-auto p-6 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Shashanka Puranika — Built with ❤️
      </footer>
    </div>
  )
}
