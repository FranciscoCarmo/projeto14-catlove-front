import axios from "axios";

const baseURL = "http://localhost:5000";

function createHeaders() {
  const auth = localStorage.getItem("token");
  const config = {
    headers: {
      Authorization: `Bearer ${auth}`,
    },
  };
  return config;
}

async function signIn(body) {
  try {
    const promise = await axios.post(`${baseURL}/signIn`, body);
    return promise;
  } catch (error) {
    console.error(error);
  }
}

async function signUp(body) {
  try {
    const promise = await axios.post(`${baseURL}/signUp`, body);
    return promise;
  } catch (error) {
    console.error(error);
  }
}

async function getProducts() {
  const config = createHeaders();
  try {
    const promise = await axios.get(`${baseURL}/products`, config);
    return promise;
  } catch (error) {
    console.error(error);
  }
}

async function getTextFilteredProducts(search) {
  const config = createHeaders();
  try {
    const promise = await axios.get(
      `${baseURL}/products?search=${search}`,
      config
    );
    return promise;
  } catch (error) {
    console.error(error);
  }
}

async function getProductsOfCategory(category) {
  const config = createHeaders();
  try {
    const promise = await axios.get(
      `${baseURL}/products?category=${category}`,
      config
    );
    return promise;
  } catch (error) {
    console.error(error);
  }
}

async function endSession() {
  const config = createHeaders();
  try {
    const promise = await axios.delete(`${baseURL}/logout`, config);
    return promise;
  } catch (error) {
    console.error(error);
  }
}

export {
  signIn,
  signUp,
  endSession,
  getProducts,
  getTextFilteredProducts,
  getProductsOfCategory,
};
