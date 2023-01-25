const validateDomain = (email) => /@joonko.co\s*$/.test(email);

module.exports = {
    validateDomain,
}
