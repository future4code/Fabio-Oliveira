import {Casino, Client, Result, LOCATION, ResultItem, NACIONALITY} from './user'

export function verify(casino: Casino, clients: Client[]): Result {
    const allowed: Client[] = [];
    const unallowed: Client[] = []

    for (const client of clients) {
        if (casino.location === LOCATION.EUA) {
            if (client.age >= 21) {
                allowed.push(client);
            } else {
                unallowed.push(client);
            }
        } else if (casino.location === LOCATION.BRAZIL) {
            if (client.age >= 18) {
                allowed.push(client);
            } else {
                unallowed.push(client);
            }
            break;
        }
    }

    const brazilians: ResultItem = {
        allowed: allowed
            .filter((client) => client.nacionality === NACIONALITY.BRAZILIAN)
        .map((client) => client.name),
        unallowed: unallowed
            .filter((client) => client.nacionality === NACIONALITY.BRAZILIAN)
            .map((client) => client.name),
        };

        const americans: ResultItem = {
        allowed: allowed
        .filter((client) => client.nacionality === NACIONALITY.AMERICAN)
        .map((client) => client.name),
        unallowed: unallowed
            .filter((client) => client.nacionality === NACIONALITY.AMERICAN)
            .map((client) => client.name),
        }

    return{brazilians, americans}
    }