class Player{
   constructor(){

   } 

   getCount(){
       var playerCountRef = database.ref('playerCount');
       playerCountRef.on("value", (data)=>{
           playerCount = data.val();
       })
   }

   uptdateCount(count){
       database.ref('/').update({
           playerCount: count
       })
   }
}
