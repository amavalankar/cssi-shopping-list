const getMessages = () => {
    const messageRef = firebase.database().ref();
    messageRef.on('value', (snapshot) => {
        const data = snapshot.val();
        // console.log(data);

        const passcodeAttempt = document.querySelector("#passcode").value;
        let matchFound = false;

        for (const recordKey in data) {
            // console.log(record);
            // console.log(data[record]);

            const record = data[recordKey]
            const storedPasscode = record.passcode;


            if(passcodeAttempt === storedPasscode) {
                console.log(`Message is: ${record.message}`);
                renderMessageAsHTML(record.message);
                matchFound = true;
            }
        }

        if(!matchFound) {
            console.log("No message match found!");
            renderMessageAsHTML("No message found!");
        } else {
            matchFound = false;
        }

        
    });
}

const renderMessageAsHTML = (message) => {
    const passCodeInput = document.querySelector("#passcode");
    passCodeInput.value = "";

    const messageDisplay = document.querySelector("#message");
    messageDisplay.innerHTML = message;
}