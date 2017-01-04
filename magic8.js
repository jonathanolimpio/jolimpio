var userQuestion= prompt("What would you like to aske the magic 8 ball?");
var randomNumber=Math.floor(Math.random()*7);
var eightBall="";
switch(randomNumber){
 case 0:
         eightBall="It is certain";
         break;
         
         case 1:
         eightBall="It is decidedly so";
         break;
         
         case 2:
         eightBall="No";
         break;
         
         case 3:
         eightBall="Probably";
         break;
         
         Case 4:
         eightBall="Not right now";
         break;
         
         case 5:
         eightBall="Yes";
         break;
         
         case 6:
         eightBall="Dosent look right";
         break;
         
         case 7:
         eightBall="sure";
         break;
         
}

alert(eightBall);
