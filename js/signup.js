const apiBaseUrl = "http://localhost:3001/api/v1/user";
const form = document.querySelector("form");
form.addEventListener('submit', handleSignup);

function handleSignup(event) {
    event.preventDefault();
    console.log('seeeeeingngngnngn')
    const data = {
        // firstname : document.querySelector("input[id='firstname']").value,
        // lastname : document.querySelector("input[id='lastname']").value,
        // othername : document.querySelector("input[id='othername']").value,
        email: document.querySelector("input[id='email']").value,
        // phone : document.querySelector("input[id='phone']").value,
        password: document.querySelector("input[id='password']").value,
        // ["password-repeat"] : document.querySelector("input[id='password-repeat']").value
    };
    signUp(data);
}

const signUp = async (formData) => {
    try {
        const response = await fetch(`${apiBaseUrl}/signup`, {
            method: 'post',
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const data = await response.json();
        console.log(data)

        if (data.signedUpUser) {
            alert("Sign Up successful");
            window.location = "./login.html";
        } else alert(data.error);
    } catch (e) {
        //console.log(e);
        alert(e);
    }
};