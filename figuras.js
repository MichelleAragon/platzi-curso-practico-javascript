
// Codigo del Cuadrado
console.group("Cuadrados")

function perimetroCuadrado (lado){
    return lado * 4;
}
perimetroCuadrado()


function areaCuadrado (lado){
   return lado * lado; 
} 

areaCuadrado()

console.groupEnd()

// Codigo del Triangulo
console.group("Triangulo")


function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}

function areaTriangulo (base, altura) { 
    return (base * altura) / 2;
}   


console.groupEnd()


// Codigo del circulo
console.group("Circulos");

// Diametro

function diametroCirculo (radio) {
    return radio * 2;
} 

const PI = Math.PI.toFixed(2);


// Circunferencia

function perimetroCirculo (radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

// Area

function areaCirculo (radioCirculo) {
    return (radioCirculo * radioCirculo) * PI;
}


console.groupEnd();

// Aqui interactuamos con el HTML 

//CalcularPerimetroCuadrado

function CalcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function CalcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}

//CalcularPerimetroTriangulo

function CalcularPerimetroTriangulo(){
    const lado1 = document.getElementById("inputTrianguloLado1");
    const lado2 = document.getElementById("inputTrianguloLado2");
    const base = document.getElementById("inputTrianguloBase");
    
    const L1 = Number(lado1.value); 
    const L2 = Number(lado2.value);
    const B = Number(base.value);

    const perimetro = perimetroTriangulo(L1, L2, B);
    alert(perimetro);
}

function CalcularAreaTriangulo(){
    const base = document.getElementById("inputTrianguloBase");
    const altura = document.getElementById("inputTrianguloAltura");
    
    const B = Number(base.value);
    const A = Number(altura.value);

    const area = areaTriangulo(B, A);
    alert(area);
}

function CalcularAreaCirculo(){
    const radio = document.getElementById("inputRadio");
    const R = Number(radio.value);
    
    const area = areaCirculo(R);
    alert (area);
}