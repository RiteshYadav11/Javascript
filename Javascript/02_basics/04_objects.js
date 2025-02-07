// const tinder = new Object()

const tinder = {}

tinder.user = "1123abc"
tinder.name = "Ritesh"
tinder.islogged = false

// console.log(tinder);


const regularuser = {
    email : "some@gmail.com",
    fullname : {
        user_full_name : {
            firstname : "Ritesh",
            lastname : "Yadav"
        }
    }
}

// console.log(regularuser.fullname.user_full_name.firstname);


const obj1 = {1:"a" , 2:"b"}
const obj2 = {3:"c" , 4:"d"}

// const obj3 = {obj1 , obj2}
// const obj3 = Object.assign({} , obj1 , obj2)

const obj3 = {...obj1 , ...obj2}
// console.log(obj3);


const arr = [
    {
        id : 1,
        name : "Ritesh"
    },
    {
        id : 2,
        name : "Aman"
    },
    {
        id : 3,
        name : "Hello" 
    }
]

// console.log(arr[0].name);


// console.log(tinder)

// console.log(Object.keys(tinder));
// console.log(Object.values(tinder));
// console.log(Object.entries(tinder));


// console.log(tinder.hasOwnProperty("islogged"))


const course = {
    coursename : "js in hindi",
    price : 999,
    courseInstructor : "Hitesh"
}

// console.log(course.courseInstructor);

const {courseInstructor = Instructor} = course

console.log(courseInstructor);

