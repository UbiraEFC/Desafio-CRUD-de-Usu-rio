const adapter = require('../adapter/user');

const get = async (req, res) => {
    const result = await adapter.get();
    return res.status(200).json(result);
};

const signup = async (req, res) => {
    const { body } = req;
    try{
        const result = await adapter.signup(body);
        return res.status(201).json(result);
    }catch (error) { 
        return res.status(400).json({message: error.message});
    }
}

const signin = async (req, res) => {
    const { body } = req;
    try{
        const result = await adapter.signin(body);
        return res.status(201).json(result);
    }catch (error) { 
        return res.status(400).json({message: error.message});
    }
}

module.exports = {
    get, signup, signin
}