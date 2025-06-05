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