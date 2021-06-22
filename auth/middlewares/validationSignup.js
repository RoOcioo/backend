import User from "../models/User";

const validationUsernameMail = async (req, res) => {
    try {
        const user = await User.findOne({ username : req.body.username});
        if(user)
        return res.status(500).json({message: 'The user exists'});
        const email = await User.findOne({email: req.body.email});
        if(email)
        return res.status(500).json({message: 'The email exists'});

    } catch (error) {
        res.status(400).json({message: 'There was a problem :('})
    }
}

export { validationUsernameMail };