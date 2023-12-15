'use server';

import Menu from './../components/Menu';
import Footer from './../components/Footer';
import GithubBox from '../components/github';
import Terminal from '../components/Terminal';

export const metadata = {
  title: 'aziz gharbi',
  description: 'software developer extraordinaire aziz gharbi',
};

export default function Home() {
  return (
    <div>
      <Menu />
      <Terminal />
      <GithubBox />
      <Footer />
    </div>
  );
}
