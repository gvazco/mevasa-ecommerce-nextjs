import { Container } from "semantic-ui-react";
import { StoreLayout } from "@/layouts";
import { Home } from "@/components/Home";
import { Separator } from "@/components/Shared";

export default function HomePage() {
  return (
    <>
      <StoreLayout>
        <Home.BannerLastProductPublished />

        <Separator height={30} />

        <Container>
          <Home.LatestProducts title="Ultimos lanzamientos" />
        </Container>

        <Separator height={100} />
      </StoreLayout>
    </>
  );
}
