"use server"
import Razorpay from "razorpay"
import Payment from "@/models/Payment"
import connectDB from "@/utils/db"
import User from "@/models/User"
import Meetup from "@/models/meetup"



export const initiate = async (amount, paymentform) => {
    await connectDB();
    var instance = new Razorpay({ key_id: process.env.NEXT_PUBLIC_RAZORPAY_ID, key_secret: process.env.RAZORPAY_SECRET })

    let options = {
        amount: Number.parseInt(amount),
        currency :"INR"
    }
    let x = await instance.orders.create(options);
    await Payment.create({ oid: x.id, amount: amount, name: paymentform.name, message: paymentform.message })
    return x;
}
export const fetchuser = async (username) => {
    await connectDB();
    let u = await User.findOne({ username: username })
    let user = u.toObject({ flattenObjectIds: true });
    return user
}
export const fetchpayments = async (username) => {
    await connectDB();
    //fetch payments in decreaing order and flatten object ids
    let payments = await Payment.find({name:username}).sort({ amount: -1 }).lean()
    console.log(payments)
    
    return payments

}
export const fetchTopMeetups = async () => {
    await connectDB();
    // Fetch the top 3 meetups sorted by the number of participants
    const topMeetups = await Meetup.find().sort({ participants: -1 }).limit(3).lean();
    return topMeetups;
};