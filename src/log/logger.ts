import * as dotenv from 'dotenv';
dotenv.config();

export function getdatetime() {
    const today = new Date();
    const date = today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
    const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    return date + " " + time;
}

export function logger(message) {
    console.log(`[GRAPHQL] - PORT :: ${process.env.PORT}  [ ${ getdatetime() } ]  LOG  ${message}`);
}

export const QUERY = "Query called ::";
export const MUTATION = "Mutation called ::";
export const FUNCTION = "Function called ::";
export const DATABASEQUERY = "Database Query called ::";