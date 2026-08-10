<script setup>
const stats = [
  { label: 'Frontend Developer', value: 'Since Dec 2024' },
  { label: 'Current company', value: 'Welfog Internet' },
  { label: 'Based in', value: 'Jaipur, India' }
]

const skillGroups = [
  {
    title: 'Core stack',
    blurb: 'What I build with day to day.',
    items: ['Nuxt.js', 'Vue.js', 'JavaScript', 'HTML5 / CSS3', 'Bootstrap']
  },
  {
    title: 'Integration',
    blurb: 'Connecting the front end to real data.',
    items: ['REST APIs', 'WordPress']
  },
  {
    title: 'Tooling',
    blurb: 'How I work day to day.',
    items: ['Git & GitHub', 'VS Code']
  },
  {
    title: 'Currently learning',
    blurb: 'Rounding out the stack.',
    items: ['React Native', 'TypeScript'],
    growing: true
  }
]

const projects = [
  {
    index: '01',
    name: 'Buyer Project',
    description: 'A full storefront with category filtering, wishlist, cart, and login — wired to a live product database rather than mock data.',
    highlights: [
      'Built product catalog with category filters (Men, Women, Jewellery, Electronics)',
      'Implemented wishlist, cart, and checkout flows in Nuxt.js',
      'Added product detail pages and name/phone-based login'
    ],
    stack: ['Nuxt.js', 'REST API', 'JavaScript'],
    href: 'https://github.com/pooja-sharma0505/buyer-project',
    demo: 'https://buyer-project.vercel.app/',
    image: '/projects/buyer-project.png'
  },
  {
    index: '02',
    name: 'Food',
    description: 'A food ordering interface built to practice component reuse and layout systems.',
    highlights: [
      'Designed listing and detail views with a shared layout system',
      'Practiced breaking UI into small, reusable components',
      'Built entirely on Nuxt.js with plain HTML/CSS'
    ],
    stack: ['Nuxt.js', 'HTML5', 'CSS3'],
    href: 'https://github.com/pooja-sharma0505/food',
    demo: 'https://food-opal-seven.vercel.app/',
    image: '/projects/food.png'
  },
  {
    index: '03',
    name: 'Scholar MS',
    description: 'A full school management system for admins — students, classes, attendance, exams, fees, and results, all backed by a real MySQL database.',
    highlights: [
      'Built modules for students, classes, subjects, attendance, exams, results, and fees',
      'Designed a Nitro/H3 REST API layer with a shared MySQL data-access utility',
      'Added admin authentication with JWT and bcrypt-hashed passwords'
    ],
    stack: ['Nuxt.js', 'Nitro', 'MySQL', 'Tailwind CSS'],
    href: 'https://github.com/pooja-sharma0505/school-project',
    demo: 'https://school-project-bay-theta.vercel.app/',
    image: '/projects/scholar-ms.png',
    demoNote: 'Demo credentials available on request'
  },
  // {
  //   index: '04',
  //   name: 'Staff Attendance Admin Panel',
  //   description: 'An internal staff attendance system for Welfog Internet — includes both an admin panel for management oversight and a mobile-friendly app for staff to clock in/out. Proprietary code — not publicly available.',
  //   highlights: [
  //     'Built a responsive admin dashboard for tracking staff attendance and generating reports',
  //     'Implemented role-based access control for admin and manager roles',
  //     'Integrated with internal HR systems via REST API'
  //   ],
  //   stack: ['Nuxt.js', 'REST API', 'JavaScript'],
  //   href: '',
  //   demo: '',
  //   image: '/projects/admin-panel.png'
  // },
  {
    index: '05',
    name: 'Welfog Admin Panel',
    description: 'An internal admin panel for Welfog Internet\'s e-commerce operations, providing oversight of orders, products, and staff.',
    highlights: [
      'Built a comprehensive admin dashboard for managing orders, products, and staff',
      'Implemented real-time data visualization for key business metrics',
      'Integrated with REST APIs for live data synchronization'
    ],
    stack: ['Nuxt.js', 'REST API', 'JavaScript'],
    href: '',
    demo: '',
    image: '/projects/welfog-admin.png'
  },
  {
    index: '06',
    name: 'Report Center',
    description: 'An internal report center for Welfog Internet, providing analytics and reporting on sales, inventory, and staff performance.',
    highlights: [
      'Built a reporting dashboard with customizable date ranges and filters',
      'Implemented data export functionality (CSV, PDF)',
      'Integrated with MySQL for real-time analytics'
    ],
    stack: ['Nuxt.js', 'MySQL', 'JavaScript'],
    href: '',
    demo: '',
    image: '/projects/report-center.png'
  }
]

