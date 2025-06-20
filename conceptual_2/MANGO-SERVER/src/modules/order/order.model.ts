import { model, Schema } from "mongoose";
import { IOrder } from "./order.interface";
import Mango from "../mango/mango.model";

const orderAddressSchema = new Schema({
  zipCode: String,
  state: String,
  country: String,
  street: String,
});

const orderSchema = new Schema<IOrder>({
  user: { type: Schema.Types.ObjectId, ref:"User", required: true },
  mango: { type: Schema.Types.ObjectId, ref:"Mango", required: true },
  quantity: { type: Number, min: 0, required: true },
  totalPrice: { type: Number, min: 0},
  status: { type: String, required: true },
  //   address: {
  //     zipCode: String,
  //     state: String,
  //     country: String,
  //     street: String,
  //   },
  address: { type: orderAddressSchema, required: true },
});

orderSchema.pre("save", async function () {
//   console.log(`doc from pre --> ${this}`);

  const mango = await Mango.findById(this.mango);
  if (!mango) throw new Error("Mango not found.");
  this.totalPrice = (mango.price as number) * this.quantity;
});

// orderSchema.post("save", function(doc, next){
//     console.log(`doc from post --> ${doc}`);
//     const plainAddress= `${doc.address.street}, ${doc.address.state}, ${doc.address.zipCode}, ${doc.address.country}`;
//     doc.address = plainAddress
//     next();
// })

const Order = model<IOrder>("Order", orderSchema);
export default Order;
