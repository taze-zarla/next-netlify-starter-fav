import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";

const brandColor = "#0989d8";

export default function Home() {
  return (
    <div className="container">
      <Head>
        {/* HTML Meta Tags */}
        <title>Next.js Starter!</title>
        <meta
          name="description"
          content="This is the best next js starter deployed on netlify"
        />

        {/* Facebook Meta Tags */}
        <meta
          property="og:url"
          content="https://radiant-axolotl-945755.netlify.app/"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Next.js Starter!" />
        <meta
          property="og:description"
          content="This is the best next js starter deployed on netlify"
        />
        <meta
          property="og:image"
          content="https://opengraph.b-cdn.net/production/images/d225befc-acee-4f32-98ca-0968657d9cdf.png?token=ZQW9XstBS1NNyuDjfosdiLEIxZlP0uRKVle1G18fJww&height=630&width=1200&expires=33265610773"
        />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:domain"
          content="radiant-axolotl-945755.netlify.app"
        />
        <meta
          property="twitter:url"
          content="https://radiant-axolotl-945755.netlify.app/"
        />
        <meta name="twitter:title" content="Next.js Starter!" />
        <meta
          name="twitter:description"
          content="This is the best next js starter deployed on netlify"
        />
        <meta
          name="twitter:image"
          content="https://opengraph.b-cdn.net/production/images/d225befc-acee-4f32-98ca-0968657d9cdf.png?token=ZQW9XstBS1NNyuDjfosdiLEIxZlP0uRKVle1G18fJww&height=630&width=1200&expires=33265610773"
        />

        {/* General Browsers */}
        <meta name="theme-color" content={brandColor} />
        <meta name="application-name" content="Sample" />

        {/* prefer 48x48 png */}
        <link
          rel="icon"
          type="image/png"
          href="/sample-icon-48x48.png"
          sizes="48x48"
        />
        <link
          rel="icon"
          type="image/svg+xml"
          href="/sample-icon.svg"
          sizes="any"
        />

        {/* .ico only for last resort fallback for non-modern devices */}
        <link rel="icon" href="/sample-icon.ico" sizes="16x16 32x32 48x48" />
        <link rel="shortcut icon" href="/sample-icon.ico" />

        {/* Edge and IE 12 */}
        <meta
          name="msapplication-TileImage"
          content="/sample-mstile-150x150.png"
        />
        <meta name="msapplication-TileColor" content={brandColor} />
        <meta name="msapplication-config" content="/msbrowserconfig.xml" />

        {/* Apple */}
        <meta name="apple-mobile-web-app-title" content="Sample" />
        <link
          rel="apple-touch-icon"
          href="/sample-apple-touch-icon-180x180.png"
        />

        {/* Android Chrome */}
        <link rel="manifest" href="/manifest.json" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  );
}
