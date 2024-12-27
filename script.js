
////////////////////////////////////////////////////////// NAV //////////////////////////////////////////////////////////

// ------------ // Menu Desplegable

const botonDespliegue = document.getElementById("despliegue");
const menu = document.getElementById("menu");

// Armamos el menu desplegable previamente en el html y mostramos agregando o sacando hidden (pd: tailwind god)
function despliega() {  menu.classList.toggle("hidden"); }

botonDespliegue.addEventListener("mouseover", despliega);

// Y este por si se clicka en cualquier otro lugar para salir
document.addEventListener("click", event => {

    // Si el click (evento) no apunta a menu o botonDespliegue (target) se agrega la clase hidden de vuelta
    if (!menu.contains(event.target) && !botonDespliegue.contains(event.target)) {  menu.classList.add("hidden"); }
});



// ------------ // Funcion que se encarga de buscar por palabra y desplegar el menu
const inputBusqueda = document.getElementById("input_busqueda");
const listaSugerencias = document.getElementById("lista_sugerencias");  
const opcionesBusqueda = ['magic the gathering', 'yu-gi-oh', 'pokemon tcg', 'accesorios'];  // Posibles opciones que podes buscar

// ------------ // Funcion que filtra busqueda del input
inputBusqueda.addEventListener("input", () => {

    const busqueda = inputBusqueda.value.toLowerCase();     // busqueda === al valor del input de ese momento

    listaSugerencias.innerHTML = '';                        // Limpiamos la lista de sugerencias anteriores

    if (busqueda.trim() === '') {               // En cada modificacion vacia del input escondemos la lista de sugerencias
                    
        listaSugerencias.classList.add('hidden');
        return;
    }

    // Creamos un nuevo array que filtra entre sus opciones iniciales aquellas que coincidan con la "busqueda"
    const opcionesFiltradas = opcionesBusqueda.filter(opcion => opcion.toLowerCase().includes(busqueda));
    

    if (opcionesFiltradas.length > 0) {     // Osea si hay busquedas que coincidan..

        listaSugerencias.classList.remove('hidden');    // Mostramos la lista de búsqueda
    
        opcionesFiltradas.forEach(opcion => {       // Y por cada opcion que matchee creamos ese li para mostrar con las clases:

            const li = document.createElement('li');
            li.classList.add('block', 'sticky', 'p-2', 'bg-white', 'hover:bg-orange-300', 'cursor-pointer');
            li.innerText = opcion;
            listaSugerencias.appendChild(li);
        });
    
    
    } else {   listaSugerencias.classList.add('hidden');   }

}) 









////////////////////////////////////////////////////////// PLANTILLA PRODUCTOS //////////////////////////////////////////////////////////

// ------------ // Cambiar Producto con Plantilla
const imagenProducto = document.getElementById("imagen_producto");
const tituloProducto = document.getElementById("titulo_producto");
const precioProducto = document.getElementById("precio_producto");
const stockProducto = document.getElementById("stock_producto");


