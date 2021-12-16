export let movies = [
    {
        id : 0,
        name : "Star Wars - The new one",
        score : 5
    },
    {
        id : 1,
        name : "델마와 루이스",
        score : 10
    },
    {
        id : 2,
        name : "Soul",
        score : 9
    },
    {
        id : 3,
        name : "테넷",
        score : 7
    },
    {
        id : 4,
        name : "빅쇼트",
        score : 8
    }
];

export const getMovies = () => movies;


export const getById = id => {
    const filteredMovies = movies.filter(movie => movie.id === id);
    return filteredMovies[0]; // id는 PK, 1개만 존재하므로 배열받은 값의 0번 인덱스 반환
}


export const deleteMovie = (id) => {
    const cleanedMovies = movies.filter(movie => movie.id !== id);
    if (movies.length > cleanedMovies.length) {
        movies = cleanedMovies;
        return true;
    } else {
        return false;
    }
};


export const addMovie = (name, score) => {
    const newMovie = {
        id: `${movies.length}`,
        name,
        score
    };
    movies.push(newMovie);
    return newMovie;
}