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

async function endSession() {
  const config = createHeaders();
  try {
    const promise = await axios.delete(`${baseURL}/logout`, config);
    return promise;
  } catch (error) {
    console.error(error);
  }
}

export { signIn, signUp, endSession };
