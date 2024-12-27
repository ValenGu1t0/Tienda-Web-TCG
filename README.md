# Pagina Web-para-Tienda-Online

Proyecto personal en el cual aplico mis conocimientos en HTML5, Tailwind CSS y Javascript puro, con la finalidad de crear una tienda web con todas las prestaciones, atractiva, dinámica y facil de usar tanto para el owner como el user y que sea adaptable o responsive para acceder en mobile.  


-----////// DOCUMENTACION

Para este proyecto use JavaScript puro para lograr la lógica de automatización del proceso de publicar un producto en tu tienda online de la forma mas simple posible y que el cliente tenga acceso a los mismos de la forma mas directa y llamativa. Decidi usar Tailwind CSS para la apariencia simple y compacta de la tienda, de forma que puedo aplicar codigo reutilizable y combinarlo con el uso de Javascript para hacer una UI rápida y dinámica. 

La tematica de la tienda son los juegos de cartas coleccionables (Trading Card Game o TCG) y los juegos de mesa. De todas formas, el enfoque lógico de la página me permite reutilizar la misma para casi cualquier producto que se desee. Como estoy dedicandome al Front-End, decidi implementar una base de datos "falsa" en la cual tengo un array de objetos 
declarados previamente, simulando asi un formato JSON. Este array esta preparado para que se agreguen tantos productos como se desee y estos se muestren automaticamente cada uno en su seccion y con su pagina propia.

Cada objeto posee un id_TCG, el cual indica a que "juego" pertenece. Ademas, un id_producto para referenciar al producto directamente. Cada producto a su vez posee título, imagen, precio y stock, y cada objeto (producto) se guarda en el array de esta forma. Se trata al array como si fuera un JSON, en la cual accedo por id primarias que referencian a cada producto y accedo a sus propiedades de esta forma. Se podria considerar que simula una BDD "normalizada", pero eso es otro tema. 

La idea principal es que el dueño de la pagina pueda agregar y modificar los objetos (productos) mediante una interfaz de la web (owner side) en el array de objetos (CRUD), y la pagina actualice su contenido de forma automatica y dinámica, en base a los productos existentes, sin tener que ir modificando uno por uno los atributos y clases de cada elemento HTML.



-----////// EXPERIENCIAS

//-<> Menu Desplegable
Logica implementada a partir de JavaScript y Tailwind CSS. El hecho de usar tailwind me simplifica el agregado y quitado de clases, lo que me es mas facil para este tipo de funciones.


//-<> Busqueda por palabra y Resultados
Simplemente capturo el contenido del "input" (busqueda del usuario) y verifico si esta incluida en alguna de las posibles opciones que tengo en mi array de opciones. De haber coincidencias se devuelve una lista con estas.  


//-<> Actualizacion de Página por ID de Producto

Para esta funcion capturo el id de la pagina (producto.html?id=1) y lo aloje en una variable. Despues, mediante la funcion swapProducto(), chequeo que ese id (el capturado) esté en el array baseDeDatos, y si está, que muestre sus propiedades (swap de producto).

Accedo a las propiedades mediante la funcion baseDeDatos.find(), donde voy comparando el id_producto (propiedad del obj) con el id capturado para ver si existe y mostrar o modificar sus propiedades en la pagina.
 
Desde ahi, modifico el elemento que desee (caputandolo con getElementById previamente) y modificando su innerText o HTML, asignandoselo a la propiedad del objeto/producto actual:

if (prod) { 

    tituloProducto.innerText = prod.nombre_producto;            // Se genera la card con los atributos de los productos
    precioProducto.innerText = `$${prod.precio_producto}`;      // Muestra su precio, por ejemplo..
    stockProducto.innerHTML = `Stock: ${prod.stock_producto}`;  // El stock que tiene..
    imagenProducto.src = prod.imagen_producto;                  // La imagen asociada a ese producto también
}



//-<> Creacion de Cards en base a la disponibilidad del producto, cada uno respectivamente en su seccion

La proxima gran funcion fue implementar que la plantilla seccionTCG cambie su contenido dinamicamente en base a los productos
pertenecientes a esa misma seccion. Por ejemplo, Yu-Gi-Oh mostraría todos los productos de Yu-Gi-Oh en su seccion. Para lograrlo,
desarrolle una funcion que crea una card en la seccion, y que recorre el array "baseDeDatos" para ir viendo en cada elemento si el
id_tcg de la pagina coincide con su id_tcg. En ese caso, forEach elemento que coincide, creo una card y la muestro en su pagina.

Ademas, previamente arme una plantilla con tailwind para ver como quedaria, y la aplique mediante el agregado de clases a los productos
con JS, sumado a que encontré la forma de también traer el id_producto desde la funcion card hasta la funcion hoverCards, para poder
insertarlo en su propio link, y que cada producto se autoreferencie desde la seccionTCG hacia su propia pagina producto.


//-<> 


