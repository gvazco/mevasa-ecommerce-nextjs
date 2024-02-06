import { Container } from "semantic-ui-react";
import { size } from "lodash";
import { StoreLayout } from "@/layouts";
import {
  GridProducts,
  NoResult,
  Separator,
  Pagination,
} from "@/components/Shared";
import styles from "./category.module.scss";

export default function CatProductsPage(props) {
  const { products, category, pagination } = props;
  const hasProducts = size(products) > 0;

  return (
    <>
      <StoreLayout>
        <Container>
          <Separator heigth={50} />

          <h2 className={styles.title}>{category.attributes.title} </h2>

          {hasProducts ? (
            <>
              <GridProducts products={products} />
              <Separator height={30} />
              <Pagination
                currentPage={pagination.page}
                totalPages={pagination.pageCount}
              />
            </>
          ) : (
            <NoResult
              text={`La categoria ${category.attributes.title} aun no tiene productos`}
            />
          )}

          <Separator heigth={100} />
        </Container>
      </StoreLayout>
    </>
  );
}
