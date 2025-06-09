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


// -------------------- $group ------------------------------------------

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

// -------------------- more $group and $project -------------------------------
db.test.aggregate([

    // stage 1
    {
        $group: {
            _id: null,
            totalSalary: { $sum: "$salary" },
            maxSalary: { $max: "$salary" },
            minSalary: { $min: "$salary" },
            avgSalary: { $avg: "$salary" },

        }
    },

    // stage 2
    {
        $project: {
            totalSalary: 1,
            maxSalary: 1,
            minSalary: 1,
            averageSalary: "$avgSalary",
            rangeBetweenMaxAndMin: { $subtract: ["$maxSalary", "$minSalary"] }
        }
    }
])

// ----------------- unwind -----------------------------------------------

db.test.aggregate([
    // stage 1
    {
        $unwind: "$friends"
    },

    // stage 2
    {
        $group: { _id: "$friends", count: { $sum: 1 } }
    }

])

db.test.aggregate([
    // stage 1
    {
        $unwind: "$interests"
    },
    // stage 2
    {
        $group: { _id: "$age", interestsPerAge: { $push: "$interests" } }
    }
])

// ------------------------------ $bucket --------------------------------------

db.test.aggregate([
    // stage 1
    {
        $bucket: {
            groupBy: "$age",
            boundaries: [20, 40, 60, 80],
            default: "80 er uporer gula",
            output: {
                "count": { $sum: 1 },
                "karakaraase": { $push: "$name" }
            }
        }
    },
    // stage 2
    {
        $sort: { count: -1 }
    },
    // stage 3
    {
        $limit: 4
    },
    // stage 4
    {
        $project: {
            count: -1
        }
    }

])

// ------------------ $facet ----------------------------
db.test.aggregate([
    {
        $facet: {
            // pipeline 1
            "friendsCount": [
                // stage 1
                {
                    $unwind: "$friends"
                },
                // stage 2
                {
                    $group: { _id: "$friends", count: { $sum: 1 } }
                }
            ],
            // pipeline 2
            "educationCount": [
                // stage 1
                {
                    $unwind: "$education",
                },
                // stage 2
                {
                    $group: { _id: "$education", count: { $sum: 1 } }
                }
            ],
            // pipeline 3
            "skillsCount": [
                // stage 1
                {
                    $unwind: "$skills"
                },
                // stage 2
                {
                    $group: { _id: "$skills", count: { $sum: 1 } }
                }
            ]
        }
    }
])

// ---------------------- $lookup -----------------------------------

db.orders.aggregate([
    {
        $lookup: {
            from: "test",
            localField: "userId",
            foreignField: "_id",
            as: "user"
        }
    }
])

//  ----------------------- indexing ----------------------------

db.getCollection("massive-data").createIndex({email: 1})

// db.getCollection("massive-data").createIndex({about: "text"})
db.getCollection("massive-data").find({ $text: { $search: "dolor" } }).project({ about: 1 })

  
