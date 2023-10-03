const express = require("express")
const { loginController, registerController, authController, applyDoctorController } = require("../controllers/userCtrl")
const authMiddleware = require("../middlewares/authMiddleware")
 

//router onjectconst 
const router = express.Router()

//all.routes
//login ||post
router.post('/login', loginController)

//Regist ||post
router.post('/register', registerController)


//Auth || POSt
router.post('/getUserData', authMiddleware, authController)

//Apply Doctor || POST
router.post('/apply-doctor', authMiddleware, applyDoctorController)


module.exports = router;