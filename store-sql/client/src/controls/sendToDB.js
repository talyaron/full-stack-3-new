export function sendLogin(e) {
    e.preventDefault();

    const { username, password } = e.target.elements;

    const body = { username: username.value, password: password.value }
    const settings = {
        method: 'POST',
        body: JSON.stringify(body), // data can be `string` or {object}!
        headers: {
            'Content-Type': 'application/json'
        }
    }

    fetch('/user/login', settings)
        .then(res => {
            res.json().then(results => {
                console.dir(results)
            }).catch(err => {
                console.error(err);
            })
        })

}

export function sendRegister(e) {
    e.preventDefault();

    const { username, password, email } = e.target.elements;

    const body = { username: username.value, password: password.value, email: email.value }
    const settings = {
        method: 'POST',
        body: JSON.stringify(body), // data can be `string` or {object}!
        headers: {
            'Content-Type': 'application/json'
        }
    }

    fetch('/user/register', settings)
        .then(res => {
            res.json().then(results => {
                console.dir(results)
            }).catch(err => {
                console.error(err);
            })
        })
}

export function addItem(e){
    e.preventDefault();
    console.log(e.target.elements)
}