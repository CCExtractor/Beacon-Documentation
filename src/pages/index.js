import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>Docusaurus Tutorial - 5min ⏱️</div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <LandingPage />
    </Layout>
  );
}

import { FaMapMarkerAlt, FaUsers, FaMobileAlt } from "react-icons/fa";

function LandingPage() {
  return (
    <div className={styles.landingContainer}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          Welcome to Beacon
          <br />
          Documentation
        </h1>
        <p className={styles.subtitle}>
          Enhance your group travel experience with real-time location sharing
          and effortless regrouping.
        </p>

        <div className={styles.features}>
          <FeatureCard
            icon={
              <FaMapMarkerAlt className={styles.icon + " " + styles.blue} />
            }
            title="Real-Time Location Sharing"
            description="Group leaders can share their location instantly."
          />
          <FeatureCard
            icon={<FaUsers className={styles.icon + " " + styles.green} />}
            title="Seamless Regrouping"
            description="Find your group effortlessly with Beacon."
          />
          <FeatureCard
            icon={<FaMobileAlt className={styles.icon + " " + styles.red} />}
            title="User-Friendly Interface"
            description="Built with Flutter for a smooth experience."
          />
        </div>

        <button className={styles.getStarted}>
          <a href="https://ccextractor-beacon-docs.netlify.app/docs/category/frontend">Get Started</a>
        </button>
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className={styles.featureCard}>
      {icon}
      <h3 className={styles.featureTitle}>{title}</h3>
      <p className={styles.featureDescription}>{description}</p>
    </div>
  );
}
