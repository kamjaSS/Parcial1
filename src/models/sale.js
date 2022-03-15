const mongoose = require("mongoose")
const sale_schema = mongoose.Schema({
    DueDate:{
        type: String,
        require: true
    },
    DocNum:{
        type: String,
        require: true
    },
    Status:{
        type: String,
        require: true
    },
    Line:{
        Amount:{
            type: Number,
            require: true
        },
        DetailType:{
            type: String,
            require: true
        },
        ExpenseDetail:{
            Customer:{
                value:{
                    type: String,
                    require: true
                },
                name:{
                    type: String,
                    require: true
                },
                Ref:{
                    value:{
                        type: String,
                        require: true
                    },
                    name:{
                        type: String,
                        require: true
                    }
                }
            },
            Account:{
                value:{
                    type: String,
                    require: true
                },
                name:{
                    type: String,
                    require: true
                }
            },
            LineStatus:{
                type: String,
                require: true
            }
        }
    },
    Vendor:{
        value:{
            type: String,
            require: true
        },
        name:{
            type: String,
            require: true
        }
    },
    TotalAmt:{
        type: String,
        require: true
    }
})

module.exports = mongoose.model("sale_document",sale_schema)