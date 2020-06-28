 const getStudents = () => {
            fetch('http://hp-api.herokuapp.com/api/characters/students')
                .then(response => response.json())
                .then(students => showStudents(students))
                .catch(error => console.log(error));

                const showStudents = (items) =>{
                	const listStudents = document.getElementById('students');
                	for(i = 0; i < 10; i++){
                		let p = document.createElement('p');
                		let div = document.createElement('div');
                		div.setAttribute('class', 'student');
                		let div_photo = document.createElement('div');
                		div_photo.setAttribute('class', 'photo');
                		let img = document.createElement('img');
                		img.setAttribute('src', `${items[i].image}`)
                		p.innerText = items[i].name;
                		listStudents.appendChild(div);
                		div.append(div_photo);
                		div_photo.appendChild(img);
                		div_photo.appendChild(p);
                	}
                }

        }
        getStudents();