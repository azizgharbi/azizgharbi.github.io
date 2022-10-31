import Rectangle from "./../components/Rectangle";
export default function Home() {
  const infos = [
    {
      description: `Aziz Gharbi, 
        Software developer
        I'am Passionate about learning new technologies,
        Open source , JavaScript Linux Lover .`,
    },
    {
      description: null,
    },
    {
      description: null,
    },
  ];
  return (
    <div>
      <div className="ground_1">
        <ul className="ground_menu">
          <li>
            <a href="https://github.com/azizgharbi" target="_blank">
              Github
            </a>
          </li>
          <li>
            <a
              href="https://stackoverflow.com/users/7253451/g-aziz"
              target="_blank"
            >
              StackOverflow
            </a>
          </li>
        </ul>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        {infos.map(({ description }, index) => (
          <Rectangle key={index} description={description} />
        ))}
      </div>
      <div className="footer">
        <p>
          The end, <span>Download my resume</span>{" "}
          <a href="https://azizgharbi.github.io/resume.pdf" target="_blank">
            HERE.
          </a>
        </p>
      </div>
    </div>
  );
}
