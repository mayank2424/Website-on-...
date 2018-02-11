//Api call for weather application from openwather API
//
$(document).ready(function(){
//    
//  $(window).scroll(function(){
//    var scroll = $(window).scrollTop();
//      if (scroll > 200) {
//        $(".navbar-default").css("background" , "black");
//        $(".navbar-default").css("box-shadow" , "0 0  30px black");
//        $(".navbar-default a").css("color" , "white");
//      }
//
//      else{
//          $(".navbar-default").css("background" , "transparent");
//          $(".navbar-default").css("box-shadow" , "0 0 0px");
//          $(".navbar-default a").css("color" , "white"); 
//      }
//  });

  var lat, lon, calling_url;
  

    
    $('#hit').click(function() {
//       navigator.geolocation.getCurrentPosition(gotLocation);
//
//      function gotLocation(position) {
//        lat = position.coords.latitude;
//        lon = position.coords.longitude;
        var city=$("#cities").val();
        f_url = 'http://api.openweathermap.org/data/2.5/forecast?q='+ city + "&APPID=c163216a9c6c34e2df6f68b68ca79aed";
        // calling_url="https://api.openweathermap.org/data/2.5/weather?q=India&APPID=c163216a9c6c34e2df6f68b68ca79aed";
        c_url='https://api.openweathermap.org/data/2.5/weather?q=' + city + "&APPID=c163216a9c6c34e2df6f68b68ca79aed";
            
        if(city != ''){
        $.ajax({
          url : f_url,
          method : 'GET',
            dataType:"jsonp",
          success : function (data) {
            console.log(data);
          


//            var temp = data.main.temp;
//            var location = data.name;
//            var desc = data.weather.description;
//            var pressure= data.main.pressure;
//            var humidity= data.main.humidity;
//            var wind= data.wind.speed;
//
//            $('#temp').text(" Temperature is : " + "  " + temp + '   °').css("color","red")
//            $('#location').text("  Location is :  " +"  " + location)
//            $("#humidity").text(" Humidity is : " + " "+  humidity).css("color","orange")
//            $('#pressure').text(" Pressure is : " + " " +  pressure).css("color" ,"orange")
//            $("#speed").text(" Wind Speed is :" + " " +  wind).css("color", "blue")

         var cname=data.city.name;
         var count=data.city.country;
              
//next date forecast at 00:00:00              
         var date=data.list[4].dt_txt;      
         var t= data.list[4].main.temp;
         var min=data.list[4].main.temp_min;
         var max=data.list[4].main.temp_max;
         var hum= data.list[4].main.humidity;
         var wind=data.list[4].wind.speed;
         var wind=data.list[4].wind.speed;
              
     $("#name").text("City Name is:    " + "  " + cname);   $("#country").text("Country  is: " +" " + count);
     $("#max").text("Maximum Temperature is : " + " " + max);
     $("#min").text("Minimum Temperature is : " + " " + min);
     $("#date").text("Date is : " + " " + date);
     $("#hum").text("Humidity is : " + " " + hum);   
      $("#wind").text("Wind Speed is: " + " " + wind);        
              
         var date1=data.list[12].dt_txt;      
         var tem= data.list[12].main.temp;
         var min1=data.list[12].main.temp_min;
         var max1=data.list[12].main.temp_max;
         var hum1= data.list[12].main.humidity;
         var wind1=data.list[12].wind.speed;      
    
//        $("#name").text("City Name is:    " + "  " + cname);   $("#country").text("Country  is: " +" " + count);
     $("#max1").text("Maximum Temperature is : " + " " + max1);
     $("#min1").text("Minimum Temperature is : " + " " + min1);
     $("#date1").text("Date is : " + " " + date1);
     $("#hum1").text("Humidity is : " + " " + hum1); 
     $("#wind1").text("Wind Speed is :" + " " + wind1);              
         
  
   }
});
     
        
         $.ajax({
          url : c_url,
          method : 'GET',
            dataType:"jsonp",
          success : function (data) {
            console.log(data);
            
            var city=data.name;  
           var temp = data.main.temp;
            var location = data.name;
            var tem_min=data.main.temp_min
            var tem_max= data.main.temp_max;
            var humidity= data.main.humidity;
            var wind= data.wind.speed;
    
//        $("#name").text("City Name is:    " + "  " + cname);   $("#country").text("Country  is: " +" " + count);
     $("#City_name").text("City : " + " " + city);         
     $("#tempc").text("Temerature is : "+ " " + temp);          
     $("#maxc").text("Maximum Temperature is : " + " " + tem_max);
     $("#minc").text("Minimum Temperature is : " + " " + tem_min);
     $("#humc").text("Humidity is : " + " " + humidity);
     $("#Windc").text("Wind Speed is : " + " " + wind);         
              
    }
});
         
        }
        
        else{
           alert("Error");
        }
              
    });
  
  });