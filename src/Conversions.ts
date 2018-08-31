import { ShabbatogramRequest } from "./Entities";

export function convertRequestToText(r: ShabbatogramRequest) {
    return `Dear ${r.to}, 
Shabbat Shalom! \
I hope that you had a ${r.hopeYourWeekWas} week. \
Mine was ${r.myWeekWas}. \
The best part was ${r.theBestPart}. \
I just wanted to tell you that ${r.wantToTellYouThat}. \
I hope that your shabbat is ${r.hopeYourShabbatIs}!
${r.signOff},
${r.from}`;
}