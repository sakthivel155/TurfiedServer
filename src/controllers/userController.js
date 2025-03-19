import * as userModel from '../models/userModel.js';


const userRedigter = async (req, res) => {
    try {
        
        const userExists = await userModel.isUserExists(req.body.email,req.body.username);
    
        if (!userExists) {
            const newUser = await userModel.createUser(req.body);
            res.status(201).json({
                success: true,
                message: 'Create Account Successfully',
                data: newUser
            });
        } else {
            res.json({
                success: false,
                message: 'Username or Email already exists'
            });
        }
    } catch (err) {
        res.status(400).json({
            success: false,
            message: 'Create Account failed',
            error: process.env.NODE_ENV === 'development' ? err.message : undefined
        });
        console.log(err);
    }
};

const userLogin = async (req, res) => {
    try {
        
        const userExists = await userModel.isUserExists(req.body.email,req.body.username);
    
        if (userExists) {
            const newLogin = await userModel.userEntry(req.body);
            res.status(200).json({
                success: true,
                message: 'Login Account Successfully',
                data: newLogin
            });

        } else {
            res.json({
                success: false,
                message: 'User not found please register'
            });
        }
        } catch (err) {
            res.status(400).json({
                success: false,
                message: 'Login failed',
                error: process.env.NODE_ENV === 'development' ? err.message : undefined
            });
            console.log(err);
        } 
}

export {userRedigter , userLogin};