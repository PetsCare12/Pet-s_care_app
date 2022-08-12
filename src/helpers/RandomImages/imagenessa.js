

export const imageRandom = () => {
    
    const nombres = [
        "https://img.freepik.com/vector-gratis/lindo-astronauta-sosteniendo-planta-luna-dibujos-animados-vector-icono-ilustracion-ciencia-naturaleza-icono-aislado_138676-4726.jpg?w=826&t=st=1660327776~exp=1660328376~hmac=9f9be776060b517371b0b6e7c14c91efe799889d454d4b4bcce8c3c1c510680f",
        "https://img.freepik.com/vector-gratis/lindo-astronauta-sosteniendo-planta-ilustracion-icono-vector-dibujos-animados-olla-tecnologia-naturaleza-icono-concepto-aislado-premium-vector-estilo-dibujos-animados-plana_138676-4196.jpg?t=st=1660314324~exp=1660314924~hmac=de9bebc12ea06b684f97a0388773db176bee9bf70d8ad92b1395b801932cc932",
        "https://img.freepik.com/vector-gratis/planta-astronauta-ilustracion-icono-vector-dibujos-animados-olla-concepto-icono-ciencia-natute-aislado-vector-premium-estilo-dibujos-animados-plana_138676-3576.jpg?t=st=1660327705~exp=1660328305~hmac=e2bbb3fc5a867f55e5062f4e8315c100bb06b868653071cee5f32adb88d1290c",
        "https://img.freepik.com/vector-gratis/lindo-mono-astronauta-pie-banana-planet-bandera-cartoon-vector-icono-ilustracion-ciencias_138676-5492.jpg?t=st=1660295184~exp=1660295784~hmac=d25239c1287efd8b938178cabc5d46a9d0361e9692634ecfc6b00de7277eff79",
        "https://img.freepik.com/vector-gratis/lindo-astronauta-sosteniendo-ilustracion-icono-vector-dibujos-animados-tablero-espacial-concepto-icono-tecnologia-ciencia_138676-4336.jpg?t=st=1660328131~exp=1660328731~hmac=60aa89750542d6bcafe7eb0ddcd2e82d64c257a9d19240749f95e1a64d5a273a",
        "https://img.freepik.com/vector-gratis/lindo-astronauta-que-trabaja-ilustracion-icono-vector-dibujos-animados-computadora-ciencia-tecnologia-icono-concepto-aislado-premium-vector-estilo-dibujos-animados-plana_138676-4172.jpg?t=st=1660309260~exp=1660309860~hmac=2b701a122ade19576f9570409ebf0a0ddc97f4572724b5fa968aa61f81178e05"
    ];
    const aleatorio = nombres[Math.floor(Math.random() * nombres.length)];

    return aleatorio;
}