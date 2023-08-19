function addUser() {
    const nameInput = document.getElementById('name');
    const ageInput = document.getElementById('age');
    const genderInput = document.getElementById('gender');

    const name = nameInput.value;
    const age = parseInt(ageInput.value);
    const gender = genderInput.value;

    if (name && !isNaN(age) && gender) {
        const table = document.getElementById('userTable');
        const newRow = table.insertRow(table.rows.length);
        const nameCell = newRow.insertCell(0);
        const ageCell = newRow.insertCell(1);
        const genderCell = newRow.insertCell(2);

        nameCell.textContent = name;
        ageCell.textContent = age;
        genderCell.textContent = gender;

        nameInput.value = '';
        ageInput.value = '';
        genderInput.selectedIndex = 0;
    } else {
        alert('Please fill out all fields correctly.');
    }
}
