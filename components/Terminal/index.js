import Typewriter from '../Typewriter';

const text = `Aziz Gharbi — Software & Cloud Developer.
Experienced in Lua, Python, TypeScript/JavaScript, and Linux-based environments.
AWS architecture design, covering EC2, Lambda, S3, API Gateway, CloudFormation, and containerized deployments (ECS/EKS).
Focused on scalable backend systems, automation, and DevOps integration, I have experience with monitoring, observability, and system reliability.
Skilled in CloudWatch, Datadog and centralized logging to ensure performance, uptime, and deep system insight.
A boatman, steer steady through these digital waves and social dystopia`;

export default function Terminal() {
  return (
    <div>
      <div className="terminal">
        <div className="terminal-menu">
          <span className="red"></span>
          <span className="yellow"></span>
          <span className="green"></span>
        </div>
        <Typewriter text={text} speed={50} />
      </div>
    </div>
  );
}
