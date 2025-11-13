import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Primary Meta Tags */}
        <meta name="title" content="Aziz Gharbi - Software & Cloud Developer" />
        <meta
          name="description"
          content="Aziz Gharbi — Software & Cloud Developer specializing in AWS, TypeScript, Python, Lua, and DevOps. Experienced in scalable backend systems, automation, and cloud architecture."
        />
        <meta
          name="keywords"
          content="Aziz Gharbi, Software Developer, Cloud Developer, AWS, TypeScript, JavaScript, Python, Lua, DevOps, Backend Developer, Cloud Architecture, EC2, Lambda, S3, API Gateway, CloudFormation, ECS, EKS, Kubernetes, Docker, CloudWatch, Datadog, System Reliability, Monitoring, Observability, Linux, Automation"
        />
        <meta name="author" content="Aziz Gharbi" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://azizgharbi.github.io/" />
        <meta
          property="og:title"
          content="Aziz Gharbi - Software & Cloud Developer"
        />
        <meta
          property="og:description"
          content="Software & Cloud Developer specializing in AWS, TypeScript, Python, and DevOps. Experienced in scalable backend systems and cloud architecture."
        />
        <meta
          property="og:image"
          content="https://azizgharbi.github.io/og-image.png"
        />
        <meta property="og:site_name" content="Aziz Gharbi Portfolio" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://azizgharbi.github.io/" />
        <meta
          name="twitter:title"
          content="Aziz Gharbi - Software & Cloud Developer"
        />
        <meta
          name="twitter:description"
          content="Software & Cloud Developer specializing in AWS, TypeScript, Python, and DevOps. Experienced in scalable backend systems and cloud architecture."
        />
        <meta
          name="twitter:image"
          content="https://azizgharbi.github.io/og-image.png"
        />
        <meta name="twitter:creator" content="@azizgharbi" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://azizgharbi.github.io/" />

        {/* Favicon */}
        <link rel="icon" type="image/x-icon" href="/azizgharbi.github.io/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/azizgharbi.github.io/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/azizgharbi.github.io/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/azizgharbi.github.io/favicon-16x16.png"
        />

        {/* Theme Color for Mobile Browsers */}
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-TileColor" content="#00FF41" />

        {/* Structured Data (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Aziz Gharbi',
              url: 'https://azizgharbi.github.io/',
              jobTitle: 'Software & Cloud Developer',
              description:
                'Software & Cloud Developer specializing in AWS, TypeScript, Python, Lua, and DevOps',
              knowsAbout: [
                'AWS',
                'Cloud Architecture',
                'TypeScript',
                'JavaScript',
                'Python',
                'Lua',
                'DevOps',
                'Backend Development',
                'EC2',
                'Lambda',
                'S3',
                'API Gateway',
                'CloudFormation',
                'Docker',
                'Kubernetes',
                'ECS',
                'EKS',
                'CloudWatch',
                'Datadog',
                'Monitoring',
                'Observability',
                'System Reliability',
                'Linux',
                'Automation',
              ],
              sameAs: [
                'https://github.com/azizgharbi',
                'https://linkedin.com/in/azizgharbi',
              ],
            }),
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
