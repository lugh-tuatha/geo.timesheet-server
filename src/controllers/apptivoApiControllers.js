const axios = require('axios');
const { SUCCESS } = require('../constants/shared/success');

// @desc   Get Apptivo api data
// @route  GET /geo/api/apptivo/work-orders
// @access Public
const getApptivoApi = async (req, res) => {
  const apptivoLinks = `https://api.apptivo.com/app/dao/v6/workorders?a=getAll&numRecords=1000&apiKey=${process.env.APPTIVO_API_KEY}&accessKey=${process.env.APPTIVO_ACCESS_KEY}`

  try { 
    const response = await axios.get(apptivoLinks);

    const filteredData = response.data.data.map(item => ({
      workOrderNumber: item.workOrderNumber,
      customer: item.customerName,
      projectDescription: item.customAttributes?.[2]?.customAttributeValue || ''
    }));
    
    res.status(200).json({
      status: SUCCESS.RESPONSES.RETRIEVAL,
      results: filteredData.length,
      response: filteredData
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err.message,
    });
  }
};

module.exports = {
  getApptivoApi,
};
