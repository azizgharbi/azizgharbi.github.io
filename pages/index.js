import Seo from '../components/Seo';
import Terminal from '../components/Terminal';
import Menu from '../components/Menu';
import Decode from '../components/Decode';
import Projects from '../components/Projects';
import Footer from '../components/Footer';
import { fetchProjects } from '../lib/github';
import { SITE_URL, profile, links } from '../lib/site';

const NAME = ['Aziz', 'Gharbi'];

// Skills, written as the options of the `aziz` command.
const OPTIONS = [
  {
    flag: '--aws',
    text: 'Architecture on EC2, Lambda, S3, and API Gateway, defined as code with CloudFormation.',
  },
  {
    flag: '--containers',
    text: 'Containerized services built with Docker and deployed to ECS and EKS (Kubernetes).',
  },
  {
    flag: '--backend',
    text: 'APIs and services in TypeScript (Node.js) and Python, built to scale.',
  },
  {
    flag: '--observability',
    text: 'Monitoring, alerting, and centralized logging with CloudWatch and Datadog.',
  },
  {
    flag: '--automation',
    text: 'DevOps integration and scripting that make deploys repeatable.',
  },
  {
    flag: '--languages',
    text: 'TypeScript, JavaScript, Python, Lua, and shell scripting, all on Linux.',
  },
];

const SEE_ALSO = [
  {
    page: 'github(1)',
    href: links.github,
    text: 'Code for the projects above, and the rest of my open-source work.',
  },
  {
    page: 'linkedin(1)',
    href: links.linkedin,
    text: 'Experience, and the quickest way to reach me.',
  },
  {
    page: 'stackoverflow(1)',
    href: links.stackoverflow,
    text: 'Where I ask and answer programming questions.',
  },
];

const KNOWS_ABOUT = [
  'Amazon Web Services',
  'Amazon EC2',
  'AWS Lambda',
  'Amazon S3',
  'Amazon API Gateway',
  'AWS CloudFormation',
  'Docker',
  'Amazon ECS',
  'Amazon EKS',
  'Kubernetes',
  'TypeScript',
  'JavaScript',
  'Node.js',
  'Python',
  'Lua',
  'Linux',
  'DevOps',
  'Observability',
  'Amazon CloudWatch',
  'Datadog',
];

const optionId = (flag) => `option-${flag.slice(2)}`;

const formatMonth = (iso) =>
  new Intl.DateTimeFormat('en-US', {
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(iso));

function structuredData(projects, updatedAt) {
  const person = `${SITE_URL}#person`;
  const website = `${SITE_URL}#website`;
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': website,
        url: SITE_URL,
        name: profile.name,
        inLanguage: 'en',
      },
      {
        '@type': 'ProfilePage',
        '@id': `${SITE_URL}#webpage`,
        url: SITE_URL,
        name: profile.title,
        description: profile.description,
        isPartOf: { '@id': website },
        mainEntity: { '@id': person },
        dateModified: updatedAt,
        inLanguage: 'en',
      },
      {
        '@type': 'Person',
        '@id': person,
        name: profile.name,
        url: SITE_URL,
        jobTitle: profile.jobTitle,
        description: profile.description,
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Montréal',
          addressRegion: 'QC',
          addressCountry: 'CA',
        },
        knowsAbout: KNOWS_ABOUT,
        sameAs: [links.github, links.linkedin, links.stackoverflow],
        workExample: projects.map((project) => ({
          '@type': 'SoftwareSourceCode',
          name: project.name,
          description: project.description,
          codeRepository: project.url,
          programmingLanguage: project.language || undefined,
        })),
      },
    ],
  };
}

