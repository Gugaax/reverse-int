module.exports = function reverse (n) {
    n = Math.abs(n);
    // преобразовали к абсолютному значению

    let new_n = n.toString()  
    // преоразовали в строку
    .split("")
    // преобразовали  в массив
    .reverse()
    // перевернули
    .join("");
    // склеили в строку
       
    return (new_n);
}
