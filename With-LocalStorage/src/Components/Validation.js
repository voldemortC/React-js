import Swal from 'sweetalert2';

function error(message){
	Swal.fire({
		icon: "error",
		title:"Error",
		text: message,
	})
	
}

const formValidation = (data) => {
    if(data.uname == ""){
        error("Username should not be empty!!");
        return false
    }else{
        let specialCharacter = '@~#~$~&~%~!~|~;~:~`~,~.~[~]~/~=~+~-~_~)~(~*~^'.split("~");
        if(specialCharacter.includes(data.uname) == true){
            error("Special characters are not allowed!!");
            return false;
        }
        if(/[A-Z\s]+/.test(data.uname) == true){
            error ("Capital Letters and spaces are not allowed!!");
            return false;
        }
    }
    if(data.pnum == ""){
        error("Phone number should not be empty!!");
        return false;
    }else{
        if(data.pnum.length < 10) {
            error("Phone number must contain 10 digits!!");
            return false
        }
    }
    if(data.email == ""){
        error("Email address can't be empty!!");
        return false
    }else{
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(re.test(data.email) == false){
            error("Please enter a valid email address!!");
            return false
        }
    }
    if(data.skills.length < 2){
        error("Please selected at least 2 options!!");
        return false
    }
    
    if(data.experienceTo == "" || data.experienceFrom == ""){
        error("Both 'From' and 'To' cannot be empty!!");
        return false;
    }else{
        if(data.experienceFrom <= data.experienceTo) {
            error("Experience To can't be less than or equal to Experience From!!");
            return false
        }
    }
    if(data.description == ""){
        error("Description can't be empty!!");
        return false
    }
    return (true);
}

export default formValidation;