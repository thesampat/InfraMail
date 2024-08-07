// controllers/clients.js
const { generateItemId } = require("../methods/methods1");
const clientModel = require("../models/clients");


exports.createClient = async (req, res) => {
  try {
    console.log(req.body)
    const { email } = req.body;
    const existingClient = await clientModel.findOne({ email });
    if (existingClient) {
      return res.status(400).json({ message: "Client with this email already exists" });
    }
    const item_id = await generateItemId(clientModel, 'CL')
    const client = new clientModel({ item_id:item_id, ...req.body });
    await client.save();
    res.status(201).json({ message: "Client created successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error creating client" });
  }
};

exports.getClients = async (req, res) => {
  try {
    const clients = await clientModel.find();
    res.json(clients);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error fetching clients" });
  }
};

exports.getClientById = async (req, res) => {
  try {
    const id = req.params.id;
    const client = await clientModel.findById(id).exec();
    if (!client) {
      res.status(404).json({ message: "Client not found" });
    } else {
      res.json(client);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error fetching client" });
  }
};

exports.updateClient = async (req, res) => {
  try {
    const id = req.params.id;
    const client = await clientModel.findByIdAndUpdate(id, req.body, { new: true }).exec();
    if (!client) {
      res.status(404).json({ message: "Client not found" });
    } else {
      res.json({ message: "Client updated successfully" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error updating client" });
  }
};

exports.deleteClient = async (req, res) => {
  try {
    const id = req.params.id;
    await clientModel.findByIdAndRemove(id).exec();
    res.json({ message: "Client deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error deleting client" });
  }
};