// Type

type Order = {
    productId: string;
    price: number
}

type User = {
    firstName: string;
    age: number;
    email: string;
    password: string;
    orders: Order[]
};

const user: User = {
    firstName: 'Jane',
    age: 21,
    email: 'J@pinto.com',
    password: '00000',
    orders: [{productId: "1", price: 200}]
}

const printLog = (message: string) => {}

printLog(user.password)

// unions

type Author = {
    books: string[]
}

const author: Author & User = {
    books: ['2'],
    firstName: 'Jane',
    age: 21,
    email: 'J@pinto.com',
    password: '00000',
    orders: [{productId: "1", price: 200}]
}


// Interfaces
interface UserInterface {
    readonly firstName: string;
    email: string;
}

const emailUser: UserInterface = {
    email: 'L@.com',
    firstName: 'Lidia'
}

interface AuthorInterface {
    books: string[]
}

 const newAuthor: UserInterface & AuthorInterface = {
     email: 'L@.com',
    firstName: 'Lidia',
    books: []
 }