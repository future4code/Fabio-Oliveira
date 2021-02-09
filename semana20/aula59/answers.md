### Exercício 1

### a)

```typescript
export interface Character {
    name: string;
    life: number;
    strength: number;
    defense: number;
  }
```

### b)

```typescript
import {Character} from './character'

export const validateCharacter = (input: Character): boolean => {
    if (
      !input.name ||
          input.life === undefined || 
      input.strength === undefined ||
      input.defense === undefined
    ) {
      return false;
    }
  
    if (input.life <=0 || input.strength <=0 || input.defense <=0) {
      return false;
    }
  
    return true;
  };
```

### Exercício 2

### a)

```typescript
test("Should return false for empty name", () => {
    const result = validateCharacter({
      name: "",
      life: 1500,
      strength: 300,
      defense: 500,
    });

    expect(result).toBe(false);
  });
```

### b)

```typescript
test("Should return false for 0 life", () => {
    const result = validateCharacter({
      name: "Lucas Penteado",
      life: 0,
      strength: 300,
      defense: 500,
    });

    expect(result).toBe(false);
  });
```

### c)

```typescript
test("Should return false for 0 strength", () => {
    const result = validateCharacter({
      name: "Lucas Penteado",
      life: 1500,
      strength: 0,
      defense: 500,
    });

    expect(result).toBe(false);
  });
```

### d)

```typescript
 test("Should return false for 0 defense", () => {
    const result = validateCharacter({
      name: "Lucas Penteado",
      life: 1500,
      strength: 300,
      defense: 0,
    });

    expect(result).toBe(false);
  });
```

### e)

```typescript
test("Should return false for negative attribute", () => {
    const result = validateCharacter({
      name: "Lucas Penteado",
      life: -100,
      strength: 300,
      defense: 500,
    });

    expect(result).toBe(false);
  });
```

### f)

```typescript
 test("Should return true for all valid inputs", () => {
    const result = validateCharacter({
      name: "Lucas Penteado",
      life: 1500,
      strength: 300,
      defense: 500,
    });

    expect(result).toBe(true);
  });
```

### Exercício 3

### a)

```typescript
export const performAttack = (attacker: Character, defender: Character) => {
    if (!validateCharacter(attacker) || !validateCharacter(defender)) {
      throw new Error("Invalid character");
    }
  
    if (attacker.strength > defender.defense) {
      defender.life -= attacker.strength - defender.defense;
    }
  };
```

### b)

```typescript
export const performAttack = (
    attacker: Character,
    defender: Character,
    validator: (input: Character) => boolean
  ) => {
    if (!validator(attacker) || !validator(defender)) {
      throw new Error("Invalid character");
    }
  
    if (attacker.strength > defender.defense) {
      defender.life -= attacker.strength - defender.defense;
    }
  };
```

### Exercício 4

### a) Validate character, pois os ataques necessitam de um personagem.

### b)

```typescript
test("Creating Mocks", () => {
    const validatorMock = jest.fn(() => {
			return true
		});
});
```

### c)

```typescript
test("Creating Mocks", () => {
    const validatorMock = jest.fn(() => {
			return false
		});
});
```

### Exercício 5

### a)

```typescript
test("Should perform attack", () => {
    const validatorMock = jest.fn(() => {
      return true;
    });

    const attacker: Character = {
      name: "Lucas Penteado",
      life: 1500,
      defense: 200,
      strength: 600,
    };

    const defender: Character = {
      name: "Jaque Patomba",
      life: 1500,
      defense: 400,
      strength: 800,
    };

    performAttack(attacker, defender, validatorMock as any);

    expect(defender.life).toEqual(1300);
    expect(validatorMock).toHaveBeenCalled();
    expect(validatorMock).toHaveBeenCalledTimes(2);
    expect(validatorMock).toHaveReturnedTimes(2);
  });
```

### b)

```typescript
test("Should return invalid character error", () => {
    expect.assertions(4);
    const validatorMock = jest.fn(() => {
      return false;
    });

    const attacker: Character = {
      name: "Scorpion",
      life: 1500,
      defense: 200,
      strength: 600,
    };

    const defender: Character = {
      name: "Kitana",
      life: 1500,
      defense: 400,
      strength: 800,
    };

    try {
      performAttack(attacker, defender, validatorMock as any);
    } catch (err) {
      expect(err.message).toBe("Invalid character");
      expect(validatorMock).toHaveBeenCalled();
      expect(validatorMock).toHaveBeenCalledTimes(1);
      expect(validatorMock).toHaveReturnedTimes(1);
    }
  });
```

### Exercício 6

```typescript
test("Should get attack blocked", () => {
    const validatorMock = jest.fn(() => {
      return true;
    });

    const attacker: Character = {
      name: "Jaque Patomba",
      life: 1500,
      defense: 200,
      strength: 300,
    };

    const defender: Character = {
      name: "Lucas Penteado",
      life: 1500,
      defense: 400,
      strength: 800,
    };

    performAttack(attacker, defender, validatorMock as any);

    expect(defender.life).toEqual(1500);
    expect(validatorMock).toHaveBeenCalled();
    expect(validatorMock).toHaveBeenCalledTimes(2);
    expect(validatorMock).toHaveReturnedTimes(2);
  });
```

```typescript
test("Should be knocked out", () => {
    const validatorMock = jest.fn(() => {
      return true;
    });

    const attacker: Character = {
      name: "Lucas Penteado",
      life: 1500,
      defense: 200,
      strength: 5300,
    };

    const defender: Character = {
      name: "Jaque Patomba",
      life: 1500,
      defense: 400,
      strength: 800,
    };

    performAttack(attacker, defender, validatorMock as any);

    expect(defender.life).toEqual(-3400);
    expect(validatorMock).toHaveBeenCalled();
    expect(validatorMock).toHaveBeenCalledTimes(2);
    expect(validatorMock).toHaveReturnedTimes(2);
  });
```