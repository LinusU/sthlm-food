# sthlm-food

Du är hungrig och du är i Stockholm, här är vad du gör.

 - [Lunch Take Away](dist/lunch-takeaway.geojson)
 - [Lunch Äta Inne](dist/lunch-eatin.geojson)
 - [Middag Take Away](dist/dinner-takeaway.geojson)
 - [Middag Äta Inne](dist/dinner-eatin.geojson)

## Properties

 - `T`: Namn på restaurangen
 - `L`: Min personliga rekommendation

## Hacking

Lägg till restauranger i `src/restaurants.json` och kör `node build.js`. Hitta
kordinaterna med hjälp av [mapcoordinates.net](http://www.mapcoordinates.net).

Observera att kordinaterna specificeras som `[longitude, latitude]` i enlighet
med [GEOJSON](http://geojson.org).
