// models/Inventory.js

import mongoose from 'mongoose';

const InventorySchema = new mongoose.Schema({
  featuredphoto: { type: String, required: true },
  dealer_id: { type: Number, required: true },
  vin: { type: String, required: true },
  status: { type: String, required: true },
  statusoverride: { type: String },
  featured: { type: Number, required: true },
  stocknumber: { type: String, required: true },
  location: { type: String, required: true },
  originalprice: { type: Number, required: true },
  price: { type: Number, required: true },
  specialprice: { type: Number },
  addonprice: { type: Number },
  msrp: { type: Number },
  year: { type: Number, required: true },
  make: { type: String, required: true },
  model: { type: String, required: true },
  modelnumber: { type: String },
  trim: { type: String },
  series: { type: String },
  body: { type: String, required: true },
  condition: { type: String, required: true },
  certified: { type: Number },
  mileage: { type: Number, required: true },
  exteriorcolor: { type: String },
  interiorcolor: { type: String },
  fuel: { type: String, required: true },
  transmission: { type: String },
  drivetrain: { type: String, required: true },
  engine: { type: String },
  displacement: { type: Number },
  cylinders: { type: Number },
  maxhorsepower: { type: Number },
  maxhorsepowerat: { type: Number },
  maxtorque: { type: Number },
  maxtorqueat: { type: Number },
  aspiration: { type: String },
  mpgcity: { type: Number },
  mpghwy: { type: Number },
  doors: { type: Number },
  seatingcapacity: { type: Number },
  towingcapacity: { type: Number },
  carfax: {
    carfaxurl: { type: String },
    carfaxicon: { type: String },
    carfaxalt: { type: String },
    carfaxoneowner: { type: Number },
    carfaxownerstext: { type: String },
    carfaxownersicon: { type: String },
    carfaxusetext: { type: String },
    carfaxuseicon: { type: String },
    carfaxservicerecords: { type: Number },
    carfaxaccidenttext: { type: String },
    carfaxaccidenticon: { type: String },
    carfaxsnapshotkey: { type: String },
  },
  autocheck: { type: String },
  photocount: { type: Number },
  notes: { type: String },
  incentives: { type: String },
  metatitle: { type: String },
  metadescription: { type: String },
  vehicledescription: { type: String },
  dealer: {
    name: { type: String },
    city: { type: String },
    state: { type: String },
    phonemain: { type: String },
    capitalone_token: { type: String },
  },
  hot: { type: Number },
  new: { type: Number },
  finance: {
    down_pct: { type: Number },
    salestaxstate: { type: String },
    vehicle_amount: { type: Number },
    shipping_amount: { type: Number },
    tradein_amount: { type: Number },
    tradein_remainingbalance: { type: Number },
    down_payment: { type: Number },
    doctitlefees_amount: { type: Number },
    tax_amount: { type: Number },
    tax_rate: { type: Number },
    tax_rate_formatted: { type: Number },
    tax_tradeincredit: { type: Number },
    loan_amount: { type: Number },
    loan_months: { type: Number },
    interest_rate: { type: Number },
    interest_rate_formatted: { type: Number },
    credit_tier: { type: String },
    total_cost: { type: Number },
    total_interest: { type: Number },
    monthly_payment: { type: Number },
  },
  features: [{ name: { type: String } }],
  photos: [{ photo: { type: String } }],
  video: {
    source: { type: String },
    url: { type: String },
    autoplay: { type: String },
    aspectratio: { type: String },
  },
}, { timestamps: true });

export default mongoose.models.inventories|| mongoose.model('inventories', InventorySchema);
