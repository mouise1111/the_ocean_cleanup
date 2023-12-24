function validation(values){

    let error = {}
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/

    if(values.username ==="") {
        error.username = "Name should not be empty"
        }
    
    else {
        error.username = ""
    }
    
    if(values.email ==="") {
    error.username = "Name should not be empty"
    }

    else if(!email_pattern.test(values.email)) { 
        error.email = "This is not a valid email"
    }
    else {
    error.email = ""
    }
    if (values.password ==="") {
    error.password = "Password should not be empty"
    }

    else if(!password_pattern.test(values.password)) {
    error.password="Please use at least one uppercase letter, one lowercase letter and one number"
    } 
    
    else {
        error.password = ""
    }
   return error
}

export default validation;