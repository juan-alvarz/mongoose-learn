const { tracksModel } = require("../models");

//obtiene un item
const getItems = async (req, res) => {
  try {
    const data = await tracksModel.find();
    res.status(200).send({ data });
  } catch (error) {
    res.status(500).send(console.error(error.message));
  }
};

//obtiene el detalle
const getItem = () => {};
//crea un registro

const createItem = async (req, res) => {
  const { body } = req;
  const data = await tracksModel.create(body);
  res.send({ message: "created succesfully" });
};
//actualiza el registro
const updateItem = () => {};
//borra un registro
const deleteItem = () => {};

module.exports = {
  getItems,
  getItem,
  createItem,
  updateItem,
  deleteItem,
};
