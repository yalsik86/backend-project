import mongoose, { Schema } from "mongoose";

const subscriptionModel = new Schema({
    subscriber: {
        typeof: Schema.Types.ObjectId, // that which subscribes
        ref: "User"
    },
    channel: {
        typeof: Schema.Types.ObjectId, // that which subscriber is subscribed to 
        ref: "User"
    }
}, {timestamps: true})

export const Subscription = mongoose.model("Subscription", subscriptionModel)