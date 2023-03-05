var request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v2/all");
request.send();
request.onload=function(){
  var result=JSON.parse(request.response);
  var res=result.filter((ele)=>ele.population>200000)
  console.log(res);
  var final=res.map((ele)=>ele.name);
  console.log(final);
}

