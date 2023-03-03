import { ChatType } from "../chat.entity";

export class CreateChatDTO {
    readonly type: ChatType;
    readonly name: string;
    readonly password: string;
}
