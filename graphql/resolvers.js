import { getMovies , getById, addMovie, deleteMovie } from "./db";

const resolvers = {
    Query: {
        movies: () => getMovies(),
        // 인자로 이전 resolver에게 받은 값 = root, args 중 id ( 인자 2개 )
        movie: (_, { id }) => getById(id)
    },
    Mutation: {
        addMovie: (_, { name , score }) => addMovie(name, score),
        deleteMovie: (_, { id }) => deleteMovie(id)
    }
};

export default resolvers;