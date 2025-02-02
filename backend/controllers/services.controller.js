import Services from "../models/serveices.model.js";

export const addServices = async (req, res) => {
  try {
    const {
      personName,
      profession,
      bio,
      serviceName,
      serviceDiscription,
      contact,
      address,
      location,
    } = req.body;
    const newService = await Services.create({
      personName,
      profession,
      bio,
      serviceName,
      serviceDiscription,
      contact,
      address,
      location,
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

export const getsingleservice = async (req, res) => {
  try {
    const { id } = req.params;
    const singleId = await Services.findById(id);
    res.status(200).json({
      success: true,
      message: "here is required data",
      data: singleId,
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export const updateService = async (req, res) => {
  try {
    const { id } = req.params; // Extract the service ID from the URL params
    const { name, description, category, location, contact } = req.body; // Extract updated data from the request body

    // Validate that `id` exists
    if (!id) {
      return res.status(400).json({ error: "Service ID is required" });
    }

    // Find the service by ID and update it
    const updatedService = await Services.findByIdAndUpdate(
      id,
      { name, description, category, location, contact }, // Updated fields
      { new: true, runValidators: true } // Options to return the updated document and run schema validators
    );

    // If no service is found, return a 404 error
    if (!updatedService) {
      return res.status(404).json({ error: "Service not found" });
    }

    // Send the updated service as the response
    res
      .status(200)
      .json({ message: "Service updated successfully", updatedService });
  } catch (error) {
    console.error("Error updating service:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const deleteService = async (req, res) => {
  const { id } = req.params;
  await Services.findByIdAndDelete(id);
  res.status(200).json({ success: true, message: "seleted id is deleted..." });
};
