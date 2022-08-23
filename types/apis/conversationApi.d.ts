declare interface IConversationPagination {
    conversation: IConversation;
    limit: number;
    page: number;
}
declare interface IGetAllConversationsResponse extends IResponseSuccess {
    data: IConversationPagination[];
}
declare interface IGetConversationResponse extends IResponseSuccess {
    data: IConversationPagination;
}
