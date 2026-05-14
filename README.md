# Laboratorio 10 — Web Components UCR

## Descripción

Este proyecto implementa afiches institucionales de la Universidad de Costa Rica utilizando **Web Components modernos**.

El objetivo del laboratorio es demostrar el uso de componentes reutilizables y encapsulados mediante tecnologías nativas del navegador.

---

## Componentes del Proyecto

El sistema está compuesto por tres Web Components reutilizables:

1. `poster-campaign`
2. `direction-poster`
3. `location-card`

---

# 1. `poster-campaign`

Componente utilizado para representar campañas institucionales o afiches informativos.

---

## Uso Básico

```html
<poster-campaign id="poster1">
  <span slot="announcement"> 🚨 Campaña Institucional </span>
</poster-campaign>
```

---

## Propiedades Editables (JavaScript)

Este componente permite modificar dinámicamente el contenido del afiche.

### Propiedades disponibles

```js
titulo1;
titulo2;
frase;
accion;
imagen;
```

### Ejemplo de uso

```js
const poster = document.querySelector("#poster1");

poster.titulo1 = "¡LA SEDE";
poster.titulo2 = "TE ACOMPAÑA!";
poster.frase = "El respeto no se negocia";
poster.accion = "¡Pará ya de acosar!";
poster.imagen = "./assets/images/imagen1.png";
```

---

## Slots Disponibles

### `announcement`

Permite personalizar el tipo de anuncio del afiche sin modificar el componente.

### Ejemplo

```html
<poster-campaign>
  <span slot="announcement"> 📢 Aviso General </span>
</poster-campaign>
```

Otro ejemplo:

```html
<poster-campaign>
  <span slot="announcement"> ⚠️ Emergencia </span>
</poster-campaign>
```

---

## CSS Variables Disponibles

Este componente puede personalizarse desde CSS.

### Variables soportadas

```css
--poster-background
--poster-title-color
--poster-slogan-color
--poster-action-color
--poster-radius
--poster-shadow
--poster-image-height
--poster-logo-size
```

---

## Ejemplos de personalización

### Cambiar color de fondo

```css
poster-campaign {
  --poster-background: #c79200;
}
```

### Cambiar color del título

```css
poster-campaign {
  --poster-title-color: white;
}
```

### Cambiar tamaño de imagen

```css
poster-campaign {
  --poster-image-height: 500px;
}
```

### Cambiar bordes redondeados

```css
poster-campaign {
  --poster-radius: 35px;
}
```

---

## CSS Parts Disponibles

El componente expone partes internas para personalización externa.

### Parts soportados

```txt
poster
header
logo
line
announcement
title
image
message
action
```

### Ejemplo de personalización

Modificar el título:

```css
poster-campaign::part(title) {
  letter-spacing: 4px;
  text-transform: uppercase;
}
```

Modificar el área del mensaje:

```css
poster-campaign::part(message) {
  background: rgba(255, 255, 255, 0.15);
  border-radius: 20px;
}
```

---

# 2. `direction-poster`

Componente utilizado para representar señalización institucional.

---

## Uso Básico

```html
<direction-poster id="poster2">
  <span slot="tipo"> 📍 Directorio Académico </span>
</direction-poster>
```

---

## Propiedades Editables (JavaScript)

### Propiedad disponible

```js
ubicaciones;
```

### Ejemplo de uso

```js
const poster2 = document.querySelector("#poster2");

poster2.ubicaciones = ["Biblioteca", "Registro", "Laboratorio 1"];
```

---

## Slots Disponibles

### `tipo`

Permite modificar el tipo de directorio.

### Ejemplo

```html
<direction-poster>
  <span slot="tipo"> 📌 Información Administrativa </span>
</direction-poster>
```

---

## CSS Variables Disponibles

### Variables soportadas

```css
--directory-background
--directory-item-color
--directory-divider-color
--directory-footer-background
--directory-footer-color
--directory-radius
--directory-shadow
```

---

## Ejemplos de personalización

### Cambiar color del directorio

```css
direction-poster {
  --directory-background: #0c3f8c;
}
```

### Cambiar color del footer

```css
direction-poster {
  --directory-footer-background: #f2f2f2;
  --directory-footer-color: #003b82;
}
```

### Cambiar bordes

```css
direction-poster {
  --directory-radius: 30px;
}
```

---

## CSS Parts Disponibles

### Parts soportados

```txt
poster
header
grid
footer
```

### Ejemplo de personalización

Modificar footer:

```css
direction-poster::part(footer) {
  border-top: 4px solid white;
}
```

---

# 3. `location-card`

Componente reutilizable utilizado dentro del directorio.

---

## Uso Básico

```html
<location-card></location-card>
```

---

## Propiedades Editables (JavaScript)

### Propiedades disponibles

```js
texto;
destacado;
```

### Ejemplo de uso

```js
card.texto = "Biblioteca";
card.destacado = true;
```

---

## Slots Disponibles

### `icon`

Permite cambiar el ícono de flecha.

### Ejemplo

```html
<location-card>
  <span slot="icon"> 📍 </span>
</location-card>
```

---

## CSS Variables Disponibles

### Variables soportadas

```css
--card-background
--card-background-featured
--card-hover-background
--card-text-color
--card-arrow-color
--card-padding
```

---

## Ejemplos de personalización

### Cambiar color de tarjeta

```css
location-card {
  --card-background: #003b82;
}
```

### Cambiar color de flecha

```css
location-card {
  --card-arrow-color: yellow;
}
```

### Cambiar padding

```css
location-card {
  --card-padding: 30px;
}
```

---

## CSS Parts Disponibles

### Parts soportados

```txt
card
title
arrow
```

### Ejemplo de personalización

Modificar el título:

```css
location-card::part(title) {
  font-style: italic;
  font-weight: bold;
}
```

---

# Ejecutar Proyecto

Instalar dependencias:

```bash
pnpm install
```

Ejecutar servidor local:

```bash
pnpm run dev
```

Abrir en navegador:

```txt
http://localhost:1234
```

---

# Deploy en GitHub Pages

Publicar proyecto:

```bash
pnpm run deploy
```

---
