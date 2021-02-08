import {performPurchase} from '../src/exercicios_1_2/function'

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