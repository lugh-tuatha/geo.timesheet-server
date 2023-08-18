const Timesheet = require('../model/timesheetSchema')

const { ERROR } = require('../constants/shared/error')
const { SUCCESS } = require('../constants/shared/success')

// @desc   Get Timesheet
// @route  GET /geo/api/v1/timesheet
// @access Public
const getTimesheet = async (req, res) => {
  try{
    const findTimesheet = await Timesheet.find()
    res.status(200).json({
      status: SUCCESS.RESPONSES.SUCCESS,
      results: findTimesheet.length,
      data: {
        timesheet: findTimesheet,
      }
    })
  }catch (err){
    res.status(404).json({
      status: ERROR.API_ERROR_404,
      message: err.message,
    })
  }
}

// @desc   Create Timesheet
// @route  POST /geo/api/v1/timesheet
// @access Public
const postTimesheet = async (req, res) => {
  try{
    const newTimesheet = await Timesheet.create(req.body);

    res.status(201).json({
      status: SUCCESS.RESPONSES.CREATE,
      data: {
        timesheet: newTimesheet,
      },
    });
  }catch (err){
    res.status(404).json({
      status: ERROR.API_ERROR_404,
      message: err.message,
    })
  }
};

// @desc   Update Timesheet
// @route  PATCH /geo/api/v1/timesheet/:id
// @access Public
const updateTimesheet = async (req, res) => {
  try{
    const timesheet = await Timesheet.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    })

    res.status(200).json({
      status: SUCCESS.RESPONSES.UPDATE,
      data: {
        timesheet
      }
    });
  }catch (err){
    res.status(404).json({
      status: ERROR.API_ERROR_404,
      message: err.message,
    });
  };
};

// @desc   Delete Timesheet
// @route  DELETE /geo/api/v1/timesheet/:id
// @access Public
const deleteTimesheet = async(req, res) => {
  try{
    await Timesheet.findByIdAndDelete(req.params.id)

    res.status(201).json({
      status: SUCCESS.RESPONSES.DELETE,
      data: null
    })
  }catch (err){
    res.status(404).json({
      status: ERROR.API_ERROR_404,
      message: err.message,
    })
  }
}

module.exports = {
  getTimesheet,
  postTimesheet,
  updateTimesheet,
  deleteTimesheet,
}