<h1 align="center">Nodejs boiler plate</h1>

<p align="center">
  <a href="#instalación">Instalación</a> •
  <a href="#uso">Uso</a> •
  <a href="#contribuciones">Contribuciones</a> •
  <a href="#estructura">Estructura</a>
</p>

## Instalación

```
npm install
```

## Uso

1. Podes ver los comandos que están dentro del <b>package.json</b>. Para levantar el servidor node podes ejecutar:

```bash
npm run start:dev
```

## Contribuciones

- Franco Di Leo

> 💡 **Protip:** Puedes ver el historial de commits para saber quien es uno de los miembros más activos del proyecto en GitHub.

### Preparación

1. Clona el repositorio:

   ```
   $ git clone https://github.com/dileofrancoj/nodejs-base-boilerplate
   ```

2. Luego ya podras intalar todas las dependencias, para empezar a trabajar.

   ```
   $ npm install
   ```

### Convenciones

#### Commit

Los mensajes de commits deben estar en Inglés y seguir el estandar de [conventional commits](https://www.conventionalcommits.org/). No es necesario leer toda la especificación, sino empezar por entender el patrón básico:

```
type(scope?): subject
```

> 💡 Protip: Puedes ver el historial de commits de este proyecto para ver algunos ejemplos en concreto.

#### Estructura

Cada componente debe seguir la siguiente estructura de archivos:

```
├── 📂 src
| ├── 📂 config                 // environment config
| ├── 📂 services               // General services
| ├── 📂 utils                  // General utils
| | ├── 📄 errorHandler.js      // Base error handler
| ├── 📂 api                    // all entities
| | ├── 📂 entity               // single entity
| | ├──── 📄 routes.js
| | ├──── 📄 controller.js
| | ├──── 📄 validation.js
| | ├──── 📄 model.js
| └── 📄 index.js                // entry point
```

Opcionalmente un folder `__tests__` si es que lo requiera:

```
...
├── 📂 folder
| ├── 📂 __tests__
...
```
