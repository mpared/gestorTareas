 Gestor de Tareas - Aplicación Web Completa

Este proyecto es una aplicación web para gestionar tareas de forma sencilla y eficiente. Permite añadir tareas con título y descripción, marcarlas como completadas y eliminarlas. Está construida aplicando el patrón **MVVM** con Vue 3 para el frontend, Express.js para el backend y MongoDB como base de datos.

---

## Arquitectura MVVM aplicada

- **Modelo (M):**
  - `model/Task.js` (backend): define la estructura de la tarea con Mongoose.
  - `model/Task.js` (frontend): clase `Task` que representa la estructura en el ViewModel.

- **Vista (V):**
  - `view/TaskList.vue`: muestra el formulario y la lista de tareas.
  - Estilos y estructura HTML+CSS aplicados a la interfaz de usuario.

- **ViewModel (VM):**
  - `viewmodel/TaskViewModel.js`: gestiona el estado, sincroniza los datos entre la vista y el backend mediante fetch (crear, cargar, eliminar, modificar tareas).

---

## Funcionalidades CRUD

- **Crear:** formulario para añadir nuevas tareas con título y descripción.
- **Leer:** carga automática de todas las tareas desde MongoDB.
- **Modificar:** marcar o desmarcar una tarea como completada (checkbox).
- **Eliminar:** eliminar una tarea de la lista (botón "Eliminar").

> La edición directa del título o descripción no está implementada.

---

## Estructura del proyecto

```
gestorTareas/
├── backend/
│   ├── models/Task.js
│   ├── controllers/taskController.js
│   ├── routes/api.js
│   ├── config/task.js
│   ├── app.js
│   └── .env
├── frontend/
│   ├── model/Task.js
│   ├── view/TaskList.vue
│   ├── viewmodel/TaskViewModel.js
│   ├── App.vue
│   └── main.js
├── README.md
└── .gitignore
```

---

## Instrucciones de instalación y ejecución

### Backend

1. Accede a la carpeta `backend/`
2. Instala las dependencias:
```bash
npm install
```
3. Crea un archivo `.env` con:
```env
MONGO_URI=mongodb://localhost:27017/gestorTareas
PORT=3012
```
4. Ejecuta el servidor:
```bash
node app.js
```

### Frontend

1. Accede a la carpeta `frontend/`
2. Asegúrate de que el archivo `.env` contenga:
```env
VITE_API_URL=http://localhost:3012/api/tareas
```
3. Instala las dependencias:
```bash
npm install
```
4. Ejecuta la aplicación:
```bash
npm run dev
```

---

## Repositorio GitHub

https://github.com/mpared/gestorTareas.git


---