export default function Home({ projects, updatedAt }) {
  return (
    <>
      <Seo structuredData={structuredData(projects, updatedAt)} />
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <div className="page">
        <Terminal title="man aziz" actions={<Menu />}>
          <main id="main" className="manual">
            <p className="manual__running" aria-hidden="true">
              <span>AZIZ(1)</span>
              <span className="manual__running-center">
                General Commands Manual
              </span>
              <span>AZIZ(1)</span>
            </p>

            <div className="manual__section manual__section--name">
              <p className="manual__label" aria-hidden="true">
                Name
              </p>
              <div className="manual__body">
                <Decode as="h1" lines={NAME} className="hero__name" />
                <p className="hero__role">
                  Software &amp; cloud developer in {profile.location}.
                  <span className="cursor" aria-hidden="true" />
                </p>
              </div>
            </div>

            <div className="manual__section">
              <p className="manual__label" aria-hidden="true">
                Synopsis
              </p>
              <div className="manual__body">
                <p className="synopsis">
                  <span className="synopsis__command">aziz</span>
                  <span className="synopsis__flags">
                    {OPTIONS.map(({ flag }) => (
                      <a key={flag} href={`#${optionId(flag)}`}>
                        [<b>{flag}</b>]
                      </a>
                    ))}
                  </span>
                </p>
                <p className="hero__actions">
                  <a className="button button--primary" href="#projects">
                    See projects
                  </a>
                  <a
                    className="button"
                    href={links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Message me on LinkedIn
                  </a>
                </p>
              </div>
            </div>

            <section className="manual__section" id="about">
              <h2 className="manual__label">Description</h2>
              <div className="manual__body">
                <p className="lead">
                  I design and build backend systems on AWS, automate how they
                  ship, and instrument them so problems show up on a dashboard
                  before they reach users.
                </p>
                <p>
                  My work covers the whole path to production: services in
                  TypeScript and Python, infrastructure as code, containers on
                  ECS and EKS, and the monitoring and centralized logging that
                  keep them fast and reliable. I&rsquo;m most at home on Linux.
                </p>
                <p>
                  I also publish open-source tools, from a type-safe REST API to
                  a Neovim plugin written in Lua and a GPT-powered Telegram
                  assistant.
                </p>
              </div>
            </section>

            <section className="manual__section" id="skills">
              <h2 className="manual__label">Options</h2>
              <dl className="manual__body manual__list">
                {OPTIONS.map(({ flag, text }) => (
                  <div
                    className="manual__list-item"
                    key={flag}
                    id={optionId(flag)}
                  >
                    <dt>{flag}</dt>
                    <dd>{text}</dd>
                  </div>
                ))}
              </dl>
            </section>

            <section className="manual__section" id="projects">
              <h2 className="manual__label">Projects</h2>
              <div className="manual__body">
                <p className="muted">
                  Open-source work from GitHub, most recently updated first.
                </p>
                <Projects initialProjects={projects} />
              </div>
            </section>

            <section className="manual__section" id="contact">
              <h2 className="manual__label">See also</h2>
              <dl className="manual__body manual__list">
                {SEE_ALSO.map(({ page, href, text }) => (
                  <div className="manual__list-item" key={page}>
                    <dt>
                      <a
                        href={href}
                        target="_blank"
                        rel="me noopener noreferrer"
                      >
                        {page}
                      </a>
                    </dt>
                    <dd>{text}</dd>
                  </div>
                ))}
              </dl>
            </section>

            <p
              className="manual__running manual__running--foot"
              aria-hidden="true"
            >
              <span>{profile.location}</span>
              <span className="manual__running-center">
                {formatMonth(updatedAt)}
              </span>
              <span>AZIZ(1)</span>
            </p>
          </main>
        </Terminal>
        <Footer year={new Date(updatedAt).getUTCFullYear()} />
      </div>
    </>
  );
}

export async function getStaticProps() {
  let projects = [];
  try {
    projects = await fetchProjects({ token: process.env.GITHUB_TOKEN });
  } catch (error) {
    // Still build the page; the browser fetches the projects instead.
    console.warn(
      `Could not load GitHub projects at build time: ${error.message}`
    );
  }
  return { props: { projects, updatedAt: new Date().toISOString() } };
}
