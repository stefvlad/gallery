# Dokumentacja Aplikacji Galeria

## Opis Aplikacji

Aplikacja Galeria jest platformą do zarządzania obrazami i galeriami. Umożliwia użytkownikom przeglądanie, dodawanie, edycję i usuwanie zarówno pojedynczych obrazów, jak i kolekcji galerii.

## Wykorzystane Pakiety

- [http-errors](https://www.npmjs.com/package/http-errors): Obsługa błędów HTTP.
- [express](https://www.npmjs.com/package/express): Framework do tworzenia aplikacji sieciowych w Node.js.
- [mongoose](https://www.npmjs.com/package/mongoose): Narzędzie do modelowania obiektów MongoDB dla aplikacji Node.js.
- [pug](https://www.npmjs.com/package/pug): Silnik szablonów do renderowania widoków HTML.
- [morgan](https://www.npmjs.com/package/morgan): Middleware do logowania żądań HTTP.
- [cookie-parser](https://www.npmjs.com/package/cookie-parser): Middleware do parsowania ciasteczek.
- [path](https://nodejs.org/api/path.html): Narzędzie do obsługi ścieżek plików.

## Opis Interfejsu (Ścieżek/API)

### Index

- `GET /`: Wyświetla główną stronę aplikacji.

### Użytkownicy

- `GET /users`: zwraca listę użytkowników.
- `GET /user_login`: wyświetlenie formularza logowania.
- `POST /user_login`: przetwarzanie danych logowania.
- `GET /user_logout`: wylogowanie użytkownika.
- `GET /user_add`: dodawanie użytkownika.
- `POST /user_add`: przetwarzanie danych dodawania nowego użytkownika.

### Obrazy

- `GET /images`: zwraca listę obrazów.
- `GET /image_add`: wyświetlenie formularza dodawania obrazu.
- `POST /image_add`: przetwarzanie danych dodawania nowego obrazu.
- `GET /:id/delete`: usuwanie obrazu o określonym identyfikatorze.
- `DELETE /:id/change`: zmiana danych obrazu o określonym identyfikatorze.

### Galerie

- `GET /galleries`: zwraca listę wszystkich galerii.
- `GET /gallery_add`: wyświetlenie formularza dodawania galerii.
- `POST /gallery_add`: przetwarzanie danych dodawania nowej galerii.
- `GET /gallery_browse`: przeglądanie dostępnych galerii i obrazów w nich.
- `POST /gallery_browse`: przetwarzanie danych przeglądania galerii.
- `GET /:id/delete`: usuwanie galerii o określonym identyfikatorze.

### Statyczne Zasoby

- `GET /galleries/images/:filename`: Pobiera statyczny obraz z galerii.

## Opis Modeli

### Użytkownik

- `_id`: ObjectId
- `first_name`: String
- `last_name`: String
- `username`: String
- `password`: String

### Obraz

- `_id`: ObjectId
- `name`: String
- `description`: String
- `path`: String
- `gallery`: ObjectId

### Galeria

- `_id`: ObjectId
- `name`: String
- `description`: String
- `updated`: Date
- `user`: ObjectId

## Opis Konstrukcji Aplikacji

Aplikacja składa się z:

1. **Serwera Express.js**: Obsługuje żądania HTTP i zarządza routingiem.
2. **Baza danych MongoDB**: Przechowuje dane użytkowników, obrazów i galerii.
3. **Modele Mongoose**: Definiują strukturę danych w bazie MongoDB.
4. **Ścieżki/API**: Określają sposoby interakcji z aplikacją poprzez protokoł HTTP.
5. **Middleware**: Obsługuje logowanie, parsowanie żądań, obsługę błędów itp.

## Wykorzystane Technologie

- Node.js
- Express.js
- MongoDB
- Mongoose
