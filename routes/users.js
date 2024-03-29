const express = require("express");
//const {users} = require("../data/users.json");
const { route } = require("./books");
const { getAllUsers, getSingleUserById, deleteUser, updateUserById, createNewUser } = require("../controllers/user-controller");

const router = express.Router();



router.get("/", getAllUsers)





router.get('/:id', getSingleUserById)




router.post('/', createNewUser)




router.put('/:id', updateUserById)

router.delete('/:id', deleteUser)



/**
 * Route: /users/subscription-details/:id
 * Method: GET
 * Description: Get all subscription details
 * Access: Public
 * Paramaters: Id
 */
// router.get('/subscription-details/:id', (req, res)=>{
//     const {id} = req.params;

//     const user = users.find((each)=> each.id === id);

//     if(!user)
//         return res.status(404).json({
//             success: false,
//             message: "User Not Found :-("
//         })

//         const getDateInDays = (data = "") =>{
//             let date;
//             if(data === ""){
//                 // current Date
//                 date = new Date();
//             }else{
//                 // getting data on basis of data variable
//                 date = new Date(data)
//             }
//             let days = Math.floor(date / (1000 * 60 * 60 * 24));
//             return days
//         };

//         const subscriptionType = (date) => {
//             if(user.subscriptionType === "Basic"){
//                 date = date + 90;
//             }else if(user.subscriptionType === "Standard"){
//                 date = date + 180;
//             }else if(user.subscriptionType === "Premium"){
//                 date = date + 365;
//             }
//             return date;
//         };

//         // Subscription Claculation Expiration Logic
//         // Jan 1, 1970, UTC // milli seconds
//         let returnDate = getDateInDays(user.returnDate);
//         let currentDate = getDateInDays();
//         let subscriptionDate = getDateInDays(user.subscriptionDate);
//         let subscriptionExpiration  = subscriptionType(subscriptionDate);

//         const data = {
//             ...user,
//             subscriptionExpired: subscriptionExpiration < currentDate,
//             daysLeftForExpiration: subscriptionExpiration <= currentDate ? 0 : subscriptionExpiration - currentDate,
//             fine: returnDate < currentDate ? subscriptionExpiration <= currentDate ? 200 : 100 : 0
//         }
//         return res.status(200).json({
//             success: true,
//             data: data
//         })
// })





module.exports = router;