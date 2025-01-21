<template>
  <div class="app">
    <h1>Vue.js To-Do List</h1>
    <input v-model="newTask" placeholder="Add a new task" @keyup.enter="addTask" />
    <button @click="addTask">Add Task</button>
    <ul>
      <li v-for="(task, index) in tasks" :key="index">
        <input type="checkbox" v-model="task.completed" />
        <span :class="{ 'completed-task': task.completed }">{{ task.text }}</span>
        <button @click="removeTask(index)">Delete</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTask: '',
      tasks: []
    };
  },
  methods: {
    addTask() {
      if (this.newTask.trim() !== '') {
        this.tasks.push({ text: this.newTask, completed: false });
        this.newTask = '';
      }
    },
    removeTask(index) {
      this.tasks.splice(index, 1);
    }
  }
};
</script>

<style>
/* ปรับตำแหน่งทั้งหมดให้อยู่ตรงกลาง */
.app {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh; /* ใช้ความสูงเต็มหน้าจอ */
  text-align: center;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

/* สำหรับข้อความที่ถูกทำเครื่องหมายว่าทำเสร็จ */
.completed-task {
  text-decoration: line-through;
  color: grey;
}

/* อินพุต */
input {
  margin-bottom: 10px;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
}

/* ปุ่ม */
button {
  margin-left: 5px;
  padding: 5px 10px;
  background-color: #e63946;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #d32f2f;
}

/* รายการงาน */
ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: flex;
  align-items: center;
  margin: 5px 0;
  justify-content: center;
}
</style>