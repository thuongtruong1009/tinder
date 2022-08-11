declare interface IUpdateLocation {
    latitude: number;
    longitude: number;
}
declare interface IResponseUpdateLocation {
    name: {
        firstName: string;
        lastName: string;
    };
    avatar: string;
    lastLocation: {
        _id: string;
        latitude: number;
        longitude: number;
    };
}
