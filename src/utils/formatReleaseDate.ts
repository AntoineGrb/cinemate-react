interface OptionsProps {
    year: 'numeric';
    month: 'long';
    day: 'numeric';
}

export const formatReleaseDate = (date: string) => {
    const dateToFormat = new Date(date);
    const options: OptionsProps = {year: 'numeric', month: 'long', day:'numeric'};
    const formattedDate = dateToFormat.toLocaleDateString('fr-FR', options)
    return formattedDate
}