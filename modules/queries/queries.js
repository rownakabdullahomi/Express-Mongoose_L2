// db.test.find({ age: 26 }).project({ name: 1, email: 1, phone: 1, gender: 1 })

// db.test.find({age: { $eq: 12 }})

// db.test.find({age: { $ne: 12 }})

// db.test.find({ age: { $gt: 30 } })

// db.test.find({ age: { $gte: 30 } }).sort({ age: 1 })


// implicit and 
// db.test.find({ gender: "Female", age: { $gte: 18, $lte: 30 } }, { age: 1, gender: 1 }).sort({ age: 1 })
// db.test.find({ gender: "Female", age: { $in: [18, 20, 22, 24, 26, 28, 30] } }, { age: 1, gender: 1 }).sort({ age: 1 })

// db.test.find({
//     gender: "Female",
//     age: { $nin: [18, 20, 22, 24, 26, 28, 30] },
//     interests: { $in: ["Cooking", "Gaming"] }
// },
//     { age: 1, gender: 1, interests: 1 }).sort({ age: 1 })




// db.test.find({ age: { $exists: true } })
// db.test.find({ company: { $exists: false } })
// db.test.find({ age: { $type: "string" } })
// db.test.find({ age: { $type: "number" } })
// db.test.find({ friends: { $type: "array" } })
// db.test.find({ friends: { $size: 4 } }).project({ friends: 1 })
// db.test.find({ friends: { $size: 0 } }).project({ friends: 1 })
// db.test.find({ company: { $type: "null" } }).project({ company: 1 })



// db.test.find({ interests: "Cooking" }).project({ interests: 1 })
// db.test.find({ "interests.2": "Cooking" }).project({ interests: 1 })
// db.test.find({ interests: { $all: ["Travelling", "Reading", "Cooking"] } }).project({ interests: 1 })
// db.test.find({ "skills.name": "JAVASCRIPT" }).project({ skills: 1 })
// db.test.find({ 
//     skills: { $elemMatch: {
//         name: "JAVASCRIPT",
//         level: "Intermidiate"
//     }}    
// }).project({ skills: 1 })


// db.test.find({_id: ObjectId("6406ad63fc13ae5a40000065")})
// db.test.updateOne(
//     { _id: ObjectId("6406ad63fc13ae5a40000065") },
//     {
//         $set: {
//             age: 85
//         }
//     }
// )
// db.test.updateOne(
//     { _id: ObjectId("6406ad63fc13ae5a40000065") },
//     {
//         $addToSet: {
//             interests: { $each: ["Gaming, Driving, Cooking"] }
//         }
//     }
// )
// db.test.updateOne(
//     { _id: ObjectId("6406ad63fc13ae5a40000065") },
//     {
//         $push: {
//             interests: { $each: ["Gaming, Driving, Cooking"] }
//         }
//     }
// )



// db.test.updateOne(
//     { _id: ObjectId("6406ad63fc13ae5a40000065") },
//     { $unset: { birthday: "" } }
// )
// db.test.updateOne(
//     { _id: ObjectId("6406ad63fc13ae5a40000065") },
//     { $unset: { age: 1 } }
// )
// db.test.updateOne(
//     { _id: ObjectId("6406ad63fc13ae5a40000065") },
//     { $pop: { languages: -1 } }
// )
// db.test.updateOne(
//     { _id: ObjectId("6406ad63fc13ae5a40000066") },
//     { $pull: { friends: "Nahid Hasan Bulbul" } }
// )
// db.test.updateOne(
//     { _id: ObjectId("6406ad63fc13ae5a40000066") },
//     { $pull: { languages: "Assamese" } }
// )
// db.test.updateOne(
//     { _id: ObjectId("6406ad63fc13ae5a40000066") },
//     { $pullAll: { friends: ["Fahim Ahammed Firoz", "Tanmoy Parvez"] } }
// )











// db.test.find()