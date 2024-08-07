const user = {id:1, name:"Imran", job: "Programmer"};
//java script object notation = (JSON)
const stringified = JSON.stringify(user);

//console.log(user);// { id: 1, name: 'Imran', job: 'Programmer' }
//console.log(stringified);//{"id":1,"name":"Imran","job":"Programmer"}

const shop  = {
    owner : 'Alia',
    address : {
        street : 'kochukhet',
        city : 'Dhaka'
    },
    products : ['laptop', 'mic', 'monitor', 'keyboard'],
    revenue : 45000,
    isOpen : true
}

console.log(shop);
