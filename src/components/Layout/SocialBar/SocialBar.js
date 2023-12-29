import React from "react";
import { Image } from "semantic-ui-react";
import Link from "next/link";
import styles from "./SocialBar.module.scss";

export function SocialBar(props) {
  const { isOpenSearch } = props;
  return (
    <div className={styles.socialBar}>
      <div className={styles.left}>
        <span>Seguridad, Exactitud y Garantía</span>
      </div>
      <div className={styles.center}>
        <span>(55) 8280-2149</span>
      </div>
      <div className={styles.right}>
        <span>SOCIAL</span>
      </div>
    </div>
  );
}
