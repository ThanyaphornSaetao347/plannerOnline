<script>
import { RouterLink } from 'vue-router';
</script>

<template>
    <div class="contianer">
        <div class="navbar">
            <div class="partone">
                <ul>
                    <li><RouterLink to="#">
                        <img src="/src/assets/home.svg" width="25" height="25" alt="home">
                    </RouterLink></li>
                    <li><RouterLink to="project">
                        <img src="/src/assets/project.svg" width="25" height="25" alt="project"><span>project</span>
                    </RouterLink></li>
                    <li><RouterLink to="tracker">
                        <img src="/src/assets/tracker.svg" width="25" height="25" alt="tracker"><span>tracker</span>
                    </RouterLink></li>
                    <li><RouterLink to="expanse">
                        <img src="/src/assets/expanse.svg" width="25" height="25" alt="expanse"><span>expanse</span>
                    </RouterLink></li>
                    <li><RouterLink to="reflect">
                        <img src="/src/assets/reflect.svg" width="25" height="25" alt="reflect"><span>reflect</span>
                    </RouterLink></li>
                    <li><RouterLink to="journal">
                        <img src="/src/assets/journal.svg" width="25" height="25" alt="journal"><span>journal</span>
                    </RouterLink></li>
                </ul>
            </div>
       
            <div class="parttwo">
                <ul>
                    <li><RouterLink to="jan">jan</RouterLink></li>
                    <li><RouterLink to="feb">feb</RouterLink></li>
                    <li><RouterLink to="mar">mar</RouterLink></li>
                    <li><RouterLink to="apr">apr</RouterLink></li>
                    <li><RouterLink to="may">may</RouterLink></li>
                    <li><RouterLink to="jun">jun</RouterLink></li>
                    <li><RouterLink to="jul">jul</RouterLink></li>
                    <li><RouterLink to="aug">aug</RouterLink></li>
                    <li><RouterLink to="sep">sep</RouterLink></li>
                    <li><RouterLink to="oct">oct</RouterLink></li>
                    <li><RouterLink to="nov">nov</RouterLink></li>
                    <li><RouterLink to="dec">dec</RouterLink></li>
                </ul>
            </div>
        </div>
    </div>
</template>
<style>
/* ตั้งค่าทั้ง Container */
.contianer {
    margin-left: 5em;
    padding: 0;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
}

/* ตั้งค่า Navbar */
.navbar {
    display: flex;
    align-items: center; /* จัดแนวกลางในแนวตั้ง */
    justify-content: start; /* เริ่มจากซ้าย */
    gap: 20px; /* ระยะห่างระหว่าง partone และ parttwo */
    padding: 10px;
}
/* เพิ่มระยะห่างระหว่าง Icon และ Text */
.partone ul {
    display: flex;
    gap: 16px; /* ระยะห่างระหว่างแต่ละรายการ */
}

.partone ul li {
    display: flex;
    align-items: center; /* จัดให้ icon และข้อความอยู่ในแนวตั้งกลาง */
}

/* จัดการ List ของแต่ละ Part */
.partone ul, .parttwo ul {
    display: flex;
    align-items: center; /* จัดแนวกลางในแนวตั้ง */
    list-style-type: none;
    margin: 0;
    padding: 0;
}

/* ตั้งระยะห่างสำหรับแต่ละ List Item */
.partone ul li {
    margin-right: 40px; /* หรือกำหนดระยะห่างตามต้องการ */
}
.parttwo ul li{
    margin-right: 2em;
}
</style>