// Data Exapmple :
  var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/

function totalSales(listOfSales) // (array of int), return a int
{
 // console.log("***** in totalsales func");
  var total = 0;
  for(num of listOfSales)
  {
   // console.log("total is ", total);
    total += num;
  }
  // console.log("total total is ",total);
  return total;
}

function totalTax(saleNum, taxRate)  // (int, float), return a int
{
  var tax;
  tax = saleNum * taxRate;
  return tax;
}



// companyList has  name: 'Telus', province: 'BC', total: 700
// tax chart has : AB: 0.05,......
function assembleInfo(companyList, taxChart) {
  var totalsale = {};
  var totaltax = {};
  var output = {};
  var counter = 0;
// console.log(companyList);
// console.log("^^^^^^^^^^^^^look at me");
  // now I'm totaling the sales of companys across regions
  //console.log("/n");
  for(company of companyList)
  {
    if(!totalsale[company["name"]]){
      // console.log("in this if statement company[name] is ", company["name"]);
      totalsale[company["name"]] = 0;
      totaltax[company["name"]] = 0;

    }

    if(!output[company["name"]]) {
      counter++;
      output[company["name"]] = {};
      output[company["name"]]['totalSales'] = 0;
      output[company["name"]]['totalTaxes'] = 0;
      // console.log("output = ",output);
      // console.log(counter,"th iteration over");
    }
      // console.log(company);

    totalsale[company["name"]] += company["total"];
    console.log(totalsale[company["name"]]);

    totaltax[company["name"]] += totalTax(company["total"],taxChart[company["province"]]);

// console.log("yoyoyo");
// console.log(totalsale[company["name"]]);
    output[company["name"]]["totalSales"] += company["total"];
    output[company["name"]]["totalTaxes"] += totalTax(company["total"],taxChart[company["province"]]);
    // console.log(output);

    // console.log("WTF&&&&&&&",totaltax[company["name"]]);

    // console.log("this tax is",totalTax(company["total"],taxChart[company["province"]]));
    // console.log("company",company["name"], "has a total of ",totalsale[company["name"]] );
    // console.log("company",company["name"], "has a total tax of ",totaltax[company["name"]] );
  }
    // now totalsale would have something like {"telus" : 1000}
    // console.log(output);
    return output;
}


  function calculateSalesTax(salesData, taxRates)
{

  // step 1: summing all sales data for each company
  var totSales = [] ;

   for(var companyInfo of salesData)
   {
    // companyInfor format :
 //    name: "Telus",
//     province: "BC",
//     sales: [ 100, 200, 400 ]

    var tempcontainer ={};
    var sum = 0;
    // console.log("hi");
    // console.log("companyInfo ----> ",companyInfo);
    // console.log("hi again");
    var tempSales = companyInfo["sales"];
      // tempSales is something like [100, 120, 400]
    // console.log("tempSales ---->", tempSales);
    sum = totalSales(tempSales);
      // now sum contains the sales totla for this particular company
    // console.log("sum ------>",sum);
      // now put the sum into totalsales variable , check if has it



    // console.log("company is : ", companyInfo["name"], "total is ",sum);
    tempcontainer["name"] = companyInfo["name"];
    tempcontainer["province"] = companyInfo["province"];
    tempcontainer["total"] = sum;
    totSales.push(tempcontainer);
    }

   // console.log(totSales);
   // console.log("___hi------");

   var ok =  assembleInfo(totSales,salesTaxRates);
   console.log(ok);
   return ok;
   // now totSales contains something like [ { name: 'Telus', province: 'BC', total: 700 },
  // { name: 'Bombardier', province: 'AB', total: 800 },
  // { name: 'Telus', province: 'SK', total: 600 } ]


}
calculateSalesTax(companySalesData);