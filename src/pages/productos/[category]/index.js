import { CatProduct, Product } from "@/api";

export { default } from "./category";

export async function getServerSideProps(context) {
  console.log(context);
  const {
    params: { category },
    query: { page = 1 },
  } = context;

  const catProductCtrl = new CatProduct();
  const responseCatProduct = await catProductCtrl.getBySlug(category);

  const productCtrl = new Product();
  const responseProducts = await productCtrl.getProductByCategorySlug(
    category,
    page
  );

  return {
    props: {
      category: responseCatProduct,
      products: responseProducts.data,
      pagination: responseProducts.meta.pagination,
    },
  };
}
