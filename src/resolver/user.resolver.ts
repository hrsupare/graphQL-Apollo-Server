import { QUERY, logger } from "../log/logger"

export async function getAllUser(parent, args, contextValue) {
    logger(`${QUERY} getAllUser`)

    return [{
        "id": 1,
        "first_name": "Kariotta",
        "last_name": "Veal",
        "email": "kveal0@senate.gov",
        "gender": "Female"
    }, {
        "id": 2,
        "first_name": "Markus",
        "last_name": "Shanks",
        "email": "mshanks1@istockphoto.com",
        "gender": "Male"
    }, {
        "id": 3,
        "first_name": "Moises",
        "last_name": "Volage",
        "email": "mvolage2@so-net.ne.jp",
        "gender": "Male"
    }, {
        "id": 4,
        "first_name": "Maxine",
        "last_name": "Mulvany",
        "email": "mmulvany3@businessweek.com",
        "gender": "Female"
    }, {
        "id": 5,
        "first_name": "Mackenzie",
        "last_name": "MacLeese",
        "email": "mmacleese4@google.cn",
        "gender": "Male"
    },]
}


export async function createUser(parent, args, contextValue) {

}