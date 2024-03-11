import { Container } from "semantic-ui-react";
import ReactMarkdown from "react-markdown";
import styles from "./Info.module.scss";

export function Info(props) {
  const { product } = props;
  console.log("PRODUCT: ", product);

  return (
    <Container className={styles.info}>
      <div className={styles.summary}>
        <p>{product.sumary}</p>
        <br />
        <ReactMarkdown className={styles.markdown}>
          {product?.specs[0]?.features}
        </ReactMarkdown>
      </div>

      <div className={styles.more}>
        <ul>
          {/* --------------------------- Campos obligatorios -------------------------- */}
          <li>
            <span>Marca:</span> <span>{product?.brand}</span>
          </li>
          <li>
            <span>Largo:</span> <span>{product?.specs[0]?.long}</span>
          </li>
          <li>
            <span>Alto:</span> <span>{product?.specs[0]?.height}</span>
          </li>
          <li>
            <span>Anchura:</span> <span>{product?.specs[0]?.width}</span>
          </li>
          <li>
            <span>Peso:</span> <span>{product?.specs[0]?.weight}</span>
          </li>
          {/* ------------------------------- Campos Opcionales ------------------------------- */}
          <br />
          <li>
            <span>{product?.specs[0]?.thickness}</span>
          </li>
          <li>
            <span>{product?.specs[0]?.caliber}</span>
          </li>
          <li>
            <span>{product?.specs[0]?.material}</span>
          </li>
          <li>
            <span>{product?.specs[0]?.display}</span>
          </li>
          <li>
            <span>{product?.specs[0]?.frequency}</span>
          </li>
          <li>
            <span>{product?.specs[0]?.voltage}</span>
          </li>
          <li>
            <span>{product?.specs[0]?.specs}</span>
          </li>
          <li>
            <span>{product?.specs[0]?.others}</span>
          </li>
          <li>
            <span>{product?.specs[0]?.equipment}</span>
          </li>
          <li>
            <span>{product?.specs[0]?.delivery}</span>
          </li>
        </ul>
      </div>
    </Container>
  );
}
