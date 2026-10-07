const USERNAME = 'azizgharbi';
const REPOS_API = `https://api.github.com/users/${USERNAME}/repos?per_page=100&sort=pushed`;

// The profile README and this site are repositories, not projects.
const HIDDEN_REPOS = [USERNAME, `${USERNAME}.github.io`];
const MAX_PROJECTS = 8;
const MAX_TOPICS = 4;

export const REPOSITORIES_URL = `https://github.com/${USERNAME}?tab=repositories`;

// Repository descriptions are written casually; present them as sentences.
function asSentence(text) {
  const trimmed = text.trim();
  const capitalized = trimmed.charAt(0).toUpperCase() + trimmed.slice(1);
  return /[.!?]$/.test(capitalized) ? capitalized : `${capitalized}.`;
}

// Original, described repositories, most recently pushed first.
export function toProjects(repos) {
  return repos
    .filter(
      (repo) =>
        !repo.fork &&
        !repo.archived &&
        repo.description &&
        !HIDDEN_REPOS.includes(repo.name.toLowerCase())
    )
    .sort((a, b) => Date.parse(b.pushed_at) - Date.parse(a.pushed_at))
    .slice(0, MAX_PROJECTS)
    .map((repo) => ({
      name: repo.name,
      url: repo.html_url,
      description: asSentence(repo.description),
      language: repo.language,
      stars: repo.stargazers_count,
      topics: (repo.topics || []).slice(0, MAX_TOPICS),
    }));
}

function withTimeout(promise, ms) {
  let timer;
  const timeout = new Promise((resolve, reject) => {
    timer = setTimeout(() => reject(new Error(`timed out after ${ms}ms`)), ms);
  });
  return Promise.race([promise, timeout]).finally(() => clearTimeout(timer));
}

// Runs at build time (with a token, to avoid the shared CI rate limit) and
// in the browser (without one) to pick up repositories pushed since.
export async function fetchProjects({ token, timeoutMs = 10000 } = {}) {
  const headers = { Accept: 'application/vnd.github+json' };
  if (token) headers.Authorization = `Bearer ${token}`;

  const res = await withTimeout(fetch(REPOS_API, { headers }), timeoutMs);
  if (!res.ok) {
    throw new Error(`GitHub API responded with ${res.status}`);
  }
  return toProjects(await res.json());
}
