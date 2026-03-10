const menuItems = [

/* APPETIZERS */
{name:"Malai Soy Chaap Malai",price:16.99,category:"appetizers",img:"assets/malai-soy-chaap.jpg"},
{name:"Malai Broccoli",price:13.99,category:"appetizers",img:"assets/malai-broccoli.jpg"},
{name:"Chingari Soy Chaap",price:16.99,category:"appetizers",img:"assets/chingari-chaap.jpg"},
{name:"Mushroom Duplex",price:16.99,category:"appetizers",img:"assets/mushroom-duplex.jpg"},
{name:"Haryali Paneer Tikka",price:16.99,category:"appetizers",img:"assets/haryali-paneer.jpg"},
{name:"Afghani Paneer Tikka",price:16.99,category:"appetizers",img:"assets/afghani-paneer.jpg"},
{name:"Tandoori Chaap",price:16.99,category:"appetizers",img:"assets/tandoori-chaap.jpg"},
{name:"Tandoori Paneer Tikka",price:16.99,category:"appetizers",img:"assets/tandoori-paneer.jpg"},
{name:"Spinach Cheese Corn Rolls",price:16.99,category:"appetizers",img:"assets/spinach-rolls.jpg"},
{name:"Chatori Sampler (Paneer + Chaap)",price:19.99,category:"appetizers",img:"assets/sampler.jpg"},

/* CHAAT */
{name:"Samosa Chana Chaat",price:9.99,category:"chaat",img:"assets/samosa-chaat.jpg"},
{name:"Dasi See Pun",price:9.99,category:"chaat",img:"assets/dasi-pun.jpg"},
{name:"Aloo Tikki Chaat",price:8.99,category:"chaat",img:"assets/aloo-tikki.jpg"},
{name:"Pineapple Shakargande",price:10.99,category:"chaat",img:"assets/pineapple-chaat.jpg"},
{name:"Dani Papri Chaat",price:9.99,category:"chaat",img:"assets/papri-chaat.jpg"},
{name:"Dahi Bhalla Chaat",price:10.99,category:"chaat",img:"assets/dahi-bhalla.jpg"},
{name:"Chaat Platter",price:18.99,category:"chaat",img:"assets/chaat-platter.jpg"},
{name:"Pani Puri",price:8.99,category:"chaat",img:"assets/pani-puri.jpg"},
{name:"Ruby's Special Chana Bhature",price:15.99,category:"chaat",img:"assets/chana-bhature.jpg"},
{name:"Aloo Puri Chole",price:13.99,category:"chaat",img:"assets/aloo-puri.jpg"},

/* SIDE ORDERS */
{name:"Raita",price:4.99,category:"sides",img:"assets/raita.jpg"},
{name:"Garden Salad",price:5.99,category:"sides",img:"assets/salad.jpg"},
{name:"Onion Pickle",price:3.99,category:"sides",img:"assets/pickle.jpg"},
{name:"Extra Bhatura",price:4.99,category:"sides",img:"assets/aloo-puri.jpg"},
{name:"Butter",price:2.99,category:"sides",img:"assets/butter.jpg"},
{name:"Extra Puri (2)",price:3.99,category:"sides",img:"assets/aloo-puri.jpg"},

/* INDO CHINESE */
{name:"Veg Noodles",price:12.99,category:"indo-chinese",img:"assets/noodles.jpg"},
{name:"Veg Fried Rice",price:12.99,category:"indo-chinese",img:"assets/fried-rice.jpg"},
{name:"Burnt Garlic Fried Rice",price:13.99,category:"indo-chinese",img:"assets/garlic-rice.jpg"},
{name:"Gobi Manchurian",price:13.99,category:"indo-chinese",img:"assets/gobi-manchurian.jpg"},
{name:"Chilli Paneer",price:14.99,category:"indo-chinese",img:"assets/chilli-paneer.jpg"},
{name:"Veg Manchurian",price:14.99,category:"indo-chinese",img:"assets/veg-manchurian.jpg"},
{name:"Rasraaj Garden Melt Sandwich",price:9.99,category:"indo-chinese",img:"assets/melt-sandwich.jpg"},

/* RICE ITEMS */
{name:"Veg Biryani",price:13.99,category:"rice",img:"assets/veg-biryani.jpg"},
{name:"Paneer Biryani",price:14.99,category:"rice",img:"assets/paneer-biryani.jpg"},
{name:"Tawa Pulao",price:13.99,category:"rice",img:"assets/pulao.jpg"},
{name:"Jeera Rice",price:6.99,category:"rice",img:"assets/jeera-rice.jpg"},
{name:"Matar Pulao",price:8.99,category:"rice",img:"assets/matar-pulao.jpg"},

/* NAAN / ROTI */
{name:"Plain Naan",price:3.99,category:"breads",img:"assets/naan.jpg"},
{name:"Garlic Naan",price:4.99,category:"breads",img:"assets/garlic-naan.jpg"},
{name:"Onion Chilli Naan",price:4.99,category:"breads",img:"assets/onion-naan.jpg"},
{name:"Garlic Cheese Naan",price:5.99,category:"breads",img:"assets/cheese-naan.jpg"},
{name:"Plain Paratha",price:3.99,category:"breads",img:"assets/paratha.jpg"},
{name:"Tandoori Roti",price:2.99,category:"breads",img:"assets/tandoori-roti.jpg"},

/* TAWA PARATHA */
{name:"Aloo Onion Paratha",price:9.99,category:"breads",img:"assets/aloo-paratha.jpg"},
{name:"Gobhi Paratha",price:9.99,category:"breads",img:"assets/gobhi-paratha.jpg"},
{name:"Paneer Pyaz Paratha",price:10.99,category:"breads",img:"assets/paneer-paratha.jpg"},
{name:"Mix Veg Paratha",price:10.99,category:"breads",img:"assets/mix-paratha.jpg"},
{name:"Hariyali Paneer Paratha",price:11.99,category:"breads",img:"assets/hariyali-paratha.jpg"},
{name:"Hariyali Cheese Paratha",price:11.99,category:"breads",img:"assets/cheese-paratha.jpg"},
{name:"Garlic Cheese Chilli Paratha",price:10.99,category:"breads",img:"assets/garlic-paratha.jpg"},
{name:"Whole Wheat Roti (2pcs)",price:2.50,category:"breads",img:"assets/wheat-roti.jpg"},

/* SANDWICH / ROLLS / PASTA */
{name:"Bombay Veg Sandwich",price:12.99,category:"main",img:"assets/bombay-sandwich.jpg"},
{name:"Tawa Paneer Sandwich",price:14.99,category:"main",img:"assets/paneer-sandwich.jpg"},
{name:"Chilli Cheese Toast",price:13.99,category:"main",img:"assets/cheese-toast.jpg"},
{name:"Paneer Kathi Roll",price:14.99,category:"main",img:"assets/kathi-roll.jpg"},
{name:"Paneer Tikka Burrito",price:14.99,category:"main",img:"assets/burrito.jpg"},
{name:"Cheesy Paneer Sliders",price:14.99,category:"main",img:"assets/sliders.jpg"},
{name:"Veggie Cheese Pasta",price:14.99,category:"main",img:"assets/pasta.jpg"},

/* DRINKS */
{name:"Mango Lassi",price:5.99,category:"drinks",img:"assets/mango-lassi.jpg"},
{name:"Sweet Lassi",price:5.99,category:"drinks",img:"assets/lassi.jpg"},
{name:"Salt Lassi",price:5.99,category:"drinks",img:"assets/lassi.jpg"},
{name:"Masala Lemon Mojito",price:5.99,category:"drinks",img:"assets/mojito.jpg"},
{name:"Ginger Chai",price:3.99,category:"drinks",img:"assets/chai.jpg"},
{name:"Watermelon Mojito",price:7.99,category:"drinks",img:"assets/watermelon-mojito.jpg"},
{name:"Soda",price:5.99,category:"drinks",img:"assets/soda.jpg"},

/* DESSERT */
{name:"Walnut Brownie with Ice Cream",price:12.99,category:"desserts",img:"assets/brownie.jpg"},
{name:"Carrot Halwa",price:8.99,category:"desserts",img:"assets/gajar-halwa.jpg"},
{name:"Gulab Jamun",price:5.99,category:"desserts",img:"assets/gulab-jamun.jpg"},
{name:"Mango Sago",price:7.99,category:"desserts",img:"assets/mango-sago.jpg"},
{name:"Gulkand Kheer",price:6.99,category:"desserts",img:"assets/kheer.jpg"}

];