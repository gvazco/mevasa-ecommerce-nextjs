import React from "react";
import { Image } from "semantic-ui-react";
import Link from "next/link";
import { SocialBar } from "../SocialBar";
import styles from "./TopBar.module.scss";

export function TopBar(props) {
  const { isOpenSearch } = props;
  return (
    <>
      <SocialBar />
      <div className={styles.topBar}>
        <div className={styles.left}>
          <Link href="/">
            <Image src="/images/logo.png" alt="Mevasa Comercializadora" />
          </Link>
        </div>
        <div className={styles.center}>
          <span>MENU</span>
        </div>
        <div className={styles.right}>
          <span>ACCOUNT</span>
        </div>
      </div>
    </>
  );
}
