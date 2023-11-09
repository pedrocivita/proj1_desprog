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

Implementação
---------

A função `counting_sort` abaixo ordena um vetor de números inteiros que se enquadram em um intervalo conhecido, como de 0 a 9. Um vetor de contagem acumula a frequência de cada valor, e um vetor temporário organiza os elementos antes de serem recolocados no vetor original.

```c
#include <stdio.h>

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

int main() {
    int v[] = {4, 2, 2, 8, 3, 3, 1, 0, 0, 5, 7, 6, 9, 9, 8, 5, 4, 3};
    int n = sizeof(v) / sizeof(v[0]);

    counting_sort(v, n);

    // Imprimir o vetor ordenado
    for(int i = 0; i < n; i++) printf("%d ", v[i]);
    printf("\n");

    return 0;
}
```

Introdução ao Counting Sort
---------

O Counting Sort é um algoritmo de ordenação que é eficaz quando o intervalo de dados de entrada não é significativamente maior que o número de objetos a serem ordenados. Possui as seguintes características:

- Complexidade O(n) em todos os casos
- É um algoritmo de ordenação estável
- Utiliza memória auxiliar
- É mais eficiente para ordenar números inteiros

Exemplo de Função Padrão de Counting Sort
---------

O exemplo a seguir mostra como o Counting Sort pode ser usado para ordenar um array de números inteiros onde cada número está entre 0 e 9:

```c
void counting_sort(int *array, int size) {
    int count[10] = {0}; // Sabemos que os números vão de 0 a 9
    int sorted[size], i;

    // Contar as ocorrências
    for(i = 0; i < size; i++) count[array[i]]++;

    // Transformar count em posições cumulativas
    for(i = 1; i < 10; i++) count[i] += count[i - 1];

    // Ordenar o array
    for(i = size - 1; i >= 0; i--) {
        sorted[--count[array[i]]] = array[i];
    }

    // Copiar para o array original
    for(i = 0; i < size; i++) array[i] = sorted[i];
}

int main() {
    int array[] = {4, 2, 2, 8, 3, 3, 1, 0, 0, 5, 7, 6, 9, 9, 8, 5, 4, 3};
    int size = sizeof(array) / sizeof(array[0]);

    counting_sort(array, size);

    // Imprimir o array ordenado
    for(int i = 0; i < size; i++) printf("%d ", array[i]);
    printf("\n");

    return 0;
}
```

Por que o Counting Sort?
------------

O Counting Sort é ideal para situações com baixa variação nos valores de entrada e é particularmente útil quando os dados são números inteiros positivos. É possível estender seu uso para incluir números negativos e contínuos com algumas adaptações.

!!! Extra
É possível aplicar o Counting Sort para vetores de valores negativos e contínuos através de operações de adição e multiplicação dos valores, sendo mais simples e aplicável com valores negativos que dependem somente de soma, uma vez que o processo de multiplicação pode aumentar a distância entre os valores do vetor, prejudicando a eficiência do código.
!!!

Aplicações do Counting Sort
------------
Usos não efetivos:

* Preços em um site, devido à presença de muitos valores decimais e variação extensa.
* Notas em uma sala de aula, onde as notas podem ter muitos decimais e variar de 0 a 100.
* Datas de eventos históricos, que tendem a ter uma grande variação e não se beneficiam da ordenação baseada em contagem.

Usos efetivos:

* Idades de um grande grupo de pessoas, com variação geralmente entre 0 e 100.
* Votos em uma eleição com um número limitado de candidatos, perfeitos para a contagem e reagrupamento rápido.
* Ordenação de roupas por tamanho (P, M, G, GG), que podem ser convertidos em valores inteiros para ordenação eficiente.

Estrutura do Counting Sort
---------
* Inicialização de um array para contagem;
* Contagem das ocorrências de cada número no array de entrada;
* Acumulação das contagens para obter posições no array de saída;
* Movimentação dos objetos para suas posições corretas.

Aqui está um exemplo de array antes e depois da aplicação do Counting Sort:

| Antes   | Depois  |
|---------|---------|
| 3       | 1       |
| 6       | 2       |
| 4       | 3       |
| 1       | 4       |
| 2       | 6       |

Ordenação de Objetos Complexos com Counting Sort
---------
O algoritmo também pode ser adaptado para organizar estruturas de dados complexas, como registros de alunos. A seguir, mostramos como utilizar o Counting Sort para ordenar um array de objetos alunos.

Exemplo 1 
---------
Considere um array de objetos alunos que precisam ser ordenados por número de matrícula.

Implementação em C
---------

O código a seguir ilustra a implementação da ordenação de objetos complexos usando Counting Sort em C:

```c
void counting_sort(int *array, int size) {
    int count[10] = {0}; // Sabemos que os números vão de 0 a 9
    int sorted[size], i;

    // Contar as ocorrências
    for(i = 0; i < size; i++) count[array[i]]++;

    // Transformar count em posições cumulativas
    for(i = 1; i < 10; i++) count[i] += count[i - 1];

    // Ordenar o array
    for(i = size - 1; i >= 0; i--) {
        sorted[--count[array[i]]] = array[i];
    }

    // Copiar para o array original
    for(i = 0; i < size; i++) array[i] = sorted[i];
}
```
Exercícios de Counting Sort
---------
??? Exercício 1 - Ordenação Simples de Números
Implemente o Counting Sort como mostrado acima.

::: Gabarito

```c
// Inserir gabarito para exercício 1 aqui.
```
:::
???

??? Exercício 2 - Ordenação de Registros de Alunos
Adapte e implemente o Counting Sort para ordenar um array de objetos alunos por número de matrícula, como descrito na seção sobre ordenação de objetos complexos.

::: Gabarito

```c
// Inserir gabarito para exercício 2 aqui.
```
???

??? Exercício 3 - Ordenação de Números com um Intervalo Maior
Adapte o Counting Sort para ordenar um array de números inteiros onde o maior número é menor que 100.

::: Gabarito

```c
void counting_sort(int *array, int size, int max) {
    int count[max + 1], i;
    for (i = 0; i <= max; ++i) count[i] = 0;
    int sorted[size];

    for (i = 0; i < size; ++i) count[array[i]]++;

    for (i = 1; i <= max; ++i) count[i] += count[i - 1];

    for (i = size - 1; i >= 0; --i) {
        sorted[count[array[i]] - 1] = array[i];
        count[array[i]]--;
    }

    for (i = 0; i < size; ++i) array[i] = sorted[i];
}

int main() {
    int array[] = {10, 23, 42, 11, 34, 58, 94, 33, 30, 25, 17, 63};
    int size = sizeof(array) / sizeof(array[0]);
    int max_value = INT_MIN;
    for (int i = 0; i < size; i++) {
        if (array[i] > max_value) max_value = array[i];
    }
    counting_sort(array, size, max_value);

    for (int i = 0; i < size; i++) printf("%d ", array[i]);
    printf("\n");

    return 0;
}
```
???

??? Desafio - Ordenação de Estruturas Complexas
Adapte o Counting Sort para ordenar um array de estruturas contendo um identificador inteiro e um nome.

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