import React from "react";
import { Container } from "semantic-ui-react";
import classNames from "classnames";
import { TopBar } from "@/components/Layout";
import { Poppins } from "next/font/google";
import styles from "./StoreLayout.module.scss";

//👇 Configure our font object
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

export function StoreLayout(props) {
  const {
    children,
    isOpenSearch = false,
    isContainer = false,
    relative,
  } = props;

  return (
    <>
      <html lang="en" className={poppins.className}>
        <TopBar />
        <Container fluid>
          <div className={classNames({ [styles.relative]: relative })}>
            {isContainer ? <Container>{children}</Container> : children}
          </div>
        </Container>
        {/* TODO: Footer */}
      </html>
    </>
  );
}