<script setup>
import MyCard from "@/views/MyCard.vue";
//import items from '../Products.json';
</script>

<template>
  <main>
    <div class="tx">
      <h1>Products</h1>
    </div>

    <div className="grid-container">
      <MyCard v-for="item in items" :key="item.id" :id="item.id" 
        :title="item.title" :description="item.description" 
        :image="item.image" :price="item.price" />
    </div>
  </main>
</template>

<script scope>
export default {
  name: "Products",
  components: {
    MyCard,
  },
  data() {
    return {
      items: [],
    };
  },
  created() {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        this.items = json;
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  },
};
</script>
<style scoped>
.tx {
    position: static;
    top: 0;
    left: 0;
    width: 100%;
    height: 60px;
    margin-top: 2px;
    display: flex;
    align-items: center;
    padding: 0 90px;
    font-size: 20px;
    font-weight: 600;
}

main {
    margin-top: 60px;
    /* Offset for the fixed header */
    padding: 1rem;
}

.grid-container {
    display: grid;
    padding-top: 50%;
    margin-top: 5px;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    /* Responsive grid */
    gap: 1rem;
    /* Space between items */
    padding: 1rem;
    /* Add padding around the grid */
}

@media (min-width: 400px) {
    .grid-container {
        grid-template-columns: repeat(1, 1fr);
    }

    .tx {
        position: static;
        top: 0;
        left: 0;
        width: 100%;
        height: 80px;
        margin-top: 2px;
        display: flex;
        align-items: center;
        padding: 0 90px;
        font-size: 16px;
        font-weight: 600;
        /* Reduce navbar height for smaller screens */
    }

    main {
        margin-top: 100px;
        /* Match the header height */
    }
}

@media (min-width: 576px) {
    .grid-container {
        grid-template-columns: repeat(1, 1fr);
    }

    .tx {
        position: static;
        top: 0;
        left: 0;
        width: 100%;
        height: 100px;
        margin-top: 2px;
        display: flex;
        align-items: center;
        padding: 0 90px;
        font-size: 18px;
        font-weight: 600;
        /* Reduce navbar height for smaller screens */
    }

    main {
        margin-top: 100px;
        /* Match the header height */
    }
}

@media (min-width: 992px) {
    .grid-container {
        grid-template-columns: repeat(3, 1fr);
    }

    .tx {
        position: static;
        top: 0;
        left: 0;
        width: 100%;
        height: 120px;
        margin-top: 2px;
        display: flex;
        align-items: center;
        padding: 0 90px;
        font-size: 20px;
        font-weight: 600;
        /* Reduce navbar height for smaller screens */
    }

    main {
        margin-top: 120px;
        /* Match the header height */
    }
}
</style>