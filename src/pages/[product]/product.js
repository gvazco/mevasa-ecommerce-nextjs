import { StoreLayout } from "@/layouts";
import { Product } from "@/components/Product";
import { Separator } from "@/components/Shared";

export default function ProductPage(props) {
  console.log(props);
  const { product } = props;
  const wallpaper = product.attributes.wallpaper;

  return (
    <>
      <StoreLayout>
        <Product.HeaderWallpaper image={wallpaper.data.attributes.url} />
        <Product.Panel productId={product.id} product={product.attributes} />

        <Separator height={50} />

        <Product.Info product={product.attributes} />

        <Separator height={30} />

        <Product.Media
          video={product?.attributes?.video}
          screenshots={product.attributes.screenshots.data}
        />

        <Separator height={50} />
      </StoreLayout>
    </>
  );
}
