module.exports.user_login = function (phone, password) {
    return `users/login?phone=${phone}&password=${password}&lang=vi`;
}