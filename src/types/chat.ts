import { IMessage } from "./message";

export interface IChat {
  recipientNumber: string;
  messages: IMessage[];
}
