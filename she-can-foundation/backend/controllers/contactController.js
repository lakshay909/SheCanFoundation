import Contact from '../models/Contact.js';

const submitContactForm = async (req, res) => {
  try {
    const { name, email, message, intent } = req.body;

    // Return a 400 status if any field is missing
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'All fields (name, email, message) are required.',
      });
    }

    // Create a new Contact document and save it to the DB
    const newContact = new Contact({
      name,
      email,
      message,
      intent: intent || 'general',
    });

    await newContact.save();

    // Return a 201 status on success
    return res.status(201).json({
      success: true,
      message: 'Form Submitted Successfully',
    });
  } catch (error) {
    console.error(`Error in submitContactForm: ${error.message}`);
    return res.status(500).json({
      success: false,
      message: 'Internal Server Error',
    });
  }
};

export const getMessages = async (req, res) => {
  try {
    const messages = await Contact.find().sort({ createdAt: -1 });
    return res.status(200).json({
      success: true,
      data: messages,
    });
  } catch (error) {
    console.error(`Error in getMessages: ${error.message}`);
    return res.status(500).json({
      success: false,
      message: 'Internal Server Error',
    });
  }
};

export default submitContactForm;
