'use strict';

function grouping_count(collection) {
  let collection_arr=[];
   collection.forEach(number => {
     if(collection_arr.indexOf(number)==-1){
       collection_arr.push(number);
     }
     
   });
   let result=new Object();
   collection_arr.forEach(number => {
       let cnt=0;
       collection.forEach(i=>{
         if(i==number){
           cnt++;
         }
       })
       result[number]=cnt;
     
   });
   return result;
  //implement here
}

module.exports = grouping_count;
