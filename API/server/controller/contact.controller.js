const asyncHandler = require("express-async-handler");

const contactModel = require("../model/contact.model");

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

//Post Method End

// READ ALL DATA: Get Method
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

    const totalCount = await contactModel.countDocuments(query);

    const page = req.query.page ? parseInt(req.query.page) : 1;
    const limit = req.query.limit ? parseInt(req.query.limit) : 2;
    // console.log("page", page, "limi", limit);
    const pageCount = Math.ceil(totalCount / limit);

    const contacts = await contactModel
      .find(query)
      .skip((page - 1) * limit)
      .limit(limit);

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
    console.log(contact);
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
exports.updateContact = asyncHandler(async (req, res) => {
  try {
    const contact = await contactModel.findById(req.params.id);

    if (!contact) {
      return res.status(404).json({
        error: true,
        message: "Contact not found",
      });
    }

    const updatedContact = await contactModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
console.log(updatedContact);
    res.status(200).json(updatedContact);
  } catch (error) {
    console.error("Error updating contact:", error);
    res.status(500).json({
      error: true,
      message: "Internal Server Error",
    });
  }
});


// exports.updateContact = asyncHandler(async (req, res) => {
//   const contact = await contactModel.findById(req.params.id);
//   if (!contact) {
//     res.status(404);
//     console.error("Contact not found");
//   }

//   const updatedcontact = await contactModel.findByIdAndUpdate(
//     req.params.id,
//     req.body, 
//     { new: true }
//   );
  
//   res.status(200).json({
//     error: false,
//     data: updatedcontact,
//   });
// });
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
