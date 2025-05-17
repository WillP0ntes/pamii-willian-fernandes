
function saudacao (nome: string): string {
    return `Olá, ${nome}!`;
}

console.log(saudacao('Leandro'));


interface Usuario {
    nome: string;
    idade: number;
    email?: string; // Opcional
}


function exibirUsuario(usuario: Usuario): void {
    console.log(`Nome: ${usuario.nome}`);
    console.log(`Idade: ${usuario.idade}`);
}

exibirUsuario({ nome: 'Marcos', idade: 22 });


function listarNomes (nomes: string[]): void {
    nomes.forEach(nome => console.log(nome));
}

listarNomes (['Ana', 'Bruno', 'Carlos']);
