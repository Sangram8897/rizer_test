const Strings = {
    str_App_name: 'APP_NAME',
  
    //Auth Messages
 
    str_sign_up: 'Sign Up',
    str_sign_in: 'Sign In',
    str_email: 'Email',
    str_institute_url: 'Institute URL',
    str_password: 'Password',
   
    //validator
    
    email_validator_string: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    number_validator_string: /^[0]?[789]\d{9}$/,
    alphabet_validator_string: /^[a-zA-Z]*$/,
    password_validator_string: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
    
  };
  export default Strings;