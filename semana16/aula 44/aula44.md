Exercício 1

a) 
Varchar(n) - Recebe strings de no máximo n caracteres
Date - Recebe uma data.

b) SHOW DATABASES - Mostra os databases existentes na workbench.
SHOW TABLES - Mostra as tabelas existentes na workbench.

c) O comando DESCRIBE Actor mostra os detalhes da tabela. O tipo de método utilizado, se aceita null ou não e a chave primária.

Exercício 2

a) Query:

```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES (
    "002", 
    "Glória Pires", 
    1200000, 
    "1963-10-23", 
    "female"
);
```

b) Error Code: 1062. Duplicate entry '002' for key 'PRIMARY'. O erro acusa uma entrada dupla da chave primária. Ou seja, ele não permite que duas chaves primárias iguais sejam inseridas no banco de dados.

c) Error Code: 1136. Column count doesn't match value count at row 1. O erro acusa que a coluna não é compatível com o valor da linha 1.

d) Error Code: 1364. Field 'name' doesn't have a default value. O erro acusa que o campo 'name' não tem um valor padrão. Além disso, 'name' não aceita valores nulos devido a configuração do mesmo.

e) Error Code: 1292. Incorrect date value: '1950' for column 'birth_date' at row 1. O erro acusa na coluna de birth_date pois, ao estar sem as aspas, o programa entende que é um cálculo.

f) Queries:

```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES (
 "006", 
  "Rafael Portugal",
  100000,
  "1985-02-15", 
  "male"
);
```

```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES (
 "007", 
  "Tata Werneck",
  450000,
  "1983-08-11", 
  "female"

);

```

Exercício 3

a) Query:

```
SELECT * FROM Actor 
WHERE gender = "female";
```

b) Query:

```
SELECT salary FROM Actor 
WHERE name = "Tony Ramos";
```

c) Ele retorna vazio, pois não tem nenhum gênero "invalid".

d) Query:

```
SELECT id, name, salary FROM Actor 
WHERE salary <= 500000;
```

e) Error Code: 1054. Unknown column 'nome' in 'field list'. O erro informe que desconhece a coluna 'nome'. Isso acontece pois o nome da coluna na verdade é 'name' e não 'nome'.

Exercício 4

a) Essa query pega todas as informações da tabela ator cujos nomes comecem com as letras A ou J e tenham salário maior que R$300.000

b) Query:

```
SELECT * FROM Actor
WHERE name NOT LIKE "A%" AND salary > 350000;
```

c) Query: 

```
SELECT * FROM Actor
WHERE name LIKE "%G%" OR name LIKE "%g%";
```

d) Query:

```
SELECT * FROM Actor
WHERE LOWER(name) LIKE LOWER("%A%") 
OR LOWER(name) LIKE LOWER("%G%")
AND salary BETWEEN 35000000 AND 90000000;
```


Exercício 5

a) Text não precisa requer um limitador, pois já é esperado dele um grande conteúdo. O text também é armazenado em áreas de armazenamento de blob, enquanto o varchar tentará armazenar diretamente nas linhas.

b) Query: 

```
INSERT INTO Movie (id, title, synopsis, release_date, rating)
VALUES (
    "001",
    "Se Eu Fosse Você",
    "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
    "2006-01-06",
    7
);
```

c) Query:

```
INSERT INTO Movie (id, title, synopsis, release_date, rating)
VALUES (
    "002",
    "Doce de Mãe",
    "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
    "2012-12-27",
    10
);
```

d) Query:

```
INSERT INTO Movie (id, title, synopsis, release_date, rating)
VALUES (
    "003",
    "Dona Flor e Seus Dois Maridos",
    "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
    "2017-11-02",
    8
);
```

e) Query:

```
Insert INTO Movie (id, title, synopsis, release_Date, rating)
VALUES (
004,
"Tropa de Elite",
"Em Tropa de Elite, o dia-a-dia do grupo de policiais e de um capitão do BOPE (Wagner Moura), que quer deixar a corporação e tenta encontrar um substituto para seu posto. Paralelamente dois amigos de infância se tornam policiais e se destacam pela honestidade e honra ao realizar suas funções, se indignando com a corrupção existente no batalhão em que atuam.",
"2007-10-05",
8
);
```

Exercício 6

a) Query: 

```
SELECT id, title, rating FROM Movie WHERE id = "004";
```

b) Query:

```
SELECT * FROM Movie WHERE name = "Tropa de Elite";
```

c) Query:

```
SELECT id, title, synopsis FROM Movie WHERE rating >= 7;
```

Exercício 7

a) Query:

```
SELECT * FROM Movie
WHERE title LIKE "%vida%";
```

b) Query:

```
SELECT * FROM Movie
WHERE title LIKE "%Tropa%" OR
      synopsis LIKE "%Tropa%";
```

c) Query:

```
SELECT * FROM MOVIE
WHERE release_date < "2021-01-12";
```

d) Query:

```
SELECT * FROM MOVIE
WHERE release_date < "2021-01-12" AND 
      (title LIKE "%Tropa%" OR
      synopsis LIKE "%Tropa%") AND rating > 7
```









