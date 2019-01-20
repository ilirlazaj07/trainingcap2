interface Indirizzo {
    via: string
}

export interface User {

    id: number,
    nome: string,
    cognome: string,
    eta: number,
    indirizzo?: Indirizzo

}