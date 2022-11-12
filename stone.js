
const prompt = require('prompt-sync')();

var user1 = prompt("enter input1");
var user2= prompt("enter input2");



if(user1=="stone" & user2=="paper"){
    console.log("user2 wins");
}
else if(user1=="stone" & user2=="sisor"){
    console.log("user1 wins");
}
else if(user1=="paper" & user2=="sisor"){
    console.log("user2 wins");
}
else if(user1=="paper" & user2=="stone"){
    console.log("user1 wins");
}
else if(user1=="scisor" & user2=="stone"){
    console.log("user2 wins");
}
else if(user1=="sisor" & user2=="paper"){
    console.log("user1 wins");
}
else if((user1=="paper" & user2=="paper")||(user1=="sisor" & user2=="sisor")||(user1=="stone" & user2=="stone")){
    console.log("No one wins");
}
