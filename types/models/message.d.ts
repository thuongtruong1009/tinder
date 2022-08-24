declare interface IMessageItem {
    type: 'text' | 'image';
    value: string | [];
}
declare interface IMessage {
    messages: IMessageItem[];
    senderId: IUserFriend;
    receiverId: string;
    createdAt: string;
    updatedAt: string;
    _id: string;
}
