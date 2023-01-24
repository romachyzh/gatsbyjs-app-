import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Card from '../components/card/card';
import Heart from "../components/heart/heart";
import * as styles from './index.module.scss';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <h1>Welcome to <span className={styles.gradient}>Gatsby</span></h1>
      <p className={styles.instructions}>
        To get started, open the directory <code>src/pages</code> in your project.<br/>
        <strong>Code Challenge:</strong> Tweak the "Welcome to Gatsby" message above.
      </p>
      <ul role="list" className={styles.linkCardGrid}>
        <Card
          href="https://docs.astro.build/"
          title="Documentation"
          body="Learn how Gatsby works and explore the official API docs."
        />
        <Card
          href="https://astro.build/integrations/"
          title="Integrations"
          body="Supercharge your project with new frameworks and libraries."
        />
        <Card
          href="https://astro.build/themes/"
          title="Themes"
          body="Explore a galaxy of community-built starter themes."
        />
        <Card
          href="https://astro.build/chat/"
          title="Community"
          body="Come say hi to our amazing Discord community. ❤️"
        />
      </ul>
      <Heart />
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
