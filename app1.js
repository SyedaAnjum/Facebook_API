$( document ).ready(function() {

var myFacebookToken ='EAACEdEose0cBANstm9OeKmIwZCdzq9ZA5LL9ScMMhgZBln7bDTEkQgKzO2Tx30JTIRraAHDHByCkZA5ERu7APmCnnpJvkuAMhS1gNDeZC8hG4xXU8Ot5KLliMUfEdZB4kVO2UdST90SQXSU3yhdlHXnublkkl79jhZC5KdJjloIvZAg1WuZCZBZC4cFARHC3WMUWQm90AjZBpYM01AZDZD';

function getFacebookInfo() {

     $.ajax('https://graph.facebook.com/me?fields=id,name,picture,birthday,gender,email,hometown,likes,location,feed.include_hidden(true).limit(10)&access_token='+myFacebookToken,{

          success: function(response){
               console.log(response);
               console.log(typeof(response));
                    $("#myFirstName").text(response.first_name);
                    $("#myLastName").text(response.last_name);
                    $("#myFbName").text(response.name);
                    $("#myBirthday").text(response.birthday);
                    $("#myProfileId").html('<a target="blank" href="https://facebook.com/'+response.id+'">https://facebook.com/'+response.id+'</a>');
                    $("#myHomeTown").text(response.hometown.name);
                    $("#myLocation").text(response.location.name);
                    $("#myGender").text(response.gender);
                    $("#myProfilePic").html('<img src="https://graph.facebook.com/' + response.id + '/picture"  />');
                    $("#myProfilePicLarge").html('<img src="https://graph.facebook.com/' + response.id + '/picture?type=large"  id="myProfilePic"/>');
     
          }, //end of success 

                           error : function(request,errorType,errorMessage){
                                console.log(request);
                                console.log(errorType);
                                alert("Check your console!");
                            },

                          timeout:5000, //in ms 

}); //end of ajax call     


} //end of facebookInfo 
$("#facebookBtn").on('click',getFacebookInfo);

          

                    

                $("#loadpost"). click(function(){

                      $.ajax( {

                           url : "https://graph.facebook.com/me?fields=posts&access_token=" + myFacebookToken ,

                                method : "GET" ,
                                success : function (response) {
                                element = response.posts.data ;
                                for(var i=0 ; i < 10 ; i++){
                                var postId = "#PostId"+i ;
                                $(postId).text(response.posts.data[i].story); 
                                console.log(response.posts.data[i]);
                                }

                                },

                            error : function(request,errorType,errorMessage){
                            console.log(request);
                            console.log(errorType);
                            alert("Check your console!");
                            },

                             timeout:5000, // in ms

               
         

                       }); //end of ajax call   



                 }); //end of loadpost

}); //end of document

