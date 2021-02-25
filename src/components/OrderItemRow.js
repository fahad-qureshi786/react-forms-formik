import { useField } from "formik";
import React, { useState } from "react";
import { Form } from "react-bootstrap-v5";

import CurrencyFormat from "react-currency-format";

const OrderItemRow = ({ item, i }) => {
  const [amount, setAmount] = useState(0);

  const [{ ...qty }] = useField(`items[${i}].qty`);
  const [{ ...rate }] = useField(`items[${i}].rate`);
  const updateAmount = () => {
    setAmount(qty.value * rate.value);
  };

  return (
    <tr className="align-middle">
      <td>{item.name}</td>
      <td style={{ maxWidth: "60px" }}>
        <Form.Control type="number" {...qty} onKeyUp={updateAmount} />
      </td>
      <td style={{ maxWidth: "70px" }}>
        <Form.Control type="number" {...rate} onKeyUp={updateAmount} />
      </td>
      <td>
        <CurrencyFormat value={amount} displayType="text" prefix="Rs. " />
      </td>
    </tr>
  );
};

export default OrderItemRow;
