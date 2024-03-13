interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'John',
  lastName: 'Doe',
  age: 23,
  location: 'Ibadan',
};

const student2: Student = {
  firstName: 'Jane',
  lastName: 'Doe',
  age: 22,
  location: 'Lagos',
};

const studentsList: Student[] = [student1, student2];

// ========================
// == VANILLA JS SECTION ==
// ========================
const table = document.createElement('table');
const tbody = document.createElement('tbody');
table.appendChild(tbody);
const theader = document.createElement('thead');
const nameHeader = document.createElement('td');
const locHeader = document.createElement('td');
nameHeader.textContent = 'First Name';
locHeader.textContent = 'Location';
nameHeader.style.borderBottom = '1px solid';
locHeader.style.borderBottom = '1px solid';
theader.appendChild(nameHeader);
theader.appendChild(locHeader);
table.appendChild(theader);

studentsList.forEach((student) => {
  const row = document.createElement('tr');
  const nameField = document.createElement('td');
  const locField = document.createElement('td');

  nameField.textContent = student.firstName;
  locField.textContent = student.location;

  row.appendChild(nameField);
  row.appendChild(locField);
  tbody.appendChild(row);
});

document.body.appendChild(table);
