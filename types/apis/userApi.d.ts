declare interface IResponseUser extends IResponseUpdateLocation {
    distance: number;
}
declare interface IResponseUserHobby {
    hobbies: string[];
}
declare interface IFindStrangeFriendsAroundResponse {
    data: IStranger[];
}

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
declare interface IFirstUpdateUser {
    email?: string;
    name: string;
    birthday: string;
    gender: string;
}
declare interface IFirstUpdateUserResponse extends IResponseSuccess {
    data: {
        name: IUserName;
        email: string;
        birthday: string;
        gender: IGender;
    };
}

declare interface IUpdateBio {
    bio: string;
}

declare interface IUpdateBioResponse extends IResponseSuccess {
    data: string;
}

declare interface IUpdateReligion {
    religion: boolean;
}

declare interface IUpdateReligionResponse extends IResponseSuccess {
    data: boolean;
}

declare interface IUpdateUserEducationsResponse extends IResponseSuccess {
    data: IEducation;
}

declare interface IUpdateUserGenderResponse extends IResponseSuccess {
    data: IGender;
}

declare interface IUpdateUserBeerResponse extends IResponseSuccess {
    data: IBeer;
}

declare interface IUpdateUserReasonResponse extends IResponseSuccess {
    data: string;
}

declare interface IUploadUserAlbumsResponse extends IResponseSuccess {
    data: IAlbums[];
}

declare interface IUpdateFavoriteResponse extends IResponseSuccess {
    data: IAlbums;
}

declare interface IUpdateDefaultResponse extends IResponseSuccess {
    data: IAlbums;
}

declare interface IDeleteImageResponse extends IResponseSuccess {
    data: string;
}

declare interface IUpdateUserCommonInfoResponse extends IResponseSuccess {
    data: ICommonInfo;
}

declare interface IUpdateUserHeightResponse extends IResponseSuccess {
    data: number;
}
