# 📱 TODO List - Aplicación Móvil

**Evaluación 2 - Desarrollo de Aplicaciones Móviles**  
Instituto Profesional San Sebastián

## 👥 Integrantes del Equipo

- **Francisco Alejandro Bernal Araya** - francisco.bernal.araya@estudiante.ipss.cl
- **José Antonio Jara Canales** - jose.jara.canales@estudiante.ipss.cl  
- **Raúl Ignacio Veloso Ortiz** - raul.veloso.ortiz@estudiante.ipss.cl
- **Adolfo Campos Gómez** - Adolfo.campos.gomez@estudiante.ipss.cl

---

## 🎨 Características del Diseño

Esta aplicación presenta un **diseño oscuro profesional** con:

- 🌑 **Tema Oscuro Premium**: Gradiente de negro puro a azul marino oscuro
- ✨ **Glassmorphism**: Tarjetas semi-transparentes con efecto vidrio esmerilado
- 💎 **Glow Effects**: Sombras azules brillantes en elementos interactivos
- 🎯 **Contraste Alto**: Textos blancos sobre fondos oscuros para máxima legibilidad
- 🔵 **Acentos Vibrantes**: Azul brillante (#3B82F6) para botones y elementos activos

---

## 🚀 Funcionalidades Implementadas

### ✅ Gestión Completa de Tareas
- **Crear tareas** con título, comentarios, foto y ubicación GPS
- **Editar tareas** existentes (título, comentarios, foto, ubicación)
- **Eliminar tareas** con confirmación
- **Marcar como completadas/pendientes**
- **Filtros**: Ver todas, solo pendientes, o solo completadas
- **Estadísticas en tiempo real**: Total, pendientes y completadas

### 📸 Captura de Imágenes
- Tomar fotos con la **cámara**
- Seleccionar desde la **galería**
- Almacenamiento en **filesystem local** con expo-file-system

### 📍 Geolocalización
- Captura **automática de ubicación** al crear tareas
- Opción de captura **manual** de ubicación
- **Reverse geocoding**: Convierte coordenadas en direcciones legibles
- Muestra dirección en cada tarea

### 👤 Multi-Usuario
- **Login con email y contraseña**
- **4 usuarios predefinidos** para testing rápido
- Cada usuario ve **solo sus propias tareas**
- Datos aislados por email

### 💾 Persistencia Local
- **AsyncStorage**: Metadatos de tareas
- **FileSystem**: Fotos en alta calidad
- **Persistencia completa**: Los datos sobreviven al cierre de la app

---

## 🛠️ Tecnologías Utilizadas

### Core
- **React Native** con Expo
- **TypeScript** para type safety
- **Expo Router** para navegación

### Bibliotecas Principales
- `@react-native-async-storage/async-storage` - Persistencia de datos
- `expo-image-picker` - Captura de fotos (cámara y galería)
- `expo-location` - Geolocalización y geocoding
- `expo-file-system` - Almacenamiento de archivos
- `@expo/vector-icons` - Iconografía Material Design

### Arquitectura
- **Context API** para estado global del usuario
- **Servicios separados** para lógica de negocio
- **Componentes reutilizables**
- **TypeScript interfaces** para modelos de datos

---

## 📁 Estructura del Proyecto

```
TodoList/
├── app/                      # Pantallas de la aplicación
│   ├── (tabs)/              
│   │   ├── index.tsx        # Home: Lista de tareas
│   │   ├── perfil.tsx       # Perfil del usuario
│   │   └── _layout.tsx      # Navegación de tabs
│   ├── login.tsx            # Pantalla de login
│   └── _layout.tsx          # Layout raíz
├── components/              # Componentes reutilizables
│   ├── TaskItem.tsx         # Item individual de tarea
│   ├── TaskForm.tsx         # Formulario crear/editar
│   └── EmptyState.tsx       # Estado vacío
├── context/                 # Contextos de React
│   └── UserContext.tsx      # Contexto global de usuario
├── services/                # Capa de servicios
│   ├── storageService.ts    # Operaciones AsyncStorage
│   ├── fileService.ts       # Gestión de archivos
│   └── locationService.ts   # Servicios de ubicación
├── types/                   # Definiciones TypeScript
│   └── Task.ts             # Interfaces Task y Location
└── package.json
```

---

## 🎯 Usuarios de Testing

La aplicación incluye **4 usuarios predefinidos** para facilitar las pruebas:

| Nombre     | Email                                              | Contraseña |
|------------|----------------------------------------------------|------------|
| FRANCISCO  | francisco.bernal.araya@estudiante.ipss.cl         | 1234       |
| JOSE       | jose.jara.canales@estudiante.ipss.cl              | 1234       |
| RAUL       | raul.veloso.ortiz@estudiante.ipss.cl              | 1234       |
| ADOLFO     | Adolfo.campos.gomez@estudiante.ipss.cl            | 1234       |

---

## 📦 Instalación y Ejecución

### Requisitos Previos
- Node.js 18+
- npm o yarn
- Expo CLI
- Dispositivo físico o emulador (iOS/Android)

### Pasos de Instalación

```bash
# 1. Clonar el repositorio
git clone https://github.com/jjaracanales/Desarrollo_aplicaciones_moviles_evaluacion2.git
cd Desarrollo_aplicaciones_moviles_evaluacion2

# 2. Instalar dependencias
npm install --legacy-peer-deps

# 3. Iniciar el servidor de desarrollo
npm start

# 4. Escanear QR con Expo Go (móvil) o presionar:
# - i para iOS simulator
# - a para Android emulator
```

### Permisos Necesarios

La aplicación solicitará los siguientes permisos al usuario:

**iOS**:
- Cámara
- Biblioteca de fotos
- Ubicación mientras está en uso

**Android**:
- Cámara
- Leer almacenamiento externo  
- Ubicación precisa

---

## 🎨 Paleta de Colores

```javascript
// Fondos
backgroundColor: '#000000'              // Negro puro
backgroundColor: '#0A0E1A'              // Azul oscuro/negro
backgroundColor: 'rgba(255,255,255,0.05)' // Glassmorphism

// Acentos
color: '#3B82F6'                        // Azul brillante (botones)
color: '#60A5FA'                        // Azul claro (textos secundarios)

// Textos
color: '#FFFFFF'                        // Blanco (textos principales)
color: '#94A3B8'                        // Gris azulado (textos secundarios)

// Bordes y divisores
borderColor: 'rgba(255,255,255,0.1)'   // Semi-transparente

// Estados
backgroundColor: '#10B981'              // Verde (completadas)
color: '#DC2626'                        // Rojo (eliminar)
```

---

## 📱 Capturas de Pantalla

La aplicación presenta:
1. **Login** con gradiente oscuro y usuarios rápidos
2. **Home/Tareas** con tarjetas glassmorphic y filtros
3. **TaskForm** modal para crear/editar con glassmorphism
4. **Perfil** con información del usuario y equipo

---

## 🔄 Flujo de Trabajo

### Crear Tarea
1. Login con usuario predefinido o email personalizado
2. Tap en botón flotante **+**
3. Ingresar título (requerido)
4. Agregar comentarios opcionales (máx 500 caracteres)
5. Tomar foto o seleccionar de galería (opcional)
6. Capturar ubicación manualmente o dejar que se capture automáticamente
7. Guardar

### Editar Tarea
1. Tap en icono **lápiz azul** de la tarea
2. Modificar título, comentarios, foto o ubicación
3. Actualizar

### Completar/Eliminar
- **Completar**: Tap en checkbox
- **Eliminar**: Tap en icono basura → Confirmar

---

## 🧪 Testing

### Casos de Prueba Principales

1. ✅ Crear tarea con foto y ubicación
2. ✅ Editar tarea existente  
3. ✅ Marcar como completada/pendiente
4. ✅ Filtrar tareas por estado
5. ✅ Eliminar tarea con confirmación
6. ✅ Persistencia tras cierre de app
7. ✅ Multi-usuario (datos aislados)
8. ✅ Pull-to-refresh

---

## 🏆 Evaluación 2 - Criterios Cumplidos

- [x] Implementación completa de TODO List
- [x] CRUD de tareas
- [x] Captura de fotos (cámara/galería)
- [x] Geolocalización GPS
- [x] Persistencia local (AsyncStorage + FileSystem)
- [x] Multi-usuario con login
- [x] Edición de tareas
- [x] Comentarios/descripción en tareas
- [x] Diseño profesional y moderno
- [x] Documentación completa

---

## 📄 Licencia

Proyecto académico - Instituto Profesional San Sebastián © 2025

---

## 📞 Contacto

Para consultas sobre este proyecto, contactar a cualquiera de los integrantes a través de sus emails institucionales.

Video app en funcionamiento:
https://drive.google.com/file/d/1y-o78g9f-AGOX9z12kpL1liqaDFAR9WI/view?usp=drive_link
