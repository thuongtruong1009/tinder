enum EUserGender {
    MALE = 'male',
    FEMALE = 'female',
    OTHER = 'other',
}

declare interface IUserStatus {
    isVerified: boolean;
    isActive: boolean;
}

declare interface IUserName {
    firstName: string;
    lastName: string;
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

declare interface IUser {
    _id: string;
    phone: string;
    email: string;
    name: IUserName;
    nickname: string;
    gender: EUserGender;
    birthday: Date;
    status: IUserStatus;
    friends: IUserFriend[];
    blocks: IUserBlock[];
    walletAmount: number;
    avatar: string;
    profile: {
        bio: string;
        album: string[];
    };
    transactions: any[];
    bag: IUserBagItem[];
    lastLocation: IUserLocation;
    lastLogin: Date;
}
