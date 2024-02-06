import { useState, useEffect } from "react";
import Link from "next/link";
import { Image } from "semantic-ui-react";
import { map } from "lodash";
import { CatProduct } from "@/api";

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
    <div>
      <h3>Productos</h3>

      {map(categories, (category) => (
        <Link key={category.id} href={`/productos/${category.attributes.slug}`}>
          <Image src={category?.attributes?.icon?.data?.attributes?.url} />
          {category.attributes.title}
        </Link>
      ))}
    </div>
  );
}
