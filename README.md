# 📱 Aplicación Móvil React Native - Evaluación 1

Aplicación móvil desarrollada con **React Native** y **Expo**, implementando TypeScript, Expo Router para navegación con Tabs.

## 🚀 Características

- ✅ **React Native** con **Expo**
- ✅ **TypeScript** 
- ✅ **Expo Router** para navegación basada en archivos
- ✅ Navegación con **Tabs** (Home y Perfil)
- ✅ **Pantalla de Login** con validación
- ✅ **React Hooks** (useState, useEffect, useContext)
- ✅ UI moderna y responsive

## 📱 Funcionalidades

### Pantalla de Login
- Campo de email (sin validacion ingresa cualquier mail)
- Validación de contraseña (debe ser "1234")
- Mensaje de error si la contraseña es incorrecta
- Navegación automática a las tabs si el login es exitoso

### Tab Home
- Pantalla de bienvenida
- Icono y mensaje de confirmación de login exitoso

### Tab Perfil
- Muestra el email del usuario que inició sesión
- Diseño limpio con información del perfil

## 🏗️ Estructura del Proyecto

```
Ev1/
├── app/
│   ├── _layout.tsx          # Layout raíz con Stack Navigator
│   ├── index.tsx            # Redirige a login
│   ├── login.tsx            # Pantalla de login
│   └── (tabs)/
│       ├── _layout.tsx      # Layout de tabs
│       ├── index.tsx        # Tab Home
│       └── perfil.tsx       # Tab Perfil
├── context/
│   └── UserContext.tsx      # Context para estado global
├── assets/                  # Recursos (iconos, imágenes)
├── app.json                 # Configuración de Expo
├── package.json             # Dependencias del proyecto
└── README.md               # Este archivo
```

## 🎯 Tecnologías Utilizadas

- **React Native**: Framework para desarrollo móvil
- **Expo**: Plataforma y herramientas para React Native
- **TypeScript**: Lenguaje tipado sobre JavaScript
- **Expo Router**: Sistema de navegación basado en archivos
- **React Context API**: Gestión de estado global
- **React Hooks**: useState, useEffect, useContext
- **@expo/vector-icons**: Iconos Material Icons

## 📸 Video Demostración

[📹 Ver video de demostración (https://drive.google.com/file/d/1D0gf_HnTGDX11DZNcWuVDjLK9kKEmXcv/view?usp=drive_link)

## 📝 Notas de Desarrollo

### Manejo de Estado
El estado del email del usuario se gestiona mediante **React Context** (`UserContext`), permitiendo que las pantallas compartan la información del usuario autenticado.

### Navegación
Se utiliza **Expo Router** con sistema de archivos:
- `app/index.tsx`: Pantalla de entrada que redirige al login
- `app/login.tsx`: Pantalla de login con validación
- `app/(tabs)/`: Carpeta con navegación por tabs
  - `index.tsx`: Tab Home
  - `perfil.tsx`: Tab Perfil

### Validaciones
- Campo email: verificación de no vacío
- Campo password: verificación de no vacío + validación de contraseña "1234"
- Alertas nativas para feedback al usuario

### TypeScript
Todos los componentes están tipados correctamente para asegurar type safety y mejorar la experiencia de desarrollo.

## 🤝 Autor

Desarrollado como evaluación técnica de React Native con Expo por José Jara Canales.

## 📄 Licencia

Este proyecto es de evaluación educativa.

