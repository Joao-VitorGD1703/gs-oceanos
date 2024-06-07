import { Especie } from "./especies"
import { ProjetoConservacao } from "./projetoConservacao"

export type OceanData = {
    regiao: string | null,
    temperaturaAgua: number,
    pH: number,
    nivelPoluicao: string | null,
    especies: (Especie | null)[] | null,
    projetosConservacao: (ProjetoConservacao | null)[] | null
}