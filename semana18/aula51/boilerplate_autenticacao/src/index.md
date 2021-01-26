1 -
a) Rounds é o custo de 2 dígitos que está relacionado com a segurança da senha. De acordo com o seu valor, será medido o tempo de execução e segurança. O valor 12 é recomendado. 
Salt é um bloco que gera uma stringa aleatória de 22 caracteres.
Utilizei valor por 12 pois é o recomendado.

  2 -
  a) Começa no signup e depois no login, pois no login será feita a comparação.

  d) Não, pois o token vem como resposta do endpoint de login.

  3-
  a) 
  ```sql
  ALTER TABLE User 
ADD COLUMN role 
VARCHAR(255) 
DEFAULT "normal" ;
```

b)