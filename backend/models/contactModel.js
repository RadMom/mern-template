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
      address: {
        country: {
          type: String,
          required: false,
        },
        town: {
          type: String,
          required: false,
        },
        street: {
          type: String,
          required: false,
        },
      },
    },
  },
  {
    timestamps: true,
  }
);

module.exports=mongoose.model("Contact",contactShema)