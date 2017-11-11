$( document ).ready(function() {

var myFacebookToken ='EAACEdEose0cBAPZBKmyQXXi189U8RCsZAyNgQC3UlGLaOzCj6VElvw4EGZAyNir5KPDVQbJwYGYuJ01xCFnKBKgn2kU3s9FbBnzYz00OXwrYsSTySovJIbLHc9CJxdtR9K0CwPVKfJQvVQOwtHNn09VBR7qMyHQ4tBDQusahIoZBiaZCZAZCvE7LQATaFV9o4VYVbu1W19vqAZDZD';

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
                    
                    

                $("#loadpost"). click(function(){

                       $.ajax( {

                           url : "https://graph.facebook.com/me?fields=posts&access_token=" + myToken ,

                                method : "GET" ,
                               success : function (response) {
                                 var element = response.post.data ;
                                  for(var i=0 ; i < 10 ; i++){
                                   var postId = "#PostId"+i ;
                                   $(PostId.text(response.post.data));
                            
                                  }

                                },


                    }

                  

                  error : function(request,errorType,errorMessage){
                    console.log(request);
                    console.log(errorType);
                    alert("Check your console!");
                },

                timeout:5000, // in ms

                beforeSend : function(){

                    $('.loader').show();

                },

                complete : function(){

                   $('.loader').hide();

                }

     }    

);   


} //end fb info
} );

$("#facebookBtn").on('click',getFacebookInfo);

}    );

