import * as React from "react"
import * as styles from './card.module.scss';

export interface Props {
  title: string;
  body: string;
  href: string;
}
const Card: React.FC<Props> = ({ href, body, title }) => {
  return (
    <li className={styles.gradient}>
      <a href={href}>
        <h2>
          {title}
          <span>&rarr;</span>
        </h2>
        <p>
          {body}
        </p>
      </a>
    </li>

  )
}

export default Card

