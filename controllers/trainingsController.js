const fs = require('fs')

const trainingsData = `${__dirname}/../dev-data/data/trainings.json`

const trainings = JSON.parse(
  fs.readFileSync(trainingsData)
);

const getTrainings = (req, res) => {
  res.status(200).json({
    status: 'success',
    results: trainings.length,
    data: {
      trainings
    }
  })
}

module.exports = {
  getTrainings,
}