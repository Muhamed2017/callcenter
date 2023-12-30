import { Form,Button } from "antd";
import React from "react";
import { CAR_FORM } from "../utilities";
import './css/form.css'
const FormInquery=(props)=> {
  const onFinish = (values) => {
    console.log(values);
  };
  return (
    <>
      <div className="form-page">
      <Form onFinish={onFinish} name="inquery_form">
        {CAR_FORM.map((feild)=>{
            return <Form.Item name={feild.name}
            label={feild.label}
            >
                {feild.marker}
            </Form.Item>
        })}
                <Button htmlType="submit" className="arch-btn">
                  استعلام
                </Button>
      </Form>
      </div>
    </>
  );
}

export default FormInquery;
