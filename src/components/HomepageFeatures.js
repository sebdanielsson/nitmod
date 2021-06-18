import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Admin system',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        N!tmod includes a powerful Shrubbot-like admin system which let's you set up server roles and memberships.
      </>
    ),
  },
  {
    title: 'Custom commands',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        N!tmod allows adding custom commands to the existing admin system commands set.
      </>
    ),
  },
  {
    title: 'XP Save',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        N!tmod let's you configure XP Save. You can customize save duration, which how much XP is required for each level and auto XP reset.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
