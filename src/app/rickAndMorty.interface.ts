export interface RESTRickAndMorty{
    info: Info;
    results: Results[];
}

export interface Info{
    count: number;
    pages: number;
    next: number;
    prev: null | string;
}

export interface Results{
    id: number;
    name: string;
    status: string;
    species: string;
    gender: string;
    image: string;

}