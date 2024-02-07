// Cube ing the number
function cubeNumber(number){
    if(typeof number !== 'number'){
        return "pls enter number" ;
    }
    
        const result =Math.pow(number,3);
        return result;
    }
     const output=cubeNumber("y");
    console.log(output);
    
    //22-bonus= match and return boolean
    // (write a function named as matchFinder() and take 2 input
    // find the match in 2 String and return true or false and send error if its not string)
      function matchFinder(string1,string2){
        if(typeof string1 !=='string' ||typeof string2 !=='string'){
                return "pls enter text: ";
        }
    
    
        const result=string1.includes(string2);
        return result;
      }
     
    console.log(matchFinder("borolok",7));


    // problem-3
    function series(arr){
        const [a,b]=arr;
        if(a<0 || b<0){
            return 'invalid';
        }
        
            if(a==b){
                return equal;
            }
        if(a>b){
            return [a,b];
        }
        else{
            return [b,a];
        }
    }
    console.log(series([44,-12]));


// -------------------------problem -4-------------------------------------------------
    // problem-- find adress and replace the property with __

    // define the fn which will take an obj as input
    function findAddress(obj){
        // access the element of obj and replace the property with __
        const street=obj.street || "__";
        const house=obj.house || "__";
        const socity=obj.socity || "__";
    
        const str=street+ " ,"+house+ ", " +socity;
    
        return str;
    }
    console.log(findAddress({street: 10,house: "15A",socity:"posh"})); 

    // -------------------------problem -5-------------------------------------------------
// buing chips and returns
    function canPay(array,number){
        if(array.length<3){
            return "taka koi?" ;            
        }
        const [a,b,c]=array;
        const add=a+b+c;
    
        if(add>=number){
            return true;
    }
    else{
        if(add<number){
            return false;
        }
    }
    }
    console.log(canPay([1,2,5],10));
    
// OR (2nd rules and better)

function canPay2(given,totall){
    // if empty ,return error msg
    if(given.length==0){
        return "taka koi?" ;

    }
}
// finish