# Webserver in Node.js

In Node.js existieren Module, die die Funktionalität der Node.js-Plattform erweitern.\
Im nachfolgenden Beispiel benötigen wir das HTTP-Modul.\
Erster Webserver:

```javascript
import { createServer } from 'http';

const server = createServer();
server.listen(8080, () => {
  console.log(
    `Server is listening to http://localhost.${server.address().port}`
  );
});
```

## Aufgabe 1

Kopieren Sie diesen Code und speichern diesen unter dem Namen: "server.mjs"\
Testen Sie den Webserver auf Ihrem System. Auf der Console sollte das Ergebnis wie folgt aussehen:

```
$ node server.mjs
Server is listening to http://localhost:8080
```

Rufen Sie http://localhost:8080 mit Ihren Browser den Webserver. Was stellen Sie fest?

## Aufgabe 2

Erweitern Sie Ihren Webserver, so dass Ihr Browser folgendes anzeigt: Hello World\
Recherchieren Sie dazu im Internet oder benutzen Sie die Dokumentation von Node: [docs](https://nodejs.org/dist/latest-v16.x/docs/api/ 'docs')

## Aufgabe 3

Erweitern Sie Ihren Webserver, so dass er eine HTML-Antwort liefert. Die HTML-Antwort soll wie folgt aussiehen: <h1><span style="color:green">Hello World</span></h1>

## Aufgabe 4

Erweitern Sie Ihren Webserver, so dass dieser eine vom Benutzer in der URL angegebene Zeichenkette auf der ausgelieferten Seite anzeigt. Im Request-Objekt liegt die Information, welche URL der Benutzer in seinem Browser angegeben hat, in der Eigenschaft url vor.\
Beispiel: http://localhost:8080/?name=M133 gibt im Browser folgendes aus: <h1><span style="color:green">Hello M133</span></h1>

## Aufgabe 5

Erweitern Sie Ihren Webserver, so dass dieser eine vom Benutzer in der URL angegebene Zeichenkette auf der ausgelieferten Seite anzeigt. Im Request-Objekt liegt die Information, welche URL der Benutzer in seinem Browser angegeben hat, in der Eigenschaft url vor.\
Beispiel: http://localhost:8080/?vorname=Markus&nachname=Ineichen gibt im Browser folgendes aus: <h1><span style="color:green">Hello Markus Ineichen</span></h1>
