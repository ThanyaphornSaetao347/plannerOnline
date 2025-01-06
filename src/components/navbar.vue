<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <nav class="navbar">
    <!-- Left Section -->
    <div class="navbar-left">
      <li v-for="item in menuItems" :key="item.text">
        <!-- ใช้ router-link และแสดง SVG ด้วย img -->
        <router-link :to="item.link" class="menu-item" :style="{ backgroundColor: item.color }">
          <img :src="item.icon" alt="icon" class="nav-icon" />
          {{ item.text }}
        </router-link>
      </li>
    </div>
    <!-- Right Section -->
    <div class="navbar-right">
      <!-- Right Section -->
      <router-link
        v-for="(month, index) in months"
        :key="month.name"
        :to="`/${month.name}`"
        class="month-box"
        :style="{ backgroundColor: `${baseColor}80` }"
        active-class="active"
      >
        <span>{{ month.name }}</span>
      </router-link>
    </div>
  </nav>
</template>

<script>
import home from "../assets/home.svg";
import project from "../assets/project.svg";
import tracker from "../assets/tracker.svg";
import expect from "../assets/expect.svg";
import reflect from "../assets/reflect.svg";
import journal from "../assets/journal.svg";

export default {
  data() {
    return {
      baseColor: "#4a90e2", // สีพื้นฐาน
      menuItems: [
        { text: "Home", link: "/", icon: home, class: "icon-home" },
        { text: "Projects", link: "/projects", icon: project, class: "icon-project", color: "#daf1fe" },
        { text: "Tracker", link: "/tracker", icon: tracker, class: "icon-tracker", color: "#e9f5db" },
        { text: "Expect", link: "/expect", icon: expect, class: "icon-expect", color: "#fff6dd" },
        { text: "Reflect", link: "/reflect", icon: reflect, class: "icon-reflect", color: "#ebe9ee" },
        { text: "Journal", link: "/journal", icon: journal, class: "icon-journal", color: "#d5d8dc" },
      ],
      months: [
        { name: "jan" },
        { name: "feb" },
        { name: "mar" },
        { name: "apr" },
        { name: "may" },
        { name: "jun" },
        { name: "jul" },
        { name: "aug" },
        { name: "sep" },
        { name: "oct" },
        { name: "nov" },
        { name: "dec" },
      ],
    };
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Abel&display=swap');
/* General Reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Abel', sans-serif;
  font-weight: bold;
}

.navbar {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed; /* Keep it at the top of the page */
  top: 0;
  left: 0; /* Ensure it starts from the very left edge */
  width: 100%; /* Span the entire width of the viewport */
  height: auto; /* Set a consistent height */
  padding: 0 20px; /*Add some horizontal padding for spacing*/
  /* box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); */
  z-index: 1000; /* Ensure it stays above other elements */
  border-radius: 15px;
}

.navbar-left {
  display: flex;
  list-style: none; /* Remove default bullet points */
  gap: 20px; /* Add space between list items */
  margin-right: 30px;
  margin-left: 30px;
  /* margin-top: 30px; */
}
.navbar-right {
  display: flex;
  list-style: none; /* Remove default bullet points */
  gap: 20px; /* Add space between list items */
  margin-right: 30px;
  margin-left: 30px;
  width: 100;
}

.nav-link {
  text-decoration: none;
  color: #555;
  padding: 10px 15px;
  border-radius: 5px;
  transition: background-color 0.3s, color 0.3s;
  align-items: center;
  text-align: center;
}

.nav-link:hover {
  background-color: #d1d8e0;
  color: #000;
}

.active {
  color: #7dade4e5;
  border-bottom: 2px solid #4a90e2;
}
.nav-icon {
  width: 20px; 
  height: 20px;
  display: inline-block;
  vertical-align: middle; /* Ensures alignment with text */
  margin-right: 5px; /* เพิ่มช่องว่างระหว่างไอคอนและข้อความ */
  color: #555;
}
span{
  text-transform: uppercase;
}

.menu-item {
  display: flex;
  align-items: center;
  text-decoration: none; /* ลบขีดเส้นใต้ */
  color: #555; /* ตั้งสีเป็นสีดำ */
  font-weight: bold;
  padding: 5px 10px;
  border-radius: 30px;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.menu-item:hover {
  background-color: #d1d8e0; /* พื้นหลังสีฟ้าเมื่อ hover */
  color: #000; /* ตัวอักษรสีขาวเมื่อ hover */
}

.month-box {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 60px; /* กำหนดความกว้าง */
  height: 40px; /* กำหนดความสูง */
  border-radius: 15px 15px 0 0; /* ขอบมนด้านบน */
  text-transform: uppercase; /* ตัวอักษรพิมพ์ใหญ่ */
  font-weight: bold;
  color: #000; /* สีข้อความ */
  text-decoration: none; /* ลบขีดเส้นใต้ */
  background-color: rgba(0, 0, 0, 0.5); /* โปร่งใสเริ่มต้น */
  margin-left: -23px;
  transition: background-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
  z-index: 1;
}

.month-box:hover {
  background-color: rgba(74, 144, 226, 0.6); /* สีพื้นหลังเมื่อ hover */
  transform: scale(1.1); /* ขยายเมื่อ hover */
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2); /* เพิ่มเงา */
}

.month-box:active,
.active {
  background-color: #7dade4e5; /* สีใหม่เมื่อ active */
  color: #fff; /* เปลี่ยนสีข้อความ */
  border: 2px solid #7dade4e5; /* เส้นขอบแสดงสถานะ active */
  box-shadow: 0px 4px 10px rgba(113, 161, 243, 0.746); /* เพิ่มเงา */
}

.icon-home {
  filter: brightness(0) saturate(100%) invert(72%) sepia(15%) saturate(356%) hue-rotate(178deg) brightness(93%) contrast(90%);
}

.icon-project {
  filter: brightness(0) saturate(100%) invert(80%) sepia(25%) saturate(531%) hue-rotate(258deg) brightness(90%) contrast(91%);
}

.icon-tracker {
  filter: brightness(0) saturate(100%) invert(83%) sepia(45%) saturate(615%) hue-rotate(303deg) brightness(94%) contrast(86%);
}

.icon-expect {
  filter: brightness(0) saturate(100%) invert(90%) sepia(19%) saturate(536%) hue-rotate(327deg) brightness(91%) contrast(87%);
}

.icon-reflect {
  filter: brightness(0) saturate(100%) invert(77%) sepia(37%) saturate(463%) hue-rotate(18deg) brightness(89%) contrast(82%);
}

.icon-journal {
  filter: brightness(0) saturate(100%) invert(56%) sepia(45%) saturate(289%) hue-rotate(133deg) brightness(87%) contrast(90%);
}

</style>
