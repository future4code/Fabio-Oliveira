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

    return {
        brazilians: {
          allowed: allowed
            .filter((client) => client.nacionality === NACIONALITY.BRAZILIAN)
            .map((client) => client.name),
          unallowed: unallowed
            .filter((client) => client.nacionality === NACIONALITY.BRAZILIAN)
            .map((client) => client.name),
        },
        americans: {
          allowed: allowed
            .filter((client) => client.nacionality === NACIONALITY.AMERICAN)
            .map((client) => client.name),
          unallowed: unallowed
            .filter((client) => client.nacionality === NACIONALITY.AMERICAN)
            .map((client) => client.name),
        },
      };
    }