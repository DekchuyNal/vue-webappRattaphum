<template>
    <nav class="navbar">
      <div class="wrapper">
        <div class="logo">
          <router-link to="/">
            <img src="C:/VueWebApp/vue-webapp/src/assets/logo.webp" alt="logo" />
          </router-link>
        </div>
        <ul class="nav-links">
          <label for="close-btn" class="btn close-btn">
            <i class="fas fa-times"></i>
          </label>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/products">MyCard</router-link></li>
          <li><router-link to="/about">About</router-link></li>
        </ul>
      </div>
    </nav>
  </template>
  
  <script>
  import logo from "C:/VueWebApp/vue-webapp/src/assets/logo.webp";
  export default {
    name: "MyBar",
    data() {
      return {
        logo,
      };
    },
  };
  </script>
  
  <style scoped>
  /* สไตล์สำหรับ Navbar */
  .navbar {
    background-color: #000000; /* สีพื้นหลังของ Navbar */
    padding: 15px 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
    position: sticky; /* ให้ Navbar ติดอยู่ด้านบน */
    top: 0;
    z-index: 1000;
  }
  
  /* สไตล์สำหรับโลโก้ */
  .logo img {
    height: 50px;
    width: auto;
    cursor: pointer;
  }
  
  /* สไตล์สำหรับ ul และ nav links */
  .nav-links {
    list-style: none;
    display: flex;
    gap: 20px;
    margin: 0;
    padding: 0;
  }
  
  .nav-links li {
    font-size: 1rem;
  }
  
  .nav-links a {
    text-decoration: none;
    color: white;
    font-weight: bold;
    padding: 10px 15px;
    border-radius: 5px;
    transition: all 0.3s ease;
  }
  
  .nav-links a:hover {
    background-color: white;
    color: #000000;
    transform: scale(1.1);
  }
  
  /* สำหรับปุ่ม close-btn (ถ้าใช้งาน) */
  .btn {
    display: none; /* ซ่อนปุ่มหากไม่ได้ใช้งาน */
  }
  
  /* Responsive Design */
  @media (max-width: 768px) {
    .nav-links {
      flex-direction: column;
      background-color: #4caf50;
      position: absolute;
      top: 100%;
      right: 0;
      width: 100%;
      display: none; /* เริ่มต้นซ่อน */
    }
  
    .nav-links.active {
      display: flex; /* แสดงเมนูเมื่อ active */
    }
  
    .btn {
      display: block;
      font-size: 2rem;
      color: white;
      cursor: pointer;
    }
  
    .close-btn {
      align-self: flex-end;
      margin-right: 20px;
    }
  }
  </style>