"use client";
import { useEffect, useState } from "react";
import Style from "./style";

const entrypoint = "https://api.github.com/users/azizgharbi/repos";
export function GithubBox() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(entrypoint)
      .then((response) => response.json())
      .then((data) => {
        setData(
          data
            .filter(({ fork }) => !fork)
            .map(({ full_name, html_url }) => ({ full_name, html_url })),
        );
      });
  }, []);

  return (
    <>
      <div style={Style.GithubBox}>
        {data
          ? data.map(({ full_name, html_url }) => {
              return (
                <div key={full_name} style={Style.link}>
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
