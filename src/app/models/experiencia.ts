export interface Experiencia {
    _id?: string,
    cargo: string,
       
    empresa: string,

    mes_inicio:string,
        
    
    ano_inicio:string,
    

      mes_termino?:string,

    
    ano_termino?:string,


    localidade?: string,
    tipo_trabalho?: string,

    descricao?: string
}
