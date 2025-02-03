<script setup>
import { Network } from "vis-network"
import { DataSet } from "vis-data"; // 引入 DataSet
import { onMounted, ref } from "vue";



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

const years = ref([
  { 
    color: 'black', 
    year: '2024/8',
    title:"學習JAVA/MSSQL/JDBC",
    list:["JAVA基礎/進階語法 (物件導向三大特性、記憶體區域、資料結構)",
          "MSSQL語法 (CURD、ACID、正規化、JOIN)",
          "JDBC應用 (使用JAVA操作CURD)"
    ],
    text:"Hello",
  },
  { 
    color: 'green', 
    year: '2024/9 ~ 2024/10',
    title:"學習HTML/JavaScript/Servlet/Hibernate", 
    list:["HTML基礎 (行內元素和區塊元素、基本排版、Flexbox)",
          "JavaScript基礎 (Restful、AJAX、匿名函數)",
          "Servlet架設 (Tomcat使用、JSP應用、Cookie/Session)",
          "Hibernate基礎 (OR Mapping、生命週期、關聯性語法)"
    ],
    text:"Hello",
  },
  { 
    color: 'pink', 
    year: '2024/11 ~ 2024/12',
    title:"學習SpringBoot/Vue.js/Azure" , 
    list:["SpringBoot基礎 (MVC架構、Thymeleaf、Annotation)",
          "",
    ],
    text:"Hello",
  },
  { 
    color: 'amber', 
    year: '1990',
    title:"JAVA", 
    lists:[],
    text:"Hello", 
  },
  { 
    color: 'orange', 
    year: '2000',
    title:"JAVA", 
    list:[],
    text:"Hello",
  },
])

</script>

<template>
    <div class="content">
        <h1>Skill Map</h1>
        <div id="mynetwork"></div>
    </div>
    <div class="timeline">
      <v-timeline align="start">
        <v-timeline-item
          v-for="(year, i) in years"
          :key="i"
          :dot-color="year.color"
          size="small"
        >
          <template v-slot:opposite>
            <div
              :class="`pt-1 headline font-weight-bold text-${year.color}`"
              v-text="year.year"
            ></div>
          </template>
          <div>
            <h2 :class="`mt-n1 headline font-weight-light mb-4 text-${year.color}`">
              {{year.title}}
            </h2>
            <div>
              <ol style="margin-left: 20px;">
                <li :style="{color: year.color}" v-for="(item,i) in year.list" :key="i">
                  {{ item }}
                </li>
              </ol>
            </div>
          </div>
        </v-timeline-item>
      </v-timeline>
    </div>
</template>

<style scoped>
.content{
    height: 100%;
    width: 100%;
}
.left{
  width: 50%;

}
/* .right{
    margin-left: 50px;
    width: 50%; 
    border: 1px solid lightgray;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow-y: scroll;

    -ms-overflow-style: none;
    scrollbar-width: none;
    padding: 20PX;
}
.scroll-container::-webkit-scrollbar {
  display: none;
} */
.timeline{
  height: auto;
  margin: 0 100px;
}

/* .right div{
    width: 500px;
    height: 250px;
    border: 1px solid white;
} */
h1{
    color: #FFFFDD;
    font-size: 48px;
    height: 10%;
}
#mynetwork {
  width: 100%;
  height: 90%;
  /* border: 1px solid white; */
}


</style>