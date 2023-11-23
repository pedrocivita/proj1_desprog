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

[ G , P , M , GG , P , G , GG , P , G , M , M]

Primeiramente, conte o número de ocorrências de cada um dos tamanhos apresentado no vetor.

::: Solução
P - 3

M - 3

G - 3

GG - 2
:::

Em sequência, embora pareça um pouco óbvio, organize os tamanhos apresentados em um novo vetor, baseado em sua ordem de grandeza.
::: Solução
[P , M , G , GG]
:::

Nesse novo vetor, substitua os valores de ocorrência encontrados pelos respectivos valores de tamanho representados.
::: Solução
<div>
P  M  G  GG

[3 , 3 , 3 , 2]
</div>
:::

Ótimo, agora possuímos um novo vetor representando o número de ocorrências de cada tamanho já ordenado por sua ordem de grandeza.
A partir de tal vetor podemos enfim realizar a ordenação do vetor em um passe de mágica, seguindo a seguinte regra.
Primeiramente iremos somar o primeiro valor do vetor no segundo valor, em sequência o segundo valor no terceiro valor e assim por diante, até completarmos o vetor.

::: Solução
<div>
 P   M  G   GG

[3, 6, 9 , 10]
</div>
:::

Atráves desse novo vetor iremos realizar o passo final de nossa ordenação.
Imagine um novo vetor de tamanho igual ao vetor original no qual serão salvos os valores de maneira ordenada.
Iremos portanto, passar valor por valor de nosso vetor original e identificar esse valor em nosso vetor de ocorrências somado, portanto iremos adicionar valor ao nosso novo vetor gerado utilizando como index do mesmo o valor adquirido do nosso vetor de ocorrências somado.
Por fim devemos subtrair um do index em questão de nosso vetor de ocorrências somado.
Ficou confuso? Observe o exemplo a seguir representando a primeira interação desse passo no vetor observado.

- Vetor original

[ **G** , P , M , GG , P , G , GG , P , G , M , M]

- Novo Vetor

[  ,  ,  ,  ,  ,  ,  ,  ,  ,  , ]

- Vetor de ocorrências

[3, 6 , **9** , 10]

Valor do index G = 9

- Novo Vetor

[ , , , , , , , , G , , ]

- Vetor de ocorrências

[3, 6, 8 , 10]

O exemplo acima representa uma iteração do passo final da ordenação de nosso vetor, de modo que ao passar por todos os valores do vetor original o nosso Novo Vetor estaria completamente ordenado.

!!!Observação
Os indíces utilizados no Novo Vetor começam no 1 pela maneira que o algorítimo é aplicado. Caso prefira pode subtrair 1 de todos os valores do vetor de ocorrências e utilizar um indíce iniciando em 0, tal qual usualmente utilizado em vetores.
!!!

??? Teste
Realize a segunda iteração do algorítimo, seguindo o padrão representado no exemplo.

::: Gabarito

- Vetor original

[ G , **P** , M , GG , P , G , GG , P , G , M , M]

- Novo Vetor

[ , , , , , , , , G , , ]

-Vetor de ocorrências

[**3**, 6, 8 , 10]

Valor do index P = 3

-Novo Vetor

[ , , P , , , , , , G , , ]

-Vetor de ocorrências

[2, 6, 8 , 10]
:::
???

Por que o Counting Sort?
------------

O Counting Sort é ideal e apresenta complexidade *O(n)* para situações com baixa variação nos valores de entrada e é particularmente útil quando os dados são números inteiros positivos.

Aplicações reais do Counting Sort
------------
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
Por se tratar de um site interativo, no qual outros usúarios possam visualizar suas notas em tempo real, é esperado que tal algorítmo seja rapido.
A empresa está disposta a lidar com memória auxíliar, e o algorítimo precisa ser também estável, uma vez que tal ordenação se dará por diversos critérios de notas.
Tais notas podem variar de 1 a 5 com intervalos de números inteiros.
??? Exercício 1

Para o caso acima, você acredita que o Counting Sort seria um algoritmo de ordenação efetivo?

::: Gabarito
Sim, em tal caso o Counting Sort seria o algorítimo de ordenação perfeito, atendendo a todas as demandas do cliente.
:::

???

??? Exercício 2

Para o caso das notas poderem ser atribuídas de 1 a 10, contando com notas quebradas como 7.5 e 3.1 e uma possibilidade de milhares de filmes no catálogo de cada cliente, o Counting Sort seria efetivo?

