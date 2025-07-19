import Head from 'next/head'
const OpenGraphHead = () => (
  <Head>
    <title>AA Nouabi | Portfolio</title>
    <meta name="description" content="My personal solace place on web-earth." />
    <meta property="og:title" content="AA Nouabi | Portfolio" />
    <meta property="og:site_name" content="Ahmed Amine Nouabi" />
    {/* <meta property="og:url" content="https://kllawingco.netlify.app/" /> */}
    <meta
      property="og:description"
      content="Ohh you found me?. Howdy! I am Ahmed Amine Nouabi . . . a Software Engineer"
    />
    <meta property="og:type" content="profile" />
    {/* <meta
      property="og:image"
      content="https://kllawingco.netlify.app/KL_avatar.png"
    ></meta> */}
  </Head>
)
export default OpenGraphHead
