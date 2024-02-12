import { Game, Product } from "@/api";

export { default } from "./search";

export async function getServerSideProps(context) {
  const {
    query: { s, page = 1 },
  } = context;

  const gameCtrl = new Game();
  const productCtrl = new Product();
  const response = await productCtrl.searchProducts(s, page);
  const responseg = await gameCtrl.searchGames(s, page);

  return {
    props: {
      products: response.data,
      games: responseg.data,
      pagination: response.meta.pagination,
      paginationg: responseg.meta.pagination,
      searchText: s,
    },
  };
}
