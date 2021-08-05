export function onlyYear(date) {
    let year = ""
    for (let i = 0; i < 4; i++) {
        year += date[i]
    }
    return year
}
