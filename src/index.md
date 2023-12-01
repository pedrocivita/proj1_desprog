Counting Sort
======

O problema das roupas
---------

Imagine a seguinte situação: Você acaba de ser contratado por uma loja de roupas e sua primeira tarefa será organizar o novo lote de roupas que acaba de chegar por tamanho (para simplificar considere 4 tamanhos : P, M, G e GG).
A princípio essa ideia seria muito simples de ser realizada, embora possivelmente trabalhosa. Bastaria conferir o tamanho de todas as roupas e adiciona-las a pilhas referentes a seus respectivos tamanhos, de modo que haveriam ao final 4 pilhas considerando os tamanhos P, M, G e GG.

??? Exercício Introdutório
Após terminar seu turno normal de trabalho seu chefe te pede para realizar uma nova tarefa (e sem direito à horas extras); ele te pede para organizar as pilhas de diferentes tamanhos de roupas em uma nova grande pilha, ordenando-a com as roupas de menores tamanhos abaixo até as de maiores tamanhos acima. 

Como você realizaria essa tarefa de maneira eficiente para poder voltar logo para sua casa?

::: Solução

A tarefa seria relativamente simples, bastaria sobrepor as pilhas de diferentes tamanhos de roupas iniciando pelas de tamanhos menores até as de tamanhos maiores, o que seria por si só uma possível ordenação.

:::
???

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

## Vetor de Ocorrências Somadas

Essa parte pode ser um pouco complicada então vamos imaginar um vetor mais simples para facilitar o entendimento.
Imagine um vetor ainda representando o número de ocorrências de cada tamanho, mas agora com apenas 4 tamanhos:

<div align=center>

[ M , P , G , P ]

</div>

Como já visto anteriormente, iremos organizar os tamanhos em um novo vetor, baseado em sua ordem de grandeza:

<div align=center>

[ P , M , G ]

</div>

Agora, poderemos fazer o vetor de ocorrências já apresentado anteriormente, ou seja, substituir os valores de ocorrência encontrados pelos respectivos valores de tamanho representados:

<div align=center>

P, M, G

[ 2 , 1 , 1 ]

</div>

??? Exercício 4

Intuitivamente, imagine qual será a posição do último G no vetor já ordenado.

::: Solução

Exatamente, na última posição do vetor ordenado.

:::

???

O Counting Sort identifica isso pelo vetor de ocorrências somadas, que funciona da seguinte maneira: para cada valor de nosso vetor iremos somar o valor antecessor a ele, iniciando do segundo valor da lista e acumulando os resultados, de modo que o último valor do vetor será a soma de todos os valores antecessores a ele tal qual apresentado abaixo:

:vet_oc_som

??? Exercício 5
Utilizando dessa operação de soma acumulada de vetor, você nota alguma relação entre o posicionamento do valor G em nosso vetor ordenado.

::: Solução

O valor G estará na última posição, ou seja, na posição 4, considerando o vetor ordenado iniciando pelo index 1.

:exemplo_g

!!! Observação
Para o Counting Sort, sempre trataremos o vetor ordenado como um vetor que vai da posição **1 até a posição n**, sendo n o tamanho do vetor.
!!!

:::

???

Portanto, observamos que o index do vetor ordenado se relaciona diretamente com o respectivo valor no vetor de ocorrências somado, todavia não de forma tão simples.

??? Exercício 6

Seguindo o mesmo racícinio (utilizando o vetor de ocorrências somadas), encontre o index do valor P em nosso vetor ordenado.

::: Solução

O valor P estará na segunda posição, o que, inicialmente, pode parecer estranho, uma vez que possuímos 2 valores P, que se encontrarão nas posições 1 e 2 do nosso vetor ordenado.

:::

???

Isso se dá porque o valor encontrado em nosso vetor de ocorrências somadas se relaciona ao index do **último** valor de mesmo tipo em nosso vetor ordenado, ou seja, um dos valores P se encontra na segunda posição do vetor ordenado pois o valor encontrado no vetor de ocorrências somadas que se relaciona a ele é 2.

Para então utilizar corretamente essa ferramenta, a maneira mais inteligente será sempre que passarmos por um número e encontrarmos seu index no vetor ordenado, subtrair 1 do valor que o representa no vetor de occrências somadas, de modo que preencheremos os valores iguais de maneira decrescente em nosso vetor ordenado.

:exemplo_p

!!! Curiosidade
A característica de contagem é responsável pela estabilidade do algoritmo, uma vez que por sempre preencher os valores iguais de maneira decrescente, o algoritmo sempre manterá a ordem prévia dos valores.

!!!

