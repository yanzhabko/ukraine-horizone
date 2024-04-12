"use server";
import axios from "axios";

export const fetchServerStatus = async () => {
  try {
    const response = await axios.get(
      "https://api.mcstatus.io/v2/status/java/195.35.56.205:25567"
    );
    return {
      onlineUsers: response.data.players.online,
      maxOnlineUsers: response.data.players.max,
    };
  } catch (error) {
    console.error("Сталася помилка при отриманні даних:", error);
    return {
      onlineUsers: 0,
      maxOnlineUsers: 0,
    };
  }
};
