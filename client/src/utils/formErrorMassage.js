const formErrorMassage = {
  required: "Vui lòng không bỏ trống !",
  minString: (min, name) => `Tối thiểu là ${min} ${name} !`,
  maxString: (max, name) => `Tối đa là ${max} ${name} !`,
};

export default formErrorMassage;
