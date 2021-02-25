import React from "react";
import { Row, Col, Button } from "react-bootstrap-v5";
import { Field, Form, Formik, useFormikContext } from "formik";
import * as Yup from "yup";
import moment from "moment-timezone";

import TextInput from "./TextInput";
import PhoneInput from "./PhoneInput";
import DateInput from "./DateInput";
import OrderItemsTable from "./OrderItemsTable";

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  phone: Yup.string().required("Required"),
  deliveryDate: Yup.string().required("Required"),
});

const initialValues = {
  firstName: "",
  lastName: "",
  phone: "",
  deliveryDate: moment().add(5, "days").format("YYYY-MM-DD"),
  items: [
    { name: "Pant", qty: 0, rate: 0, amount: 0 },
    { name: "Shirt", qty: 0, rate: 0, amount: 0 },
    { name: "Coat", qty: 0, rate: 0, amount: 0 },
    { name: "Kurta", qty: 0, rate: 0, amount: 0 },
    { name: "Shalwar Kameez", qty: 0, rate: 0, amount: 0 },
    { name: "Sherwani", qty: 0, rate: 0, amount: 0 },
  ],
};

export const OrderForm = () => {
  return (
    <div className="shadow shadow-md rounded p-4">
      <Formik initialValues={initialValues} validationSchema={validationSchema}>
        <Form>
          <h3 className="text-center display-4">New Order</h3>
          <Row className="my-3 g-2">
            <Col>
              <Field
                as={TextInput}
                name="firstName"
                label="First Name"
                placeholder="First Name"
              />
            </Col>
            <Col>
              <Field
                as={TextInput}
                name="lastName"
                label="Last Name"
                placeholder="Last Name"
              />
            </Col>
          </Row>
          <Row className="mb-3 row-cols-md-2 g-2">
            <Col>
              <Field
                as={PhoneInput}
                name="phone"
                label="Phone"
                placeholder="Phone"
              />
            </Col>
            <Col>
              <Field as={DateInput} name="deliveryDate" label="Delivery Date" />
            </Col>
          </Row>
          <h4 className="text-center">Particulars</h4>
          <OrderItemsTable />
          <div className="mb-3 d-flex flex-column">
            <Button variant="primary" type="submit">
              Create Order
            </Button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};
