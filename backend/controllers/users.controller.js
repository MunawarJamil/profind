import User from "../models/users.model.js";

import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const registerUser = async (req, res) => {
  const { name, email, password, role, address, mobile } = req.body;

  try {
    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: "User already exists with this email",
      });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create a new user
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      role,
      address,
      mobile,
    });

    // Generate JWT token
    const token = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET || "defaultsecret",
      {
        expiresIn: "1h",
      }
    );

    // Respond with success
    res.status(201).json({
      success: true,
      message: "User registered successfully",
      data: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
      token,
    });
  } catch (error) {
    console.error("Error during user registration:", error.message);
    res.status(500).json({
      success: false,
      message: "Server error: Unable to register user",
    });
  }
};
// Login user and return JWT token
export const loginUser = async (req, res) => {
    const { email, password } = req.body;
  
    try {
      // Check if user exists
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ success: false, message: 'Invalid credentials' });
      }
  
      // Check password
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ success: false, message: 'Invalid credentials' });
      }
  
      // Generate JWT token
      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
  
      // Send response
      res.status(200).json({ success: true, message:"user logged in successfully", data: user, token });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  };



// Update user profile
export const updateProfile = async (req, res) => {
    const { userId } = req.user; // Access the userId from the authMiddleware
    const { name, email } = req.body;
  
    try {
      // Find the user by ID
      const user = await User.findById(userId);
      if (!user) {
        return res.status(404).json({ success: false, message: 'User not found' });
      }
  
      // Update user details
      user.name = name || user.name;
      user.email = email || user.email;
      
      // Save updated user
      await user.save();
  
      res.status(200).json({ success: true, message: 'Profile updated successfully', data: user });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  };