export class Usuario {
    id: number;
    username: string;
    password: string;
    nombre: string;
    apellido: string;
    roles: string[] = [];
    evaluaciones: string[] = [];
}
