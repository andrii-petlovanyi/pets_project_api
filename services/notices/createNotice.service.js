const {Notices} = require("../../models/notices.model")


const createNotice = async () => {
   
const data = await Notices.create({});
  
return data;
};

module.exports = {
    createNotice
};