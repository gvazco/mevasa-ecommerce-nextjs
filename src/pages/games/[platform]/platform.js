import { Container } from "semantic-ui-react";
import { size } from "lodash";
import { StoreLayout } from "@/layouts";
import {
  GridGames,
  Separator,
  NoResult,
  Pagination,
} from "@/components/Shared";
import styles from "./platform.module.scss";

export default function PlatformPage(props) {
  const { games, platform, pagination } = props;
  const hasProducts = size(games) > 0;

  return (
    <>
      <StoreLayout relative>
        <Container>
          <Separator height={50} />

          <h2 className={styles.title}>{platform.attributes.title}</h2>

          {hasProducts ? (
            <>
              <GridGames games={games} />
              <Separator height={30} />
              <Pagination
                currentPage={pagination.page}
                totalPages={pagination.pageCount}
              />
            </>
          ) : (
            <NoResult
              text={`La categoria ${platform.attributes.title} aun no tiene productos`}
            />
          )}

          <Separator height={100} />
        </Container>
      </StoreLayout>
    </>
  );
}