## Retomando o raciocínio

Agora, iremos voltar a nosso vetor original.

??? Exercício 7
Como ficaria a aplicação dessa mesma regra de ocorrências somadas em nosso vetor de ocorrências previamente construído?

<div align=center>

P, M, G, GG

[ 3 , 3 , 3 , 2 ]

</div>

::: Solução
<div align=center>

P, M, G, GG

[ 3 , 6 , 9 , 11 ]

</div>
:::
???

Agora que possuímos nosso vetor de ocorrências com somas acumuladas, podemos aplicar a mesma regra de indexação para encontrar a posição de cada um dos valores em nosso vetor ordenado seguindo a seguinte regra:

- Percorreremos nosso vetor original de maneira crescente

- Para cada valor, relacionaremos seu index no vetor ordenado com o valor de seu index no vetor de ocorrências somadas

- Subtrairemos 1 de tal valor no vetor de ocorrências somadas

Para melhor entendimento da ideia, observe o exemplo a seguir representando a primeira iteração do loop:

:ord_roupas_loop1

??? Exercício 8
Realize a segunda iteração do algoritmo, seguindo o padrão representado no exemplo.

::: Gabarito

:ord_roupas_loop2

:::
???

Abaixo segue uma ilustração de como se daria a ordenação completa de nosso vetor utilizando o Counting Sort:

:ord_roupas

Por que o Counting Sort?
------------

O Counting Sort é ideal para situações com baixa variação nos valores de entrada, uma vez que em tais casos, nos quais o tamanho da entrada é maior que a variedade de valores de entrada, a complexidade do código se dá por *O(n)*, além de necessitar que o vetor seja composto por números inteiros positivos para seu devido funcionamento.

Usos **não efetivos**:

* Preços em um site, devido à presença de muitos valores decimais e variação extensa.
* Notas em uma sala de aula, onde as notas podem ter muitos decimais e variar de 0 a 100.
* Datas de eventos históricos, que tendem a ter uma grande variação e não se beneficiam da ordenação baseada em contagem.

Usos **efetivos**:

* Idades de um grande grupo de pessoas, com variação geralmente entre 0 e 100.
* Votos em uma eleição com um número limitado de candidatos, perfeitos para a contagem e reagrupamento rápido.
* Ordenação de roupas por tamanho (P, M, G, GG), que podem ser convertidos em valores inteiros para ordenação eficiente.

??? Desafio Extra
Foi anteriormente mencionado que o Counting Sort necessita de vetores de números inteiros positivos para seu devido funcionamento, porém isso não significa que o algoritmo não possa ser adaptado para outros tipos de vetores. Como você adaptaria o seguinte vetor para aplicação do Counting Sort?

<div align=center>

[ -5 , 3 , -2 , 1 , 2 , 3, -3 ]

</div>

::: Solução
Para adaptar o vetor em questão para aplicação do Counting Sort basta somar 5 a todos os valores do vetor, de modo que o vetor resultante seja [ 0 , 8 , 3 , 6 , 7 , 8 , 2 ], e após aplicação do algoritmo subtrair o mesmo valor.

Em casos de vetores com números negativos, basta uma operação de soma nos valores do vetor para possibilitar aplicação do counting sort.
:::
???

??? Desafio Extra Parte 2
Vimos como transformar um vetor com números negativos em um vetor com números positivos, mas e se o vetor possuir números decimais como o demonstrado a seguir, como você o converteria para aplicação do Counting Sort?

<div align=center>

[ 0.5 , 1.5 , 2 , 2.5 , 1]

</div>

::: Solução
Para converter o vetor em questão para aplicação do Counting Sort basta multiplicar todos os valores do vetor por 2, de modo que o vetor resultante seja [ 1 , 3 , 4 , 5 , 2 ] e, após aplicação do algoritmo dividir o mesmo valor.

Observa-se porém, que para tal caso a operação é menos eficiente considerando nossa implementação, uma vez que aumentaríamos a distância entre o menor e maior elemento do sistema, porém existem aplicações que desconsideram tal diferença se atendo apenas a variedade de argumentos, nas quais uma operação de multiplicação não interferiria.
:::
???

Exercícios de Fixação
------------
Uma empresa especializada em cinema chamada LetraCaixa está promovendo um site em que seus usúarios possam atribuir notas para diversos critérios de filmes que assistiram e comparar entre si tais notas.

Por se tratar de um site interativo, no qual outros usúarios possam visualizar suas notas em tempo real, é esperado que tal algoritmo seja rapido.

A empresa está disposta a lidar com memória auxíliar, e o algoritmo precisa ser também estável, uma vez que tal ordenação se dará por diversos critérios de notas.

