const submitMessage = () => {

    console.log("Submitting message...");
    const titleInput = document.querySelector("#listTitle");
    const descriptionInput = document.querySelector("#listDesciption");

    const titleValue = titleInput.value;
    const descriptionValue = descriptionInput.value;
    
    firebase.database().ref().push({
        message: messageValue,
        passcode: passcodeValue
    });
    
    passcodeInput.value = ''
    messageInput.value = ''
}