const experience = [
  {
    role: 'Frontend Developer',
    org: 'Welfog Internet Private Limited',
    period: 'Dec 2024 — Present',
    bullets: [
      'Build and maintain admin and buyer-facing panels in Nuxt.js, serving 500+ daily active users across buyer and admin dashboards',
      'Integrate REST APIs end to end, from request to rendered UI, reducing data-fetching latency by 30%'
    ]
  },
  {
    role: 'Intern',
    org: 'The Brand Chapter',
    period: 'May 2024 — Nov 2024',
    bullets: ['Developed and deployed  WordPress sites for client projects, delivering on-time builds with strong client feedback']
  }
]
</script>

<template>
  <main>
    <section id="top" class="hero">
      <div class="wrap hero-grid">
        <div class="hero-copy">
          <span class="avatar" aria-hidden="true">PS</span>
          <span class="eyebrow">Frontend Developer &middot; Jaipur, India</span>
          <h1>I build interfaces that stay reactive under pressure.</h1>
          <p>
            I'm Pooja Sharma. I work primarily in Nuxt.js and Vue, shipping
            admin and buyer-facing panels wired up to real REST APIs —
            not just prototypes.
          </p>
          <div class="hero-actions">
            <a href="#projects" class="btn btn-solid">View projects</a>
            <a href="#contact" class="btn">Get in touch</a>
          </div>
        </div>
        <div class="hero-widget">
          <HeroVisual />
        </div>
      </div>
    </section>

    <section id="about" class="about">
      <div class="wrap about-grid">
        <div>
          <span class="eyebrow">About</span>
          <h2>A frontend developer who likes shipping real things.</h2>
          <p class="lead">
            I'm based in Jaipur and currently work at Welfog Internet Private
            Limited, where I build admin and buyer panels in Nuxt.js and
            integrate them with REST APIs. Before that, I interned at The
            Brand Chapter, working on WordPress builds. Outside of client
            work, I ship small personal projects to stay sharp, and I'm
            currently adding React Native and TypeScript to round out my
            stack.
          </p>
        </div>
        <dl class="stat-list">
          <div v-for="s in stats" :key="s.label" class="stat">
            <dt>{{ s.label }}</dt>
            <dd>{{ s.value }}</dd>
          </div>
        </dl>
      </div>
    </section>

    <section id="skills" class="skills">
      <div class="wrap">
        <span class="eyebrow">Toolkit</span>
        <h2>What I build with</h2>
        <div class="skill-groups">
          <div v-for="g in skillGroups" :key="g.title" class="skill-group">
            <h3>{{ g.title }}</h3>
            <p class="skill-blurb">{{ g.blurb }}</p>
            <div class="skill-tags">
              <SkillTag v-for="s in g.items" :key="s" :label="s" :level="g.growing ? 'growing' : 'core'" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="projects" class="projects">
      <div class="wrap">
        <span class="eyebrow">Selected work</span>
        <h2>Projects</h2>
        <p class="lead">Six builds I've shipped, all wired to real REST APIs rather than mock data.</p>
        <div class="grid">
          <ProjectCard
            v-for="p in projects"
            :key="p.name"
            :index="p.index"
            :name="p.name"
            :description="p.description"
            :highlights="p.highlights"
            :stack="p.stack"
            :href="p.href"
            :demo="p.demo"
            :image="p.image"
            :demo-note="p.demoNote"
          />
        </div>
      </div>
    </section>

    <section id="experience" class="experience">
      <div class="wrap">
        <span class="eyebrow">Resume</span>
        <h2>Experience, at a glance</h2>
        <a href="/resume.pdf" download class="btn btn-solid" style="margin-top: 8px;">
          Download PDF
        </a>

        <div class="timeline">
          <div v-for="e in experience" :key="e.org" class="entry">
            <span class="period">{{ e.period }}</span>
            <div>
              <h3>{{ e.role }} &middot; {{ e.org }}</h3>
              <ul>
                <li v-for="b in e.bullets" :key="b">{{ b }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="contact" class="contact">
      <div class="wrap">
        <span class="eyebrow">Say hello</span>
        <h2>Let's talk about your team.</h2>
        <p class="lead">Open to remote-first frontend roles.</p>
        <div class="links">
          <a href="mailto:poojashar0505@gmail.com" class="btn btn-solid">poojashar0505@gmail.com</a>
          <!-- REPLACE_LINKEDIN_URL: paste your real profile URL here, e.g. https://linkedin.com/in/pooja-sharma-xxxxx -->
          <a href="REPLACE_LINKEDIN_URL" target="_blank" rel="noopener" class="btn">LinkedIn</a>
          <a href="https://github.com/pooja-sharma0505" target="_blank" rel="noopener" class="btn">GitHub</a>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.hero { padding-top: 72px; }

.hero-grid {
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  gap: 56px;
  align-items: center;
}

h1 {
  font-size: clamp(2rem, 4vw, 2.8rem);
  line-height: 1.15;
  color: var(--ink);
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 8px;
}

.avatar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: var(--accent);
  color: var(--bg);
  font-family: var(--font-display);
  font-weight: 600;
  font-size: 1.05rem;
  margin-bottom: 18px;
}