const baseDeDatos = [   // "Base de Datos"

    /* 
    / id_tcg = 1 = MAGIC (Normalizado)
    / id_tcg = 2 = YUGI (Normalizado) 
    / id_tcg = 3 = POKEMON (Normalizado) 
    / id_tcg = 4 = Accesorios
    / id_tcg = 5 = Juegos de Mesa
    Falta accesorios y juegos de mesa
    */ 

    {
    id_tcg: 1,          
    id_producto: 0,                                 
    nombre_producto: "Magic: the Gathering - Lord of the Rings - Draft Booster Box",
    precio_producto: "450.000",    
    imagen_producto: 'img/prod/lotr.webp',     
    stock_producto: 6
    },

    {   
    id_tcg: 1,                                            
    id_producto: 1,                                 
    nombre_producto: "Magic: the Gathering - Ravnica Remastered - Play Booster Box",
    precio_producto: "280.000",
    imagen_producto: 'img/prod/rvc1.webp',          
    stock_producto: 3
    },

    {   
    id_tcg: 1,                   
    id_producto: 2,         
    nombre_producto: "Magic: the Gathering - Magic Core 21 - Draft Booster Box",
    precio_producto: "220.000",
    imagen_producto: 'img/prod/mtg21.webp', 
    stock_producto: 1
    },

    {   
    id_tcg: 1,                      
    id_producto: 3,       
    nombre_producto: "Magic: the Gathering - Modern Horizons 3 - Collector Booster Box",
    precio_producto: "250.000",
    imagen_producto: 'img/prod/mh3.webp',
    stock_producto: 0
    },

    {   
    id_tcg: 2,                 
    id_producto: 4,       
    nombre_producto: "YuGiOh! - Booster Box - Wild Survivors",
    precio_producto: "180.000",
    imagen_producto: 'img/prod/yugi1.webp',
    stock_producto: 3
    },

    {   
    id_tcg: 2,              
    id_producto: 5,       
    nombre_producto: "YuGiOh! - Booster Box - Eternals Nepens",
    precio_producto: "150.000",
    imagen_producto: 'img/prod/yugi2.webp',
    stock_producto: 0
    },

    {   
    id_tcg: 2,         
    id_producto: 6,       
    nombre_producto: "YuGiOh! - Booster Box - Gods of Egypt",
    precio_producto: "200.000",
    imagen_producto: 'img/prod/yugi3.webp',
    stock_producto: 2
    },

    {   
    id_tcg: 3,              
    id_producto: 7,       
    nombre_producto: "POKEMON TCG - Shrouded Fable - Kingdra Edition",
    precio_producto: "100.000",
    imagen_producto: 'img/prod/pkm1.webp',
    stock_producto: 0
    },

    {   
    id_tcg: 1,               
    id_producto: 8,       
    nombre_producto: "Magic: the Gathering - Play Booster Box - Foundations - ¡PRE ORDER!",
    precio_producto: "360.000",
    imagen_producto: 'img/prod/mtgf.webp',
    stock_producto: 3
    },

    {   
    id_tcg: 3,               
    id_producto: 9,       
    nombre_producto: "POKEMON TCG - 2 Booster Tin - Fire",
    precio_producto: "25.000",
    imagen_producto: 'img/prod/pkm2.webp',
    stock_producto: 7
    },

    {   
    id_tcg: 2,               
    id_producto: 10,       
    nombre_producto: "YuGiOh! - Booster Box - Kyba God's Edition",
    precio_producto: "160.000",
    imagen_producto: 'img/prod/yugi4.webp',
    stock_producto: 3
    },

    {   
    id_tcg: 3,               
    id_producto: 11,       
    nombre_producto: "POKEMON TCG - 2 Booster Tin - Water",
    precio_producto: "30.000",
    imagen_producto: 'img/prod/pkm3.webp',
    stock_producto: 6
    },

    {   
    id_tcg: 1,                
    id_producto: 12,       
    nombre_producto: "Magic: the Gathering - Play Booster Box - Lost Caverns od Ixalan",
    precio_producto: "220.000",
    imagen_producto: 'img/prod/mtgix.webp',
    stock_producto: 4
    },
    
]       


// Captura el parámetro 'id' desde la URL
let idProducto = new URLSearchParams(window.location.search);   // Cada el valor desp del ? (?id=1)
let idPaginaProducto = idProducto.get('id');                    // Obtiene el valor del parámetro 'id', osea 1 (procesamos)

// ------------ // Capturar Pagina de Producto TCG
function swapProducto(id) {

    // Llamada seria: swapProducto(idPaginaProducto), osea el id de la pagina actual procesado;

    const idproducto = id;      // Le pasamos el id de la pag actual para compararlo con la baseDeDatos

    const prod = baseDeDatos.find(prod => prod.id_producto == idproducto);   // Usamos find para encontrar el primer producto con el ID coincidente  // asi ahorramos iterar con .forEach()

    if (prod) { 

        tituloProducto.innerText = prod.nombre_producto;
        precioProducto.innerText = `$${prod.precio_producto}`;      // Podria setear el value=""
        stockProducto.innerHTML = `Stock: ${prod.stock_producto}`;
        imagenProducto.src = prod.imagen_producto;          // Swapeo el src de img  dependiendo el producto -> interesante como accede al contenido de la propiedad sin preguntar nada, solo con la propiedad
    }

}

