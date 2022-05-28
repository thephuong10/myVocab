import React from "react";
import { Formik, Form as FormElm } from "formik";
import classnames from "../utils/classnames";
const Form = ({
  initialValues = null,
  validationSchema = null,
  children,
  onSubmit = null,
  enableReinitialize = false,
  resetForm = true,
  className = "",
  titleSubmit = "",
}) => {
  const handleOnSubmit = (values, actions) =>
    new Promise((resolve) => {
      setTimeout(async () => {
        await onSubmit(values);
        resetForm && actions.resetForm();
        resolve(true);
      }, 1500);
    });
  return (
    <Formik
      enableReinitialize={enableReinitialize}
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleOnSubmit}
    >
      {(formikProps) => {
        const { isSubmitting } = formikProps;
        return (
          <div className={className}>
            <FormElm className="flex flex-col gap-5">
              <>{children}</>
              <button
                className={classnames(
                  "text-[18px] rounded-[3px]  text-white bg-sky-500 hover:bg-sky-700 px-[20px] py-[8px] mt-[10px]",
                  {
                    ["bg-gray-300 cursor-not-allowed"]: isSubmitting,
                  }
                )}
                type="submit"
              >
                <>{titleSubmit}</>
                {isSubmitting && (
                  <i className="bx bx-loader-alt animate-spin text-[20px] ml-[10px]"></i>
                )}
              </button>
            </FormElm>
          </div>
        );
      }}
    </Formik>
  );
};

export default Form;
