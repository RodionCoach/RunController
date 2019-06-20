# Yellow_RunController
Test task for Yellow by React.js

Разработать тестовый Single Page Application (SPA) для учета занятий о беге. Разработка подразумевает использование ReactJS.

1 Сверстать простой макет с учетом правил Responsive Web Design. 
В итоге должен получиться адаптивный макет, работающий как на десктопе, так и на мобильном телефоне. Дизайн и разметка находится в zeplin (стоит внимательно изучить функционал zeplin )

http://zeplin.io
- состояние для  mobile:   логин zeplin3@yellow.id / пароль mobile_test
- состояние для desktop:  логин zeplin4@yellow.id / пароль mobile_test
   
2 Интеграция фронтенд приложение с бэкенд REST API. 

Документация: https://jogtracker.herokuapp.com/api/swagger

Авторизация в API происходит с использованием токена, который нужно отправлять в качестве хэдера с каждым запросом, требующим авторизированного пользователя. http://take.ms/ZWrtf 

curl -X GET --header 'Accept: application/json' --header 'Authorization: Bearer eb8cdf9e61521369da24ab55f0095f5da870881990d9b75daefef50333178daf' 'https://jogtracker.herokuapp.com/api/v1/auth/user'
 
2.1 Реализовать механизм сессии. 
По нажатии на let me in получить токен и сохранить его в локальном хранилище, после чего отобразить список всех пробежек текущего пользователя. 

Дизайн http://take.ms/kHnB5 

https://jogtracker.herokuapp.com/api/swagger#!/auth/postV1AuthUuidlogin

для получения токена можно использовать строку «hello» 
https://jogtracker.herokuapp.com/api/swagger#!/data/getV1DataSync 




2.2 Реализовать форму внесения/редактирования информации о забеге. 
Вызывается по нажатию на (+)

Дизайн http://take.ms/cPdN7

- http://localhost:3000/api/swagger#!/data/postV1DataJog 
- http://localhost:3000/api/swagger#!/data/putV1DataJog 


3 Реализовать фильтрацию записей о беге. 
При клики на иконку фильтра появляется панель, в которой можно выбрать диапазон дат (date picker), после чего отображаются только записи, соответствующие критерию

Дизайн http://take.ms/rbLJR 


4 Задеплоить проект на heroku

Исходный код проекта с историей коммитов должен быть залит в репозиторий https://bitbucket.org/ или https://github.com/ 

5 Реализовать UI тесты для Swagger UI
Реализовать несколько тестов с использованием Jest Framework 
 https://jogtracker.herokuapp.com/api/swagger

https://facebook.github.io/jest/


P.S. не забываем что макет адаптивный  
