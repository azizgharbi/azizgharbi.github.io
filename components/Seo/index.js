import Head from 'next/head';
import { SITE_URL, profile } from '../../lib/site';

const IMAGE = {
  url: `${SITE_URL}og-image.jpg`,
  width: '1200',
  height: '630',
  alt: 'Aziz Gharbi, software & cloud developer, in green dot-matrix type over falling Matrix code.',
};

// Escapes "<" so a repository description can never close the script tag.
const serialize = (data) => JSON.stringify(data).replace(/</g, '\\u003c');

export default function Seo({
  title = profile.title,
  description = profile.description,
  noindex = false,
  structuredData,
}) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      {noindex ? (
        <meta name="robots" content="noindex" />
      ) : (
        <>
          <link rel="canonical" href={SITE_URL} />
          <meta property="og:type" content="profile" />
          <meta property="profile:first_name" content="Aziz" />
          <meta property="profile:last_name" content="Gharbi" />
          <meta property="og:url" content={SITE_URL} />
          <meta property="og:site_name" content={profile.name} />
          <meta property="og:locale" content="en_US" />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta property="og:image" content={IMAGE.url} />
          <meta property="og:image:width" content={IMAGE.width} />
          <meta property="og:image:height" content={IMAGE.height} />
          <meta property="og:image:alt" content={IMAGE.alt} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={title} />
          <meta name="twitter:description" content={description} />
          <meta name="twitter:image" content={IMAGE.url} />
          <meta name="twitter:image:alt" content={IMAGE.alt} />
        </>
      )}
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serialize(structuredData) }}
        />
      )}
    </Head>
  );
}
