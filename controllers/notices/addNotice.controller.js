const {createNotice} = require("../../services/notices/createNotice.service")


const addNoticeController = async (req, res) => {
    const { id } = req.user;
  
    const notice = {
      title: req.body.title,
      petName: req.body.petName,
      birth: req.body.birthDate,
      breed: req.body.breed,
      petSex: req.body.sex,
      location: req.body.location,
      price: req.body.price,
      petImage: req.body.petImageUrl,
      comments: req.body.comments,
      category: req.body.category,
      owner: id,
    };
  
    const data = await createNotice(notice);
  
    res.status(201).json({ data });
};

module.exports = {
    addNoticeController
};