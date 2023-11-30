Counting Sort
======

O problema das roupas
---------

Imagine a seguinte situação: Você acaba de ser contratado por uma loja de roupas e sua primeira tarefa será organizar o novo lote de roupas que acaba de chegar por tamanho (para simplificar considere 4 tamanhos : P, M, G e GG).
A princípio tal ideia seria muito simples de ser realizada, embora possivelmente trabalhosa. Bastaria conferir o tamanho de todas as roupas e adiciona-las a pilhas referentes a seus respectivos tamanhos, de modo que haveriam ao final 4 pilhas considerando os tamanhos P, M, G e GG.
Após montar tais pilhas seu trabalho teria sido realizado, e caso fosse pedido para que montasse uma grande pilha ordenando as roupas por sua ordem de tamanho também seria muito simples, bastaria montar uma nova pilha adicionando as anteriores pilhas montadas ordenando pela ordem de tamanho.

Roupas e Números
---------

A estratégia demonstrada pode ser pensada como algo intuitivo em ordenações como a situação apresentada, onde existem poucas classificações de ordenação e possivelmente muitos valores a serem ordenados, portanto vamos generalizar um pouco nosso problema, demonstando uma maneira de realizar tal ordenação de modo um pouco menos intuitivo mas extremamente eficiente, seguindo o mesmo princípio.

Vamos visualizar nossas roupas como o vetor apresentado a seguir:

<div align=center>

[ G , P , M , GG , P , G , GG , P , G , M , M]

</div>

??? Exercício 1
Primeiramente, conte o número de ocorrências de cada um dos tamanhos apresentado no vetor.

::: Solução

<div align=center>

P = 3

M = 3

G = 3

GG = 2

</div>
:::
???

??? Exercício 2
Em sequência, embora pareça um pouco óbvio, organize os tamanhos apresentados em um novo vetor, baseado em sua ordem de grandeza.

::: Solução
<div align=center>

[ P , M , G , GG ]

</div>
:::
???

??? Exercício 3
Nesse novo vetor, substitua os valores de ocorrência encontrados pelos respectivos valores de tamanho representados.
::: Solução
<div align=center>

P, M, G, GG

[ 3 , 3 , 3 , 2 ]

</div>
:::
???

Ótimo, agora possuímos um novo vetor representando o número de ocorrências de cada tamanho já ordenado por sua ordem de grandeza.

??? Exercício 4
Agora, iremos somar o primeiro valor do vetor no segundo valor, em sequência o segundo valor no terceiro valor e assim sucessivamente, até completarmos o vetor.

::: Solução
<div align=center>

P, M, G, GG

[ 3 , 6 , 9 , 11 ]

</div>
:::
???

Atráves desse novo vetor iremos realizar o passo final de nossa ordenação.
Imagine um novo vetor de tamanho igual ao vetor original no qual serão salvos os valores de maneira ordenada.
Iremos portanto, passar valor por valor de nosso vetor original e identificar esse valor em nosso vetor de ocorrências somadas, portanto iremos adicionar valor ao nosso novo vetor gerado utilizando como index do mesmo o valor adquirido do nosso vetor de ocorrências somadas.
Por fim devemos subtrair um do index em questão de nosso vetor de ocorrências somado.
Ficou confuso? Observe o exemplo a seguir representando a primeira interação desse passo no vetor observado.

## **Primeira iteração do Algoritmo:**

:ord_roupas_loop1

O exemplo acima representa a primeira iteração por completo do algoritmo, de modo que se as iterações fossem realizadas até o fim o vetor estaria completamente ordenado.

!!!Observação
Os indíces utilizados no Novo Vetor começam no 1 pela maneira que o algoritmo é aplicado. Caso prefira pode subtrair 1 de todos os valores do vetor de ocorrências e utilizar um indíce iniciando em 0, tal qual usualmente utilizado em vetores.
!!!

??? Exercício 5
Realize a segunda iteração do algoritmo, seguindo o padrão representado no exemplo.

::: Gabarito

## **Segunda iteração do Algoritmo:**

:ord_roupas_loop2

