export const handleStarColor = (rate: number) => {
    if (rate >= 8) {
        return '#60A561'
    }
    else if (rate >= 7) {
        return 'lightgreen'
    }
    else if (rate >= 6) {
        return 'yellow'
    }
    else {
        return '#FF5A5F'
    }
}