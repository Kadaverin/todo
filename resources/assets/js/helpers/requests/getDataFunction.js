import setHeaders from './setHeaders';

export default function get(url) {
  // Возвращаем новое Обещание.
  return new Promise( function(resolve, reject) {
    // Делаем привычные XHR вещи
    var req = new XMLHttpRequest();

    req.open('GET', url);
    setHeaders (req);

    req.onload = function() {
      // Этот кусок вызовется даже при 404’ой ошибке
      // поэтому проверяем статусы ответа
      if (req.status == 200) {
        // Завершаем Обещание с текстом ответа
        resolve(JSON.parse(req.response));
      }
      else {
        // Обламываемся, и передаём статус ошибки
        // что бы облегчить отладку и поддержку
        reject(Error(req.statusText));
      }
    };

    // отлавливаем ошибки сети
    req.onerror = function() {
      reject(Error("Network Error"));
    };

    // Делаем запрос
    req.send();
  });
}