const bcrypt = require('bcrypt');

async function hashPassword(password, salt) {
    const combinedPassword = password + salt;
    return await bcrypt.hash(combinedPassword, 10);
}
