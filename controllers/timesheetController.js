const Timesheet = require('../model/timesheetSchema')

const getTimesheet = async (req, res) => {
  try{
    const findTimesheet = await Timesheet.find()

    res.status(200).json({
      status: 'success',
      results: findTimesheet.length,
      data: {
        findTimesheet,
      }
    })
  }catch (err){
    res.status(404).json({
      status: 'fail',
      message: err
    })
  }
}

const postTimesheet = async (req, res) => {
  try{
    const newTimesheet = await Timesheet.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        trainings: newTimesheet,
      },
    });
  }catch (err){
    res.status(404).json({
      status: 'fail',
      message: err,
    })
  }
};

module.exports = {
  getTimesheet,
  postTimesheet,
}