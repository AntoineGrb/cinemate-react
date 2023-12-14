export const handleStarColor = (rate: number) => {
    if (rate >= 8) {
        return '#60A561'
    }
    else if (rate >= 6.5) {
        return 'lightgreen'
    }
    else if (rate >= 5) {
        return 'yellow'
    }
    else {
        return '#FF5A5F'
    }
}