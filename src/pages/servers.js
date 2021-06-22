import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './servers.module.css';

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout>
      <main>
        <div className="container">
          <div className="row">
            <div className={styles.srvcontainer}><iframe src="https://cache.gametracker.com/components/html0/?host=198.27.65.67:27960&bgColor=18191a&fontColor=F5F6F6&titleBgColor=18191a&titleColor=F5F6F6&borderColor=18191a&linkColor=ca1111&borderLinkColor=18191a&showMap=1&showCurrPlayers=0&showTopPlayers=0&showBlogs=0&width=180" frameborder="0" scrolling="no" width="180" height="288"></iframe></div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
