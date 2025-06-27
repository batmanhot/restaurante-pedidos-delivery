    
document.addEventListener('DOMContentLoaded', () => {    
    // --- CONFIGURACIÓN ---
    const WHATSAPP_NUMBER = "51951655295"; // ¡IMPORTANTE! Reemplaza con tu número de WhatsApp con código de país.
    const ITEMS_PER_PAGE = 8; // Cuántos productos mostrar por página.

    // --- BASE DE DATOS DE PRODUCTOS ---
    // Agrega o edita tus productos aquí. Usa URLs de imágenes que tengas en tu carpeta /images
    const products = [
        { id: 1, name: 'Cheese Burger Duplo', price: 35.00, image: './images/hamburguesa-1.avif', description: 'Pão de fermentação natural, 2x burger 160g, queijo prato e maionese da casa.' },
        { id: 2, name: 'Smash Burger', price: 30.00, image: './images/hamburguesa-2.avif', description: 'Pão brioche, burger 100g prensado, queijo cheddar e molho especial.' },
        { id: 3, name: 'Cheese Bacon', price: 38.00, image: './images/hamburguesa-3.avif', description: 'Pão levinho, burger 160g, queijo prato, bacon crocante e maionese da casa.' },
        { id: 4, name: 'Chicken Burger', price: 32.00, image: './images/hamburguesa-4.avif', description: 'Pão de brioche, frango empanado crocante, alface, tomate e maionese de alho.' },
        { id: 5, name: 'Salad Burger', price: 28.00, image: './images/hamburguesa-5.avif', description: 'Pão integral, burger 160g, alface, tomate, cebola roxa e queijo branco.' },
        { id: 6, name: 'Burger Vegano', price: 33.00, image: './images/hamburguesa-6.avif', description: 'Pão vegano, burger à base de plantas, queijo vegano, alface e molho especial.' },
        { id: 7, name: 'Monster Burger', price: 45.00, image: 'https://images.unsplash.com/photo-1520072959219-c595dc870360?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGhhbWJ1cmd1ZXNhfGVufDB8fDB8fHww', description: 'Duplo pão, 3x burger 160g, triplo queijo, bacon, ovo e salada completa.' },
        { id: 8, name: 'Classic Cheese Burger', price: 29.00, image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhhbWJ1cmd1ZXNhfGVufDB8fDB8fHww', description: 'Pão, burger 160g, queijo prato e maionese da casa. O clássico que funciona.' },
        // --- Agrega más productos aquí para probar la paginación ---
        { id: 9, name: 'Spicy Burger', price: 36.00, image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhhbWJ1cmd1ZXNhfGVufDB8fDB8fHww', description: 'Pão de brioche, burger 180g, queijo apimentado, pimenta jalapeño e molho picante.' },
        { id: 10, name: 'Onion Rings Burger', price: 37.00, image: 'https://plus.unsplash.com/premium_photo-1675252369719-dd52bc69c3df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGhhbWJ1cmd1ZXNhfGVufDB8fDB8fHww', description: 'Pão australiano, burger 180g, anéis de cebola, queijo e molho barbecue.' },
        { id: 11, name: 'Spicy Burger', price: 36.00, image: 'https://images.unsplash.com/photo-1460306855393-0410f61241c7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGhhbWJ1cmd1ZXNhfGVufDB8fDB8fHww', description: 'Pão de brioche, burger 180g, queijo apimentado, pimenta jalapeño e molho picante.' },
        { id: 12, name: 'Onion Rings Burger', price: 37.00, image: 'https://plus.unsplash.com/premium_photo-1683121324022-d039da524194?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGhhbWJ1cmd1ZXNhfGVufDB8fDB8fHww', description: 'Pão australiano, burger 180g, anéis de cebola, queijo e molho barbecue.' },
        { id: 13, name: 'Spicy Burger', price: 36.00, image: 'https://images.unsplash.com/photo-1549611016-3a70d82b5040?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGhhbWJ1cmd1ZXNhfGVufDB8fDB8fHww', description: 'Pão de brioche, burger 180g, queijo apimentado, pimenta jalapeño e molho picante.' },
        { id: 14, name: 'Onion Rings Burger', price: 37.00, image: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhhbWJ1cmd1ZXNhfGVufDB8fDB8fHww', description: 'Pão australiano, burger 180g, anéis de cebola, queijo e molho barbecue.' },
        { id: 15, name: 'Cheese Burger Duplo', price: 35.00, image: 'https://plus.unsplash.com/premium_photo-1683655058728-415f4f2674bf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGhhbWJ1cmd1ZXNhfGVufDB8fDB8fHww', description: 'Pão de fermentação natural, 2x burger 160g, queijo prato e maionese da casa.' },
        { id: 16, name: 'Smash Burger', price: 30.00, image: 'https://images.unsplash.com/photo-1520072959219-c595dc870360?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGhhbWJ1cmd1ZXNhfGVufDB8fDB8fHww', description: 'Pão brioche, burger 100g prensado, queijo cheddar e molho especial.' },
        // --- Agrega más productos aquí para probar la paginación ---
        { id: 17, name: 'Cheese Bacon', price: 38.00, image: 'https://www.simplotfoods.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F0dkgxhks0leg%2F2sDFsZYlCbQR7k6RrEQhCd%2F78f5176201067ff7fd6480adfcb80188%2FDouble_Dilly_Smashburger_with_fries.jpg%3Ffm%3Dwebp&w=3840&q=75', description: 'Pão levinho, burger 160g, queijo prato, bacon crocante e maionese da casa.' },
        { id: 18, name: 'Chicken Burger', price: 32.00, image: 'https://www.recetasnestle.com.ec/sites/default/files/srh_recipes/4e4293857c03d819e4ae51de1e86d66a.jpg', description: 'Pão de brioche, frango empanado crocante, alface, tomate e maionese de alho.' },
        { id: 19, name: 'Salad Burger', price: 28.00, image: 'https://cloudfront-us-east-1.images.arcpublishing.com/infobae/24P2OKC3RVEHRD3F2VKQ76XX7M.jpg', description: 'Pão integral, burger 160g, alface, tomate, cebola roxa e queijo branco.' },
        { id: 20, name: 'Burger Vegano', price: 33.00, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/NCI_Visuals_Food_Hamburger.jpg/1200px-NCI_Visuals_Food_Hamburger.jpg', description: 'Pão vegano, burger à base de plantas, queijo vegano, alface e molho especial.' },
        { id: 21, name: 'Monster Burger', price: 45.00, image: 'https://alqueria.com.co/sites/default/files/styles/1327_612/public/hamburguesa-con-amigos-y-salsa-de-champinones_0.jpg?h=2dfa7a18&itok=hLxehdIa', description: 'Duplo pão, 3x burger 160g, triplo queijo, bacon, ovo e salada completa.' },
        { id: 22, name: 'Classic Cheese Burger', price: 29.00, image: 'https://www.recetasnestle.com.ec/sites/default/files/styles/recipe_detail_desktop_new/public/srh_recipes/681c719667d572276a1507aea71de9ca.jpg?itok=BXa7wk3U', description: 'Pão, burger 160g, queijo prato e maionese da casa. O clássico que funciona.' },
    ];

    // --- DATOS GENERALES ---
    const appDatos = {
        nombre: 'DOÑA NELLA',
        logo: './images/hamburguesa-logo.png', // Asegúrate de que esta imagen exista en tu carpeta /images
        direccion: 'Av. Las Flores 123, Lima, Perú',
        slogan: '¡La mejores hamburguesas de Lima!',
        whatsapp: WHATSAPP_NUMBER,
        itemPerPage: ITEMS_PER_PAGE,
        email: 'batmanponte@gmail.com',
        horario: 'Lunes a Domingo de 11:00 a 22:00',
    }
       
    // --- ESTADO DE LA APLICACIÓN ---
    let cart = [];
    let currentPage = 1;

    // --- SELECTORES DEL DOM ---
    const menuGrid = document.getElementById('menu-grid');
    const paginationControls = document.getElementById('pagination-controls');
    const cartBar = document.getElementById('cart-bar');
    const cartStatus = document.getElementById('cart-status');
    const cartModal = document.getElementById('cart-modal');
    const closeModalBtn = document.getElementById('close-modal-btn');
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalSpan = document.getElementById('cart-total');
    const checkoutBtn = document.getElementById('checkout-btn');
    const toast = document.getElementById('toast');
    const viewProducts = document.getElementById('view-modal');
    const viewModalContent = document.getElementById('view-modal-content')
  
    // --- EVENTOS ---   

    infoNegocio(appDatos); // Llamar a la función para mostrar la información del negocio

    // --- FUNCIONES ---

    function infoNegocio(appDatos) 
    {        
            const infoImagen   = appDatos.logo
            const infoEmpresa  = appDatos.nombre
            const infoSlogan  = appDatos.slogan 
            const infoDireccion = appDatos.direccion
            const infoWhatsapp = appDatos.whatsapp
            const infoEmail = appDatos.email

            // console.log(infoImagen, infoEmpresa, infoSlogan, infoDireccion, infoWhatsapp, infoEmail);

            const logo = document.getElementById('caption-logo');
            logo.src = infoImagen; // Asignar la imagen del logo

            const captionTitulo = document.getElementById('caption-titulo');
            captionTitulo.textContent = infoEmpresa;
            
            const captionDireccion = document.getElementById('caption-direccion');
            captionDireccion.textContent = infoDireccion;    
                        
            const captionHorario = document.getElementById('caption-horario');
            captionHorario.textContent = appDatos.horario;
            
            // document.querySelector(".caption-slogan").textContent = infoSlogan;
            // document.querySelector(".caption-direccion").textContent = infoDireccion;
            // document.querySelector(".caption-whatsapp").textContent = infoWhatsapp;
            // document.querySelector(".caption-email").textContent = infEmail;
    }


    /** Muestra una notificación temporal (toast) */
    function showToast(message) {
        toast.textContent = message;
        toast.classList.remove('hidden');
        setTimeout(() => {
            toast.classList.add('hidden');
        }, 2000); // El toast desaparece después de 2 segundos
    }

    function showSpinner() {
        loadingSpinner.classList.remove('hidden');
        setTimeout(() => {
            loadingSpinner.classList.add('hidden');
        }, 2000); // El loadingSpinner desaparece después de 2 segundos
    }

    
    /** Añade un producto al carrito */
    function addToCart(productId) {
        const product = products.find(p => p.id === productId);
        if (!product) return;

        const existingItem = cart.find(item => item.id === productId);
        if (existingItem) {
            existingItem.quantity++;
        } else {
            cart.push({ ...product, quantity: 1 });
        }
        
        showToast('Item adicionado al carrito!');
        updateCart();
    }

     function viewProduct(productId) {
        //  const product = products.find(p => p.id === productId);
        //  if (!product) return;              
        
        //  showToast(`Haciendo clic en el botón de ver producto con ID ${productId}`);
         viewProducts.classList.remove('hidden');

         viewProductDetails(productId) 
         
        //  console.log(viewProducts)     
     }

     function viewProductDetails(productId) {

         vaciarView();  //Vaciar la consulta ante todo

         const product = products.find(p => p.id === productId);
         if (!product) return;        

        // { id: 1, name: 'Cheese Burger Duplo', price: 35.00, image: './images/hamburguesa-1.avif', description: 'Pão de fermentação natural, 2x burger 160g, queijo prato e maionese da casa.' },
        
        const productView = document.createElement('div');       
        productView.className = 'bg-white rounded-lg shadow-md overflow-hidden flex flex-col';            
            productView.innerHTML = `
                <img loading="lazy" src="${product.image}" alt="${product.name}" class="max-w-70 max-h-60 object-cover overflow-hidden">
                <div class="p-4 flex flex-col flex-grow">
                    <h3 class="text-xl font-bold text-gray-800">${product.name}</h3>
                    <p class="text-gray-600 my-2 flex-grow">${product.description}</p>
                    <div class="flex justify-between items-center mt-4">
                        <span class="text-2xl font-bold text-green-600">S/.${product.price.toFixed(2).replace('.', ',')}</span>

                            <div class="flex items-center gap-3">
                                <button data-tooltip-target="tooltip-light" id="viewClosed" class="ver-product-btn bg-gray-600 text-white p-3 rounded-full hover:bg-gray-700 transition-colors" data-id="${product.id}">
                                     <i class="fas fa-door-closed"></i>
                                </button>

                                <button data-tooltip="Alianza Campeon" id="addCart" class="add-to-cart-btn bg-red-600 text-white p-3 rounded-full hover:bg-red-700 transition-colors" data-id="${product.id}">
                                    <i class="fa fa-shopping-cart"></i>
                                </button>                            
                        </div>
                    </div>
                </div>
            `;

        // Añadir event listener al botón de cerrar vista
        const closeViewBtn = productView.querySelector('#viewClosed');
        closeViewBtn.addEventListener('click', () => {
            viewProducts.classList.add('hidden');            
        });

        // Añadir event listener al botón de añadir al carrito
        const addToCartBtn = productView.querySelector('#addCart');
        addToCartBtn.addEventListener('click', () => {
            addToCart(product.id);
        });

        // Añadir event listener al botón de cerrarla X
        const closeModalBtnView = document.getElementById('close-modal-btn-view');
        closeModalBtnView.addEventListener('click', () => 
        {
            viewProducts.classList.add('hidden')            
        });

        const viewModalContentx = document.getElementById('view-modal-content')

        viewModalContent.appendChild(productView);
    }
    
    /** Renderiza los productos en la página actual */
    function renderProducts() {
        menuGrid.innerHTML = ''; // Limpiar la grilla
        const start = (currentPage - 1) * ITEMS_PER_PAGE;
        const end = start + ITEMS_PER_PAGE;
        const productsToRender = products.slice(start, end);

        productsToRender.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'bg-white rounded-lg shadow-md overflow-hidden flex flex-col';
            productCard.innerHTML = `
                <img loading="lazy" src="${product.image}" alt="${product.name}" class="w-full h-48 object-cover">
                <div class="p-4 flex flex-col flex-grow">
                    <h3 class="text-xl font-bold text-gray-800">${product.name}</h3>
                    <p class="text-gray-600 my-2 flex-grow">${product.description}</p>
                    <div class="flex justify-between items-center mt-4">
                            <span class="text-2xl font-bold text-green-600">S/.${product.price.toFixed(2).replace('.', ',')}</span>
                         <div class="flex items-center gap-3">
                                <button id="viewProducto" class="ver-product-btn bg-green-600 text-white p-3 rounded-full hover:bg-green-700 transition-colors" data-id="${product.id}">
                                     <i class="fa-solid fa-eye"></i>
                                </button>

                                <button id="addProducto" class="add-to-cart-btn bg-red-600 text-white p-3 rounded-full hover:bg-red-700 transition-colors" data-id="${product.id}">
                                    <i class="fa fa-shopping-cart"></i>                            
                                </button>                                
                         </div>                      
                    </div>
                </div>
            `;
            menuGrid.appendChild(productCard);
        });
        

        // Añadir event listeners a los nuevos botones  /// VER AQUI CREAR OTRA FUNCION QUE MUESTRE LOS DETALLES DEL PRODUCTO
        document.querySelectorAll('.add-to-cart-btn').forEach(button => {
            button.addEventListener('click', () => {
                const id = parseInt(button.getAttribute('data-id'));
                addToCart(id);
            });
        });

        document.querySelectorAll('.ver-product-btn').forEach(button => {
              button.addEventListener('click', () => {
                  const id = parseInt(button.getAttribute('data-id'));                                    
                  viewProduct(id);                
              });
         });  
    }        

    /** Renderiza los controles de paginación */
    function renderPagination() {
        paginationControls.innerHTML = '';
        const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);

        if (totalPages <= 1) return; // No mostrar paginación si solo hay una página

        // Botón "Anterior"
        const prevButton = document.createElement('button');
        prevButton.innerHTML = `<i class="fa fa-arrow-left"></i>`;
        prevButton.className = 'px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400 disabled:opacity-50 disabled:cursor-not-allowed';
        prevButton.disabled = currentPage === 1;
        prevButton.addEventListener('click', () => {
            if (currentPage > 1) {
                currentPage--;
                renderProducts();
                renderPagination();
            }
        });
        paginationControls.appendChild(prevButton);
        
        // Indicador de página
        const pageIndicator = document.createElement('span');
        pageIndicator.className = 'px-4 py-2 font-semibold';
        pageIndicator.textContent = `Página ${currentPage} de ${totalPages}`;
        paginationControls.appendChild(pageIndicator);

        // Botón "Siguiente"
        const nextButton = document.createElement('button');
        nextButton.innerHTML = `<i class="fa fa-arrow-right"></i>`;
        nextButton.className = 'px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400 disabled:opacity-50 disabled:cursor-not-allowed';
        nextButton.disabled = currentPage === totalPages;
        nextButton.addEventListener('click', () => {
            if (currentPage < totalPages) {
                currentPage++;
                renderProducts();
                renderPagination();
            }
        });
        paginationControls.appendChild(nextButton);
    }
    
    /** Actualiza toda la UI del carrito (barra, modal, total) */
    function updateCart() {
        // Actualizar barra inferior
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        if (totalItems > 0) {
            cartBar.classList.remove('hidden');
            cartStatus.textContent = `(${totalItems}) Vea su carrito`;
        } else {
            cartBar.classList.add('hidden');
        }

        // Actualizar items en el modal
        cartItemsContainer.innerHTML = '';
        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<p class="text-gray-500">Su carrito está vacio.</p>';
        } else {
            cart.forEach(item => {
                const itemElement = document.createElement('div');
                itemElement.className = 'flex justify-between items-center mb-4';
                itemElement.innerHTML = `
                    <div class="flex items-center">
                        <img loading="lazy" src="${item.image}" alt="${item.name}" class="w-16 h-16 object-cover rounded-md mr-4">
                        <div>
                            <p class="font-bold">${item.name}</p>
                            <p class="text-sm text-gray-600">S/. ${item.price.toFixed(2).replace('.', ',')}</p>
                        </div>
                    </div>
                    <div class="flex items-center">

                        <button class="decrement-quantity-btn bg-blue-600 text-white px-2 py-1 rounded-md hover:bg-blue-700 mr-2 w-8" data-id="${item.id}">                            
                            <i class="fa-solid fa-minus"></i>
                        </button>

                        <input  type="number" min="1" value="${item.quantity}" class="quantity-input w-10 text-center border border-gray-300 rounded-md gap-2 mr-2" data-id="${item.id}">                        

                        <button class="increment-quantity-btn bg-blue-600 text-white px-2 py-1 rounded-md hover:bg-blue-700 mr-2 w-8" data-id="${item.id}">
                            <i class="fa-solid fa-plus"></i>
                        </button>                        
                        <button class="remove-item-btn bg-red-600 text-white px-2 py-1 rounded-md hover:bg-red-700" data-id="${item.id}">
                        <i class="fa fa-trash"></i>
                    </div>
                `;
                cartItemsContainer.appendChild(itemElement);
            });
        }

        //   <p class="mx-2 font-bold">${item.quantity}x</p>       

        // Actualizar total
        const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
        cartTotalSpan.textContent = `S/. ${total.toFixed(2).replace('.', ',')}`;        

        // Añadir event listeners a los botones de eliminar - eliminar item del carrito
        document.querySelectorAll('.remove-item-btn').forEach(button => {
            button.addEventListener('click', () => {
                const id = parseInt(button.getAttribute('data-id'));
                cart = cart.filter(item => item.id !== id);
                showToast('Item eliminado del carrito');
                updateCart();
            });
        });


        // Añadir event listeners a los botones de decrementar cantidad
        document.querySelectorAll('.decrement-quantity-btn').forEach(button => {
            button.addEventListener('click', () => {
                const id = parseInt(button.getAttribute('data-id'));
                const item = cart.find(item => item.id === id);
                if (item) {
                    if (item.quantity > 1) {
                        item.quantity--;
                    } else {
                        showToast('Alcanzo la cantidad minima');
                        return; // No permitir decrementar a menos de 1
                        //cart = cart.filter(item => item.id !== id);
                    }
                    showToast('Cantidad actualizada');
                    updateCart();
                    console.log("Decrementar cantidad del producto!", item.name);
                }
            });
        });

        // Añadir event listeners a los botones de incrementar cantidad quantity-input
        document.querySelectorAll('.increment-quantity-btn').forEach(button => {    
            button.addEventListener('click', () => {
                 const id = parseInt(button.getAttribute('data-id'));
                 const item = cart.find(item => item.id === id);
                   if (item) {
                       item.quantity++;                       
                       showToast('Cantidad actualizada');
                       updateCart();
                       console.log('Incrementar cantidad del producto', item.name);
                    }
            });
        });

        document.querySelectorAll('.quantity-input').forEach(button => {    
            button.addEventListener('click', () => {
                 const id = parseInt(button.getAttribute('data-id'));
                 const item = cart.find(item => item.id === id);
                   if (item) {
                       item.quantity = parseInt(button.value);
                       showToast('Cantidad actualizada');
                       updateCart();
                       console.log('Actualiza cantidad del producto', item.name);
                    }
            });
        });


    }

    function vaciarView() {
     // forma lenta
     // contenedorCarrito.innerHTML = '';
     
     // forma rapida (recomendada)
     while(viewModalContent.firstChild) {
          viewModalContent.removeChild(viewModalContent.firstChild);
      }
    }

    function vaciarCart() {
     // forma lenta
     // contenedorCarrito.innerHTML = '';
     
     // forma rapida (recomendada)
     
     while(cartModal.firstChild) {
          cartModal.removeChild(cartModal.firstChild);
      }
    }

    

    /** Envía el pedido a WhatsApp */
    function sendToWhatsApp() {
        const userName = document.getElementById('user-name').value.trim();
        const userAddress = document.getElementById('user-address').value.trim();
        const userCelular = document.getElementById('user-celular').value.trim();
        const userPago = document.getElementById('user-pago').value.trim(); 
        const userReferencia = document.getElementById('user-referencia').value.trim();

        if (cart.length === 0) {
            alert("Su carrito está vacio!");
            return;
        }

        if (userName === "" || userAddress === "") {
            alert("Por favor, indique su nombre / direccion para continuar.");
            return;
        }

        let message = `Hola! quiero hacer este pedido, favor de traerlo a la brevedad:\n\n`;
        message += `*Cliente:* ${userName}\n`;
        message += `*Direccion:* ${userAddress}\n\n`;
        message += `*Referencia:* ${userReferencia}\n\n`;
        message += `*Celular:* ${userCelular}\n\n`;
        message += `*Forma de Pago:* ${userPago}\n\n`;
        message += `*Items del Pedido:*\n`;

        cart.forEach(item => {
            message += `- ${item.quantity}x ${item.name}\n`;
        });
        
        const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
        message += `\n*Total:* S/. ${total.toFixed(2).replace('.', ',')}`;
        
        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
        
        window.open(whatsappUrl, '_blank');

        //cartModal.classList.add('hidden')
        cartModal.classList.remove('hidden')
        //vaciarCart();
        //cart = [];      // Vaciar el carrito después de enviar el pedido
        //updateCart(); // Actualizar la UI del carrito
    }

    // --- EVENT LISTENERS ---
    cartBar.addEventListener('click', () => cartModal.classList.remove('hidden'));
    closeModalBtn.addEventListener('click', () => cartModal.classList.add('hidden'));
    checkoutBtn.addEventListener('click', sendToWhatsApp);
        
    // --- INICIALIZACIÓN ---
    renderProducts();
    renderPagination();
    updateCart();
});