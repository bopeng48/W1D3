//1. all the unique char
//2. how many instance of each char
//3. to be returned as a object



//if( strObject.hasOwnProperty(char) )

//if( strObject[char] == undefined )

// var obj = {'a': 0 }
// {'a' : 1}

// var obj = {'a' : [] }
// {'a' : [1,3,5]}

var str;
str = process.argv[2];

function strip(string)
{
  var obj = {};
  var strr = string.replace(/\s+/g, '');
  for( char of strr)
  {
    if(strr.hasOwnProperty(char))
      console.log("hi");
    if(!obj[char])
    {
      obj[char] = 0;
    }
    obj[char]++;
  }
  return obj;
}

console.log(strip(str));
