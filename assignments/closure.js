// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function userID (){
  let userID1 = "newUser";
  console.log(`You user ID is ${userID1}`);

  function password(){
    let password1 = "pa$$word";
    console.log(`Here is your password ${password1}. Please don't forget it`);

    function controlQuestion(){
      let controlAnswer1 = "City";
      console.log(`Nevertheless if you forget your password you always can reset it, but given this answer(${controlAnswer1}) on the Control Question`)
    }
    controlQuestion();
  }
  password();
}
userID();

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
};
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
