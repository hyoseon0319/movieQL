export const people = [
    {
        id : 0,
        name : "Hyosun",
        age : 26,
        gender : "female"
    },
    {
        id : 1,
        name : "Hyosuk",
        age : 25,
        gender : "female"
    },
    {
        id : 2,
        name : "Hyosub",
        age : 27,
        gender : "male"
    },
    {
        id : 3,
        name : "Hyosue",
        age : 28,
        gender : "female"
    },
    {
        id : 4,
        name : "Hyosua",
        age : 29,
        gender : "male"
    }
];



export const getById = id => {
    const filteredPeople = movies.filter(person => people.id === id);
    return filteredPeople[0];
}