// at least 8 characters long
// has at least one letter
// has at least one number



// has at least one UPPERCASE letter
// has at least one symbol
// has at least one lowercase letter
// is not longer than 20 chars

const checkPassword = (password) => {

    const hasLetter = /[a-z]/g.test(password)
    const hasNumber = /[0-9]/g.test(password)
    const hasUpperCase = /[A-Z]/g.test(password)
    const hasSpecialCharacter = /[-+_!@#$%^&*., ?]/g.test(password)

    if (password?.length <= 8 || password?.length >= 20 || !hasLetter || !hasNumber || !hasUpperCase || !hasSpecialCharacter) {
        return false
    } else {
        return true
    }

    return password?.length >= 8 && password?.length <= 20 && hasLetter && hasNumber && hasUpperCase && hasSpecialCharacter


}




module.exports = checkPassword; 
