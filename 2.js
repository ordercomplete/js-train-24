console.log("Завдання: 2 ==============================");

// Створюємо функцію task2
function task2() {
  function promise1() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Проміс 1 виконано");
      }, 2000);
    });
  }

  function promise2() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Проміс 2 виконано");
      }, 5000);
    });
  }

  Promise.race([promise1(), promise2()])
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.error(error);
    })
    .finally(() => {
      console.log("Завдання 2 завершено");
    });
  // Створюємо функцію promise1
  // Повертаємо новий проміс
  // Використовуємо setTimeout для імітації асинхронної операції, яка завершується через 2 секунди.
  // Після 2 секунд викликаємо resolve з результатом проміса, який є рядком "Проміс 1 виконано"
  // Створюємо функцію promise2
  // Повертаємо новий проміс
  // Використовуємо setTimeout для імітації асинхронної операції, яка завершується через 5 секунди.
  // Після 5 секунд викликаємо resolve з результатом проміса, який є рядком "Проміс 2 виконано"
  // Використовуємо Promise.race для визначення, який проміс виконується першим.
  // Метод повертає новий проміс, який вирішується або відхиляється негайно після розв'язання або відхилення будь-якого з промісів у переданому списку.
  // У разі успіху виводимо результат
  // У разі помилки виводимо повідомлення про помилку
  // Незалежно від результату, виводимо повідомлення про завершення обробки промісів, який є рядом "Завдання 2 завершено"
}

// Викликаємо функцію task2
task2();
