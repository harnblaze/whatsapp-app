import axios from "axios";

const authorization = async (idInstance: string, apiTokenInstance: string) => {
  try {
    const response = await axios.get(
      `https://api.green-api.com/waInstance${idInstance}/getStateInstance/${apiTokenInstance}`
    );
    return response.data;
  } catch (error) {
    console.error("Error authorization", error);
    throw error;
  }
};

const greenAPI = {
  authorization,
};

export default greenAPI;
