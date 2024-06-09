const { Schema, default: mongoose } = require("mongoose");


const eventSchema = new Schema({
    name: {
        required: true,
        type: String
    },
    details: {
        required: true,
        type: String
    },
    location: {
        required: true,
        type: String
    },
    imageUrl: {
        required: true,
        type: String
    },
    interested_ids: {
        required: false,
        type: Array
    },
    going_ids: {
        required: false,
        type: Array
    },
    swgs: {
        required: false,
        type: Array
    }
})

export const eventModel = mongoose?.models.events || mongoose?.model("events", eventSchema);
