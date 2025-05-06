document.getElementById('registrationForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = {
        name: document.getElementById('name').value,
        rollnumber: parseInt(document.getElementById('rollnumber').value),
        age: parseInt(document.getElementById('age').value),
        gender: document.getElementById('gender').value
    };

    try {
        const response = await fetch('/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        const data = await response.json();

        if (data.status === 'success') {
            alert('Registration successful!');
            document.getElementById('registrationForm').reset();
        } else {
            alert('Registration failed!');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Registration failed!');
    }
});