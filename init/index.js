const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO = "mongodb://127.0.0.1:27017/wanderlust";

main().then(() => {
    console.log("Connected to DB");
}).catch((err) => {
    console.log(err);
});

async function main() {
    await mongoose.connect(MONGO);
};

const initDB = async() => {
    try{
        await Listing.deleteMany({});
        initData.data = initData.data.map((obj) => ({...obj, owner: "676967af041da7b346fa9ebf"}));
        await Listing.insertMany(initData.data);
        console.log("data was initialized.");
    } catch(err) {
        console.log(err);
    }
};

initDB();