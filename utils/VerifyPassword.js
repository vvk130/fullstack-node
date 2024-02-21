const bcrypt = require('bcrypt');

async function verifyPassword(password, storedHash, salt) {
    const combinedPassword = password + salt;
    return await bcrypt.compare(combinedPassword, storedHash);
}