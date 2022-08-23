declare interface IGetAllGiftResponse extends IResponseSuccess {
    data: {
        gifts: IGift[];
    };
}
