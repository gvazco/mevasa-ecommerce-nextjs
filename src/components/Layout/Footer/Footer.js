import Link from "next/link";
import { Container, Image, Button } from "semantic-ui-react";
import styles from "./Footer.module.scss";

export function Footer() {
  return (
    <div className={styles.footer}>
      <Container>
        <div className={styles.columns}>
          <div>
            <Link href="/">
              <Image src="/images/icon-bco.png" alt="Gaming" />
            </Link>
          </div>

          <div>
            <ul>
              <Link href="#">Términos y condiciones</Link>
              <Link href="#">Política de privacidad</Link>
              <Link href="#">Contacto</Link>
              <Link href="#">FAQs</Link>
            </ul>
          </div>

          <div className={styles.social}>
            <Button
              as="a"
              href="https://facebook.com/mevasacomercializadora"
              icon="facebook"
            />
            <Button
              as="a"
              href="http://m.me/mevasacomercializadora"
              icon="facebook messenger"
            />
            <Button
              as="a"
              href="https://instagram.com/mevasacomercializadora"
              icon="instagram"
            />

            <Button
              as="a"
              href="https://www.youtube.com/channel/UCdPy7ZYQeeu1_nQGt71y-Bg"
              icon="youtube"
            />
            <Button
              as="a"
              href="https://wa.me/c/5215582802149"
              icon="whatsapp"
            />
          </div>
        </div>

        <div className={styles.copyright}>
          <span>Copyright © 2023 Mevasa - All rights reserved</span>
        </div>
      </Container>
    </div>
  );
}
