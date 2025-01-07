
export function checkDateGreeting(date: Date){
    const hours = date.getHours()
    if (hours < 12){
        return "Bom dia!"
    } 
    if (hours < 18){
        return "Boa tarde!"
    } 
    return "Boa noite!"
}