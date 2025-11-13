import Head from 'next/head';
import Menu from './../components/Menu';
import Footer from './../components/Footer';
import GithubBox from '../components/github';
import Terminal from '../components/Terminal';

export default function Home() {
  return (
    <>
      <Head>
        <title>Aziz Gharbi - Software & Cloud Developer</title>
        <meta
          name="description"
          content="Aziz Gharbi — Software & Cloud Developer specializing in AWS, TypeScript, Python, Lua, and DevOps. Experienced in scalable backend systems, automation, and cloud architecture with EC2, Lambda, S3, ECS/EKS, CloudWatch, and Datadog."
        />
      </Head>
      <div>
        <Menu />
        <Terminal />
        <GithubBox />
        <Footer />
      </div>
    </>
  );
}
