const mongoose = require("mongoose");

const DEFAULT_GUESTS = 1;

const bookingSchema = new mongoose.Schema(
    {
        listing: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Listing",
            required: true,
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        fromDate: {
            type: Date,
            required: true,
        },
        toDate: {
            type: Date,
            required: true,
        },
        guests: {
            type: Number,
            default: DEFAULT_GUESTS,
            min: 1,
        },
        totalPrice: {
            type: Number,
            required: true,
            min: 0,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Booking", bookingSchema);
