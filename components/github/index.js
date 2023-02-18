import { useEffect, useState } from "react";
import Style from "./style";

export function GithubBox() {
  const entrypoint = "https://api.github.com/users/azizgharbi/repos";
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(entrypoint)
      .then((response) => response.json())
      .then((data) => {
        setData(
          data
            .filter(({ fork }) => !fork)
            .map(({ full_name, html_url }) => ({ full_name, html_url }))
        );
      });
  }, []);

  return (
    <>
      <div style={Style.GithubBox}>
        {data
          ? data.map(({ full_name, html_url }) => {
              return (
                <div style={Style.link}>
                  <a href={html_url} target="_blank">
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
