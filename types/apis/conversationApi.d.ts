declare interface IConversationPagination {
    conversation: IConversation;
    limit: number;
    page: number;
    next: boolean;
}
declare interface IGetAllConversationsResponse extends IResponseSuccess {
    data: IConversationPagination[];
}
declare interface IGetConversationResponse extends IResponseSuccess {
    data: IConversationPagination;
}
