const pool = require('../configs/dbConfig')
const bcrypt = require('bcrypt');
saltRounds = 10



function userByUsername(res, username) {
    pool.query('SELECT * FROM user WHERE username = ?', username, (err, results) => {
        if (err) {
            return res.send({ success: false, err: err });
        }
        else {
            return res.send({ success: true });
        }
    })
}

function addNewUser(res, user) {
    pool.query('SELECT * FROM user WHERE user.username = ?', user.username, (err, results) => {
        if (err) {
            return res.send({ success: false, err: err });
        }

        if (results.length > 0) {
            return res.send({ success: false, msg: "Username already taken" })
        }


        bcrypt.hash(user.password, saltRounds, (err, hashedPass) => {
            if (err) {
                return res.send({ success: false, msg: "Something went wrong." })
            }
            pool.query(`INSERT INTO user SET ?`, {username: user.username, password: hashedPass}, (err, results) => {
                if (err) {
                    return res.send({ success: false, err: err });
                }

                return res.send({ success: true, msg: "Sign Up Successful" })
            })
        })
    })
}




function login(res, user) {
    pool.query('SELECT * FROM user WHERE user.username = ?', user.username, (err, results) => {
        if (err) {
            return res.send({ success: false, err: err });
        }
        if (results.length == 0) {
            return res.send({ success: false, msg: "Invalid Username/Password" })
        }

        bcrypt.compare(user.password, results[0].password, (err, matched) => {
            if (err) {
                return res.send({ success: false, msg: "Something went wrong" })
            }
            if (!matched) {
                return res.send({ success: false, msg: "Incorrect Username/Password" })
            }
            res.send({ success: true, msg: "Welcome Back!", username: results[0].username })
            
        })

    })
}

// function userByID(res, userID){
//     pool.query('SELECT * FROM user WHERE username = ?', userID, (err, results)=>{
//         if (err){
//             return res.send({success: false, err: err});
//         }
//         else{
//             return res.send({success: true,});
//         }
//     })
// }

// function deleteByID(res, userID){
//     pool.query('SELECT * FROM user WHERE username = ?', userId, (err, results)=>{
//         if (err){
//             return res.send({success: false, err: err});
//         }
//         else{
//             return res.send({success: true, err: results});
//         }
//     })
// }

// function updateByID(res, userID, password){
//     pool.query('SELECT * FROM user WHERE username = ?', [password, userID], (err, results)=>{
//         if (err){
//             res.send({success: false, err: err});
//         }
//         else{
//             res.send({success: true});
//         }
//     })
// }

module.exports.userByUsername = userByUsername
module.exports.addNewUser = addNewUser
module.exports.login = login
// module.exports.userByID = userByID
// module.exports.deleteByID = deleteByID
// module.exports.updateByID = updateByID