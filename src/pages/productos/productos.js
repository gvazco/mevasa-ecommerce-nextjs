import { useState, useEffect } from "react";
import Link from "next/link";
import { Image, Container } from "semantic-ui-react";
import { map } from "lodash";
import { CatProduct } from "@/api";
import styles from "./productos.module.scss";
import { StoreLayout } from "@/layouts";

const catProductCtrl = new CatProduct();

export default function Productos() {
  const [categories, setCategories] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await catProductCtrl.getAll();
        setCategories(response.data);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return (
    <>
      <StoreLayout>
        <Container>
          <h2 className={styles.title}>Productos</h2>

          {console.log(categories)}

          <div className={styles.grid_categories}>
            {map(categories, (category) => (
              <Link
                className={styles.item}
                key={category.id}
                href={`/productos/${category.attributes.slug}`}
              >
                <Image
                  src={category?.attributes?.cover?.data?.attributes?.url}
                />

                <div className={styles.label}>
                  <span className={styles.title}>
                    {category.attributes.title}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </StoreLayout>
    </>
  );
}
