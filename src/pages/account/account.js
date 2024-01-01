import React from "react";
import { StoreLayout } from "@/layouts";
import { Info } from "@/components/Account";

export default function account() {
  return (
    <>
      <StoreLayout isContainer relative>
        <Info />
      </StoreLayout>
    </>
  );
}
