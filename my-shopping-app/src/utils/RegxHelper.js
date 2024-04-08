export default class RegxHelper {
    static removeEmoji = (text) => {
        let rs = text.replace(/((\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff]\s?)+)/g, '');
        return rs;
    }
    static removeSpace = (text) => {
        let rs = text.replace(/[\s]/g, '');
        return rs;
    }
    static removeSymbol = (text) => {
        let rs = text.replace(/[-!$@฿#%^&*()_+|~=`{}[\]:";'<>?,./]/g, '');
        return rs;
    }
}
