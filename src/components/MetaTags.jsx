import Head from 'next/head'

export default function MetaTag({ description, title, siteTitle, canonicalURL }) {
  return (
    <Head>
    <meta charSet="utf-8" />
      <title>{`${title} | ${siteTitle}`}</title>
      <meta name="description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={siteTitle} />
      <link rel="canonical" href={canonicalURL} />
    </Head>
  )
}