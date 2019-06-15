## Aplicacion de Clima 
Esta aplicación nos muestra a que temperatura estamos según la ciudad que le enviemos por consola.

Utiliza las API de:
 - [City Geolocation](https://rapidapi.com/dev132/api/city-geo-location-lookup), con la cual obtenemos la latitud y longitud según el nombre de la ciudad
 - [Open Weather Map](https://openweathermap.org/), con la cual obtenemos la temperatura según la latitud y longitud de la ciudad.

### Uso
1. Para poder instalar todos los paquetes debemos ejecutar el siguiente comando.
 ```
 npm install
 ```
2. Para obtener el mensaje con la temperatura de la ciudad debemos usar el siguiente comando
```
node app -d 'Cucuta Colombia'
#Output El clima de Cucuta Colombia es de 28°C.
```