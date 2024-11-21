# Validações descomplicadas com ZOD

---

## Introdução

- Zod é uma biblioteca de validação de dados para JavaScript e TypeScript.
- Ele permite que você defina schemas para seus dados e validação de entrada.
- Ele também fornece uma maneira fácil de transformar dados em objetos JavaScript.

> Se você precisar de validação, transformação, refinamento e tipagem de dados estruturados, Zod é uma ótima opção.

---

## EXERCÍCIO 1:

Primeiro, precisamos criar um schema simples para validar uma string que representa um nome de usuário. 
As regras são:

- Deve ser uma string
- Deve ter no mínimo 3 caracteres
- Deve ter no máximo 20 caracteres

Como você escreveria este schema usando Zod?
(Dica: Use z.string() como ponto de partida)

## EXERCÍCIO 2

Vamos trabalhar com validações mais complexas.

Agora, precisamos criar um schema para validar um objeto que representa um usuário com as seguintes regras:

- email: deve ser um email válido
- idade: deve ser um número entre 18 e 100
- apelido: opcional, mas se fornecido deve ser uma string com no mínimo 2 caracteres

Como você escreveria este schema usando Zod?
(Dica: Use z.object() para criar um objeto com múltiplas propriedades)

## EXERCÍCIO 3

Vamos trabalhar com arrays e validações aninhadas.

Crie um schema para validar uma lista de produtos em um carrinho de compras. Cada produto deve ter:

- nome: string com pelo menos 3 caracteres
- preço: número positivo maior que zero
- quantidade: número inteiro positivo
- categorias: array de strings com pelo menos 1 categoria

O carrinho em si deve ter:

- produtos: array com pelo menos 1 produto
- clienteId: string no formato UUID

(Dica: Use z.array() para arrays e z.string().uuid() para validar UUID)

## EXERCÍCIO 4

Aprenderemos sobre transformações (refinements) e validações personalizadas.

Crie um schema para validar um pedido de pizza com as seguintes regras:

1. tamanho: deve ser "P", "M" ou "G"
2. sabor: string com pelo menos 3 caracteres
3. extras: array de strings opcional
4. preço: número que deve ser calculado automaticamente baseado em:
    - P: R$ 20
    - M: R$ 30
    - G: R$ 40
    - Cada extra adiciona R$ 5

Use o método `.transform()` para calcular o preço automaticamente!

(Dica: Você pode usar z.enum() para o tamanho e transform() para calcular o preço)

Tente criar este schema que não só valida, mas também transforma os dados!
---

## EXERCÍCIO 5:

Validação de Dados Complexos

Vamos criar um schema para validar um formulário de cadastro de desenvolvedor com validações condicionais:

- Nome completo com no mínimo 5 caracteres
- Email válido
- Linguagem de programação principal (obrigatório)
- Senioridade: Junior, Pleno ou Senior
- Se for Senior, precisa ter:
    - Tempo de experiência (mínimo 5 anos)
    - Pelo menos 2 tecnologias avançadas

Como você implementaria este schema com Zod?

(Dica: Use `.refine()` para validações condicionais)