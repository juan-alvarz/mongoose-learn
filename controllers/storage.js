const { storageModel } = require("../models");
const PUBLIC_URL = process.env.PUBLIC_URL;
//obtiene un item
const getItems = async (req, res) => {
  try {
    const data = await storageModel.find();
    res.status(200).send({ data });
  } catch (error) {
    res.status(500).send(console.error(error.message));
  }
};

//obtiene el detalle
const getItem = () => {};
//crea un registro

const createItem = async (req, res) => {
  const { body, file } = req;
  const fileData = {
    filename: file.filename,
    url: `${PUBLIC_URL}/${file.filename}`,
  };
  console.log(PUBLIC_URL);
  const data = await storageModel.create(fileData);
  res.send({ file });
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
