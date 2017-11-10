$( document ).ready(function() {

var myFacebookToken ='EAACEdEose0cBANKuhxPCvXqhMqQp9rybRzBmZAhAFZCNr9ZC3NfaVyY1kiJr2KZCJ2XWRYyWV0h4fc5KNG0IMa26ZAUewfM3YY7nK9ovyOJz5n2aiwswa9vWFBVBO4LECIiEc4n0cdoZBEM2baZCSQcrXi4NYRsfkxnDFQAZBcXsVl68s3pZCSnJqaSTPTxRNqwZBuZBMv9zzPPywZDZD';

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
                    $("#PostId1").text(response.feed.data[0].story);
                    $("#PostId1").text(response.feed.data[0].created_time);
                    $("#PostId2").text(response.feed.data[1].story);
                    $("#PostId3").text(response.feed.data[2].story);
                    $("#PostId4").text(response.feed.data[3].story);
                    $("#PostId5").text(response.feed.data[4].story);
                    $("#PostId6").text(response.feed.data[5].story);
                    $("#PostId7").text(response.feed.data[6].story);
                    $("#PostId8").text(response.feed.data[7].story);
                    $("#PostId9").text(response.feed.data[8].story);
                    $("#PostId10").text(response.feed.data[9].story);

          
          },

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

$("#facebookBtn").on('click',getFacebookInfo);

}    );