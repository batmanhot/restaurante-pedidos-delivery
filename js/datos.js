// export const products = [
//         { id: 1, name: 'Cheese Burger Duplo', price: 35.00, image: './images/hamburguesa-1.avif', description: 'Pão de fermentação natural, 2x burger 160g, queijo prato e maionese da casa.' },
//         { id: 2, name: 'Smash Burger', price: 30.00, image: './images/hamburguesa-2.avif', description: 'Pão brioche, burger 100g prensado, queijo cheddar e molho especial.' },
//         { id: 3, name: 'Cheese Bacon', price: 38.00, image: './images/hamburguesa-3.avif', description: 'Pão levinho, burger 160g, queijo prato, bacon crocante e maionese da casa.' },
//         { id: 4, name: 'Chicken Burger', price: 32.00, image: './images/hamburguesa-4.avif', description: 'Pão de brioche, frango empanado crocante, alface, tomate e maionese de alho.' },
//         { id: 5, name: 'Salad Burger', price: 28.00, image: './images/hamburguesa-5.avif', description: 'Pão integral, burger 160g, alface, tomate, cebola roxa e queijo branco.' },
//         { id: 6, name: 'Burger Vegano', price: 33.00, image: './images/hamburguesa-6.avif', description: 'Pão vegano, burger à base de plantas, queijo vegano, alface e molho especial.' },
//         { id: 7, name: 'Monster Burger', price: 45.00, image: 'https://images.unsplash.com/photo-1520072959219-c595dc870360?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGhhbWJ1cmd1ZXNhfGVufDB8fDB8fHww', description: 'Duplo pão, 3x burger 160g, triplo queijo, bacon, ovo e salada completa.' },
//         { id: 8, name: 'Classic Cheese Burger', price: 29.00, image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhhbWJ1cmd1ZXNhfGVufDB8fDB8fHww', description: 'Pão, burger 160g, queijo prato e maionese da casa. O clássico que funciona.' },
//         // --- Agrega más productos aquí para probar la paginación ---
//         { id: 9, name: 'Spicy Burger', price: 36.00, image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhhbWJ1cmd1ZXNhfGVufDB8fDB8fHww', description: 'Pão de brioche, burger 180g, queijo apimentado, pimenta jalapeño e molho picante.' },
//         { id: 10, name: 'Onion Rings Burger', price: 37.00, image: 'https://plus.unsplash.com/premium_photo-1675252369719-dd52bc69c3df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGhhbWJ1cmd1ZXNhfGVufDB8fDB8fHww', description: 'Pão australiano, burger 180g, anéis de cebola, queijo e molho barbecue.' },
//         { id: 11, name: 'Spicy Burger', price: 36.00, image: 'https://images.unsplash.com/photo-1460306855393-0410f61241c7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGhhbWJ1cmd1ZXNhfGVufDB8fDB8fHww', description: 'Pão de brioche, burger 180g, queijo apimentado, pimenta jalapeño e molho picante.' },
//         { id: 12, name: 'Onion Rings Burger', price: 37.00, image: 'https://plus.unsplash.com/premium_photo-1683121324022-d039da524194?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGhhbWJ1cmd1ZXNhfGVufDB8fDB8fHww', description: 'Pão australiano, burger 180g, anéis de cebola, queijo e molho barbecue.' },
//         { id: 13, name: 'Spicy Burger', price: 36.00, image: 'https://images.unsplash.com/photo-1549611016-3a70d82b5040?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGhhbWJ1cmd1ZXNhfGVufDB8fDB8fHww', description: 'Pão de brioche, burger 180g, queijo apimentado, pimenta jalapeño e molho picante.' },
//         { id: 14, name: 'Onion Rings Burger', price: 37.00, image: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhhbWJ1cmd1ZXNhfGVufDB8fDB8fHww', description: 'Pão australiano, burger 180g, anéis de cebola, queijo e molho barbecue.' },
//         { id: 15, name: 'Cheese Burger Duplo', price: 35.00, image: 'https://plus.unsplash.com/premium_photo-1683655058728-415f4f2674bf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGhhbWJ1cmd1ZXNhfGVufDB8fDB8fHww', description: 'Pão de fermentação natural, 2x burger 160g, queijo prato e maionese da casa.' },
//         { id: 16, name: 'Smash Burger', price: 30.00, image: 'https://images.unsplash.com/photo-1520072959219-c595dc870360?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGhhbWJ1cmd1ZXNhfGVufDB8fDB8fHww', description: 'Pão brioche, burger 100g prensado, queijo cheddar e molho especial.' },
//         // --- Agrega más productos aquí para probar la paginación ---
//         { id: 17, name: 'Cheese Bacon', price: 38.00, image: 'https://www.simplotfoods.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F0dkgxhks0leg%2F2sDFsZYlCbQR7k6RrEQhCd%2F78f5176201067ff7fd6480adfcb80188%2FDouble_Dilly_Smashburger_with_fries.jpg%3Ffm%3Dwebp&w=3840&q=75', description: 'Pão levinho, burger 160g, queijo prato, bacon crocante e maionese da casa.' },
//         { id: 18, name: 'Chicken Burger', price: 32.00, image: 'https://www.recetasnestle.com.ec/sites/default/files/srh_recipes/4e4293857c03d819e4ae51de1e86d66a.jpg', description: 'Pão de brioche, frango empanado crocante, alface, tomate e maionese de alho.' },
//         { id: 19, name: 'Salad Burger', price: 28.00, image: 'https://cloudfront-us-east-1.images.arcpublishing.com/infobae/24P2OKC3RVEHRD3F2VKQ76XX7M.jpg', description: 'Pão integral, burger 160g, alface, tomate, cebola roxa e queijo branco.' },
//         { id: 20, name: 'Burger Vegano', price: 33.00, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/NCI_Visuals_Food_Hamburger.jpg/1200px-NCI_Visuals_Food_Hamburger.jpg', description: 'Pão vegano, burger à base de plantas, queijo vegano, alface e molho especial.' },
//         { id: 21, name: 'Monster Burger', price: 45.00, image: 'https://alqueria.com.co/sites/default/files/styles/1327_612/public/hamburguesa-con-amigos-y-salsa-de-champinones_0.jpg?h=2dfa7a18&itok=hLxehdIa', description: 'Duplo pão, 3x burger 160g, triplo queijo, bacon, ovo e salada completa.' },
//         { id: 22, name: 'Classic Cheese Burger', price: 29.00, image: 'https://www.recetasnestle.com.ec/sites/default/files/styles/recipe_detail_desktop_new/public/srh_recipes/681c719667d572276a1507aea71de9ca.jpg?itok=BXa7wk3U', description: 'Pão, burger 160g, queijo prato e maionese da casa. O clássico que funciona.' },
//     ];

// --- DATOS GENERALES ---
const appDatos = {
        nombre: 'RED BURGUER',
        logo: './images/hamburguesa-logo.png', // Asegúrate de que esta imagen exista en tu carpeta /images
        direccion: 'Av. Las Flores 123, Lima, Perú',
        slogan: '¡La mejores hamburguesas de Lima!',
        whatsapp: 51951655295,
        itemPerPage: 8,
        email: 'batmanponte@gmail.com'
    }

export default appDatos;