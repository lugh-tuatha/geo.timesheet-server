const TotalHours = require('../model/totalHoursSchema');

const { ERROR } = require('../constants/shared/error');
const { SUCCESS } = require('../constants/shared/success');

// @desc   Get TotalHours
// @route  GET /geo/api/totalhours
// @access Public
const getTotalHours = async (req, res) => {
  try{
    const findTotalHours = await TotalHours.find()
    res.status(200).json({
      status: SUCCESS.RESPONSES.SUCCESS,
      results: findTotalHours.length,
      data: {
        findTotalHours
      }
    })
  }catch(err){
    res.status(404).json({
      status: ERROR.API_ERROR_404,
      message: err.message
    })
  }
};

// @desc   Create TotalHours
// @route  POST /geo/api/totalhours
// @access Public
const postTotalHours = async (req, res) => {
  try{
    const newTotalHours = await TotalHours.create(req.body);
    
    res.status(201).json({
      status: SUCCESS.RESPONSES.CREATE,
      data: {
        TotalHours: newTotalHours,
      }
    });
  }catch(err){
    res.status(404).json({
      status: ERROR.API_ERROR_404,
      message: err.message,
    })
  }
};

module.exports = {
  getTotalHours,
  postTotalHours
};