:::
???


## **Todas as iterações do Algoritmo:**

:ord_roupas

Por que o Counting Sort?
------------

O Counting Sort é ideal para situações com baixa variação nos valores de entrada, uma vez que em tais casos, nos quais o tamanho da entrada é maior que a variedade de valores de entrada, a complexidade do código se dá por *O(n)*, além de ser particularmente útil quando os dados são números inteiros positivos, por não precisar de filtros prévios e ser um algorítimo estável. 

Usos **não efetivos**:

* Preços em um site, devido à presença de muitos valores decimais e variação extensa.
* Notas em uma sala de aula, onde as notas podem ter muitos decimais e variar de 0 a 100.
* Datas de eventos históricos, que tendem a ter uma grande variação e não se beneficiam da ordenação baseada em contagem.

Usos **efetivos**:

* Idades de um grande grupo de pessoas, com variação geralmente entre 0 e 100.
* Votos em uma eleição com um número limitado de candidatos, perfeitos para a contagem e reagrupamento rápido.
* Ordenação de roupas por tamanho (P, M, G, GG), que podem ser convertidos em valores inteiros para ordenação eficiente.

!!!Observação
É possível aplicar o Counting Sort para vetores de valores negativos e contínuos através de operações de adição e multiplicação dos valores, sendo mais simples e aplicável com valores negativos que dependem somente de soma (*inteiros*). Se fosse um vetor de valores contínuos(*floats*), por exemplo, a quantidade de multiplicações necessárias para ajustar os valores prejudicariam muito a eficiência do código.
!!!

Exercícios de Fixação
------------
Uma empresa especializada em cinema está promovendo um site em que seus usúarios possam atribuir notas para diversos critérios de filmes que assistiram e comparar entre si tais notas.
Por se tratar de um site interativo, no qual outros usúarios possam visualizar suas notas em tempo real, é esperado que tal algoritmo seja rapido.
A empresa está disposta a lidar com memória auxíliar, e o algoritmo precisa ser também estável, uma vez que tal ordenação se dará por diversos critérios de notas.
Tais notas podem variar de 1 a 5 com intervalos de números inteiros.
??? Exercício de Fixação 1

Para o caso acima, você acredita que o Counting Sort seria um algoritmo de ordenação efetivo?

::: Gabarito
Sim, em tal caso o Counting Sort seria o algoritmo de ordenação perfeito, atendendo a todas as demandas do cliente.
:::

???

??? Exercício de Fixação 2

Para o caso das notas poderem ser atribuídas de 1 a 10, contando com notas quebradas como 7.5 e 3.1 e uma possibilidade de milhares de filmes no catálogo de cada cliente, o Counting Sort seria efetivo?

::: Gabarito
Levando em consideração o critério de que o algoritmo não trabalha com números não inteiros pode-se afirmar que não.
Todávia, como mencionado anteriormente, o algoritmo não trabalha bem específicamente com intervalos de números contínuos, e como em questão de um processo de multiplição seria possível tornar tal intervalo em cerca de 100 possibilidades de nota seria um número possivelmente menor que o número de filmes selecionados, possibilitando ao Counting Sort ainda ser um algoritmo efetivo.
:::

???

Implementação em Python
---------

A função **counting_sort** abaixo ordena um vetor de números inteiros que se enquadram em um intervalo qualquer. Um vetor de contagem acumula a frequência de cada valor, e um vetor temporário organiza os elementos antes de serem recolocados no vetor original.

O código a seguir ilustra a implementação da ordenação de objetos complexos usando Counting Sort em python:

```python
def counting_sort(v):
    # Determinar o tamanho do intervalo com base no maior número no vetor
    range_size = max(v) + 1
    count = [0] * range_size
    sorted_v = [0] * len(v)

    # Contar as ocorrências
    for num in v:
        count[num] += 1

    # Transformar count em posições cumulativas
    for i in range(1, range_size):
        count[i] += count[i - 1]

    # Ordenar o vetor
    for num in reversed(v):
        sorted_v[count[num] - 1] = num
        count[num] -= 1

    return sorted_v
```

