declare interface IUpdateLocation {
    latitude: number;
    longitude: number;
}
declare interface IResponseUpdateLocation extends IResponseSuccess {
    data: {
        latitude: number;
        longitude: number;
        updatedAt: string;
    };
}
declare interface IDataFindFriendsAroundResponse {
    _id: string;
    name: IUserName;
    avatar: string;
    lastLocation: {
        latitude: number;
        longitude: number;
    };
    distance: number;
    age: number;
}
declare interface IFindFriendsAroundResponse extends IResponseSuccess {
    data: IStranger[];
}
