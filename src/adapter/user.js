const User = require('../model/user');
const Token = require('../model/token');
const uuid = require('uuid');
const bcrypt = require('bcryptjs');

const encryptPassword = password => {
    const salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(password, salt);
};

const existsOrError = (value, msg) => {
    if(!value) throw msg
}

const get = async () => {
    return User.find();
};

const signup = async (body) => {
    const { name, email, password, phones } = body;

    try{

        existsOrError(name, 'Name is required!');
        existsOrError(email, 'Email is required!');
        existsOrError(password, 'Password is required!');
        existsOrError(phones, 'Phone is required!');        
        existsOrError(! await User.findOne({email: email}), 'Email already exists!');

    } catch(msg) {

        throw new Error(msg);

    };
    
    const passwordHash = encryptPassword(password);

    const newUser = new User({
        _id: uuid.v4(),
        name,
        email,
        password: passwordHash,
        phones
    });

    await newUser.save();

    return { id: newUser._id, email: newUser.email };
};

const signin = async (body) => {
    const { email, password } = body;

    try{

        existsOrError(email, 'Email is required!' );
        existsOrError(password, 'Password is required!' );
        existsOrError(await User.findOne({email: email}), 'Invalid email or password!');

    } catch(msg) {

        throw new Error(msg);

    };

    const user = await User.findOne({ email: email });

    const isMath = bcrypt.compareSync(password, user.password);

    try{

        existsOrError(isMath, "Invalid email or password!")

    } catch(msg) {
        
        throw new Error(msg);

    }

    const newToken = new Token({
        _id: uuid.v4(),
        id_user: user.id,
        login_date: new Date()
    });

    await newToken.save();

    return newToken;
};

module.exports = {
    get, signup, signin
};