Para melhor entender essa implementação faremos um passo a passo, ou melhor, loop a loop!

!!! Observação 

É importante notar que a demonstração a seguir se assemelha muito com o loop de ordenação de roupas apresentado anteriormente, mas agora com um vetor de tamanho 5, de modo que o vetor de ocorrências somadas terá tamanho 5; para o exemplo a seguir consideraremos o seguinte vetor: **A = [4, 1, 3, 4, 3]**. 

Além disso, visando um melhor entendimento do esquema abaixo, o vetor original será representado por **A**, o vetor a ser ordenado por **B**, o vetor de ocorrências por **C** e o vetor de ocorrências somadas por **C_linha**.

!!!

* ## **Loop 1: Contar as ocorrências**

:loop2

* ##  **Loop 2: Transformar count em posições cumulativas**

:loop3

* ##  **Loop 3: Ordenar o vetor**

:loop4

Complexidade do Algoritmo
------------
Anterioremente foi mencionado que o Counting Sort apresenta complexidade *O( n + k )*, mas como se dá tal relação com o algoritmo aplicado?
Para isso iremos analisar o a seguinte implementação do código e entender melhor sua complexidade.

```python
def counting_sort(v):
    # Determinar o tamanho do intervalo com base no maior número no vetor
    range_size = max(v) + 1
    count = [0] * range_size
    sorted_v = [0] * len(v)

    # Contar as ocorrências
    for num in v:
        count[num] += 1

    # Transformar count em posições cumulativas
    for i in range(1, range_size):
        count[i] += count[i - 1]

    # Ordenar o vetor
    for num in reversed(v):
        sorted_v[count[num] - 1] = num
        count[num] -= 1

    return sorted_v
```

Já nas primeiras linhas observamos a complexidade *O( n )*, uma vez que o algoritmo utiliza da função *max( )*, que percorre todo o vetor para encontrar o maior valor. Em sequência observamos duas linhas de complexidade *O( 1 )*, de complexidade constante.

```python 
    range_size = max(v) + 1            #O(n)
    count = [0] * range_size           #O(1)
    sorted_v = [0] * len(v)            #O(1)
```
No loop seguinte observamos um loop simples, que percorre todo o vetor, portanto de complexidade *O( n )*.

```python 
    for num in v:                      #O(n)
        count[num] += 1                #O(1)
```
Em sequência temos um loop responsávvel pela complexidade dita como *O( n + k )*, uma vez que o mesmo percorre a varíavel **range_size**, que é fruto da operação *max( v )*, fazendo com que o algoritmo dependa não somente do número da entrada, mas também da difereça entre os valores de entrada, ou em versões mais sofisticadas do algoritmo, da variedade de valores de entrada.

```python 
    for i in range(1, range_size):     #O(k)
        count[i] += count[i - 1]       #O(1)
```

Por fim possuímos mais um loop simples, totalizando ao nosso código três iterações de complexidade *O( n )* e uma iteração de complexidade *O( k )*, resultando na complexidade *O( n + k )*.

```python 
    for num in reversed(v):            #O(n)
        sorted_v[count[num] - 1] = num #O(1)
        count[num] -= 1                #O(1)
```

Desafio
---------

??? Ordenação de Estruturas Complexas
Adapte o algoritmo de Counting Sort para ordenar um array de classes ***Student***, cada uma contendo um identificador inteiro **id** e um campo **name**. O algoritmo deve ordenar os estudantes por **id**.

```python
class Student:
    def __init__(self, id, name):
        self.id = id
        self.name = name
```

::: Gabarito

```python
class Student:
    def __init__(self, id, name):
        self.id = id
        self.name = name

def counting_sort_students(students):
    max_id = max(student.id for student in students)
    count = [0] * (max_id + 1)
    sorted_students = [None] * len(students)

    for student in students:
        count[student.id] += 1

    for i in range(1, max_id + 1):
        count[i] += count[i - 1]

    for student in reversed(students):
        sorted_students[count[student.id] - 1] = student
        count[student.id] -= 1

    return sorted_students
```
???