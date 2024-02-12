import { Container } from "semantic-ui-react";
import { StoreLayout } from "@/layouts";
import { Home } from "@/components/Home";
import { Separator, BarTrust, BannerAd, Seo } from "@/components/Shared";

const catProductsId = {
  soldadoras: 10,
  taladros: 9,
};

export default function HomePage() {
  return (
    <>
      <Seo />

      <StoreLayout>
        <Home.BannerLastProductPublished />

        <Separator height={30} />

        <Container>
          <Home.LatestProducts title="Agregados recientemente" limit={6} />
        </Container>

        <Separator height={50} />

        <BarTrust />

        <Separator height={50} />

        <Container>
          <Home.LatestProducts
            title="Soldadoras Inversoras"
            limit={3}
            catProductId={catProductsId.soldadoras}
          />
        </Container>

        <Separator height={50} />

        <BannerAd
          title="Registrate y obten los mejores precios"
          subtitle="Compara todos nuestros productos y encuentra lo que necesitas"
          btnTitle="Entrar ahora"
          btnLink="/account"
          image="/images/img01.png"
        />

        <Separator height={50} />

        <Container>
          <Home.LatestProducts
            title="Taladros y Rotomartillos"
            limit={3}
            catProductId={catProductsId.taladros}
          />
        </Container>

        <Separator height={50} />
      </StoreLayout>
    </>
  );
}
