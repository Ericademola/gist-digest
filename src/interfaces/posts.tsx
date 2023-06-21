export interface Posts {
    id: number;
    headLine?: string;
    headLineURL?: string;
    mainContent: string;
    moreContent?: string;
    image?: string;
    imageTitle?: string;
    author: string;
    dislike: number | null;
    like: number | null;
    share: number | null;
}

