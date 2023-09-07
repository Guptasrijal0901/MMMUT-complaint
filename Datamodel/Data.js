const mongoose = require("mongoose");
const compSchema = new mongoose.Schema(
    {
        tabname: {type: String},
        tabemail: {type: String},
        tabbranch: {type: String},
        tabroll: {type: Number},
        tabdate: {type: String},
        tabphone: {type: Number},
        tabcomp: {type: String}
    },
    {timestamps: true}
)
const tablemodel = mongoose.model("table-data", compSchema);
module.exports = tablemodel;