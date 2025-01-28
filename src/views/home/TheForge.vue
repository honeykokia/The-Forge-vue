<script setup>
import { Network } from "vis-network"
import { DataSet } from "vis-data"; // 引入 DataSet
import { onMounted } from "vue";

// import { useCommonUtils } from '@/composable/useCommonUtils';
// import { useUserStore } from '@/stores/userStore';
// import { onMounted } from 'vue';

// const baseUrl = import.meta.env.VITE_BASE_URL;
// const {checkSession} = useCommonUtils();
// const userStore = useUserStore();

// onMounted(async()=>{
//     try {
//         const userDetail = await checkSession(`${baseUrl}/api/users/checksession`)
//         if(userDetail.email!=null){
//             userStore.login();
//             userStore.updateEmail(userDetail.email);
//             userStore.updateName(userDetail.name);
//         }
//     } catch (error) {
    
//     }
// })

onMounted(() => {
  initializeNetwork();
});

// 節點數據
const nodes = new DataSet([
  { id: 1, label: "RoadMap" , color: "#ff4461" },
  { id: 2, label: "Backend" , color: "#ff7f61"},
  { id: 3, label: "Frontend", color: "#ff7f61" },
  { id: 4, label: "DataBase", color: "#ff7f61" },
  { id: 5, label: "Devops", color: "#ff7f61" },
  { id: 6, label: "JAVA"},
  { id: 7, label: "Hibernate"},
  { id: 8, label: "Servlet"},
  { id: 9, label: "SpringBoot"},
  { id: 10, label: "Javascript"},
  { id: 11, label: "HTML"},
  { id: 12, label: "CSS"},
  { id: 13, label: "Vue.js"},
  { id: 14, label: "MSSQL"},
  { id: 15, label: "Git"},
  { id: 16, label: "Azure"},
  { id: 17, label: "GCP"},
]);

// 邊數據
const edges = new DataSet([
  { from: 1, to: 3 },
  { from: 1, to: 2 },
  { from: 1, to: 4 },
  { from: 1, to: 5 },
  { from: 2, to: 6 },
  { from: 2, to: 7 },
  { from: 2, to: 8 },
  { from: 2, to: 9 },
  { from: 3, to: 10},
  { from: 3, to: 11},
  { from: 3, to: 12},
  { from: 3, to: 13},
  { from: 4, to: 14},
  { from: 5, to: 15},
  { from: 5, to: 16},
  { from: 5, to: 17},
]);



// 初始化網絡圖的函數
function initializeNetwork() {
  const container = document.getElementById("mynetwork");
  if (container) {
    const data = {
      nodes: nodes,
      edges: edges,
    };
    const options = {};
    const network = new Network(container, data, options); // 創建網絡圖

    network.fit({
    nodes: [1,2,3,4], // 要顯示的節點
    animation: true,// 啟用動畫
    scale: 5 ,
});

    
  } else {
    console.error("Container not found!");
  }
}

</script>

<template>
    <div class="content">
        <div class="left">
            <h1>Skill Map</h1>
            <div id="mynetwork"></div>
        </div>
        <div class="right">
            <div>Lastest Note</div>
        </div>
    </div>
    <div style="height: 500px;">

</div>

</template>

<style scoped>
.content{
    display: flex;
    height: 100%;
}
.right{
    margin-left: 50px;
    width: 100%;
    height: 100%;
    border: 1px solid lightgray;
    display: flex;
    justify-content: center;
    align-items: center;
}
.right div{
    width: 500px;
    height: 250px;
    border: 1px solid white;
}
h1{
    color: #FFFFDD;
    font-size: 48px;
}
#mynetwork {
  width: 600px;
  height: 400px;
  border: 1px solid lightgray;
}


</style>