declare interface IUserGender {
    _id: string;
    name: string;
}

declare interface IUserStatus {
    isFirstUpdate: boolean;
    isVerified: boolean;
    isActive: boolean;
}

declare interface IUserHobby {
    _id: string;
    name: string;
}

declare interface IUserName {
    firstName: string;
    lastName: string;
}

declare interface IUserHobbyItem {
    _id: string;
    name: string;
}

declare interface IUserFriend {
    _id: string;
    email: string;
    avatar: string;
    name: IUserName;
}
declare interface IUserBlock extends IUserFriend {}

declare interface IUserLocation {
    latitude: number;
    longitude: number;
    updatedAt: string;
}

declare interface IUserBagItem {
    giftId: string;
    quantity: number;
}

declare interface IUserInfo {
    height: number;
    reason: string;
    beer: IBeer;
    religion: boolean;
    education: IEducation;
}

declare interface IProfile {
    bio: string;
    albums: IAlbums[];
}

declare interface IUser {
    _id: string;
    phone: string;
    email: string;
    name: IUserName;
    nickname: string;
    gender: IUserGender;
    birthday: string;
    status: IUserStatus;
    friends: IUserFriend[];
    block: IUserBlock[];
    walletAmount: number;
    hobbies: IUserHobby[];
    avatar: string;
    profile: {
        bio: string;
        albums: IAlbums[];
    };
    transactions: any[];
    bag: IUserBagItem[];
    lastLocation: IUserLocation;
    info: {
        height: Number;
        reason: string;
        beer: IBeer;
        religion: boolean;
        education: IEducation;
    };
}

declare interface IStranger {
    _id: string;
    name: IUserName;
    avatar: string;
    age: number;
    gender: IUserGender;
    lastLocation: IUserLocation;
    distance: number;
    info: IUserInfo;
    hobbies: IUserHobby[];
    profile: IProfile;
}

declare interface ICommonInfo {
    name?: IUserName;
    birthday?: string;
    avatar?: string;
}
