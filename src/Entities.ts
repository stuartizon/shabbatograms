export interface ShabbatogramRequest {
    from: string;
    to: string;
    // email: string;
    hopeYourWeekWas: string;
    myWeekWas: string;
    theBestPart: string;
    wantToTellYouThat: string;
    hopeYourShabbatIs: string;
    signOff: string;
}

export interface TextItem extends PDFKit.Mixins.TextOptions {
    text: string;
}