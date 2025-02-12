import * as Yup from 'yup';

const REQUIRED = 'El campo es requerido';
const INVALID = 'El campo es invalido';
const INVALID_SPACES = 'El campo no puede tener espacios';

const MIN_LENGHT = (min: number) =>
  `El campo debe tener al menos ${min} caracteres`;

export const authSchema = Yup.object().shape({
  userName: Yup.string()
    .required(REQUIRED)
    .min(3, MIN_LENGHT(3))
    .matches(/^\S*$/, INVALID_SPACES),
  email: Yup.string().required(REQUIRED).email(INVALID),
  password: Yup.string().required(REQUIRED).min(6, MIN_LENGHT(6)),
});
