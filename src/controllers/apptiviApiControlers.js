const axios = require('axios');

// @desc   Get Apptivo api data
// @route  GET /geo/api/apptivo/work-orders
// @access Public
const getApptivoApi = async (req, res) => {
  const apptivoLinks = `https://api2.apptivo.com/app/dao/v6/workorders?a=getAllByAdvancedSearch&searchData=&apiKey=${process.env.APPTIVO_API_KEY}&accessKey=${process.env.APPTIVO_ACCESS_KEY}`;

  try { 
    const response = await axios.get(apptivoLinks);

    const filteredData = response.data.data.map(item => {
      const filteredItemList = item.customAttributes.map(subItem => ({
        workOrderNumber: item.workOrderNumber,
        customer: item.customerName,
        projectDescription: subItem.customAttributeValue
      }));
      return filteredItemList;
    });
    
    res.status(200).json({
      status: 'success',
      response: filteredData
    })
  }catch (err){
    res.status(404).json({
      status: 'fail',
      message: err.message,
    })
  }
};

module.exports = {
  getApptivoApi,
}