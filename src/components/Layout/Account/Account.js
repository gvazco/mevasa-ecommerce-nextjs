import React from "react";
import { Button, Icon, Label } from "semantic-ui-react";
import { useRouter } from "next/router";
import { useAuth } from "@/hooks";
import styles from "./Account.module.scss";

export function Account() {
  const { user } = useAuth();
  const router = useRouter();

  const total = 5;

  const goToLogin = () => router.push("/join/sign-in");
  const goToAccount = () => router.push("/account");

  const goToCart = () => {
    if (!user) goToLogin();
    else router.push("cart");
  };

  return (
    <div className={styles.account}>
      <Button icon className={styles.cart}>
        <Icon name="file excel" onClick={goToCart} />
        {total > 0 && <Label circular>{total}</Label>}
      </Button>
      <Button icon className={styles.cart}>
        <Icon name="cart" onClick={goToCart} />
        {total > 0 && <Label circular>{total}</Label>}
      </Button>

      {!user ? (
        <Button icon className={styles.us}>
          <Icon name="user outline" onClick={goToLogin} />
        </Button>
      ) : (
        <Button icon className={styles.user}>
          <Icon name="user outline" onClick={goToLogin} />
        </Button>
      )}
    </div>
  );
}
