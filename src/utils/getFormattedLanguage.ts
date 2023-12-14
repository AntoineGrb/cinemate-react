import { languagesFormatted } from '../data/formattedData.js'

//Récupérer le langage formaté (tableau formattedData à part)
export const getFormattedLanguage = (language: string) => {

    const formattedLanguage = languagesFormatted.find(lang => lang.value === language);
        if (formattedLanguage) {
            return formattedLanguage.name
        } else {
            return language.toUpperCase()
        }
}