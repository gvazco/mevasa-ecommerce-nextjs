import { useState } from "react";
import { Tab } from "semantic-ui-react";
import { useRouter } from "next/router";
import { StoreLayout } from "@/layouts";
import { useAuth } from "@/hooks";
import { Separator } from "@/components/Shared";
import { Info, Settings, Address, Wishlist } from "@/components/Account";
import styles from "./account.module.scss";

export default function account() {
  const { user, logout } = useAuth();
  const router = useRouter();
  const [reload, setReload] = useState(false);

  if (!user) {
    router.push("/");
    return null;
  }

  const onReload = () => setReload((prevState) => !prevState);

  const panes = [
    {
      menuItem: "Mis Pedidos",
      render: () => (
        <Tab.Pane attached={false}>
          <p>Mis pedidos...</p>
          <Separator height={80} />
        </Tab.Pane>
      ),
    },
    {
      menuItem: "Lista de deseos",
      render: () => (
        <Tab.Pane attached={false}>
          <Wishlist />
          <Separator height={80} />
        </Tab.Pane>
      ),
    },
    {
      menuItem: "Direcciones",
      render: () => (
        <Tab.Pane attached={false}>
          <Address.AddAddress onReload={onReload} />
          <Address.ListAddresses reload={reload} onReload={onReload} />
          <Separator height={80} />
        </Tab.Pane>
      ),
    },
    {
      menuItem: { key: 20, icon: "settings", content: "Ajustes" },
      render: () => (
        <Tab.Pane attached={false}>
          <Settings.ChangeNameForm />
          <div className={styles.containerForms}>
            <Settings.ChangeEmailForm />
            <Settings.ChangePasswordForm />
          </div>
          <Separator height={80} />
        </Tab.Pane>
      ),
    },
    {
      menuItem: {
        key: 20,
        icon: "log out",
        content: "",
        onClick: logout,
      },
    },
  ];

  return (
    <>
      <StoreLayout isContainer relative>
        <Info />
        <Tab
          menu={{ secondary: true, pointing: true }}
          panes={panes}
          className={styles.tabs}
        />
      </StoreLayout>
    </>
  );
}
