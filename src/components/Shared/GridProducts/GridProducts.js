import Link from "next/link";
import { map } from "lodash";
import { fn } from "@/utils";
import { Label } from "@/components/Shared";
import styles from "./GridProducts.module.scss";

export function GridProducts(props) {
  const { products } = props;

  return (
    <div className={styles.gridProducts}>
      {map(products, (product) => (
        <Link
          key={product.id}
          href={`/${product.attributes.slug}`}
          className={styles.product}
        >
          <div>
            <img src={product.attributes.cover.data.attributes.url} />
            {product.attributes.discount > 0 && (
              <Label.Discount className={styles.discount}>
                {`-${product.attributes.discount}%`}
              </Label.Discount>
            )}
          </div>

          <div className={styles.label}>
            <span className={styles.title}>
              {product.attributes.title.slice(0, 50) + "..."}
            </span>
            <span className={styles.price}>
              $
              {fn.calcDiscountedPrice(
                product.attributes.price,
                product.attributes.discount
              )}
              <span className={styles.coin}> MXN</span>
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
