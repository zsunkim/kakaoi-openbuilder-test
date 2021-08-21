

export class BasicCardTemplate {
    title: string;

    description: string;

    thumbnail: BasicCardThumbnail;

    profile: BasicCardProfile;

    social: BasicCardSocial;

    buttons: BasicCardButton[];

}

export class BasicCardThumbnail {
    imageUrl: string;
}

export class BasicCardProfile {
    imageUrl: string;
    nickname: string;
}

export class BasicCardSocial {
    like: number;
    commnet: number;
    share: number;
}

export class BasicCardButton {
    action: string;
    label: string;
    webLinkUrl: string;
}
