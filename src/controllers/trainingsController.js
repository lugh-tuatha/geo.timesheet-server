const fs = require("fs");
const Training = require('../model/trainingSchema')

const { ERROR } = require('../constants/shared/error')
const { SUCCESS } = require('../constants/shared/success')

const getTrainings = async (req, res) => {
  try{
    const findTrainings = await Training.find();

    res.status(200).json({
      status: SUCCESS.RESPONSES.SUCCESS,
      results: findTrainings.length,
      data: {
        findTrainings,
      },
    });
  }catch (err) {
    res.status(404).json({
      status: ERROR.API_ERROR_404,
      message: err.message
    })
  }
};

const postTrainings = async (req, res) => {
  try{
    const newTraining = await Training.create(req.body);

    res.status(201).json({
      status: SUCCESS.RESPONSES.CREATE,
      data: {
        trainings: newTraining,
      },
    });
  }catch (err) {
    res.status(400).json({
      status: ERROR.API_ERROR_404,
      message: err.message
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
      status: SUCCESS.RESPONSES.UPDATE,
      data: {
        training
      }
    });
  }catch (err){
    res.status(404).json({
      status: ERROR.API_ERROR_404,
      message: err.message
    })
  };
}

const deleteTrainings = async (req, res) => {
  try{
    await Training.findByIdAndDelete(req.params.id);

    res.status(204).json({
      status: SUCCESS.RESPONSES.DELETE,
      data: null
    });
  }catch (err){
    res.status(404).json({
      status: ERROR.API_ERROR_404,
      message: err.message
    })
  }
};

module.exports = {
  getTrainings,
  postTrainings,
  deleteTrainings,
  updateTrainings,
};
