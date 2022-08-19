declare interface IResponseUser extends IResponseUpdateLocation {
    distance: number;
}
declare interface IResponseUserHobby {
    hobbies: string[];
}
declare interface IFindStrangeFriendsAroundResponse extends IFindFriendsAroundResponse {}

declare interface IDataGetNotificationResponse {
    _id: string;
    hasSeen: boolean;
    message: string;
    createdAt: string;
    type: 'like' | 'match';
}

declare interface IGetNotificationResponse extends IResponseSuccess {
    data: IDataGetNotificationResponse[];
}

declare interface IUpdateHobbiesResponse extends IResponseSuccess {
    data: IHobby[];
}
