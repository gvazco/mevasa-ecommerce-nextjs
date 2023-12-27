import React from "react";
import Link from "next/link";
import styles from "./sign-in.module.scss";
import { JoinLayout } from "@/layouts";
import { LoginForm } from "@/components/Auth";

export default function SignInPage() {
  return (
    <>
      <JoinLayout>
        <div className={styles.signIn}>
          <h3>Iniciar Sesion</h3>
          {/* LoginForm */}

          <LoginForm />
          <div className={styles.actions}>
            <Link href="/join/sign-up">¿No tienes una cuenta?</Link>
          </div>
        </div>
      </JoinLayout>
    </>
  );
}
