const typeObject = {
  object: "object",
  bool: "boolean",
  string: "string",
  func: "function",
};
const classnames = (...names) =>
  names
    .map((item) => {
      let name = "";
      if (
        typeof item === typeObject["object"] &&
        Object.keys(item).length !== 0
      ) {
        name = Object.keys(item)
          .map((key) => {
            let result = "";
            if (typeof item[key] === typeObject["bool"] && item[key] === true) {
              result = key;
            }
            return result;
          })
          .join(" ");
      } else if (typeof item === typeObject["string"]) {
        name = item;
      }
      return name;
    })
    .join(" ")
    .split(" ")
    .filter((i) => i)
    .join(" ");

export default classnames;
