<template>
  <div class="card">
    <img :src="image" :alt="name" style="width:100%" />
    <div className="container">
      <h1>{{ title }}</h1>
      <p class="price">{{ price }}</p>
      <p>{{ Description }}</p>

      <router-link :to="`/Products/${id}`">
        <button>View Details</button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyCard",
  props: {
    id: {
      type: [String, Number],
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    Description: {
      type: String,
      default: "",
    },
    image: {
      type: String,
      required: true,
    },
    price: {
      type: [String, Number],
      required: true,
    },
  },
};
</script>
<style scoped>
.card {
/*Add shadows to create the "card" effect */
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
max-width: 300px;
margin: auto; 
text-align: center;
font-family: arial;
}
/*On mouse-over, add a deeper shadow */
.card:hover {
box-shadow: 0 10px 20px 0 rgba(0,0,0,0.2);
}
Img {
border-radius: 5px 5px 0 0;
}
/*Add some padding inside the card container */
.container {
padding: 2px 16px;
margin: 20px;
margin-top: 10px;
}
price {
color: rgb(255, 0, 0);
font-size: 22px;
}
.card button { border: none;
outline: 0;
padding: 12px;
color: white;
background-color: black; text-align: center;
cursor: pointer;
width: 100%;
font-size: 18px;
}
.card button:hover {
opacity: 0.7;
}
</style>
