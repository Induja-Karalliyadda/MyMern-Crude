const User = require("../Model/UserModel");// insert Model(UserModel)
//now get data(userModel data) create a funtion
const getAllUsers = async (req,res,next)=>{
    let users;
    // Get all users
    try{
        users = await User.find();
    }catch(err){
        console.error(err);
    }
    //no one in users (not found)
    if(!users){
        return res.status(404).json({message:"User not found"})
    }
    //Display all users
    return res.status(200).json({users});
}
// data Insert funtion
const addUsers = async(req,res,next) =>{
    const {name,gmail,age,address}= req.body;
    let users;
    try{
        users = new User({name,gmail,age,address});
        await users.save();
    } catch (err){
        console.log(err)
    }
    // not insert useers
    if(!users){
        return res.status(404).json({message:"unable to add users"})
    }
    return res.status(200).json({users})
}

//Get by Id
const getById = async(req,res,next)=>{
    const id = req.params.id;// data display in ID
    let user;
    try{
      user = await User.findById(id);
    }catch(err){
        console.log(err)
    }
    // not insert useers
    if(!user){
        return res.status(404).json({message:"no user in DB"})
    }
    return res.status(200).json({user})
}
// Update user details
const updateUser = async (req, res, next) => {
    const id = req.params.id;
    const { name, gmail, age, address } = req.body;
    let user;
    try {
        user = await User.findByIdAndUpdate(
            id,
            { name, gmail, age, address },
            { new: true }
        );
    } catch (err) {
        console.log(err);
    }

    if (!user) {
        return res.status(404).json({ message: "No user found in the DB. Unable to update" });
    }

    return res.status(200).json({ user });
}

// Delete user details
const deleteUser = async (req, res, next) => {
    const id = req.params.id;
    let user;
    try {
        user = await User.findByIdAndDelete(id);
    } catch (err) {
        console.log(err);
    }

    if (!user) {
        return res.status(404).json({ message: "No user found in the DB. Unable to Delete" });
    }

    return res.status(200).json({ message: "User successfully deleted", user });
}

//data export to the route
exports.getAllUsers = getAllUsers;
exports.addUsers = addUsers;
exports.getById = getById;
exports.updateUser=updateUser;
exports.deleteUser=deleteUser;