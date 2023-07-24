const getTraining = (req, res) => {
  res.status(200).json( {message: 'Get Training'} )
}

module.exports = {
  getTraining,
}