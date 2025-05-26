
# Gestor de Tareas - Backend

Este backend ha sido desarrollado con **Node.js**, **Express** y **MongoDB**. Permite gestionar tareas a través de una API REST completa.

---

## Backend 

### 1. Requisitos previos

- Tener **Node.js** y **npm** instalados
- Tener **MongoDB** corriendo localmente 


---

### 2. Instalación

Abra una terminal en la carpeta `/backend` del proyecto y ejecute:

`npm install`

---

### 3. Configuración

Cree un archivo `.env` en la raíz de `backend/` con el siguiente contenido:

```env
MONGO_URI=mongodb://localhost:27017/gestorTareas
PORT=3012
```

Realmente ya está creado en el zip que te envío, pero he leído que es mejor que lo crees tú.


> El puerto por defecto es `3012`.

---

### 4. Ejecución

- Para iniciar normalmente:
 `` node app.js ``
 




## Frontend

1. Accede a la carpeta `frontend/`  
2. Asegúrate de que el archivo `.env` contenga:
```env
VITE_API_URL=http://213.97.62.3:3012/api/tareas
```
3. Instala las dependencias:
```bash
npm install
```
4. Ejecuta la aplicación:
```bash
npm run dev

```
## Repositorio GitHub
https://github.com/mpared/gestorTareas.git


### 5. Endpoints disponibles

| Método | Ruta                  | Descripción                  |
|--------|-----------------------|------------------------------|
| GET    | /api/tareas           | Obtener todas las tareas     |
| POST   | /api/tareas           | Crear una nueva tarea        |
| PUT    | /api/tareas/:id       | Actualizar una tarea         |
| DELETE | /api/tareas/:id       | Eliminar una tarea           |

---

### 6. Pruebas rápidas con `curl`
> Asegúrate de sustituir `ID_DE_LA_TAREA` por el ID real de una tarea.

- **Crear una tarea:**
```bash
curl -X POST http://213.97.62.3:3012/api/tareas \
  -H "Content-Type: application/json" \
  -d '{"titulo": "Test", "descripcion": "Desde curl"}'
```

- **Obtener todas las tareas:**
```bash
curl http://213.97.62.3:3012/api/tareas
```

- **Modificar una tarea (marcar como completada):**
```bash
curl -X PUT http://213.97.62.3:3012/api/tareas/ID_DE_LA_TAREA \
  -H "Content-Type: application/json" \
  -d '{"completada": true}'
```

- **Eliminar una tarea:**
```bash
curl -X DELETE http://213.97.62.3:3012/api/tareas/ID_DE_LA_TAREA
```


