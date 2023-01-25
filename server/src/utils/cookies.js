const getCookiesObj = (cookie) => {
    const cookies = {};
    const cookiesArray = cookie.split(';');
    cookiesArray.forEach((cookie) => {
        const [key, value] = cookie.trim().split('=');
        cookies[key] = decodeURIComponent(value);
    });
    return cookies;
}

const getUserCookieEmail = (decodedCookie) => {
    console.log(decodedCookie.j);
    const userCookieObj = JSON.parse(decodedCookie);
    return userCookieObj.j.email;
};

module.exports = {
    getCookiesObj,
    getUserCookieEmail,
};
