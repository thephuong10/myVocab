import { FastField } from "formik";
import React, { useRef, useState } from "react";
import vocabFormData from "../constants/form";
import Form from "./Form";
import Modal from "./Modal";

const Search = ({ onAddVocab, onSearch }) => {
  const [modal, setModal] = useState(false);

  return (
    <>
      <div className="rounded-sm bg-white p-[20px] mt-[-30px] shadow-lg">
        <div className="flex items-center justify-between mb-4">
          <p className="text-[18px] font-bold mb-2">Vocabulary : </p>
          <span
            className="inline-flex items-center justify-center w-[35px] h-[35px] text-[20px] text-white rounded-[50%] cursor-pointer bg-sky-500 hover:bg-sky-700"
            onClick={() => setModal(() => true)}
          >
            <i className="bx bx-plus"></i>
          </span>
        </div>
        <div className="flex items-center gap-3 h-[40px]">
          <input
            type="text"
            className="flex-1 border-[2px] border-[#E4E4E4] rounded-[5px] h-[100%] px-[10px] outline-none hover:border-blue-500 focus:border-blue-500"
            placeholder="Tìm kiếm ..."
            onChange={(e) => onSearch(e.target.value)}
          />
        </div>
      </div>
      {modal ? (
        <Modal onClose={() => setModal(() => false)}>
          <Form
            initialValues={vocabFormData.initialValues}
            validationSchema={vocabFormData.validationSchema}
            onSubmit={(value) => onAddVocab(value)}
            titleSubmit="Thêm"
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

export default Search;
