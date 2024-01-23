const asyncHandler = require("express-async-handler");
const path = require("path");

const contactModel = require("../model/contact.model");

// // Multer storage configuration
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "avatars");
//   },
//   filename: function (req, file, cb) {
//     cb(
//       null,
//       `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
//     );
//   },
// });

// // Multer upload configuration
// const upload = multer({ storage: storage }).single("Image");

// POST DATA: Post Method
exports.postContact = asyncHandler(async (req, res) => {
  const data = new contactModel({
    name: req.body.name,
    phoneNo: req.body.phoneNo,
    email: req.body.email,
  });

  data
    .save()
    .then((data) => {
      res.status(201).json(data);
    })
    .catch((err) => {
      console.error("Error creating contact:", err);
      res.status(500).json({
        message: "Internal server error creating contact",
        error: err.message || "Internal Server Error",
      });
    });
});

// exports.postContact = asyncHandler(async (req, res) => {
//   upload(req, res, async (error) => {
//     try {
//       if (error instanceof multer.MulterError) {
//         console.log("Error uploading image:", error);
//         return res.status(400).json({ error: "Image upload error" });
//       } else if (error) {
//         console.error("Error during file upload:", error);
//         return res
//           .status(500)
//           .json({ error: "Server error during file upload" });
//       }

//       const avatarPath = req.file ? req.file.path : null;

//       if (!avatarPath) {
//         return res.status(400).json({ error: "Image field is required" });
//       }

//       const data = new contactModel({
//         Image: avatarPath,
//         name: req.body.name,
//         phoneNo: req.body.phoneNo,
//         email: req.body.email,
//       });

//       const savedData = await data.save();

//       res.status(200).json(savedData);
//     } catch (err) {
//       console.error("Error creating contact:", err);
//       res.status(500).json({
//         message: "Internal server error creating contact",
//         error: err.message || "Internal Server Error",
//       });
//     }
//   });
// });
//Post Method End

// READ ALL DATA: Get Method
// exports.findAllContact = asyncHandler(async (req, res) => {
//   try {
//     const page = req.query.page ? parseInt(req.query.page) : 1;
//     const limit = req.query.limit ? parseInt(req.query.limit) : totalCount;
//     const search = req.query.search || "";
//     const filter = req.query.filter || "";

//     const query = {
//       $or: [
//         { name: { $regex: new RegExp(search, "i") } },
//         { email: { $regex: new RegExp(search, "i") } },
//       ],
//     };

//     // Fetching paginated contacts
//     const contacts = await contactModel
//       .find(query)
//       .skip((page - 1) * limit)
//       .limit(limit);

//     // Calculating total count for the given query
//     const totalCount = await contactModel.countDocuments(query);
//     console.log(contacts);
//     res.status(200).json({
//       contacts,
//       totalCount,
//     });
//   } catch (error) {
//     console.error("Error fetching contacts:", error);
//     res.status(500).json({
//       message: "Internal server error fetching contacts",
//       error: error.message || "Internal Server Error",
//     });
//   }
// });

// exports.findAllContact = asyncHandler(async (req, res) => {
//   try {
//     const search = req.query.search || "";
//     const filter = req.query.filter || "";

//     const query = {
//       $or: [
//         { name: { $regex: new RegExp(search, "i") } },
//         { email: { $regex: new RegExp(search, "i") } },
//       ],
//     };

//     // Calculating total count for the given query
//     const totalCount = await contactModel.countDocuments(query);

//     const page = req.query.page ? parseInt(req.query.page) : 1;
//     const limit = req.query.limit ? parseInt(req.query.limit) : totalCount;

//     // Fetching paginated contacts
//     const contacts = await contactModel
//       .find(query)
//       .skip((page - 1) * limit)
//       .limit(limit);

//     console.log(contacts);
//     res.status(200).json({
//       contacts,
//       totalCount,
//     });
//   } catch (error) {
//     console.error("Error fetching contacts:", error);
//     res.status(500).json({
//       message: "Internal server error fetching contacts",
//       error: error.message || "Internal Server Error",
//     });
//   }
// });

exports.findAllContact = asyncHandler(async (req, res) => {
  try {
    const search = req.query.search || "";
    const filter = req.query.filter || "";

    const query = {
      $or: [
        { name: { $regex: new RegExp(search, "i") } },
        { email: { $regex: new RegExp(search, "i") } },
      ],
    };

    // Calculating total count for the given query
    const totalCount = await contactModel.countDocuments(query);

    const page = req.query.page ? parseInt(req.query.page) : 1;
    const limit = req.query.limit ? parseInt(req.query.limit) : 2;

    // Calculate total page count
    const pageCount = Math.ceil(totalCount / limit);

    // Fetching paginated contacts
    const contacts = await contactModel
      .find(query)
      .skip((page - 1) * limit)
      .limit(limit);

    console.log(contacts);
    res.status(200).json({
      contacts,
      totalCount,
      pageCount,
      limit,
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

// // READ SINGLE DATA: Get:id Method
exports.findContact = asyncHandler(async (req, res) => {
  const id = req.params.id;

  try {
    const contact = await contactModel.findById(id);

    if (!contact) {
      return res.status(404).json({
        success: false,
        message: "Contact not found",
      });
    }
    res.status(200).json(contact);
  } catch (error) {
    console.error("Error fetching contact:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error fetching contact",
      error: error.message || "Internal Server Error",
    });
  }
});

// Get Method End

// UPDATE DATA: Put Method
// exports.updateContact = asyncHandler(async (req, res) => {});

// Function to delete an image file
const deleteImage = (filePath) => {
  if (fs.existsSync(filePath)) {
    try {
      fs.unlinkSync(filePath);
      console.log(`Deleted old image: ${filePath}`);
    } catch (err) {
      console.error(`Error deleting old image: ${err.message}`);
    }
  }
};

// ...

// UPDATE DATA: Put Method
exports.updateContact = asyncHandler(async (req, res) => {
  const contact = await contactModel.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }

  // Check if a new image is being uploaded
  let avatarPath = contact.Image;
  if (req.file) {
    avatarPath = req.file.path;

    // Delete the old image file
    deleteImage(contact.Image);
  }

  const updatedcontact = await contactModel.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.status(200).json({
    error: false,
    data: updatedcontact,
  });
});
// Put Method End

// DELETE DATA: Delete Method
exports.deleteContact = asyncHandler(async (req, res) => {
  const id = req.params.id;

  contactModel
    .findByIdAndDelete(id)
    .then((data) => {
      if (!data) {
        return res.status(400).json({
          message: `Cannot delete with id:${id}. May be id is wrong`,
        });
      } else {
        res.send({ message: `User delete successfuly!` });
      }
    })
    .catch((err) => {
      console.error("Error updating user:", err);
      res.status(500).json({
        message: "Could not delete User with id=" + id,
        error: err.message || "Internal Server Error",
      });
    });
});
// Delete Method End
