function displayUsers(usersArray){
    console.log(usersArray);
}

function init(){
    console.log("Listing users");
    let users=readUsers();//from the storemanager
    displayUsers(users);
}
window.onload=init;