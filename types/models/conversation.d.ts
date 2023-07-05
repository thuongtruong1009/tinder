declare interface IConversationUser {
    _id: string;
    name: IUserName;
    avatar: string;
    lastLogin: string;
}
declare interface IConversation {
    _id: string;
    users: IConversationUser[];
    messages: IMessage[];
    settings: any[];
    updatedAt: string;
}
