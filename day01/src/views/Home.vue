<template>
  <div class="home">
    <input type='text'
           v-model="txt"
           @keyup='addFn' />
    <p>
      总任务：{{list.length}}个 已完成{{length}}个 <input type='checkbox'
             @click='finish' />已完成 <input type="checkbox"
             @click="Unfinished">未完成
    </p>
    <ul v-show="!newShow">
      <li v-for="(item,index) in list"
          :key='item.id'>
        <span>{{index++}}.{{item.title}}</span>
        <div class="btn">
          <span @click='delFn(item.id)'>删除</span>
          <span @click='change(item.id)'>{{item.checkflag?'已完成':"未完成"}}</span>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "home",
  data() {
    return {
      txt: "",
      newShow: false,
      list: [
        { title: "向往的生活", id: 0, flag: false, checkflag: false },
        { title: "奔跑吧", id: 1, flag: false, checkflag: false },
        { title: "快乐家族", id: 2, flag: false, checkflag: false },
        { title: "极限挑战", id: 3, flag: false, checkflag: false }
      ],
      length: 0
    };
  },
  methods: {
    addFn(e) {
      if (e.keyCode === 13) {
        let obj = {
          title: this.txt,
          id: this.list.length,
          flag: false,
          checkflag: false
        };
        this.list.push(obj);
        this.txt = "";
      }
    },
    delFn(id) {
      let index = this.list.findIndex(item => item.id === id);
      this.list.splice(index, 1);
    },
    change(id) {
      let item = this.list.find((item, index) => item.id === id);
      if (!item.flag) {
        item.flag = true;
        item.checkflag=true
        this.length++;
      }
    },
    Unfinished() {
    //   this.list.filter((item, index) => {
    //     if (!item.flag) {
    //       this.newList.push(item);
    //       this.newShow = true;
    //     }
    //   });
    },
    finish() {
    //     this.list.filter((item, index) => {
    //     if (!item.flag) {
    //       this.newList.push(item);
    //       this.newShow = true;
    //     }
    //   });
    //   console.log(this.newList)
    }
  }
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  list-style: none;
  box-sizing: border-box;
}
ul {
  width: 100%;
  height: auto;
  font-size: 14px;
  li {
    line-height: 40px;
    display: flex;
    > span {
      width: 45%;
    }
    .btn {
      width: 55%;
      span {
        margin: 10px;
      }
    }
  }
}
</style>