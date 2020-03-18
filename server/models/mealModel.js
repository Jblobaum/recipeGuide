const pool = require('../configs/dbConfig')

function mealByUser(res, userId) {
    pool.query(
        'SELECT * FROM favmeal JOIN user ON user.iduser = favmeal.userId WHERE favmeal.userId = ?', userId, (err, results) => {
            if (err) {
                return res.send({ success: false, err: err })
            }
            else {
                return res.send({ success: true })
            }
        });
}

function addFavMeal(res, mealId, meal, mealImg) {
    // pool.query(
    //     'SELECT * FROM favmeal JOIN user ON user.iduser = favmeal.userId WHERE favmeal.userId = ?', userId, (err, results) => {
    //         if (err) {
    //             return res.send({ success: false, err: err })
    //         }
    //         if (results.length > 0) {
    //             return res.send({ success: false, msg: "Recipe already added" })
            // }

            pool.query(`INSERT INTO favmeal SET ?`, { idMeal: mealId, meal: meal, mealImg: mealImg }, (err, results) => {
                if (err) {
                    return res.send({ success: false, err: err });
                }
                return res.send({ success: true, msg: "Added to Favorites" })
            })
        }
    // )
// }


exports.mealByUser = mealByUser
exports.addFavMeal = addFavMeal
