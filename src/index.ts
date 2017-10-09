function greeter(person: string) {
    return "Hello, " + person;
}

let user: string = "typescript!";

document.body.innerHTML = greeter(user);