window.addEventListener("load", () => swapProducto(idPaginaProducto));








////////////////////////////////////////////////////////// PLANTILLA SECCION //////////////////////////////////////////////////////////

// Captura el parámetro 'id_tcg' desde la URL
let idProductoTCG = new URLSearchParams(window.location.search);    
let idPaginaProductoTCG = idProductoTCG.get('id_tcg');     

// ---------- // Capturar Pagina de Secciones TCG
const logoSeccionTCG = document.getElementById("logo_seccion_TCG");  
const seccionTCG = document.getElementById("seccion_TCG");     
const logoSeccion = document.getElementById("logo_seccionTCG");     


// ---------- // Funcion que actualiza la pagina plantilla "seccionTCG" con los productos referentes a ese TCG
function swapSeccionTCG(id) {       

    const idTCG = id;   // id_tcg=2
    
    // Esto de aca esta FATAL pero quiero implementar el cambio de la img de la forma mas facil -- desp la mejorare
     if (idTCG == 2) {

        logoSeccion.src = 'img/yugi.png';

    } else if (idTCG == 3) {

        logoSeccion.src = 'img/logoPKM.png';   
    } 

        
    const seccion = baseDeDatos.filter(el => el.id_tcg == idTCG);    // Pq el id capturado es un string no uso ===
    
    // Llamo la funcion que crea la card por cada elemento y le paso como parametro la seccion donde quiero que se creen !!!
    seccion.forEach (el => {  card(el, seccionTCG);  })
    // seccion es mi nuevo array

    // Que la funcion hover este siempre tmb
    hoverCards(seccionTCG);
}


// ---------- // Funcion que crea Cards de forma dinamica y automatica en base a los productos en seccionTCG
function card(el, seccion) {                // Recibe como parametros los elementos que coinciden, y la seccion donde se appendean

    const seccionCards = seccion;           // VARIABLE PLANTILLA para la seccion donde appendear cards

    // Recibe un el. del forEach y crea una card para el, donde cada el. es un producto que coincide con la busqueda:
    const card = document.createElement('div'); 
    card.classList.add('card', 'flex', 'flex-col', 'w-1/4', 'items-center', 'rounded-xl', 'p-4', 
        
        'celu-s:w-full',
        'celu:w-1/2',
        'sm:w-1/2'
    );
    seccionCards.appendChild(card);


    const imagenCard = document.createElement('img');     
    imagenCard.classList.add('w-full', 'border-black', 'border-b-4', 'rounded-xl', 'cursor-pointer', 'p-4');
    imagenCard.src = el.imagen_producto;
    card.appendChild(imagenCard);
    
    
    // Titulo del producto con link (actualizado para que lleve a una seccion)
    const linkNombreCard = document.createElement('a');
    linkNombreCard.href = `seccionTCG.html?id_tcg=${el.id_tcg}`;

    const nombreCard = document.createElement('h3');                         
    nombreCard.classList.add('text-justify', 'p-4', 'hover:text-orange-500', 'cursor-pointer');
    nombreCard.innerText = el.nombre_producto;

    linkNombreCard.appendChild(nombreCard);
    card.appendChild(linkNombreCard);


    // Caja para Precio - Stock
    const divPrecioStock = document.createElement("div");
    divPrecioStock.classList.add('flex', 'flex-row', 'w-full', 'justify-between', 'items-center', 'px-4');
    card.appendChild(divPrecioStock);

    const precioCard = document.createElement("p");   
    precioCard.classList.add('font-bold', 'text-lg', 'cursor-default');
    precioCard.innerText = `$${el.precio_producto}`;   
    divPrecioStock.appendChild(precioCard);

    const stockCard  = document.createElement("p");     
    stockCard.classList.add('font-semibold', 'text-justify', 'cursor-default', 'hover:text-orange-500');
    stockCard.innerText = `Stock: ${el.stock_producto}`;
    divPrecioStock.appendChild(stockCard);
    //


    // Caja para botones
    const divBotonesCards = document.createElement('div');
    divBotonesCards.classList.add('botones_cards', 'flex', 'flex-row-reverse', 'w-full', 'p-1', 'justify-evenly', 'items-center', 'px-2', 'my-2', 'gap-2');
    card.appendChild(divBotonesCards);


    // Tengo que guardarme el id_producto para los link de los botones asi que: 
    card.setAttribute('data-id-producto', el.id_producto);

}


