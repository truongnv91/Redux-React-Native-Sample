import _md5 from './md5';
import _sha256 from './SHA256';
import utils, { formatString } from './utils';

module.exports.md5 = function md5(string) {
    return _md5.md5(string);
}

module.exports.sha256 = function sha256(string) {
    return _sha256.sha256(string);
}

module.exports.formatString = function format(format,args) {
    return utils.formatString(format,args);
}

module.exports.getFormatAgoTime = function getFormatAgoTime(timestamp) {
    return utils.getFormatAgoTime(timestamp);
}