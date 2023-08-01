const fs = require("fs");
const Training = require('../model/trainingSchema')
const trainingsData = `${__dirname}/../dev-data/data/trainings.json`;

const trainings = JSON.parse(fs.readFileSync(trainingsData));

const getTrainings = async (req, res) => {
  try{
    const findTrainings = await Training.find();

    res.status(200).json({
      status: "success",
      results: findTrainings.length,
      data: {
        findTrainings,
      },
    });
  }catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    })
  }
};

const postTrainings = async (req, res) => {
  try{
    const newTraining = await Training.create(req.body);

    res.status(201).json({
      status: "success",
      data: {
        trainings: newTraining,
      },
    });
  }catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err
    })
  }
};

const updateTrainings = async (req, res) => {
  try{
    const training = await Training.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    })

    res.status(200).json({
      status: 'success',
      data: {
        training
      }
    });
  }catch (err){
    res.status(404).json({
      status: 'fail',
      message: err
    })
  };
}

const deleteTrainings = async (req, res) => {
  try{
    await Training.findByIdAndDelete(req.params.id);

    res.status(204).json({
      status: "success",
      data: null
    });
  }catch (err){
    res.status(404).json({
      status: 'fail',
      message: err
    })
  }
};

module.exports = {
  getTrainings,
  postTrainings,
  deleteTrainings,
  updateTrainings,
};
