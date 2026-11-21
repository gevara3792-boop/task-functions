/**
 * 1. Фильтр, отбирающий числа больше заданного num.
 * Возвращает функцию для использования в arr.filter().
 */
export function higherThan(num) {
    return function (element) {
        return element > num;
    };
}

/**
 * 2. Фильтр, отбирающий строки, содержащие подстроку substr.
 * Регистр важен (используем метод includes()).
 */
export function hasSubstring(substr) {
    return function (element) {
        return element.includes(substr);
    };
}

/**
 * 3. Функция для каррирования умножения.
 * multiply(5)(10) -> 50
 */
export function multiply(num) {
    return function (secondNum) {
        return num * secondNum;
    };
}
