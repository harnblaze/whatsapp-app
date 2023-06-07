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
        phoneNumber,
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error checking phone number", error);
    throw error;
  }
};

const sendMessage = async (
  phoneNumber: string,
  messageText: string,
  idInstance: string,
  apiTokenInstance: string
) => {
  try {
    const response = await axios.post(
      `https://api.green-api.com/waInstance${idInstance}/SendMessage/${apiTokenInstance}`,
      {
        chatId: `${phoneNumber}@c.us`,
        message: `${messageText}`,
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error sending message", error);
    throw error;
  }
};

const getNotification = async (
  idInstance: string,
  apiTokenInstance: string
) => {
  const response = await axios.get(
    `https://api.green-api.com/waInstance${idInstance}/ReceiveNotification/${apiTokenInstance}`
  );
  return response.data;
};

const deleteNotification = async (
  idInstance: string,
  apiTokenInstance: string
) => {
  const response = await axios.get(
    `https://api.green-api.com/waInstance${idInstance}/ReceiveNotification/${apiTokenInstance}`
  );
  return response.data;
};

const greenAPI = {
  authorization,
  checkRecipient,
  sendMessage,
  getNotification,
  deleteNotification,
};

export default greenAPI;
