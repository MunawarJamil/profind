import Services from "../models/serveices.model.js";

export const addServices = async (req, res) => {
  try {
    const { name, description, category, location, contact } = req.body;
    const newService = await Services.create({
      name,
      description,
      category,
      location,
      contact,
    });
    res.status(201).json({ success: true, data: newService });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getServices = async (req, res) => {
  try {
    const allListedServices = await Services.find();
    res.status(200).json({ success: true, data: allListedServices });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
