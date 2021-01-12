Exercício 1

a) ALTER TABLE Actor DROP COLUMN salary; Essa query faz com que a coluna de salário seja excluída tabela.

b) ALTER TABLE Actor CHANGE gender sex VARCHAR(6); Essa query faz com que a coluna 'gender' agora se chame sex e seja do tipo varchar recebendo até 6 caracteres.

c) ALTER TABLE Actor CHANGE gender gender VARCHAR(255); Essa query faz com a coluna 'gender' mantenha seu nome, porém muda o tipo para varchar recebendo até 255 caracteres.

d) ALTER TABLE Actor CHANGE gender gender VARCHAR(100);

Exercício 2

a) Query: 

```sql
UPDATE Actor
SET 
	name = "Moacyr Franco",
	birth_date = "2020-02-10"
WHERE id = "003";
```

b) Queries: 

```sql
UPDATE Actor
SET name = "JULIANA PÃES"
WHERE name = "Juliana Paes";

UPDATE Actor
SET name = "Juliana Paes"
WHERE name = "JULIANA PÃES";
```

c) Query:

```sql
UPDATE Actor
SET 
		name = "Moacyr Franco",
		birth_date = "2020-02-10",
    salary = 600000,
    gender = "male"
WHERE id = "008"; 
```

O MySQL anuncia como sucesso, no entanto, nenhuma linha é modificada.

Exercício 3

a) Query:

```sql
DELETE FROM Actor WHERE name = "Fernanda Montenegro";
```


b) Query:


```sql
DELETE FROM Actor WHERE gender = "male" AND salary > 1000000;
```

Exercício 4

a) Query:

```sql
SELECT MAX(salary) from Actor;
```

b) Query:

```sql
SELECT MIN(salary) from Actor;
```

c) Query:

```sql
SELECT COUNT(*) FROM Actor WHERE gender = "female"
```

d) Query:

```sql
SELECT SUM(salary) FROM Actor;
```

Exercício 5

a) Query:

```sql
SELECT COUNT(*), gender
FROM Actor
GROUP BY gender;

```

A query recebe o número de atores por gênero e então os coloca em grupos de acordo com seu gênero.

b) Query:

```sql
SELECT COUNT(*), gender
FROM Actor
GROUP BY gender
```

c) Query:
```sql
SELECT *FROM Actor
ORDER BY salary;
```

d) Query:
```sql
SELECT * FROM Actor
ORDER BY salary DESC
LIMIT 3;
```

e) Query:

```sql
SELECT AVG(salary), gender FROM Actor
GROUP BY gender;

```

Exercício 6

a) Query:

```sql
ALTER TABLE Movie ADD playing_limit_date DATE;
```

b) Query:

```sql
ALTER TABLE Movie CHANGE rating rating FLOAT;
```

c) Queries:

```sql
UPDATE Movie
SET playing_limit_date = "2018-11-02"
WHERE id = "3";
```

```sql
UPDATE Movie
SET playing_limit_date = "2021-03-24"
WHERE id = "4";
```

d) Query:

```sql
DELETE FROM Movie WHERE id = "001"
```

O resultado foi sucesso, no entanto, nada aconteceu. Como a linha não existe, o MySQL roda, mas não altera nada.

Exercício 7

a) Query: 

```sql
SELECT COUNT(*) FROM Movie WHERE rating > 7.5;
```

Resposta: 3.

b) Query:

```sql
SELECT AVG(rating) FROM Movie;
```

Resposta: 8.666666666666666.

c) Query:

```sql
SELECT COUNT(*) FROM Movie WHERE playing_limit_date > CURDATE();
```

Resposta: 1.

d) Query:

```sql
SELECT COUNT(*) FROM Movie WHERE release_date > CURDATE();
```

Resposta: 0.

e) Query:

```sql
SELECT MAX(rating) FROM Movie;
```

Resposta: 10.

f) Query:

```sql
SELECT MIN(rating) FROM Movie;
```

Resposta: 7.


Exercício 8

a) Query:

```sql
SELECT * FROM Movie
ORDER BY title;
```

b) Query:

```sql
SELECT * FROM Movie
ORDER BY title
LIMIT 5;
```

c) Query:

```sql
SELECT * FROM Movie
WHERE playing_limit_date < CURDATE()
ORDER BY release_Date DESC
LIMIT 3;
```

d) Query:

```sql
SELECT * FROM Movie
ORDER BY rating DESC
LIMIT 3;
```