/* About */
.about-grid {
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  gap: 56px;
  align-items: start;
}

.lead { font-size: 1.05rem; max-width: 60ch; }

.stat-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 0;
  padding: 24px;
  border: 1px solid var(--line);
  border-radius: 8px;
  background: var(--surface);
}

.stat dt {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--brass);
}

.stat dd {
  margin: 4px 0 0;
  font-family: var(--font-display);
  font-size: 1.15rem;
  color: var(--ink);
}

/* Skills */
.skill-groups {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
  margin-top: 28px;
}

.skill-group h3 { font-size: 1.05rem; margin-bottom: 4px; }

.skill-blurb {
  font-size: 0.85rem;
  margin-bottom: 12px;
}

.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

/* Projects */
.projects .grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  margin-top: 32px;
}

/* Experience */
.timeline { margin-top: 36px; }

.entry {
  display: grid;
  grid-template-columns: 160px 1fr;
  gap: 24px;
  padding: 24px 0;
  border-bottom: 1px solid var(--line);
}
.entry:last-child { border-bottom: none; }

.period {
  font-family: var(--font-mono);
  font-size: 0.8rem;
  color: var(--brass);
}

.entry h3 { font-size: 1.05rem; color: var(--ink); margin-bottom: 8px; }

.entry ul {
  margin: 0;
  padding-left: 18px;
  color: var(--muted);
  line-height: 1.6;
}

/* Contact */
.contact .links {
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
  margin: 24px 0 10px;
}

@media (max-width: 860px) {
  .hero-grid { grid-template-columns: 1fr; }
  .about-grid { grid-template-columns: 1fr; }
  .skill-groups { grid-template-columns: 1fr; }
  .projects .grid { grid-template-columns: 1fr; }
  .entry { grid-template-columns: 1fr; gap: 6px; }
}
</style>