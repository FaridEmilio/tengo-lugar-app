import * as Yup from "yup";

export function initialValues() {
  return {
    name: "",
    email: "",
    password: "",
    repeatPassword: "",
  };
}

export function validationSchema() {
  return Yup.object({
    name: Yup.string().required("El campo Nombre y Apellido es obligatorio."),
    email: Yup.string()
      .email("Email inválido. Por favor inténtelo de nuevo.")
      .required("El campo Email es obligatorio."),
    password: Yup.string().required("La contraseña es obligatoria."),
    repeatPassword: Yup.string()
      .required("La contraseña es obligatoria.")
      .oneOf(
        [Yup.ref("password")],
        "Las contraseñas no coinciden. Por favor inténtelo de nuevo."
      ), //En esta linea decimos que repeatPassword === password
  });
}
