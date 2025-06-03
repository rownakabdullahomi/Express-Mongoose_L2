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



// db.test.find()