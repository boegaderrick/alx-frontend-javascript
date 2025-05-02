interface student {
    firstName: string,
    lastName: string,
    location: string,
    age: number,
}

const student1: student = {
    firstName: 'Jane',
    lastName: 'Doe',
    location: 'Here',
    age: 20,
};

const student2: student = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'There',
    age: 21,
};

const studentsList: Array<student> = [ student1, student2 ];

const table = document.createElement('table');

table.innerHTML += `<tr>
						<th>First Name</th>
						<th>Location</th>
					</tr>`

studentsList.forEach((student) => {
	table.innerHTML += `<tr>
							<td>${student.firstName}</td>
							<td>${student.location}</td>
						</tr>`
})

document.body.appendChild(table);