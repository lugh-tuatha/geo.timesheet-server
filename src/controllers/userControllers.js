const { ERROR } = require('../constants/shared/error')
const { SUCCESS } = require('../constants/shared/success')
const User = require('../model/userSchema')

const getUser = async (req, res) => {
  try{
    const findUser = await User.find()
    res.status(SUCCESS.RESPONSE_CODES.C_200).json({
      status: SUCCESS.RESPONSES.SUCCESS,
      results: findUser.length,
      data: {
        findUser
      },
    })
  }catch (err){
    res.status(SUCCESS.RESPONSE_CODES.C_404).json({
      status: ERROR.API_ERROR_404,
      message: err.message
    })
  }
}

module.exports = {
  getUser
}