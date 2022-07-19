//create the user constructor

class User {
    constructor(fname, lname, age, email, address, password, payment, color, phone) {
        this.firstName = fname;
        this.lastName = lname;
        this.age=age;
        this.email = email;
        this.address=address;
        this.password = password;
        this.paymentMethod = payment;
        this.color = color;
        this.phone=phone;

    }
}


/*function User(fname,lname,email,password,payment, color){
        this.firstname=fname;
        this.lastname=lname;
        this.email=email;
        this.password=password;
        this.paymentMethod = payment;
        this.color = color;
        }*/




//create the register function
function register(){
    //get the values from the inputs
    let userFName=$("#txtFirstName").val();
    let userLName=$("#txtLastName").val();
    let userAge=$("#txtAge").val();
    let userEmail=$("#txtEmail").val();
    let userAddress=$("txtAddress").val();
    let userPass=$("#txtPassword").val();
    let userPass2=$("#txtPassword2").val();
    let userPayment=$("#txtPaymentMethod").val();
    let userColor=$("#txtColor").val();
    let userPhone=$("#txtPhoneContact").val();

    //create the obj
    let newUser=new User(userFName,userLName,userAge,userEmail,userAddress,userPass,userPass2,userPayment,userColor,userPhone);
        
    //display the user on the console 
    console.log(userFName,userLName,userAge,userEmail,userAddress,userPass,userPass2,userPayment,userColor,userPhone);
}

function init(){//hide the userForm
    //hook events
    //show the userForm
    //$("newUser").on("click",funtion(){
        //$("#userForm")
    //})
    
}
window.onload=init;