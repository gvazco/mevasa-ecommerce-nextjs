import { useState, useEffect } from "react";
import { Product } from "@/api";
import { GridProducts } from "@/components/Shared";
import styles from "./LatestProducts.module.scss";

const productCtrl = new Product();

export function LatestProducts(props) {
  const { title, limit = 9, catProductId = null } = props;
  const [products, setProducts] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await productCtrl.getLatestPublished({
          limit,
          catProductId,
        });
        setProducts(response.data);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  if (!products) return null;

  return (
    <div>
      <h2 className={styles.title}>{title}</h2>
      <GridProducts products={products} />
    </div>
  );
}
