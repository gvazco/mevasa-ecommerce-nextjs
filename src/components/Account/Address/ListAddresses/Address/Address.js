import { useState } from "react";
import { Button, Icon } from "semantic-ui-react";
import { BasicModal } from "@/components/Shared";
import { AddressForm } from "../../AddressForm";
import styles from "./Address.module.scss";

export function Address(props) {
  const { addressId, address, onReload } = props;
  const [showEdit, setShowEdit] = useState(false);

  const openCloseEdit = () => setShowEdit((prevState) => !prevState);

  return (
    <>
      <div className={styles.address}>
        <div className={styles.address_info}>
          <p className={styles.title}>{address.title}</p>
          <p className={styles.addressInfo}>
            <span className={styles.title}>Recibe: </span>
            {address.name} - {address.phone}
          </p>
        </div>

        <div className={styles.address_info}>
          <span className={styles.title}>Calle y Número: </span>
          <p className={styles.addressInfo}>
            {address.address} No.Ext: {address.exterior}
            {address?.interior ? ` No.Int: ` + address.interior : ""}
          </p>
        </div>
        <div className={styles.address_info}>
          <p className={styles.addressInfo}>
            <span className={styles.title}>Colonia: </span>
            {address.colony}
          </p>
          <p className={styles.addressInfo}>
            <span className={styles.title}>C.P: </span>
            {address.postal_code}
          </p>
        </div>
        <div className={styles.address_info}>
          <p className={styles.addressInfo}>
            <span className={styles.title}>Ciudad: </span>
            {address.city}
          </p>
          <p className={styles.addressInfo}>
            <span className={styles.title}>Estado: </span>
            {address.state}
          </p>
        </div>

        <div className={styles.actions}>
          <Button primary icon onClick={openCloseEdit}>
            <Icon name="pencil" />
          </Button>
          <Button primary icon>
            <Icon name="delete" />
          </Button>
        </div>
      </div>

      <BasicModal
        show={showEdit}
        onClose={openCloseEdit}
        title="Editar dirección"
      >
        <AddressForm
          onClose={openCloseEdit}
          onReload={onReload}
          addressId={addressId}
          address={address}
        />
      </BasicModal>
    </>
  );
}
