declare interface IDataCreateMessage {
    idReceive: string;
    messages: IMessageItem[];
    exp?: number;
}
declare interface ICreateMessageResponse extends IResponseSuccess {
    data: {
        conversationId: string;
        message: IMessage;
    };
}
