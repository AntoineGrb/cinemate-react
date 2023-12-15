
interface CreditProps {
    known_for_department:string,
    name:string
}

interface RecommandationProps {
    id:number,
    poster_path:string
}

//Formater le tableau du cast
export const formatActorsData = (data: CreditProps[]) => {
    const actors = data
        .filter((el) => el.known_for_department === 'Acting')
        .slice(0,5)
    return actors
}

//Formater le tableau du crew
export const formatDirectorData = (data: CreditProps[]) => {
    const directors = data
        .filter((el) => el.known_for_department === 'Directing')
    return directors
}

//Formater le tableau des recommandations
export const formatRecommandationsData = (data: RecommandationProps[]) => {
    const recommandations = data
        .filter(el => el.poster_path !== null)
        .slice(0,10)
    return recommandations
}