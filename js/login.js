const apiBaseUrl = "http://localhost:3001/api/v1/user";

const form = document.querySelector("form");
form.addEventListener('submit', handleLogin);

function handleLogin(event) {
    event.preventDefault();
    const email = document.querySelector("input[type='email']").value;
    const password = document.querySelector("input[type='password']").value;
    login(email, password);
}

const login = async (email, password) => {
    try {
        const response = await fetch(`${apiBaseUrl}/login`, {
            method: 'post',
            body: JSON.stringify({ email, password }),
            headers: {
                'Content-Type': 'application/json',
            }
        });

        const token = response.headers.get('x-auth-token');
        if (token) {
            localStorage.setItem('token', token);
            alert("Login successful");
            window.location = "./mydashboard.html";
        } else alert(data.error);
    } catch (e) {
        alert(e.error);
    }

}
