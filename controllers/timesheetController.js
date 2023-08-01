const Timesheet = require('../model/timesheetSchema')
const Training = require('../model/trainingSchema')

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
        timesheet: newTimesheet,
      },
    });
  }catch (err){
    res.status(404).json({
      status: 'fail',
      message: err,
    })
  }
};

const updateTimesheet = async (req, res) => {
  try{
    const timesheet = await Timesheet.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      status: 'success',
      data: {
        timesheet
      }
    });
  }catch (err){
    res.status(404).json({
      status: 'fail',
      message: err
    });
  };
};

const deleteTimesheet = async(req, res) => {
  try{
    await Timesheet.findByIdAndDelete(req.params.id)

    res.status(201).json({
      status: 'deleted',
      data: null
    })
  }catch (err){
    res.status(404).json({
      status: 'fail',
      message: err
    })
  }
}

module.exports = {
  getTimesheet,
  postTimesheet,
  updateTimesheet,
  deleteTimesheet,
}