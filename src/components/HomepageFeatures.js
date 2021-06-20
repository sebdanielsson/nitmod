import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Admin system',
    Img: require('../../static/img/roles.webp').default,
    description: (
      <>
        N!tmod includes a powerful Shrubbot-like admin system which let's you set up server roles and memberships.
      </>
    ),
  },
  {
    title: 'Custom commands',
    Img: require('../../static/img/doublejump.webp').default,
    description: (
      <>
        N!tmod enables you to customize plenty of game options, including features such as doublejump and adding new weapons.
      </>
    ),
  },
  {
    title: 'XP Save',
    Img: require('../../static/img/xpsave.webp').default,
    description: (
      <>
        N!tmod let's you configure XP Save with options for save duration, XP required for each level and automatic XP reset.
      </>
    ),
  },
];

function Feature({Img, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img className={styles.featureImg} src={Img} alt="{title}"/>
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
