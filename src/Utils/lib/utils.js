function formatString(format, args) {
    let i = 0;
    let length = args.length;
    for (; i < length; i++) {
        let param = args[i];
        if (format.indexOf('%s') >= 0) {
            format = format.replace('%s', param);
        }
    }
    return format;
}

function getFormatAgoTime(timestamp) {
    let different = parseInt((new Date()).getTime()) - timestamp;
    let secondsInMilli = 1000;
    let minutesInMilli = secondsInMilli * 60;
    let hoursInMilli = minutesInMilli * 60;
    let daysInMilli = hoursInMilli * 24;

    let elapsedDays = parseInt(different / daysInMilli);
    different = different % daysInMilli;

    let elapsedHours = parseInt(different / hoursInMilli);
    different = different % hoursInMilli;

    let elapsedMinutes = parseInt(different / minutesInMilli);
    different = different % minutesInMilli;

    let elapsedSeconds = different / secondsInMilli;
    elapsedSeconds = Math.abs(elapsedSeconds);
    // if (elapsedDays > 0) {
    //     return elapsedDays == 1 ? elapsedDays + ' ' + I18n.t('before_day') : elapsedDays + ' ' + I18n.t('before_day');
    // } else {
    //     if (elapsedHours > 0) {
    //         return elapsedHours == 1 ? elapsedHours + ' ' + I18n.t('before_hour') : elapsedHours + ' ' + I18n.t('before_hour');
    //     } else {
    //         if (elapsedMinutes > 0) {
    //             return elapsedMinutes == 1 ? elapsedMinutes + ' ' + I18n.t('before_minute') : elapsedMinutes + ' ' + I18n.t('before_minute');
    //         } else {
    //             return elapsedSeconds + ' ' + I18n.t('before_second');
    //         }
    //     }
    // }
    return '';
}

module.exports.formatString = formatString;

module.exports.getFormatAgoTime = getFormatAgoTime;