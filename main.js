    document.getElementById('regForm').addEventListener('submit', function(event) {
        event.preventDefault();

        if (username && password) {
            window.location.href = '2.html';
        } else {
            const messageDiv = document.getElementById('message');
            messageDiv.innerHTML = 'Будь ласка, заповніть усі поля!';
        }
    });