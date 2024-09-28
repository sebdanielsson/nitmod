import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

interface FeatureProps {
  Img: string;
  title: string;
  description: React.ReactNode;
}

const FeatureList: FeatureProps[] = [
  {
    title: 'Admin system',
    Img: 'img/roles.webp',
    description: (
      <>
        N!tmod includes a powerful Shrubbot-like admin system which let's you set up server roles
        and memberships.
      </>
    ),
  },
  {
    title: 'Custom commands',
    Img: 'img/doublejump.webp',
    description: (
      <>
        N!tmod enables you to customize plenty of game options, including features such as
        doublejump and adding new weapons.
      </>
    ),
  },
  {
    title: 'XP Save',
    Img: 'img/xpsave.webp',
    description: (
      <>
        N!tmod let's you configure XP Save with options for save duration, XP required for each
        level and automatic XP reset.
      </>
    ),
  },
];

const Feature: React.FC<FeatureProps> = ({ Img, title, description }) => {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img className={styles['feature-img']} src={Img} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title} </h3>
        <p> {description} </p>
      </div>
    </div>
  );
};

const HomepageFeatures: React.FC = () => {
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
};

export default HomepageFeatures;
