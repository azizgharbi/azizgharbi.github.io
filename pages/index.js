import Rectangle from "./components/Rectangle";
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
      <div className="ground_1"></div>
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
          <a
            href="https://github.com/azizgharbi/azizgharbi.github.io/blob/master/resume.pdf"
            target="_blank"
          >
            HERE.
          </a>
        </p>
      </div>
    </div>
  );
}
