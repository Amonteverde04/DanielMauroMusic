let instance;
let email = "";
let password = "";

class Admin {
    constructor() {
        if(instance) return;
        
        instance = this;
    }

    getInstance() {
        return this;
    }

    getEmail() {
        return email;
    }

    getPassword() {
        return password;
    }

    setEmail(newEmail) {
        if(!email || email !== newEmail)
            email = newEmail;
    }

    setPassword(newPassword) {
        if(!password || password !== newPassword)
            password = newpassword;
    }
}

const singletonAdmin = Object.freeze(new Admin());
export default singletonAdmin;