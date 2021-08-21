

export interface ItemCardTemplate {
    version: string;
    template: Template;
}

export class Template {
    output: Output[];
}

export class Output {
    simpleText: SimpleText;
    carousel: Carousel;
}

export class SimpleText {
    simpleText?: {
        text: string;
    }
}

export class Carousel {
    type: string;
    items: Items[];
}

export class Items {
    imageTitle?: {
        title: string;
    }
    title?: string;
    thumbnail?: {
        imageUrl: string;
    }
    itemList: ItemList[];
    profile?: {
        title: string;
        imageUrl?: string;
    }
    buttons?: Buttons[];
}

export class ItemList {
    title: string;
    description?: string;
}

export class Buttons {
    label: string;
    action: string;
    webLinkUrl?: string;
    messageText?: string;
}

