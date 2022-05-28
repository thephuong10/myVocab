import React, { useState } from "react";
import { FastField } from "formik";
import vocabFormData from "../constants/form";
import Form from "./Form";
import Modal from "./Modal";

const Listitem = ({ item = null, onEdit, onRemove }) => {
  const [modal, setModal] = useState(false);
  return (
    <>
      <div className="flex items-center h-[45px] px-[16px] gap-4">
        <p className="flex-1 h-[100%] items-center flex">
          {item.name} : {item.mean}
        </p>
        <div className="flex items-center gap-[10px] h-[100%]">
          <i
            className="bx bxs-pencil text-[25px] text-neutral-200 cursor-pointer hover:text-yellow-300"
            onClick={() => setModal(() => true)}
          ></i>
          <i
            className="bx bxs-x-circle text-[25px] text-neutral-200 cursor-pointer hover:text-red-500"
            onClick={onRemove(item._id)}
          ></i>
        </div>
      </div>
      {modal ? (
        <Modal onClose={() => setModal(() => false)}>
          <Form
            initialValues={{
              name: item.name,
              mean: item.mean,
            }}
            onSubmit={(value) => onEdit(item._id, value)}
            validationSchema={vocabFormData.validationSchema}
            titleSubmit="Cập nhật"
            resetForm={false}
          >
            {vocabFormData.fields.map((item, index) => (
              <FastField key={index} {...item} />
            ))}
          </Form>
        </Modal>
      ) : (
        <></>
      )}
    </>
  );
};

export default Listitem;