::: Gabarito
Se atendo ao critério de que o algorítmo não trabalha com números não inteiros pode-se afirmar que não.
Todávia, como mencionado anteriormente, o algorítimo não trabalha bem específicamente com intervalos de números contínuos, e como em questão de um processo de multiplição seria possível tornar tal intervalo em cerca de 100 possibilidades de nota seria um número possivelmente menor que o número de filmes selecionados, possibilitando ao Counting Sort ainda ser um algorítimo efetivo.
:::

???

Ordenação de Objetos Complexos com Counting Sort
---------
O algoritmo também pode ser adaptado para organizar estruturas de dados complexas, como registros de alunos. A seguir, mostramos como utilizar o Counting Sort para ordenar um array de objetos alunos.

Agora, considere um array de objetos alunos que precisam ser ordenados por número de matrícula!

Como podemos implementar essa ideia?

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

Para melhor entender essa implementação vamos ao passo a passo, ou melhor, loop a loop!

!!! Observação 

Para o exemplo a seguir consideraremos o seguinte vetor: **v = [4, 1, 3, 4, 3]**.

!!!

* **Loop 1: Contar as ocorrências**

:loop1

* **Loop 2: Transformar count em posições cumulativas**

:loop2

* **Loop 3: Ordenar o vetor**

:loop3

* **Loop 4: Copiar para o array original**

:loop4

Complexidade do Algorítimo
------------
Anterioremente foi mencionado que o Counting Sort apresenta complexidade *O(n+k)*, mas como se dá tal relação com o algorítimo aplicado?
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

Já nas primeiras linhas observamos a complexidade *O(n)*, uma vez que o algorítimo utiliza da função (max), que percorre todo o vetor para encontrar o maior valor. Em sequência observamos duas linhas de complexidade *O(1)*, de complexidade constante.

```python 
    range_size = max(v) + 1 #0(n)
    count = [0] * range_size #0(1)
    sorted_v = [0] * len(v) #0(1)
```
No loop seguinte observamos um loop simples, que percorre todo o vetor, portanto de complexidade *O(n)*.

```python 
    for num in v: #0(n)
        count[num] += 1 #0(1)
```
Em sequência temos um loop responsávvel pela complexidade dita como O(n+k), uma vez que o mesmo percorre a varíavel **range_size**, que é fruto da operação max(v), fazendo com que o algorítimo dependa não somente do número da entrada, mas também da difereça entre os valores de entrada, ou em versões mais sofisticadas do algorítimo, da variedade de valores de entrada.

```python 
    for i in range(1, range_size): #0(k)
        count[i] += count[i - 1] #0(1)
```

Por fim possuímos mais um loop simples, totalizando ao nosso código três iterações de complexidade *O(n)* e uma iteração de complexidade *O(k)*, resultando na complexidade *O(n+k)*.

```python 
    for num in reversed(v): #0(n)
        sorted_v[count[num] - 1] = num #0(1)
        count[num] -= 1 #0(1)
```

Desafios
---------

??? Desafio 1 - Ordenação de Números com um Intervalo Maior
Adapte a função **counting_sort** para que ela possa ordenar um array de números inteiros onde o maior número é conhecido e é menor que 100. Você precisará alterar a função para que ela determine o intervalo de valores dentro do array e crie um vetor de contagem adequado.

::: Dicas

1. **Encontrar o Valor Máximo:** Primeiro, percorra todo o array para encontrar o maior valor. Este será o seu ponto de referência para o tamanho do vetor de contagem.

2. **Inicializar o Vetor de Contagem:** Utilize a função **calloc** para criar e inicializar o vetor de contagem. Lembre-se de que **calloc** inicializa todos os valores do vetor alocado com zero.

3. **Contagem:** Incremente a contagem para cada valor de acordo com o índice ajustado pelo menor valor possível no intervalo, que neste caso é zero, pois estamos considerando apenas números positivos menores que 100.

4. **Posições Cumulativas:** Transforme o vetor de contagem em um vetor de posições cumulativas. Isso prepara o vetor de contagem para ser usado diretamente para ordenar o array.

5. **Ordenação:** Para cada elemento em **v**, coloque-o na posição correta no vetor **sorted** e depois de decrementar a contagem correspondente.

6. **Cópia de Volta:** Após ordenar, copie os elementos do vetor **sorted** de volta para **v**.

Lembre-se de liberar qualquer memória que você tenha alocado com **malloc** ou **calloc** para evitar vazamentos de memória.
:::


