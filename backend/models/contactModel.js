const mongoose = require("mongoose");

const contactShema = mongoose.Schema(
  {
    contact: {
      name: {
        type: String,
        required: true,
      },
      phoneNumber: {
        type: String,
        required: true,
      },
    },
    user_id: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Contact", contactShema);
