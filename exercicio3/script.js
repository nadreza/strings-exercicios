//Crie a const para a frase aqui


function novaFuncao () {
    const fraseOriginal = "```Jorge tem uma casa verde e com portão azul, com os dizeres: \"BOAS VINDAS, mas não deixe o gato sair\"```";
    const trocaNome = fraseOriginal.replace("verde","rosa").replace("azul","laranja");
    const contemVerde = trocaNome.includes("verde")
    const contemLaranja = trocaNome.includes("laranja")
    

    console.log(fraseOriginal);
    console.log(trocaNome);
    console.log(contemVerde);
    console.log(contemLaranja);
}

novaFuncao()


/* # Exercício 3

A partir da frase a seguir, faça o que se pede.

```
Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS, mas não deixe o gato sair"
```

a) Crie uma `const` no seu código para **guardar a frase** (com aspas e tudo);

b) Implemente uma função que recebe por parâmetro a `const` criada no passo **a)**  e imprima essa string trocando **verde** por **rosa**, e **azul** por **laranja**;

c) **Verifique** se a nova string contém as palavras **verde** e **laranja**.

**EXTRA:** tente fazer o trecho “mas não deixe o gato sair” ficar em **letras maiúsculas**, assim como o “BOAS VINDAS” */