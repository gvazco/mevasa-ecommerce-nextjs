import { Container } from "semantic-ui-react";
import { size } from "lodash";
import { StoreLayout } from "@/layouts";
import { GridProducts, NoResult, Separator } from "@/components/Shared";
import styles from "./platform.module.scss";

export default function PlatformPage(props) {
  const { games, platform, pagination } = props;
  const hasProducts = size(games) > 0;

  return (
    <>
      <StoreLayout>
        <Container>
          <Separator heigth={50} />

          <h2 className={styles.title}>{platform.attributes.title} </h2>

          {hasProducts ? (
            <>
              <GridProducts products={games} />
            </>
          ) : (
            <NoResult
              text={`La categoria ${platform.attributes.title} aun no tiene productos`}
            />
          )}

          <Separator heigth={100} />
        </Container>
      </StoreLayout>
    </>
  );
}
