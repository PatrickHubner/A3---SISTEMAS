async function autenticar() {
    const response = await fetch('http://137.184.108.252:5000/api/login', { 
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            email: "workpatrickhubner@gmail.com",
            password: "Q1aeE5XzL0qi"
        })
    });

    if (response.ok) { 
        const { token } = await response.json();
        console.log('Token recebido:', token);
    }
}

async function cidades() {
    const city = await fetch('http://137.184.108.252:5000/api/cidades', { 
        method: 'GET',
        headers: { 
            'Content-Type': 'application/json',
            'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjo4MCwiZXhwIjoxNzI4ODUxNzg5fQ.C5iVeP98vZquvSuJqZh9gkz-LMUUPQFsvY4K03EUcpU' 
        },
    });

    if (city.ok) { 
        const cidades = await city.json();
        const resultado = cidades.map(cidade => ({
            id: cidade.id,
            nome: cidade.nome
        }));
     resultado.forEach((cidade, index) => {
            if (index < 5) {
            document.querySelector(`#id${index + 1}`).innerHTML = cidade.id; 
            document.querySelector(`#nome${index + 1}`).innerHTML = cidade.nome;
           }
        });
     
        console.log('Cidades:', resultado);
    }
}

autenticar();
cidades();