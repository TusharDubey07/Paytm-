const mongoose = require("mongoose");
const { string } = require("zod");
mongoose.connect('mongodb+srv://tushar:Tushardubey9987@cluster0.xhpx3qn.mongodb.net/paytm')

const userSchema = mongoose.Schema({
    username: {
        type:String,
        required: true,
        unique: true
    },
    firstName:{
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    password:{
        type:String,
        required: true
    }
});

const accountSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    balance: {
        type: Number,
        required: true
    }
});

const Account = mongoose.model("Account", accountSchema);
const User = mongoose.model("User", userSchema);

module.exports = {
    User,
    Account,
};