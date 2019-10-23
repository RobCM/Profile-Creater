/*
	2019 @RobertC---------------------------------
	Script to control buttons, animations and load 
	the desire HTML elements.
	----------------------------------------------
*/

$(document).ready(function(){
	
	// Variables declaration
	var check_Value = null;
	var email_value;
	var password_value;
	var username_value;
	
	// Draw HTML 
	$("body").append("<div id =\"main_box\">" +
						frontPage() +
					 "</div>");
					 
	// Check box for avatar (only one can be check!)
	$(".checkbox_check").on("change", function(){
		$(".checkbox_check").not(this).prop("checked", false);
		
		if($("input.checkbox_check").is(":checked")){
			// set up variable
			check_Value = $(this).val();
		}
		else{
			// Back to null
			check_Value = null;
		}
		
	});
					 
	// Create button 
	$("#createProfile").on("click", function(){
		
		// Remove old error if present!
		$("#errorText").remove();
				
		// set up variables
		email_value = $("#email_input").val();
		password_value = $("#password_input").val();
		username_value = $("#username_input").val();
		
		// Making sure the user's has fill up all the data!
		if(email_value.length > 1 && password_value.length > 1 && username_value.length > 1 && check_Value != null){
			
			// Validate email format
			if(validateEmail(email_value)){
				
				// Replace form with confirmation data
				$("#main_box").html(secondPage());

			}
			else{ 
				
				// Display error
				$("#main_box").append("<div id=\"errorText\">Invalid email!</div>");
				$("#errorText").fadeIn();
				$("#errorText").fadeOut(2000);
				
				// Set form back to blank inputs!
				$("#email_input").val("");
				$("#password_input").val("");
				$("#username_input").val("");
				$(".checkbox_check").prop("checked", false);
				check_Value = null;
			}
			
		}
		else{
			
			// Display error
			$("#main_box").append("<div id=\"errorText\">Missing data!</div>");
			$("#errorText").fadeIn();
			$("#errorText").fadeOut(2000);
		}
		
		/*
			// If data were to be send to a database uncomment this code and crate a send_data.php file to collect post data and connect to a database
			  $.ajax({
                        type: "post",
                        url: "send_data.php",
                        data: {
                                user_name: username_value,
								user_email: email_value,
								user_password: password_value,
								user_avatar: check_Value
                              }
                    });
		*/
	  
	}); 
	
	/*
		FUNCTIONS
	*/
	
	function frontPage(formHTML){
		// HTML for the front/index page
		formHTML = "<div id =\"boxTitle\"><center>Create Profile!</center></div>" +
							"<div id=\"inputFrame\">" +
								"<label>Email address</label>" +
								"<input id=\"email_input\" type=\"email\" class=\"form-control\" name=\"email\">" +
								"<label>Password</label>" +
								"<input id=\"password_input\" type=\"password\" class=\"form-control\" name=\"password\">" +
								"<label>User name</label>" +
								"<input id=\"username_input\" type=\"name\" class=\"form-control\"  name=\"name\">" +
							"</div>" +
							"<hr>" +
							"<div id=\"avatarTitle\">Select your avatar</div>" +
							"<div id=\"avatarSelect\" class=\"scroller\">" +
								"<div id=\"ava_One\">" +
								  "<input type=\"checkbox\" name=\"avatarCheck\" class=\"checkbox_check\" value=\"avatar1\"/>" +
								"</div>" +
								"<div id=\"ava_Two\">" +
								"  <input type=\"checkbox\" name=\"avatarCheck\" class=\"checkbox_check\" value=\"avatar2\"/>" +
								"</div>" +
								"<div id=\"ava_Three\">" +
								"  <input type=\"checkbox\" name=\"avatarCheck\" class=\"checkbox_check\" value=\"avatar3\"/>" +
								"</div>" +
								"<div id=\"ava_Four\">" +
								"  <input type=\"checkbox\" name=\"avatarCheck\" class=\"checkbox_check\" value=\"avatar4\"/>" +
								"</div>" +
								"<div id=\"ava_Five\">" +
								"  <input type=\"checkbox\" name=\"avatarCheck\" class=\"checkbox_check\" value=\"avatar5\"/>" +
								"</div>" +
								"<div id=\"ava_Six\">" +
								"  <input type=\"checkbox\" name=\"avatarCheck\" class=\"checkbox_check\" value=\"avatar6\"/>" +
								"</div>" +
								"<div id=\"ava_Seven\">" +
								"  <input type=\"checkbox\" name=\"avatarCheck\" class=\"checkbox_check\" value=\"avatar7\"/>" +
								"</div>" +
								"<div id=\"ava_Eight\">" +
								"  <input type=\"checkbox\" name=\"avatarCheck\" class=\"checkbox_check\" value=\"avatar8\"/>" +
								"</div>" +
							"</div>" +
						   "<br>" +
						   "<button id=\"createProfile\" class=\"btn btn\" name=\insertData\">CREATE</button>";
		return formHTML;
	}
	
	function secondPage(profileHTML){
		// HTML for your profile
		profileHTML = "<div id =\"boxTitle\"><center>Your Profile!</center></div>" +
						"<div id=\"profileBox\">" +
						"	<img id=\"image\" src=\"assets/avatars/" + check_Value +".png\">" +
						"	<div id=\"profileData\">" +
								"<label><b>User name: </b>" + username_value + "</label><br>" +
								"<label><b>Email: </b>" + email_value + "</label><br>" +
								"<label><b>Password: </b>" + password_value + "</label><br>" +
							"</div>" +
							"<div id=\"createdText\">Profile created!</div>" +
						"</div>";
						
		return profileHTML;
	}
	
	// Email format validation function
	function validateEmail(emailTest){
		// Regular expression to validate email string
	    var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
		
	    if(filter.test(emailTest)){
	        return true;
	    }
	    else{
	        return false;
	    }
	}
	
});