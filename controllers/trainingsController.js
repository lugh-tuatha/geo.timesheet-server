const fs = require("fs");

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

const postTrainings = (req, res) => {
  const newId = trainings[trainings.length - 1].id + 1;
  const newTrainings = Object.assign({ id: newId }, req.body);

  trainings.push(newTrainings);

  fs.writeFile(trainingsData, JSON.stringify(trainings), (err) => {
    res.status(201).json({
      status: "success",
      data: {
        trainings: newTrainings,
      },
    });
  });
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
