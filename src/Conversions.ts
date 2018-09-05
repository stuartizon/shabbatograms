import { ShabbatogramRequest, TextItem } from "./Entities";

export function convertRequestToText(r: ShabbatogramRequest): TextItem[] {
    return [
        { text: new Array(10).join(' '), underline: false, continued: true },
        { text: 'Dear ', underline: false, continued: true },
        { text: r.to, underline: true, continued: true },
        { text: ',', underline: false, continued: false },
        { text: 'Shabbat Shalom! I hope that you had a ', underline: false, continued: true },
        { text: r.hopeYourWeekWas, underline: true, continued: true },
        { text: ' week. Mine was ', underline: false, continued: true },
        { text: r.myWeekWas, underline: true, continued: true },
        { text: '. The best part was ', underline: false, continued: true },
        { text: r.theBestPart, underline: true, continued: true },
        { text: '. I just wanted to tell you that ', underline: false, continued: true },
        { text: r.wantToTellYouThat, underline: true, continued: true },
        { text: '. I hope that your shabbat is ', underline: false, continued: true },
        { text: r.hopeYourShabbatIs, underline: true, continued: true },
        { text: '!', underline: false, continued: false },
        { text: r.signOff, underline: true, align: 'center', continued: true },
        { text: ' ,', underline: false, continued: false },
        { text: r.from, underline: true, align: 'center', continued: false }
    ];
}