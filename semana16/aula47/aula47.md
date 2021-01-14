Exercício 1

a) Foreigner Key é uma tag que indica que aquela informação inserida na tabela vem de uma outra tabela existente no banco de dados.

b) 
```sql
INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES (
		"1",
    "Muito bom!",
    10,
		"1"
);
```

c) Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`dumont-fabio-jordao`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`)). O erro indica que não é possível criar a avaliação pois há um erro na chave estrangeira.

d)
```sql
ALTER TABLE Movie DROP COLUMN rating;
```

e) Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`dumont-fabio-jordao`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`)). O erro indica que não é possível criar ou atualizar uma linha pai devido destrição da chave estrangeira.

Exercício 2
a) A tabela de elenco recebe as informações da tabela Movie e da tabela Actor através dos ids que são passados pela chave estrangeira.

b)
```sql
INSERT INTO MovieCast(movie_id, actor_id)
VALUE
('1', '007'), ('2', '004'), ('4', '002'), ('3', '005'), ('6', '001'), ('5','006');
```

c) Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`dumont-fabio-jordao`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`)). O erro indica que não é possível adicionar ou atualizar uma linha filha por erro da chave estrangeira.

d) Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`dumont-fabio-jordao`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`)). 

Exercício 3
a) O query seleciona todas as colunas das tabelas que ela recebe e então mostra todas em uma tabela só. O operador ON é uma condição.

b) 
```sql
SELECT Movie.title, Movie.id, Rating.rate FROM Movie 
INNER JOIN Rating ON Movie.id = Rating.movie_id;
```

Exercício 4
a)
```sql
SELECT Movie.title, Movie.id, Rating.rate FROM Movie 
INNER JOIN Rating ON Movie.id = Rating.movie_id;
```

b)
```sql
SELECT MovieCast.movie_id, Movie.title, MovieCast.actor_id FROM MovieCast
JOIN Movie ON MovieCast.movie_id = Movie.id;
```

c)
```sql
SELECT AVG(Rating.rate), Movie.id, Movie.title FROM Movie
LEFT JOIN Rating ON Movie.id = Rating.movie_id
GROUP BY Movie.id;
```

Exercício 5
a) A query traz todas as colunas da tabelas 'Movie' e 'MovieCast' que possuem relação entre si através das colunas 'id' e 'movie_id' e também da tabela 'Actor' com a sua coluna 'id' relacionada ao 'actor_id' da tabela 'MovieCast'. O uso de dois JOIN permite trazer informações de três tabelas.

b) 
```sql
SELECT MovieCast.movie_id, Movie.title, MovieCast.actor_id, Actor.name FROM Movie
LEFT JOIN MovieCast ON Movie.id = MovieCast.movie_id
JOIN Actor ON Actor.id = MovieCast.actor_id;
```

c) A query retorna o id, nome dos filmes, id e nome dos atores que possuem relação na tabela 'MovieCast.

d)
```sql
SELECT Movie.id as movie_id, 
    Movie.title, 
    Actor.id as actor_id, 
    Actor.name, 
    Rating.rate, 
    Rating.comment 
FROM Movie
LEFT JOIN Rating on Rating.movie_id = Movie.id
LEFT JOIN MovieCast ON Movie.id = MovieCast.movie_id
JOIN Actor ON Actor.id = MovieCast.actor_id;
```

Exercício 6
a) Relação N:M

b)
```sql
CREATE TABLE Oscar (
	id VARCHAR(255) PRIMARY KEY,
    name TEXT NOT NULL,
    date DATE NOT NULL
);

INSERT INTO Oscar VALUES
('01', 'Oscar de Melhor Filme', '2010-04-15'),
('02', 'Oscar de Melhor Direção', '2010-04-15'),
('03', 'Oscar de Melhor Filme', '2011-04-15'),
('04', 'Oscar de Melhor Direção', '2012-04-15'),
('05', 'Oscar de Melhor Filme', '2012-04-15'),
('06', 'Oscar de Melhor Direção', '2013-04-15'),
('07', 'Oscar de Melhor Filme', '2014-04-15'),
('08', 'Oscar de Melhor Direção', '2014-04-15');

CREATE TABLE MovieOscar (
	movie_id VARCHAR(255),
	oscar_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id),
    FOREIGN KEY (oscar_id) REFERENCES Oscar(id)
);

```

c)
```sql
INSERT INTO MovieOscar VALUES
('1', '01'), ('1', '02'),
('5', '03'), ('5', '04'),
('4', '05'), ('4', '06'),
('6', '07'), ('6', '08');
```

d)
```sql
SELECT Movie.name, Oscar.title FROM MovieOscar
RIGHT JOIN Movie
ON MovieOscar.movie_id = Movie.id
JOIN Oscar
ON MovieOscar.oscar_id = Oscar.id;
```