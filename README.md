# Trabajo Unidad IV - Aplicación Móvil con Ionic y Angular

## Objetivo
Construir la primera parte funcional de una aplicación móvil utilizando componentes del framework Ionic para reforzar el aprendizaje y dominio de la plataforma.

## Descripción del Proyecto
Este trabajo amplía la "cáscara" desarrollada en la unidad anterior, agregando funcionalidad real a la aplicación. Se incorporaron componentes personalizados y se construyó el 50% del contenido funcional de la app.

## Componentes Utilizados
1. **ProfesionalCardComponent**: Muestra la información de un profesional con su nombre y especialidad.
2. **CitaDetalleComponent**: Despliega información detallada de una cita, incluyendo profesional, fecha y hora.

## Funcionalidades Nuevas
- Interacción al agendar cita: muestra un mensaje de confirmación.
- Sección de profesionales: visualización usando tarjetas personalizadas.
- Detalle de cita mostrado mediante componente con `*ngIf`.
- **Nuevo agregado**: Se implementó una ventana emergente (popup) de confirmación al presionar "Cerrar Sesión", solicitando confirmación del usuario antes de salir. Si confirma, se redirige al login; de lo contrario, se mantiene en la misma pantalla.

## Instalación
1. Clona el repositorio:
   ```bash
   git clone https://github.com/rodrigoolivaressystcom/trabajo4rodrigoolivares
   cd trabajo4rodrigoolivares
   ```
2. Instala las dependencias:
   ```bash
   npm install
   ```

## Ejecución
Inicia la aplicación con el siguiente comando:
```bash
ionic serve
```
Esto abrirá una ventana en tu navegador en `http://localhost:8100`.

## Problemas enfrentados
- Doble declaración de componentes en múltiples módulos.
- Errores por no importar `IonicModule` en `components.module.ts`.
- Manejo de errores con rutas y uso incorrecto de `standalone`.

## Estado del Proyecto
- 50% del contenido funcional implementado.
- Dos componentes personalizados correctamente integrados.
- Navegación funcional y sin errores.
- Confirmación de cierre de sesión agregada.
---

## ✍️ Autor

Desarrollado por [Rodrigo Olivares Salas] para el curso de Taller de Dispositivos Móviles.
"# trabajo4rodrigoolivares-a" 
