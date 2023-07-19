function initMap() {
    const myLatLng = { lat: -25.363, lng: 131.044 };
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: myLatLng,
    });
  
    new google.maps.Marker({
      position: myLatLng,
      map,
      title: "Hello World!",
    });
  }
  
  window.initMap = initMap;


  // Valudation 
  //name
let fName = document.getElementById("fname")
let lName = document.getElementById("lname")
let errorName = document.getElementById("errorName");
// email
let emailInp = document.getElementById("emailInp")
let errorEmail = document.getElementById("errorEmail");
let errorEmail2=document.getElementById("errorEmail2");
var emailReg = /\w+@\w+.(com)/;

//password
let passInp = document.getElementById("passInp")
let errorPass = document.getElementById("errorPass");
let errorPass2 = document.getElementById("errorPass2");

//message
let msgInp = document.getElementById("msgInp");
let errorMsg = document.getElementById("errorMsg");
  function submitbtn() {
    var fNameValue = fName.value;
    var lNameValue = lName.value;
    let emailValue=emailInp.value;
    let passValue=passInp.value;
    let msgValue=msgInp.value;

    // Valid Name
    if (fNameValue == "" && lNameValue=="" ) {
      errorName.style.display = "block";

    } else {
      errorName.style.display = "none";

    }

     // Valid Email
     if (emailValue == "" ) {
      errorEmail.style.display = "block";
    } else {
      if(!emailReg.test(emailValue)){
        errorEmail2.style.display = "block";
      }else{
        errorEmail2.style.display = "none";
  
      }
      errorEmail.style.display = "none";
    
    }

    // valid password
    if (passValue=="") {
      errorPass.style.display = "block";

  } else {
    if(passValue.length < 8){
      errorPass2.style.display = "block";
    }else{
      errorPass2.style.display = "none";

    }
    errorPass.style.display = "none";
  }

    if (msgValue == "") {
      errorMsg.style.display = "block";

    } else {
      errorMsg.style.display = "none";

    }
   
    
  }