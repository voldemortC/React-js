function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
const formValidations = (state) => {
    if(state.uname == ""){
        alert("Username should not be empty!");
        return false
    }else{
        let specialCharacter = '@~#~$~&~%~!~|~;~:~`~,~.~[~]~/~=~+~-~_~)~(~*~^'.split("~");
        if(specialCharacter.includes(state.uname) == true){
            alert("Special characters are not allowed!");
            return false;
        }
        if(/[A-Z\s]+/.test(state.uname) == true){
            alert ("Capital Letters and spaces are not allowed!");
            return false;
        }
    }
    if(state.pnum == ""){
        alert("Phone number should not be empty!");
        return false;
    }else{
        if(state.pnum.length < 10) {
            alert("Phone number must contain 10 digits!");
            return false
        }
    }
    if(state.email == ""){
        alert("Email address can't be empty!");
        return false
    }else{
        if(validateEmail(state.email) == false){
            alert("Please enter a valid email address!");
            return false
        }
    }
    if(state.skills.length < 2){
        alert("Please selected at least 2 options!");
        return false
    }
    
    if(state.experienceTo == "" || state.experienceFrom == ""){
        alert("Both 'From' and 'To' cannot be empty!");
        return false;
    }else{
        if(state.experienceTo <= state.experienceFrom) {
            alert("Experience To can't be less than or equal to Experience From!");
            return false
        }
    }
    if(state.description == ""){
        alert("Description can't be empty!");
        return false
    }
    return (true);
}

export default formValidations