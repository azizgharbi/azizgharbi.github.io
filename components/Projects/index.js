import { useEffect, useState } from 'react';
import { fetchProjects, REPOSITORIES_URL } from '../../lib/github';

// Renders the projects fetched at build time straight away, then refreshes
// them from GitHub in the browser so new repositories show up without a
// redeploy.
export default function Projects({ initialProjects }) {
  const [projects, setProjects] = useState(initialProjects);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let active = true;
    fetchProjects()
      .then((fresh) => {
        if (!active || !fresh.length) return;
        setProjects((current) =>
          JSON.stringify(current) === JSON.stringify(fresh) ? current : fresh
        );
      })
      .catch(() => {
        if (active) setFailed(true);
      });
    return () => {
      active = false;
    };
  }, []);

  if (!projects.length) {
    return failed ? (
      <p>
        GitHub didn&rsquo;t return the project list just now.{' '}
        <a href={REPOSITORIES_URL}>Browse the repositories on GitHub</a>{' '}
        instead.
      </p>
    ) : (
      <p className="muted">Loading projects from GitHub&hellip;</p>
    );
  }

  return (
    <>
      <ul className="projects">
        {projects.map(({ name, url, description, language, stars, topics }) => (
          <li className="project" key={name}>
            <div className="project__head">
              <h3 className="project__name">
                <a href={url} target="_blank" rel="noopener noreferrer">
                  {name}
                </a>
              </h3>
              <p className="project__meta">
                {language}
                {stars > 0 && (
                  <span className="project__stars">
                    <span aria-hidden="true">★</span> {stars}
                    <span className="sr-only">
                      {stars === 1 ? ' star' : ' stars'}
                    </span>
                  </span>
                )}
              </p>
            </div>
            <p className="project__description">{description}</p>
            {topics.length > 0 && (
              <p className="project__topics">
                <span className="sr-only">Topics: </span>
                {topics.join(', ')}
              </p>
            )}
          </li>
        ))}
      </ul>
      <p className="projects__more">
        <a href={REPOSITORIES_URL} target="_blank" rel="noopener noreferrer">
          All repositories on GitHub
        </a>
      </p>
    </>
  );
}
