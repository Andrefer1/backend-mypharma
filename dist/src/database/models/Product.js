"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
var schema = new mongoose_1.default.Schema({
    _id: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        unique: true,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
    },
    stock: {
        type: String,
        required: true,
    },
    category: {
        type: mongoose_1.default.Schema.Types.Mixed,
        ref: "Category",
        require: true,
    },
    brand: {
        type: mongoose_1.default.Schema.Types.Mixed,
        ref: "Brand",
        require: true,
    },
    // category: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "Category",
    //     require: true,
    // },
    // brand: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "Brand",
    //     require: true,
    // },
});
var Product = mongoose_1.default.model("Product", schema);
exports.Product = Product;
