const { UserModel} = require("../models");

exports.getAllUsers = async (req, res)=>{
   const users = await UserModel.find();

   if(users.length === 0)
        return res.status(404).json({
            success: false,
            message: "No Users Found"
        })

        res.status(200).json({
            success: true,
            data: users
        })
}

exports.getSingleUserById = async (req, res)=>{
    const {id} = req.params;
    
    const user = await UserModel.findById(id);


    if(!user){
        return res.status(404).json({
            success: false,
            message: "User Not Found :-("
        })
    }

    return res.status(200).json({
        success: true,
        data: user
    })
}


exports.deleteUser = async (req, res)=>{
    const {id} = req.params;

    const user = await UserModel.deleteOne({
        _id:id
    })

    if(!user)
    return res.status(404).json({
success: false,
message: "User with given id doesn't exist :-( "})

return res.status(200).json({success: true, message: "User got deleted succesfully"})

}


exports.updateUserById = async (req, res)=> {
    const {id} = req.params;
    const {data} = req.body;


    const updatedUser = await UserModel.findOneAndUpdate({_id:id}, data , {new : true})



    return res.status(200).json({
        success: true,
        data: updatedUser
    })
}


exports.createNewUser = async (req, res)=>{
    const { name, surname, email, issuedBook, subscriptionType, subscriptionDate} = req.body;

    const newUser = await UserModel.create({
        name, surname, email, issuedBook, subscriptionType, subscriptionDate
    })

    return res.status(201).json({
        success: true,
        data: newUser
    })

}