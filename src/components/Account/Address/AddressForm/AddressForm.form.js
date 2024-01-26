import * as Yup from "yup";

export function initialValues(address) {
  return {
    title: address?.title || "",
    name: address?.name || "",
    address: address?.address || "",
    colony: address?.colony || "",
    city: address?.city || "",
    state: address?.state || "",
    postal_code: address?.postal_code || "",
    phone: address?.phone || "",
    exterior: address?.exterior || "",
    inteiror: address?.interior || "",
  };
}

export function validationSchema() {
  return Yup.object({
    title: Yup.string().required(true),
    name: Yup.string().required(true),
    address: Yup.string().required(true),
    colony: Yup.string().required(true),
    exterior: Yup.string().required(true),
    interior: Yup.string(),
    city: Yup.string().required(true),
    state: Yup.string().required(true),
    postal_code: Yup.string().required(true),
    phone: Yup.number().required(true),
  });
}
