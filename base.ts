import people from './people.json'

// https://www.unimed.coop.br/viver-bem/pais-e-filhos/estatura-por-idade

/** Faça a implementação da função alturaMedia, que deve receber um argumento IPeople, e verificar se a pessoa está acima, abaixo ou exatamente na altura média
 *  OBS: as idades utilizadas serão 5, 10 e 15 apenas.
 */

interface IPeople  
{
    nome: string,
    sexo: string,
    idade: number,
    altura: number
}

export function alturaMedia(IPeople:any) 
{
    if(IPeople.sexo=='F')
    {
        if(IPeople.idade==5)
        {
            if(IPeople.altura<100)
            {
                console.log('Altura abaixo do Minimo para idade');
            }
            else
            if(IPeople.altura>118.8)
            {
                console.log('Altura acima do Maximo para idade');
            }
            else
            if(IPeople.altura==109.1)
            {
                console.log('Altura media para idade');
            }
            else
            if(IPeople.altura<=118.8 && IPeople.altura>=100 && IPeople.altura!=109.1)
            {
                console.log('Altura dentro dos parametros ideais');
            }
        }
        else
        if(IPeople.idade==10)
        {
            if(IPeople.altura<127.7)
            {
                console.log('Altura abaixo do Minimo para idade');
            }
            else
            if(IPeople.altura>149.3)
            {
                console.log('Altura acima do Maximo para idade');
            }
            else
            if(IPeople.altura==138.6)
            {
                console.log('Altura media para idade');
            }
            else
            if(IPeople.altura<=149.3 && IPeople.altura>=127.7 && IPeople.altura!=138.6)
            {
                console.log('Altura dentro dos parametros ideais');
            }
        }
        else
        if(IPeople.idade==15)
        {
            if(IPeople.altura<150.2)
            {
                console.log('Altura abaixo do Minimo para idade');
            }
            else
            if(IPeople.altura>171.6)
            {
                console.log('Altura acima do Maximo para idade');
            }
            else
            if(IPeople.altura==161.1)
            {
                console.log('Altura media para idade');
            }
            else
            if(IPeople.altura<=171.6 && IPeople.altura>=150.2 && IPeople.altura!=161.1)
            {
                console.log('Altura dentro dos parametros ideais');
            }
        }

    }
    else
    if(IPeople.sexo=='M')
    {
        if(IPeople.idade==5)
        {
            if(IPeople.altura<102)
            {
                console.log('Altura abaixo do Minimo para idade');
            }
            else
            if(IPeople.altura>117.1)
            {
                console.log('Altura acima do Maximo para idade');
            }
            else
            if(IPeople.altura==108.7)
            {
                console.log('Altura media para idade');
            }
            else
            if(IPeople.altura<=117.1 && IPeople.altura>=100 && IPeople.altura!=108.7)
            {
                console.log('Altura dentro dos parametros ideais');
            }
        }
        else
        if(IPeople.idade==10)
        {
            if(IPeople.altura<128.7)
            {
                console.log('Altura abaixo do Minimo para idade');
            }
            else
            if(IPeople.altura>150.3)
            {
                console.log('Altura acima do Maximo para idade');
            }
            else
            if(IPeople.altura==140.3)
            {
                console.log('Altura media para idade');
            }
            else
            if(IPeople.altura<=150.3 && IPeople.altura>=128.7 && IPeople.altura!=140.3)
            {
                console.log('Altura dentro dos parametros ideais');
            }
        }
        else
        if(IPeople.idade==15)
        {
            if(IPeople.altura<151.7)
            {
                console.log('Altura abaixo do Minimo para idade');
            }
            else
            if(IPeople.altura>181.8)
            {
                console.log('Altura acima do Maximo para idade');
            }
            else
            if(IPeople.altura==167.8)
            {
                console.log('Altura media para idade');
            }
            else
            if(IPeople.altura<=181.8 && IPeople.altura>=151.7 && IPeople.altura!=167.8)
            {
                console.log('Altura dentro dos parametros ideais');
            }
        }

    }
    

}