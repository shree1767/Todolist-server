const model = require("../models/model");

module.exports.getToDo = async (req, res) => {
  const toDo = await model.find();
  res.send(toDo);
};
module.exports.saveToDo = async (req, res) => {
  const { name, description, status } = req.body;
  model.create({ name, description, status }).then((data) => {
    console.log("Added successfully");
    res.send(data);
  });
};

module.exports.updateToDo = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, status } = req.body;

    const updatedToDo = await model.findByIdAndUpdate(
      id,
      { name, description, status },
      { new: true }
    );

    if (!updatedToDo) {
      return res.status(404).send("Todo not found");
    }

    console.log("Updated successfully");
    res.send(updatedToDo);
  } catch (error) {
    console.error("Error updating todo:", error.message);
    res.status(500).send("Internal Server Error");
  }
};

module.exports.deleteToDo = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedToDo = await model.findByIdAndDelete(id);

    if (!deletedToDo) {
      return res.status(404).send("Todo not found");
    }
    console.log("Deleted successfully");
    res.send(deletedToDo);
  } catch (error) {
    console.error("Error deleting todo:", error.message);
    res.status(500).send("Internal Server Error");
  }
};
