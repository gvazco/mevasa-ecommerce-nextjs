import { Form } from "semantic-ui-react";
import { useFormik } from "formik";
import { Address } from "@/api";
import { useAuth } from "@/hooks";
import { initialValues, validationSchema } from "./AddressForm.form";

const addressCtrl = new Address();

export function AddressForm(props) {
  const { onClose, onReload, addressId, address } = props;
  const { user } = useAuth();

  const formik = useFormik({
    initialValues: initialValues(address),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        if (addressId) {
          await addressCtrl.update(formValue, addressId);
        } else {
          await addressCtrl.create(formValue, user.id);
        }

        formik.handleReset();
        onReload();
        onClose();
      } catch (error) {
        console.error(error);
      }
    },
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      <Form.Input
        name="title"
        placeholder="Titulo de la dirección"
        value={formik.values.title}
        onChange={formik.handleChange}
        error={formik.errors.title}
      />

      <Form.Group widths="equal">
        <Form.Input
          name="name"
          placeholder="Recibe (Nombre y apellidos)"
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.errors.name}
        />
      </Form.Group>

      <Form.Group widths="equal">
        <Form.Input
          name="address"
          placeholder="Dirección (Av., calle, vereda, andador, etc.)"
          value={formik.values.address}
          onChange={formik.handleChange}
          error={formik.errors.address}
        />
        <Form.Input
          name="colony"
          placeholder="Colonia"
          value={formik.values.colony}
          onChange={formik.handleChange}
          error={formik.errors.colony}
        />
      </Form.Group>

      <Form.Group widths="equal">
        <Form.Input
          name="exterior"
          placeholder="Numero Exterior"
          value={formik.values.exterior}
          onChange={formik.handleChange}
          error={formik.errors.exterior}
        />
        <Form.Input
          name="interior"
          placeholder="Número Interior"
          value={formik.values.interior}
          onChange={formik.handleChange}
          error={formik.errors.interior}
        />
      </Form.Group>

      <Form.Group widths="equal">
        <Form.Input
          name="state"
          placeholder="Estado"
          value={formik.values.state}
          onChange={formik.handleChange}
          error={formik.errors.state}
        />
        <Form.Input
          name="city"
          placeholder="Ciudad"
          value={formik.values.city}
          onChange={formik.handleChange}
          error={formik.errors.city}
        />
      </Form.Group>

      <Form.Group widths="equal">
        <Form.Input
          name="postal_code"
          placeholder="Codigo postal"
          value={formik.values.postal_code}
          onChange={formik.handleChange}
          error={formik.errors.postal_code}
        />
        <Form.Input
          name="phone"
          placeholder="Telefono"
          value={formik.values.phone}
          onChange={formik.handleChange}
          error={formik.errors.phone}
        />
      </Form.Group>

      <Form.Button type="submit" fluid loading={formik.isSubmitting}>
        Enviar
      </Form.Button>
    </Form>
  );
}
