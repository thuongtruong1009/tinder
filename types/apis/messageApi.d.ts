declare interface IDataCreateMessage {
    idReceive: string;
    messages: IMessageItem[];
    exp?: number;
    updatedAt: string;
    createAt: string;
}
declare interface ICreateMessageResponse extends IResponseSuccess {
    data: {
        conversationId: string;
        message: IMessage;
    };
}
