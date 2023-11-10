Counting Sort
======

Problema
---------

Entrada:

- **v**, um vetor de inteiros;
- **n**, o tamanho de **v**.

Saída:

- Modifica **v** para que os elementos originais estejam em ordem não-decrescente, permitindo elementos iguais em sequência.

Ideia
---------

O Counting Sort opera contando a frequência de cada valor dentro de um conjunto limitado e usando essa contagem para posicionar cada elemento diretamente em sua posição correta no vetor ordenado. É um algoritmo eficiente para dados com variação limitada de valores, pois sua velocidade não depende de comparações diretas entre elementos.

Características principais
---------

- Complexidade O(n) em todos os casos;
- É um algoritmo de ordenação estável;
- Utiliza memória auxiliar;
- É mais eficiente para ordenar números inteiros.


Por que o Counting Sort?
------------

O Counting Sort é ideal e apresenta complexidade *O(n)* para situações com baixa variação nos valores de entrada e é particularmente útil quando os dados são números inteiros positivos.

!!!Observação
É possível aplicar o Counting Sort para vetores de valores negativos e contínuos através de operações de adição e multiplicação dos valores, sendo mais simples e aplicável com valores negativos que dependem somente de soma (*inteiros*). Se fosse um vetor de valores contínuos(*floats*), por exemplo, a quantidade de multiplicações necessárias para ajustar os valores prejudicariam muito a eficiência do código.
!!!

Aplicações reais do Counting Sort
------------
Usos não efetivos:

* Preços em um site, devido à presença de muitos valores decimais e variação extensa.
* Notas em uma sala de aula, onde as notas podem ter muitos decimais e variar de 0 a 100.
* Datas de eventos históricos, que tendem a ter uma grande variação e não se beneficiam da ordenação baseada em contagem.

Usos efetivos:

* Idades de um grande grupo de pessoas, com variação geralmente entre 0 e 100.
* Votos em uma eleição com um número limitado de candidatos, perfeitos para a contagem e reagrupamento rápido.
* Ordenação de roupas por tamanho (P, M, G, GG), que podem ser convertidos em valores inteiros para ordenação eficiente.

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

Implementação em C
---------

A função **counting_sort** abaixo ordena um vetor de números inteiros que se enquadram em um intervalo conhecido, no caso de 0 a 9. Um vetor de contagem acumula a frequência de cada valor, e um vetor temporário organiza os elementos antes de serem recolocados no vetor original.

O código a seguir ilustra a implementação da ordenação de objetos complexos usando Counting Sort em C:

```c
void counting_sort(int v[], int n) {
    int count[10] = {0}; // Intervalo de 0 a 9
    int sorted[n], i;

    // Contar as ocorrências
    for(i = 0; i < n; i++) count[v[i]]++;

    // Transformar count em posições cumulativas
    for(i = 1; i < 10; i++) count[i] += count[i - 1];

    // Ordenar o vetor
    for(i = n - 1; i >= 0; i--) {
        sorted[--count[v[i]]] = v[i];
    }

    // Copiar para o vetor original
    for(i = 0; i < n; i++) v[i] = sorted[i];
}

```
Para melhor entender essa implementação vamos ao passo a passo, ou melhor, loop a loop!

* **Loop 1: Contar as ocorrências**

:loop1

* **Loop 2: Transformar count em posições cumulativas**

:loop2

* **Loop 3: Ordenar o array**

:loop3

* **Loop 4: Copiar para o array original**

:loop4

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