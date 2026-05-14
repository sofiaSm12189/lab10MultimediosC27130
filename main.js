import "./components/PosterCampaign.js";
import "./components/DirectionPoster.js";

const poster1 = document.querySelector("#poster1");

poster1.titulo1 = "¡LA SEDE TE";

poster1.titulo2 = "ACOMPAÑA!";

poster1.frase = "El respeto no se negocia";

poster1.accion = "¡PARÁ YA DE ACOSAR!";

poster1.imagen = "./assets/images/imagen1.png";

poster1.style.setProperty("--poster-background", "#c89200");

poster1.style.setProperty("--poster-image-height", "360px");

const poster2 = document.querySelector("#poster2");

poster2.ubicaciones = [
  "Aulas 5, 6, 7",

  "Apoyo Informático",

  "Servidores",

  "Laboratorio 1 y 2",

  "Coordinación Informática Empresarial",
];

poster2.style.setProperty("--directory-background", "#0f3970");

poster2.style.setProperty("--directory-footer-background", "#d5d5d5");
