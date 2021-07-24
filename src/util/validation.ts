import * as yup from "yup";

export const transactionSchema = yup.object().shape({
  name: yup.string().required(),
  amount: yup.number().required(),
});
