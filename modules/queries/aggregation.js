//  -----------------------$match and $project -----------------------------------

db.test.aggregate([
    //stage 1
    {
        $match: { gender: "Male", age: { $lt: 30 } }
    },
    // stage 2
    {
        $project: { name: 1, age: 1, gender: 1 }
    }
])

// -------------------- $merge and $out ------------------------------------------


db.test.aggregate([
    //stage 1
    {
        $match: { gender: "Male" }
    },
    // stage 2
    {
        $addFields: { course: "Level 2", eduTech: "PH", type: "Full Stack" }

    },
    // stage 3
    {
        $project: { name: 1, course: 1, eduTech: 1 }
    },
    // stage 4
    // {
    //     $out: "students"
    // }
    {
        $merge: "test"
    }
])


// ----------------- $group ------------------------------------------

db.test.aggregate([

    // stage 1
    // { $group: { _id: "$address.country" } }
    // { $group: { _id: "$age", count: { $sum: 1 } } }
    // { $group: { _id: "$gender", count: { $sum: 1 } } }
    // { $group: { _id: "$address.country", count: { $sum: 1 }, amakeDekhaoNam: { $push: "$name" } } }
    { $group: { _id: "$address.country", count: { $sum: 1 }, fullDoc: { $push: "$$ROOT" } } },
    // stage 2
    {
        $project: {
            "fullDoc.name": 1,
            "fullDoc.email": 1,
            "fullDoc.phone": 1,
        }
    }

])