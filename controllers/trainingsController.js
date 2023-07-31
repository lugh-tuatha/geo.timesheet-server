const fs = require("fs");
const Training = require('../model/trainingSchema')
const trainingsData = `${__dirname}/../dev-data/data/trainings.json`;

const trainings = JSON.parse(fs.readFileSync(trainingsData));

const getTrainings = (req, res) => {
  res.status(200).json({
    status: "success",
    results: trainings.length,
    data: {
      trainings,
    },
  });
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

const deleteTrainings = (req, res) => {
  if(req.params.id * 1 > trainings.length){
    return res.status(404).json({
      status: 'fail',
      message: 'invalid id',
    })
  }

  res.status(204).json({
    status: "success",
    data: null
  });
};

module.exports = {
  getTrainings,
  postTrainings,
  deleteTrainings,
};
