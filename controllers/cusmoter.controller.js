const customerModel = require("../models/customer.model.js");
// const status = require("../config/status");

exports.create = async (req, res) => {
    console.log(req.body)
    var obj = {
        name: req.body.name,
        email: req.body.email,
        current_balance: req.body.current_balance,
    }
    const newCustomerModel = new customerModel();
     
    // try{
    //     let result = await newCustomerModel.save();
    //     res.json({ success: true, result: result });

    // }catch(err) {
    //     console.log("err", err)
    //     res.json({ success: false, })
    // }

};
//======================================

exports.get = async (req, res) => {
    try{
        const data = await customerModel.find({})
        return res.json({ data: data, success: true, }); 
    }
    catch(err) {
        return res.json({success: false, err: err})
    }

}