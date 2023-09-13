import * as Yup from "yup";

export function initialValues() {
  return {
    origen: "",
    destino: "",
    fecha: "", //fecha: yup.date().required
    hora: "",
    lugares: 1,
    precio: 0,
  };
}

export function validationSchema() {
  return Yup.object({
    origen: Yup.string().required("Campo obligatorio"),
    destino: Yup.string().required("Campo obligatorio"),
    fecha: Yup.string().required("Campo obligatorio"),
    hora: Yup.string().required("Campo obligatorio"),
    lugares: Yup.number().required("Seleccione una opción"),
    precio: Yup.number()
      .min(0, "El precio no puede ser negativo")
      .required("El precio es obligatorio"),
  });
}
