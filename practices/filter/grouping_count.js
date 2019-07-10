'use strict';

function grouping_count(collection) {
  let collection_arr=collection.filter(function(element,index,self){
    return self.indexOf(element)==index;
  })
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