::: Gabarito
```c
#include <stdio.h>
#include <stdlib.h>
#include <limits.h>

void counting_sort(int v[], int n) {
    // Encontre o maior valor no array para definir o tamanho do vetor de contagem
    int max = v[0];
    for (int i = 1; i < n; i++) {
        if (v[i] > max) {
            max = v[i];
        }
    }

    // Crie o vetor de contagem e inicialize-o
    int *count = calloc(max + 1, sizeof(int)); // Use calloc para inicializar com zero
    int *sorted = malloc(n * sizeof(int)); // Vetor para os elementos ordenados
    for (int i = 0; i < n; i++) {
        count[v[i]]++;
    }

    // Transforme o vetor de contagem em um vetor de posições cumulativas
    for (int i = 1; i <= max; i++) {
        count[i] += count[i - 1];
    }

    // Ordene o array
    for (int i = n - 1; i >= 0; i--) {
        sorted[count[v[i]] - 1] = v[i];
        count[v[i]]--;
    }

    // Copie os valores ordenados de volta para o array original
    for (int i = 0; i < n; i++) {
        v[i] = sorted[i];
    }

    // Libere a memória alocada
    free(count);
    free(sorted);
}
```
???

??? Desafio 2 - Ordenação de Estruturas Complexas
Adapte o algoritmo de Counting Sort para ordenar um array de estruturas ***Student***, cada uma contendo um identificador inteiro **id** e um campo **name**. Utilize as constantes **MAX_NAME_LENGTH** para o tamanho máximo do nome e **MAX_ID_VALUE** para o valor máximo do identificador **id** que você espera manipular.

```c
// Estrutura para representar um aluno
typedef struct {
    int id;
    char name[MAX_NAME_LENGTH];
} Student;
```

::: Dicas

1. **Estrutura *Student***: Revise a definição da estrutura ***Student*** para entender como os dados estão organizados.

2. **Constantes Definidas**: Use as constantes **MAX_NAME_LENGTH** e **MAX_ID_VALUE** para definir o tamanho dos arrays dentro da função **counting_sort**.

3. **Lógica de Contagem**: Lembre-se de que você está contando e ordenando com base nos valores do campo **id** dentro da estrutura ***Student***.

4. **Inicialização do Vetor de Contagem**: Inicialize o vetor de contagem apropriadamente para acomodar todos os possíveis valores de **id** de **0** a **MAX_ID_VALUE** .

5. **Alocação de Memória para Arrays**: Não se esqueça de alocar memória para o array **sorted** que irá conter as estruturas ***Student*** temporariamente ordenadas.

Utilize essas dicas para guiar seu processo de codificação e lembre-se de testar sua função com um conjunto de dados que inclua uma variedade de **ids** e nomes.
:::

::: Gabarito

```c
#define MAX_NAME_LENGTH 256
#define MAX_ID_VALUE 100 // Ajuste esse valor para o maior ID que você espera

// Estrutura para representar um aluno
typedef struct {
    int id;
    char name[MAX_NAME_LENGTH];
} Student;

void counting_sort_students(Student *students, int size) {
    // Array para contagem e array auxiliar para alunos ordenados
    int count[MAX_ID_VALUE + 1] = {0};
    Student *sorted = (Student *)malloc(size * sizeof(Student));

    // Contar as ocorrências de cada ID
    for (int i = 0; i < size; i++) {
        count[students[i].id]++;
    }

    // Transformar count em posições cumulativas
    for (int i = 1; i <= MAX_ID_VALUE; i++) {
        count[i] += count[i - 1];
    }

    // Ordenar os alunos usando o array de contagem
    for (int i = size - 1; i >= 0; i--) {
        sorted[count[students[i].id] - 1] = students[i];
        count[students[i].id]--;
    }

    // Copiar os alunos ordenados de volta para o array original
    for (int i = 0; i < size; i++) {
        students[i] = sorted[i];
    }

    // Liberar memória do array auxiliar
    free(sorted);
}

int main() {
    // Exemplo de uso da função counting_sort_students
    Student students[] = {
        {10, "Alice"},
        {2, "Bob"},
        {4, "Charlie"},
        {1, "Dave"},
        {3, "Eve"},
        {5, "Frank"}
    };
    int size = sizeof(students) / sizeof(students[0]);

    counting_sort_students(students, size);

    for (int i = 0; i < size; i++) {
        printf("%d %s\n", students[i].id, students[i].name);
    }

    return 0;
}
```
???