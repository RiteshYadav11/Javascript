const coding = ["js" , "python" , "java" , "c++" , "ruby" , "rust" , "r"]

// coding.forEach(function (item) {
//     console.log(item);
// })

// coding.forEach((item)=>{
//     console.log(item);
// })

function printme(item){
    console.log(item);
}

// coding.forEach(printme)

coding.forEach( (item , index , arr)=>{
    // console.log(item , index , arr); 
} )


const codings = [
    {
        languagename : "javascript",
        languagefile : "js"
    },
    {
        languagename :"Python",
        languagefile :"py"
    },
    {
        languagename :"Java",
        languagefile :"java"
    },
    {
        languagename :"C++",
        languagefile :"cpp"
    }
]

codings.forEach( (item) => {
    console.log(item.languagename);
} )