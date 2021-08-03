import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <img className="hero__image" src="img/nitmod.webp" alt="nitmod"></img>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="http://etmods.net/downloads/nitmod_2.3.4-b4.zip">
            Download N!tmod 2.3.4-B4
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();

  // Add Netlify Identity script
  if (typeof window !== "undefined") {
    // browser code
    const document = window.document;
    let script = document.createElement("script");
    script.innerHTML = `
      if (window.netlifyIdentity) {
        window.netlifyIdentity.on("init", user => {
          if (!user) {
            window.netlifyIdentity.on("login", () => {
            document.location.href = "/admin/";
            });
          }
        });
      }
    `;
  document.head.appendChild(script);
  }

  return (
    <Layout>
      <Head>
         <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
       </Head>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
