import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";

const brandColor = "#0989d8";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>

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
        <link
          rel="icon"
          href="/sample-icon.ico"
          sizes="16x16 32x32 48x48"
        />
        <link
          rel="shortcut icon"
          href="/sample-icon.ico"
        />

        {/* Edge and IE 12 */}
        <meta
          name="msapplication-TileImage"
          content="/sample-mstile-150x150.png"
        />
        <meta name="msapplication-TileColor" content={brandColor} />
        <meta
          name="msapplication-config"
          content="/msbrowserconfig.xml"
        />

        {/* Apple */}
        <meta name="apple-mobile-web-app-title" content="Sample" />
        <link
          rel="apple-touch-icon"
          href="/sample-apple-touch-icon-180x180.png"
        />
        <link
          rel="mask-icon"
          href="/sample-icon.svg"
          color="#ffffff"
        />

        {/* Android Chrome */}
        <link
          rel="manifest"
          href="/site.webmanifest"
        />
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
