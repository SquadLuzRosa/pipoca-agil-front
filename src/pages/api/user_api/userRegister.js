// api_userRegister.js
import axios from "axios";

const postRegister = async (formData) => {
  try {
    const response = await axios.post(`http://localhost:3001/auth/register`, formData);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("ERROR: ", error);
    throw error; // Lançar o erro novamente para que o chamador possa lidar com ele, se necessário
  }
};

export default postRegister;