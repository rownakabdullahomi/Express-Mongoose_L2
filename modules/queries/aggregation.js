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