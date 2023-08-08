const Timesheet = require('../model/timesheetSchema')
const Training = require('../model/trainingSchema')

const { ERROR } = require('../constants/shared/error')
const { SUCCESS } = require('../constants/shared/success')

const getTimesheet = async (req, res) => {
  try{
    const findTimesheet = await Timesheet.find()

    res.status(200).json({
      status: SUCCESS.RESPONSES.SUCCESS,
      results: findTimesheet.length,
      data: {
        findTimesheet,
      }
    })
  }catch (err){
    res.status(404).json({
      status: ERROR.API_ERROR_404,
      message: err.message,
    })
  }
}

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