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

const checkRecipient = async (
  phoneNumber: string,
  idInstance: string,
  apiTokenInstance: string
) => {
  try {
    const response = await axios.post(
      `https://api.green-api.com/waInstance${idInstance}/CheckWhatsapp/${apiTokenInstance}`,
      {
        phoneNumber: `7${phoneNumber}`,
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error checking phone number", error);
    throw error;
  }
};

const greenAPI = {
  authorization,
  checkRecipient,
};

export default greenAPI;
