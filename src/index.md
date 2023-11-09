
Counting Sort
======

Introdução ao Counting Sort
---------

O Counting Sort é um algoritmo de ordenação que funciona contando o número de objetos que possuem valores de chaves distintos e reagrupando-os posteriormente em relação a recorrência em que aparecem no algorítimo, portanto é especialmente eficiente quando o intervalo de dados de entrada é não muito maior que o número de objetos a serem ordenados.
O mesmo é um algorítimo extremamente eficiente para as situações desejadas e possuí as seguintes peculiaridades.

* Complexidade O(n) em todos os casos
* Algorìtimo de ordenação estável
* Utiliza memória auxíliar
* Ordena apenas números inteiros

Por que o Counting Sort??
--------

O Counting Sort é um algorítimo de ordenação especializado em vetores de números inteiros com baixa variação interna, uma vez que o mesmo aloca um vetor de tamanho igual ao número de possibilidades do vetor ordenado e utiliza tais valores como index do mesmo, portanto tal algorítimo não pode ser utilizado em vetores de números não inteiros, uma vez que depende que tais números virarem futuramente index de um próximo vetor é necessário que tais valores sejam discretos para tal.

!!! Extra
É possível aplicar o Counting Sort para vetores de valores negativos e contínuos através de operações de adição e multiplicação dos valores, sendo mais simples e aplicável com valores negativos que dependem somente de soma, uma vez que o processo de multiplicação pode aumentar a distância entre os valores do vetor, prejudicando a eficiência do código.
!!!

Portanto, as aplicações de Counting Sort envolvem ocasiões em que existe baixa variância nos números do vetor principal (pelo menos inferior ao tamanho do vetor) e somente números inteiros positivos (embora números negativos e contínuos possam ser processados). 
O Counting Sort também pode ser buscado em situações em que se necessita de um algorítimo estável e não existe restrição para uso de memória auxíliar.

Usos não efetivos para o Counting Sort:

* Preços em um site
* Notas em uma sala de aula
* 

Usos efetivos para o Counting Sort:

* Idades de um grande grupo de pessoas
* Qualquer ordenação por index

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
