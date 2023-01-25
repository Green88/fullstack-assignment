const getCookiesObj = (cookie) => {
    const cookies = {};
    const cookiesArray = cookie.split(';');
    cookiesArray.forEach((cookie) => {
        const [key, value] = cookie.trim().split('=');
        cookies[key] = value;
    });
    return cookies;
}

const getUserCookieEmail = (c) => {
    console.log(decodeURIComponent(c));
    const userCookieObj = JSON.parse(decodeURIComponent(c));
    return userCookieObj.j.email;
};

module.exports = {
    getCookiesObj,
    getUserCookieEmail,
};
