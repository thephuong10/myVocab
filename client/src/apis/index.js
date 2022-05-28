const BASE_URL = "http://localhost:8000/api";

const getRequest = async (url) => {
  const response = await fetch(`${BASE_URL}/${url}`);
  return await response.json();
};

const postOrPutRequest = async (url, data, method) => {
  const response = await fetch(`${BASE_URL}/${url}`, {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return await response.json();
};

const deleteRequest = async (url) => {
  const response = await fetch(`${BASE_URL}/${url}`, {
    method: "DELETE",
  });
  return await response.json();
};

const rootApi = {
  postOrPutRequest,
  getRequest,
  deleteRequest,
};

export default rootApi;
