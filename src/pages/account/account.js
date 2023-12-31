import { useState } from "react";
import { Tab } from "semantic-ui-react";
import { useRouter } from "next/router";
import { StoreLayout } from "@/layouts";
import { useAuth } from "@/hooks";
import { Info, Settings } from "@/components/Account";
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
        </Tab.Pane>
      ),
    },
    {
      menuItem: "Lista de deseos",
      render: () => (
        <Tab.Pane attached={false}>
          <p>Mi lista de deseos...</p>
        </Tab.Pane>
      ),
    },
    {
      menuItem: "Direcciones",
      render: () => (
        <Tab.Pane attached={false}>
          <p>Mis direcciones...</p>
        </Tab.Pane>
      ),
    },
    {
      menuItem: { icon: "settings", content: "Ajustes" },
      render: () => (
        <Tab.Pane attached={false}>
          <Settings.ChangeNameForm />
        </Tab.Pane>
      ),
    },
    {
      menuItem: {
        icon: "logout",
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
