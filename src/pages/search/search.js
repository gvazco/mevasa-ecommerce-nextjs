import { useEffect } from "react";
import { Container } from "semantic-ui-react";
import { size } from "lodash";
import { StoreLayout } from "@/layouts";
import {
  GridGames,
  GridProducts,
  NoResult,
  Pagination,
  Separator,
} from "@/components/Shared";
import styles from "./search.module.scss";

export default function SearchPage(props) {
  const { products, games, pagination, searchText } = props;
  const hasResult = size(products) > 0;
  const hasResultg = size(games) > 0;

  console.log(hasResultg);

  useEffect(() => {
    document.getElementById("search-games").focus();
  }, []);

  return (
    <>
      <StoreLayout relative isOpenSearch>
        <Container>
          <Separator height={30} />

          <h2 className={styles.title}>Buscando en Productos: {searchText}</h2>
          {hasResult ? (
            <>
              <GridProducts products={products} />
              <Separator height={20} />
              <Pagination
                currentPage={pagination.page}
                totalPages={pagination.pageCount}
              />
            </>
          ) : (
            <NoResult text="No se han encontrado resultados en productos" />
          )}

          <Separator height={50} />
        </Container>

        <Container>
          <Separator height={30} />

          <h2 className={styles.title}>Buscando en Catálogo: {searchText}</h2>
          {hasResult ? (
            <>
              <GridProducts products={products} />
              <Separator height={20} />
              <Pagination
                currentPage={pagination.page}
                totalPages={pagination.pageCount}
              />
            </>
          ) : (
            <NoResult text="No se han encontrado resultados en nuestron catálogo" />
          )}

          <Separator height={50} />
        </Container>

        <Container>
          <Separator height={30} />

          <h2 className={styles.title}>Buscando en Portafolio: {searchText}</h2>
          {hasResult ? (
            <>
              <GridProducts products={products} />
              <Separator height={20} />
              <Pagination
                currentPage={pagination.page}
                totalPages={pagination.pageCount}
              />
            </>
          ) : (
            <NoResult text="No se han encontrado resultados en el portafolio" />
          )}

          <Separator height={50} />
        </Container>

        <Container>
          <Separator height={30} />

          <h2 className={styles.title}>
            Buscando en Documentación: {searchText}
          </h2>
          {hasResult ? (
            <>
              <GridProducts products={products} />
              <Separator height={20} />
              <Pagination
                currentPage={pagination.page}
                totalPages={pagination.pageCount}
              />
            </>
          ) : (
            <NoResult text="No se han encontrado resultados en el blog." />
          )}

          <Separator height={50} />
        </Container>
      </StoreLayout>
    </>
  );
}
