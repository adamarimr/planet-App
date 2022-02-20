export interface Planet {
    id?: string;
    planet: string;
    habitability: string;
    size: Sizes;
    first_appearance: string;
    habitants: string;
    alt_img?: string;
}

export enum Sizes {
    bigSize = "Big",
    smallSize = "Small",
    mediumSize = "Medium"
};
