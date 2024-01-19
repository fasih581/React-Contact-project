const asyncHandler = require("express-async-handler");
const multer = require("multer");
const path = require("path");

const contactModel = require("../model/contact.model");

// Multer storage configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "avatars");
  },
  filename: function (req, file, cb) {
    cb(
      null,
      `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

// Multer upload configuration
const upload = multer({ storage: storage }).single("Image");

// POST DATA: Post Method
exports.postContact = asyncHandler(async (req, res) => {
  upload(req, res, async (error) => {
    try {
      if (error instanceof multer.MulterError) {
        console.log("Error uploading image:", error);
        return res.status(400).json({ error: "Image upload error" });
      } else if (error) {
        console.error("Error during file upload:", error);
        return res
          .status(500)
          .json({ error: "Server error during file upload" });
      }

      const avatarPath = req.file ? req.file.path : null;

      if (!avatarPath) {
        return res.status(400).json({ error: "Image field is required" });
      }

      const data = new contactModel({
        Image: avatarPath,
        name: req.body.name,
        phoneNo: req.body.phoneNo,
        email: req.body.email,
      });

      const savedData = await data.save();

      res.status(200).json(savedData);
    } catch (err) {
      console.error("Error creating contact:", err);
      res.status(500).json({
        message: "Internal server error creating contact",
        error: err.message || "Internal Server Error",
      });
    }
  });
});
//Post Method End

// READ ALL DATA: Get Method
// exports.findAllContact = asyncHandler(async (req, res) => {
//   try {
//     const { search, filter, sort, page, limit } = req.query;

//     let query = {};

//     if (search) {
//       query = {
//         $or: [
//           { name: { $regex: new RegExp(search, "i") } },
//           { email: { $regex: new RegExp(search, "i") } },
//         ],
//       };
//     }

//     const contact = await contactModel.find(query).skip(0).limit(2);
//     res.status(201).json(contact);
//   } catch (error) {
//     console.error("Error creating contact:", error);
//     res.status(500).json({
//       message: "Internal server error creating contact",
//       error: error.message || "Internal Server Error",
//     });
//   }
// });

exports.findAllContact = asyncHandler(async (req, res) => {
  try {
    const { search, filter, sort, page = 1, limit = 2 } = req.query;

    let query = {};

    if (search) {
      query.$or = [
        { name: { $regex: new RegExp(search, "i") } },
        { email: { $regex: new RegExp(search, "i") } },
      ];
    }

    if (filter) {
      // Assuming 'filter' is an object with specific fields to filter on
      Object.assign(query, filter);
    }

    const skip = (page - 1) * limit;

    const contacts = await contactModel
      .find(query)
      .sort(sort)
      .skip(skip)
      .limit(parseInt(limit, 10));

    res.status(200).json({
      contacts,
      page: parseInt(page, 10),
      limit: parseInt(limit, 10),
      totalContacts: await contactModel.countDocuments(query),
    });
  } catch (error) {
    console.error("Error fetching contacts:", error);
    res.status(500).json({
      message: "Internal server error fetching contacts",
      error: error.message || "Internal Server Error",
    });
  }
});

// Get Method

// READ SINGLE DATA: Get:id Method
exports.findContact = asyncHandler(async (req, res) => {});
// Get Method End

// UPDATE DATA: Put Method
exports.updateContact = asyncHandler(async (req, res) => {});
// Put Method End

// DELETE DATA: Delete Method
exports.deleteContact = asyncHandler(async (req, res) => {});
// Delete Methodk End
