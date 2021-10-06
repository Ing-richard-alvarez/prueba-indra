# prueba-indra

Para este proyecto, se desarrolló una API en java haciendo uso de SpringBoot y JPA. luego se procedió a crear una SPA con ReatcJS(ingresar al directorio /frontend)

## Temas a considerar

Estos son los puntos que debemos tener en cuenta para correr nuestro proyecto:
- tener instalado el JDK en su version 11
- tener la variable global JAVA_HOME seteada en el computador
- tener el servidor de Mysql instalado
- tener nodeJs en su version estable

### Correr servidor de java con maven
Para correr el proyecto del lado del backend, primero hay que estar sobre la raiz del proyecto y correr el siguiente comando:
- mvnw.cmd spring-boot:run

### Ejecutar WebApp con reactJs
para correr el proyecto necesitamos ir al directorio frontend con el siguiente comando
- cd frontend
Luego procedemos a instalar las dependencias con el manejador de dependencias de node llamado npm ejecutando el comando 'npm install'.
una vez finalizada la instalación, procedemos a correr nuestra aplicación web con el siguiente comando 'npm run start'
