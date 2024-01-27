import { useState, useEffect } from "react";
import { Container, Image } from "semantic-ui-react";
import { DateTime } from "luxon";
import Link from "next/link";
import { Product } from "@/api";
import { Label } from "@/components/Shared";
import { fn } from "@/utils";
import styles from "./BannerLastProductPublished.module.scss";

const productCtrl = new Product();

export function BannerLastProductPublished() {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await productCtrl.getLastPublished();
        setProduct(response.data[0]);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  if (!product) return null;

  const wallpaper = product.attributes.wallpaper;
  const releaseDate = new Date(product.attributes.publishedAt).toISOString();
  const price = fn.calcDiscountedPrice(
    product.attributes.price,
    product.attributes.discount
  );

  return (
    <div className={styles.container}>
      <Image src={wallpaper.data.attributes.url} className={styles.wallpaper} />

      <Link className={styles.infoContainer} href={product.attributes.slug}>
        <Container>
          <span className={styles.date}>
            {DateTime.fromISO(releaseDate).minus({ days: 1 }).toRelative()}
          </span>

          <h2>{product.attributes.title}</h2>
          <p className={styles.price}>
            <Label.Discount>-{product.attributes.discount}%</Label.Discount>
            <span className={styles.finalPrice}>
              ${price} <span className={styles.coin}>MXN</span>
            </span>
          </p>
        </Container>
      </Link>
    </div>
  );
}
