//Declarações de variáveis
let nome: string = 'will';
let idade: number = 25;
let estaAtivo: boolean = true;

//Arrays
let numeros: number[] = [1, 2, 3, 4, 5];
let nomes: string[] = ['will', 'Rafael', 'Luigi'];
let misto: (string | number)[] = ['will', 23, 'Rafael', 17];
let misto2: Array<string | number> = ['will', 23, 'Rafael', 17];

//Tuplas
let pessoa: [string, number] = ['Amanda', 23];

//Union Types
let id: number | string = 123;
id = 'ABC123';

//Interfaces - são usadas para definir estrutura de objetos
interface Usuario {
    nome: string;
    idade: number;
    email?: string; //Opcional
}

//Utilizar elas fica assim:
let novo_usuario: Usuario = {
    nome: 'will',
    idade: 23
};