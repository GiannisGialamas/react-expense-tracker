import React from "react";
import { Form, Formik } from "formik";
import { v4 as uuidv4 } from "uuid";
import { GlobalContext } from "../../context/GlobalState";
import { transactionSchema } from "../../util/validation";
import Input from "../../components/Input";

interface props {}

const TransactionAdd: React.FC<props> = ({}) => {
  const { addTransaction }: any = React.useContext(GlobalContext);

  return (
    <React.Fragment>
      <h3>Add Transaction</h3>

      <Formik
        initialValues={{ name: "", amount: 0 }}
        validationSchema={transactionSchema}
        onSubmit={async (data) => {
          addTransaction({
            id: uuidv4(),
            amount: +data.amount,
            text: data.name,
          });
        }}
      >
        {({ handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <Input label="Name" name="name" placeholder="Example Rent..." />
            <Input label="Amount" name="amount" placeholder="Example 15.99" />
            <button className="btn">Add</button>
          </Form>
        )}
      </Formik>
    </React.Fragment>
  );
};

export default TransactionAdd;