Tais notas podem variar de 1 a 5 com intervalos de números inteiros.

??? Exercício de Fixação 1

Para o caso acima, você acredita que o Counting Sort seria um algoritmo de ordenação efetivo?

::: Gabarito
Sim, em tal caso o Counting Sort seria o algoritmo de ordenação perfeito, atendendo a todas as demandas do cliente.

Counting Sort é extremamente eficiente para casos de ordenação em que a variedade de valores é menor que o tamanho do vetor, e como em tal caso a variedade de valores é de 5 e o tamanho do vetor é de milhares de filmes, o algoritmo seria extremamente efetivo.

Counting Sort é um algoritmo estável, atendendo a demanda de diversos critérios de nota, e embora utilize memória auxíliar, o cliente estava disposto a lidar com tal fator.
:::

???

??? Exercício de Fixação 2

Para o caso das notas poderem ser atribuídas de 1 a 10, contando com notas quebradas como 7.5 e 3.1 e uma possibilidade de milhares de filmes no catálogo de cada cliente, o Counting Sort seria efetivo?

::: Gabarito
Levando em consideração o critério de que o algoritmo não trabalha com números não inteiros pode-se afirmar que não.

Todávia, embora mencionado anteriormente que o algoritmo não trabalha bem específicamente com intervalos de números contínuos, mas pode ser utilizado para tal, e como em questão de um processo de multiplição seria possível tornar tal intervalo em cerca de 100 possibilidades de nota seria um número possivelmente menor que o número de filmes selecionados, possibilitando ao Counting Sort ainda ser um algoritmo efetivo.
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
Não precisa ter medo, pois agora iremos analisar a seguinte implementação do código e entender melhor sua complexidade.

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

Para cada um dos trechos de códigos apresentados nos exercícios a seguir, defina a complexidade de cada linha e complexidade final do trecho:

??? Exercício Complexidade 1

```python 
    range_size = max(v) + 1            
    count = [0] * range_size          
    sorted_v = [0] * len(v)            
```

::: Solução
Já nas primeiras linhas observamos a complexidade *O( n )*, uma vez que o algoritmo utiliza da função *max( )*, que percorre todo o vetor para encontrar o maior valor. Em sequência observamos duas linhas de complexidade *O( 1 )*, de complexidade constante.

```python 
    range_size = max(v) + 1            #O(n)
    count = [0] * range_size           #O(1)
    sorted_v = [0] * len(v)            #O(1)
```
:::
???

??? Exercício Complexidade 2

```python 
    for num in v:                   
        count[num] += 1              
```

::: Solução
No loop seguinte observamos um loop simples, que percorre todo o vetor, portanto de complexidade *O( n )*.

```python 
    for num in v:                      #O(n)
        count[num] += 1                #O(1)
```
:::
???

??? Exercício Complexidade 3

```python 
    for i in range(1, range_size):     
        count[i] += count[i - 1]               
```

::: Solução
Em sequência temos um loop que percorre a varíavel **range_size**, a qual é fruto da operação *max(v)* e representa a variedade de valores no vetor de entrada. Portanto entendemos que nossa complexidade não depende apenas mais do valor de entrada, mas também de sua variedade de valores.

Para simplificação da notação chamaremos tal varíavel de k, ocasionando para uma complexidade *O(k)* no trecho específicado.
```python 
    for i in range(1, range_size):     #O(k)
        count[i] += count[i - 1]       #O(1)
```
:::
???

??? Exercício Complexidade 4

```python 
    for num in reversed(v):           
        sorted_v[count[num] - 1] = num 
        count[num] -= 1                           
```

::: Solução
Por fim possuímos mais um loop simples, ocasionando em uma complexidade *O( n )*.

```python 
    for num in reversed(v):            #O(n)
        sorted_v[count[num] - 1] = num #O(1)
        count[num] -= 1                #O(1)
```
:::
???
??? Exercício Final de Complexidade
Agora que já conhecemos a complexidade de cada trecho de código, você consegue descobrir a complexidade final do algoritmo?
:::Solução
A complexidade final do algoritmo é dada pela maior complexidade de cada trecho de código.

Uma vez que temos como maiores complexidades *O( n )* e *O( k )* podemos concluir que a complexidade final do algoritmo é *O( n + k )*.

Para casos em que O( n ) > O( k ) podemos simplificar a complexidade para *O( n )*, uma vez que a complexidade de um algoritmo é dada pela maior complexidade de seu trecho de código.
:::
???




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

![VLW FAMILIA TMJ](bilinha.jpg)