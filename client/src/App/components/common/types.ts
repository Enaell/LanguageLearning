
export type UserType = {
    id: string
} 

export type SentencesType = {
    sentence: string,
    translatedSentence: string
}

export type TranslationType = {
    name: string,
    globalName: string,
    language: string,
    sentences: SentencesType[],
    rank: number,
}

export type WordType= {
    name: string,
    globalName: string,
    language: string,
    subject: string[],
    level?: number,
    translations: TranslationType[],
    comments: string,
    validated: boolean, //(this field is to differenciate cards validated by admin from others)
    visibility: number //(rank of visibility wanted by the card owner)
}

export type HorizontalType= "center" | "start" | "end" | "stretch" | "baseline";

export type VariantType= "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "subtitle1" | "subtitle2" | "body1" | "body2" | "caption" | "button" | "overline" | "srOnly" | "inherit";
