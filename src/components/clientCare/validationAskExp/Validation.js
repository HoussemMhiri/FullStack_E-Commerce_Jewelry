const validateEmail = ({ email, setEmailError }) => {
  return email && !email.includes("@gmail.com")
    ? setEmailError("Email not valid")
    : setEmailError("");
};

const validatePhone = ({ phone, setPhoneError }) => {
  const phoneRegExp = /^\d{8}$/;
  return phone && !phone.match(phoneRegExp)
    ? setPhoneError("Phone Number is not valid")
    : setPhoneError("");
};

const validateFullName = ({ fullName, setFullNameError }) => {
  return fullName && fullName.length < 5
    ? setFullNameError("Full name is too short")
    : fullName && fullName.length > 50
    ? setFullNameError("Try to make is shorter")
    : setFullNameError("");
};

const validateMessage = ({ message, setMessageError }) => {
  return message && message.length < 5
    ? setMessageError("Message is too short")
    : message && message.length > 300
    ? setMessageError("Try to make is shorter and meaningful")
    : setMessageError("");
};

export { validateEmail, validateFullName, validateMessage, validatePhone };
