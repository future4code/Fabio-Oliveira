import {performPurchase} from '../src/exercicios_1_2/function'
import {verify} from '../src/exercicio 3/function'
import{Client, NACIONALITY, Casino, LOCATION} from '../src/exercicio 3/user'

test("Testing balance greater than value", () => {
    const user: User= {
		name: "Sanji",
		balance: 200
	}


const result = performPurchase(user, 50)

expect(result).toEqual({
    ...user,
    balance: 150
})

})

test("Testing balance with the same value", () => {
	const user: User = {
		name: "Sanji",
		balance: 50
	}

	const result = performPurchase(user, 50)
	
	expect(result).toEqual({
		...user,
		balance: 0
	})
})

test("Testing balance smaller than value", () => {
	const user: User = {
		name: "Sanji",
		balance: 10
	}

	const result = performPurchase(user, 50)
	
	expect(result).toEqual(undefined)
})

test("1 brazilian allowed", () => {
    const brazilian: Client = {
      name: "Lucas Penteado",
      age: 19,
      nacionality: NACIONALITY.BRAZILIAN
    };

    const casino: Casino = {
      name: "Balada Estelar",
      location: LOCATION.BRAZIL,
    };

    const result = verify(casino, [brazilian]);
    expect(result.brazilians.allowed).toEqual(["Lucas Penteado"]);
  });

  test("1 american allowed", () => {
    const american: Client = {
      name: "Luke Hairstyle",
      age: 19,
      nacionality: NACIONALITY.AMERICAN,
    };

    const casino: Casino = {
      name: "Balada Estelar",
      location: LOCATION.BRAZIL,
    };

    const result = verify(casino, [american]);
    expect(result.americans.allowed).toEqual(["Luke Hairstyle"]);
  });

  test("No one allowed", () => {
    const brazilian: Client = {
      name: "Lucas Penteado",
      age: 19,
      nacionality: NACIONALITY.BRAZILIAN,
    };

    const american: Client = {
      name: "Luke Hairstyle",
      age: 19,
      nacionality: NACIONALITY.AMERICAN,
    };

    const casino: Casino = {
      name: "Balada Estelar",
      location: LOCATION.EUA,
    };

    const result = verify(casino, [
      brazilian,
      brazilian,
      american,
      american,
    ]);
    expect(result.brazilians.unallowed).toEqual(["Lucas Penteado", "Lucas Penteado"]);
    expect(result.americans.unallowed).toEqual([
      "Luke Hairstyle",
      "Luke Hairstyle",
    ]);
  });

  test("2 american allowed and 2 brazilians unallowed", () => {
    const brazilian: Client = {
      name: "Lucas Penteado",
      age: 19,
      nacionality: NACIONALITY.BRAZILIAN,
    };

    const american: Client = {
      name: "Luke Hairstyle",
      age: 21,
      nacionality: NACIONALITY.AMERICAN,
    };

    const casino: Casino = {
      name: "Balada Estelar",
      location: LOCATION.EUA,
    };

    const result = verify(casino, [
      brazilian,
      brazilian,
      american,
      american,
    ]);
    expect(result.brazilians.unallowed).toEqual(["Lucas Penteado", "Lucas Penteado"]);
    expect(result.americans.allowed).toEqual(["Luke Hairstyle", "Luke Hairstyle"]);
  });

  test("1 brazilian allowed", () => {
    const brazilian: Client = {
      name: "Lucas Penteado",
      age: 19,
      nacionality: NACIONALITY.BRAZILIAN,
    };

    const casino: Casino = {
      name: "Balada Estelar",
      location: LOCATION.BRAZIL,
    };

    const result = verify(casino, [brazilian]);
    expect(result.brazilians.allowed.length).toBeGreaterThan(0);
    expect(result.brazilians.allowed.length).toBeLessThan(2);
  });

  test("1 american allowed", () => {
    const brazilian:Client = {
      name: "Astrodev",
      age: 19,
      nacionality: NACIONALITY.AMERICAN,
    };

    const casino: Casino = {
      name: "Balada Estelar",
      location: LOCATION.BRAZIL,
    };

    const result = verify(casino, [brazilian]);
    expect(result.americans.unallowed.length).toBe(0);
  });

  test("No one allowed", () => {
    const brazilian: Client = {
      name: "Lucas Penteado",
      age: 19,
      nacionality: NACIONALITY.BRAZILIAN,
    };

    const american: Client = {
      name: "Luke Hairstyle",
      age: 19,
      nacionality: NACIONALITY.AMERICAN,
    };

    const casino: Casino = {
      name: "Balada Estelar",
      location: LOCATION.EUA,
    };

    const result = verify(casino, [
      brazilian,
      brazilian,
      american,
      american,
    ]);

    expect(result.brazilians.unallowed).toContain("Lucas Penteado");
    expect(result.americans.unallowed).toContain("Luke Hairstyle");
  });

  test("2 american allowed and 2 brazilians unallowed", () => {
    const brazilian: Client = {
      name: "Lucas Penteado",
      age: 19,
      nacionality: NACIONALITY.BRAZILIAN,
    };

    const american: Client = {
      name: "Luke Hairstyle",
      age: 21,
      nacionality: NACIONALITY.AMERICAN,
    };

    const casino: Casino = {
      name: "Balada Estelar",
      location: LOCATION.EUA,
    };

    const result = verify(casino, [
      brazilian,
      brazilian,
      american,
      american,
    ]);
    expect(result.brazilians.unallowed.length).toBeGreaterThan(1);
    expect(result.americans.unallowed.length).toBeLessThan(1);
    expect(result.americans.allowed.length).toBe(2);
  });

  