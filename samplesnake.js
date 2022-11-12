const prompt = require('prompt-sync')();

var count1 = 0;
var count2 = 0;
var score = 0;
while(count1 < 100 && count2 <100){

  
        function player1(){
  
            var user1 = prompt("enter user1 r to roll dice");
           
           
            if(user1 == "r"){
                
                var dice = Math.floor(Math.random() * 6)+1;
                console.log(dice);
                
                count1 = count1 + dice;
                console.log(count1);
               
            }
            
        }
        function player2(){
         var user2 = prompt("enter user2 r to roll dice");
           
            
            if(user2 == "r"){
        
                var dice = Math.floor(Math.random() * 6)+1;
                console.log(dice);
                
                count2 = count2 + dice;
                console.log(count2);
            }
        }
    
    

player1();
player2();

}
if(count1 > 100){
    console.log("player1 wins")
}
else if(count2 > 100){
    console.log("player2 wins")
}
