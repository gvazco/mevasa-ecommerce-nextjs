import React from "react";
import { Icon } from "semantic-ui-react";
import Link from "next/link";
import styles from "./SocialBar.module.scss";

export function SocialBar(props) {
  const { isOpenSearch } = props;
  return (
    <div className={styles.socialBar}>
      <div className={styles.left}>
        <span>
          <Icon name="shield" />
          Seguridad, Exactitud y Garantía
        </span>
      </div>
      <div className={styles.center}>
        <span>
          <Icon name="phone" />
          (55) 8280-2149
        </span>
      </div>
      <div className={styles.right}>
        <a href="https://facebook.com/mevasacomercializadora">
          <Icon size="large" name="facebook" />
        </a>
        <a href="http://m.me/mevasacomercializadora">
          <Icon size="large" name="facebook messenger" />
        </a>
        <a href="https://instagram.com/mevasacomercializadora">
          <Icon size="large" name="instagram" />
        </a>
        <a href="https://www.youtube.com/channel/UCdPy7ZYQeeu1_nQGt71y-Bg">
          <Icon size="large" name="youtube" />
        </a>
        <a href="https://wa.me/c/5215582802149">
          <Icon size="large" name="whatsapp" />
        </a>
      </div>
    </div>
  );
}