// ---------- // Funcion que agrega efecto Hover y los dos botones de compra (link) y de carrito
function hoverCards(seccion) { 

    const cards = seccion.querySelectorAll(".card");

    cards.forEach(card => {     
    
        const botonesCards = card.querySelector(".botones_cards");
    
        const button1 = document.createElement('a');
        const button2 = document.createElement('button');

        button1.classList.add('bg-black', 'text-white', 'border-2', 'font-bold', 'border-black', 'p-1', 'rounded-3xl', 'w-full', 'hover:bg-white', 'hover:text-black', 'text-center', 'transition'); 
        button1.innerText = "Comprar";

        // Accede al data attribute para el id del producto
        const idProducto = card.getAttribute('data-id-producto');   // Este trae el id del producto para ref desde aca
        button1.href = `producto.html?id=${idProducto}`;

        button2.classList.add('border-2', 'font-bold', 'border-black', 'p-1', 'rounded-3xl', 'w-full', 'hover:bg-orange-400', 'transition');                         
        button2.innerText = "Carrito";

        card.addEventListener("mouseover", () => {
    
            card.classList.add('shadow-myshadow', 'transition');  
            botonesCards.appendChild(button1);
            botonesCards.appendChild(button2);
            
        });

        card.addEventListener("mouseleave", () => {
    
            card.classList.remove('shadow-myshadow', 'transition'); 
            botonesCards.removeChild(button1);
            botonesCards.removeChild(button2);
            
        });
    });
}

window.addEventListener("load", () => swapSeccionTCG(idPaginaProductoTCG));  
   



////////////////////////////////////////////////////// MAS VENDIDOS / NOVEDADES //////////////////////////////////////////////////////
const seccionNovedades = document.getElementById("novedades");        
const seccionMasVendidos = document.getElementById("mas_vendidos");


// ---------- // Funcion que cambia cards random cada 3 seg
function cardRandom(basededatos) {

    seccionNovedades.innerHTML = '';

    const productosConStock = basededatos.filter(el => el.stock_producto > 0); 

    // Si hay menos de 4 productos con stock, simplemente mostramos todos
    const cantidadProductos = Math.min(4, productosConStock.length);

    const indicesBaseDeDatos = new Set();   // Guardamos numeros unicos con new Set()

    // Genero indices random hasta tener la cantidad necesaria de prod (minimo 4 pq no me mostraba productos a veces)
    while (indicesBaseDeDatos.size < cantidadProductos) {

        const randomIndex = Math.floor(Math.random() * productosConStock.length);
        indicesBaseDeDatos.add(randomIndex);
    }

    indicesBaseDeDatos.forEach(index => {

        const el = productosConStock[index];
        card(el, seccionNovedades);
    });
    hoverCards(seccionNovedades);
}   

window.addEventListener("load", () => { 

    cardRandom(baseDeDatos);
    setInterval(() => cardRandom(baseDeDatos), 3000); 
});



// ---------- // Funcion que muestra los 4 productos con menos stock (!=0)
function cardMenorStock() {

    const stock = baseDeDatos.filter(el => el.stock_producto > 0);

    stock.sort((a, b) => a.stock_producto - b.stock_producto);

    seccionMasVendidos.innerHTML = '';

    stock.slice(0, 4).forEach(el => {  card(el, seccionMasVendidos);   });

    hoverCards(seccionMasVendidos);
}

window.addEventListener("load", () => {    cardMenorStock();  });   

