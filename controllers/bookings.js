const Booking = require("../models/booking");
const Listing = require("../models/listing");

const MS_PER_DAY = 1000 * 60 * 60 * 24;

module.exports.renderBookingForm = async (req, res) => {
    const listing = await Listing.findById(req.params.id);
    if (!listing) {
        req.flash("error", "Listing not found!");
        return res.redirect("/listings");
    }
    res.render("bookings/new", { listing });
};

module.exports.createBooking = async (req, res) => {
    const { id } = req.params;
    const { fromDate, toDate, guests } = req.body;

    const listing = await Listing.findById(id);

    const from = new Date(fromDate);
    const to = new Date(toDate);
    const diffDays = Math.ceil((to.getTime() - from.getTime()) / MS_PER_DAY);

    if (diffDays <= 0) {
        req.flash("error", "Invalid date range selected.");
        return res.redirect(`/listings/${id}`);
    }

    const totalPrice = diffDays * listing.price;

    const newBooking = new Booking({
        listing: id,
        user: req.user._id,
        fromDate,
        toDate,
        guests,
        totalPrice,
    });

    await newBooking.save();

    req.flash("success", "Booking successful!");
    res.redirect(`/listings/${id}`);
};
