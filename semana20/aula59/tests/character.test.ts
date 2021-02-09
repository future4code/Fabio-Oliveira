import { Character } from "../src/character";
import { performAttack, validateCharacter } from "../src/validator";

test("Should return false for empty name", () => {
    const result = validateCharacter({
      name: "",
      life: 1500,
      strength: 300,
      defense: 500,
    });

    expect(result).toBe(false);
  });

  test("Should return false for 0 life", () => {
    const result = validateCharacter({
      name: "Lucas Penteado",
      life: 0,
      strength: 300,
      defense: 500,
    });

    expect(result).toBe(false);
  });

  test("Should return false for 0 strength", () => {
    const result = validateCharacter({
      name: "Lucas Penteado",
      life: 1500,
      strength: 0,
      defense: 500,
    });

    expect(result).toBe(false);
  });

  test("Should return false for 0 defense", () => {
    const result = validateCharacter({
      name: "Lucas Penteado",
      life: 1500,
      strength: 300,
      defense: 0,
    });

    expect(result).toBe(false);
  });

  test("Should return false for negative attribute", () => {
    const result = validateCharacter({
      name: "Lucas Penteado",
      life: -100,
      strength: 300,
      defense: 500,
    });

    expect(result).toBe(false);
  });

  test("Should return true for all valid inputs", () => {
    const result = validateCharacter({
      name: "Lucas Penteado",
      life: 1500,
      strength: 300,
      defense: 500,
    });

    expect(result).toBe(true);
  });

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

  test("Should return invalid character error", () => {
    expect.assertions(4);
    const validatorMock = jest.fn(() => {
      return false;
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

    try {
      performAttack(attacker, defender, validatorMock as any);
    } catch (err) {
      expect(err.message).toBe("Invalid character");
      expect(validatorMock).toHaveBeenCalled();
      expect(validatorMock).toHaveBeenCalledTimes(1);
      expect(validatorMock).toHaveReturnedTimes(1);
    }
  });

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