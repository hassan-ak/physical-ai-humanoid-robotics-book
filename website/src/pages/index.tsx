import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import ActionBar from '@site/src/components/ActionBar/ActionBar';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/pre-phase/bom">
            Start Physical AI Bootcamp - 5min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Physical AI & Humanoid Robotics Bootcamp: Master the Future of Embodied Intelligence">
      {/* Premium tech-startup aesthetic */}
      {/* Startup Founder tone */}
      <HomepageHeader />
      <ActionBar />
      {/* VLA Pipeline */}
      <main>
        <section className={styles.features}>
          <div className="container">
            <div className="row">
              <div className={clsx('col col--4', styles.featureCard)}>
                <div className={styles.cardContent}>
                  <h3>🚀 Advanced Robotics</h3>
                  <p>Learn cutting-edge humanoid robotics with NVIDIA Isaac Sim, ROS 2, and state-of-the-art control systems.</p>
                </div>
              </div>
              <div className={clsx('col col--4', styles.featureCard)}>
                <div className={styles.cardContent}>
                  <h3>🧠 Physical AI</h3>
                  <p>Master the integration of artificial intelligence with physical embodiment for real-world applications.</p>
                </div>
              </div>
              <div className={clsx('col col--4', styles.featureCard)}>
                <div className={styles.cardContent}>
                  <h3>💼 Startup Approach</h3>
                  <p>Develop solutions with an entrepreneur's mindset for commercial viability and market impact.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.curriculumPreview}>
          <div className="container padding-vert--xl text--center">
            <h2>Your Journey to Humanoid Mastery</h2>
            <p className="padding-horiz--md">
              From Pre-phase setup to Capstone project - 13 weeks of intensive learning
            </p>
            <div className={styles.timeline}>
              <div className={styles.timelineItem}>
                <div className={styles.timelineIcon}>🛠️</div>
                <h3>Pre-phase</h3>
                <p>Hardware & Software Setup</p>
              </div>
              <div className={styles.timelineItem}>
                <div className={styles.timelineIcon}>🧍</div>
                <h3>Weeks 1-5</h3>
                <p>Fundamentals of Humanoid Dynamics</p>
              </div>
              <div className={styles.timelineItem}>
                <div className={styles.timelineIcon}>🧠</div>
                <h3>Weeks 6-9</h3>
                <p>Perception & Control Systems</p>
              </div>
              <div className={styles.timelineItem}>
                <div className={styles.timelineIcon}>🤖</div>
                <h3>Weeks 10-13</h3>
                <p>AI Integration & Capstone Project</p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.ctaSection}>
          <div className="container text--center padding-vert--xl">
            <h2>Ready to Transform Your Robotics Career?</h2>
            <p className="padding-horiz--md">
              Join thousands of engineers who have mastered Physical AI and Humanoid Robotics
            </p>
            <div className={styles.buttons}>
              <Link
                className="button button--primary button--lg margin-right--md"
                to="/docs/pre-phase/bom">
                Start Learning Now
              </Link>
              <Link
                className="button button--secondary button--lg"
                to="/docs/intro">
                Explore Curriculum
              </Link>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
