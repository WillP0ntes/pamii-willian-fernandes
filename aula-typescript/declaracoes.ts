
let nome: string = 'João';
let idade: number = 25;
let estaAtivo: boolean = true;


let numeros: number[] = [1, 2, 3, 4, 5];
let nomes: string[] = ['Ana', 'Bruno', 'Carlos'];
let misto: (string | number) [] = ['Ana', 25, 'Carlos', 30];
let misto2: Array<string | number> = ['Ana', 25, 'Carlos', 30];


let pessoa: [string, number] = ['Maria', 30];


let id: number | string = 123;
id = 'ABC123';


interface Usuario {
    nome: string;
    idade: number;
    email?: string; // Opcional
}


let novo_usuario: Usuario = {
    nome: 'Amanda',
    idade: 18
};
