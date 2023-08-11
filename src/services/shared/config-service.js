const path = `../../../config/${process.env.NODE_ENV || 'development'}`
const DBConfig = require(`${path}/DBconfig`)

function getConf(conf){
  switch(conf) {
    case 'DB': {
      return DBConfig
    }
  }
}

module.exports ={
  getConf: getConf
}