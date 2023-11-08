
Counting Sort
======

Introdução ao Counting Sort
---------

O Counting Sort é um algoritmo de ordenação que funciona contando o número de objetos que possuem valores de chaves distintos. É eficiente quando o intervalo dos valores dos objetos a serem ordenados não é significativamente maior do que o número de objetos. A ideia básica é determinar, para cada entrada \( x \), o número de elementos menores que \( x \).

Passos para a execução do Counting Sort:

1. Contar a ocorrência de cada elemento;
2. Acumular o contador de cada índice;
3. Posicionar cada elemento em sua posição correta no array de saída.

O Counting Sort é especialmente eficiente quando o intervalo de dados de entrada é não muito maior que o número de objetos a serem ordenados.

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

Estilização e Formatação
---------

Ao longo de um texto, você pode usar *itálico*, **negrito**, {red}(destaque em vermelho) e
[[Ctrl]]. Aqui está uma equação importante para o Counting Sort: $$  k = \max(\text{valores de entrada})  $$. Para uma equação maior, veja abaixo:

$$ C[i] = C[i] + C[i-1] $$

Este é o passo de acumulação no Counting Sort, onde \( C[i] \) é o array de contagem.

Exemplo de Código
---------

Aqui está um exemplo de implementação do Counting Sort em C:

``` c
void counting_sort(int *array, int size, int max_val) {
    int count[max_val + 1], i, j;

    for (i = 0; i <= max_val; i++) count[i] = 0;
    for (i = 0; i < size; i++) count[array[i]]++;

    for (i = 0, j = 0; i <= max_val; i++) {
        while(count[i] > 0) {
            array[j++] = i;
            count[i]--;
        }
    }
}
```

!!! Aviso
Lembre-se que o Counting Sort não é um algoritmo de comparação e funciona melhor com números inteiros e um pequeno intervalo de valores.
!!!

??? Exercício

Implemente o Counting Sort para um array de caracteres. Considere o valor ASCII dos caracteres para o processo de contagem e ordenação.

::: Gabarito
O exercício pode ser resolvido inicializando um array de contagem com o tamanho do maior valor ASCII dos caracteres presentes no array de entrada, e então seguir os mesmos passos do Counting Sort para inteiros.
:::
