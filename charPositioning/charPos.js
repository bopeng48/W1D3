var str;
str = process.argv[2];

function strip(string)
{
  var obj = {};
  var strr = string.replace(/\s+/g, '');

  var char;
  for( var i = 0; i < strr.length; i++)
  {
    char = strr[i];

    if(!obj[char])
    {
      obj[char] = [];
    }
    obj[char].push(i);
  }
  return obj;
}

console.log(strip(str));

