declare interface IUpdateLocation {
    latitude: number;
    longitude: number;
}
declare interface IResponseUpdateLocation {
    name: IUserName;
    avatar: string;
    lastLocation: {
        latitude: number;
        longitude: number;
    };
    distance: number;
    age: number;
}
declare interface IFindFriendsAroundResponse {
    name: IUserName;
    avatar: string;
    lastLocation: {
        latitude: number;
        longitude: number;
    };
    distance: number;
    age: number;
}
