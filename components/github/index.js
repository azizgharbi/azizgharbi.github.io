"use client";
import Style from "./style";
import { useEffect, useState } from "react";

const entrypoint = "https://api.github.com/users/azizgharbi/repos";
async function getRepositories() {
  const res = await fetch(entrypoint);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export function GithubBox() {
  const [repos, setRepos] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const data = await getRepositories();
      setRepos(
        data
          .filter(({ fork }) => !fork)
          .map(({ full_name, html_url }) => ({ full_name, html_url })),
      );
    }
    fetchData();
  }, []);

  return (
    <>
      <div className="github-box">
        {repos
          ? repos.map(({ full_name, html_url }) => {
              return (
                <div className="link" key={full_name}>
                  <a href={html_url} target="_blank" rel="noopener noreferrer">
                    {full_name}
                  </a>
                </div>
              );
            })
          : null}
      </div>
    </>
  );
}
