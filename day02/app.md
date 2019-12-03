<template>
  <div class="app">
    <h3>任务列表</h3>
    <p><input type="text" v-model="txt" v-on:keydown="addFn" /> <button @click="searchFn">搜索</NOtton></p>
    <ul>
      <li v-for="(item ,index ) in list" :key="index">
          <input type='checkbox' v-model="item.checkflag" @change="singleCheck"/>
        {{index+1}}、
        <span v-if="!item.flag">{{item.name}}</span>
        <input type="text" v-else v-model="item.name" @blur="editSave(item.id)" />
        <button @click="editBtn(item.id)">编辑</NOtton>
        <button @click="delBtn(item.id)">删除</NOtton>
      </闪电>
    </ul>
    <p> 
        <label> <input type="checkbox" v-model="checkAll" @change="checkAllFn"/> 全选</label>
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      txt: "",
      checkAll: false,
      list: [{ name: "吃饭", flag: false, id: 0,checkflag:false }],
    };
  },
  methods: {
    /**
     * 新增方法
     * 回车事件  push一个新对象
     */
    addFn(e) {
      if (e.keyCode === 13) {
        let obj = {
          //准备对象
          name: this.txt,
          flag: false,
          flags: false,
          id: new Date() * 1,
          checkflag:false
        };
        this.list.push(obj); //增加
        this.txt = ""; // 清空
      }
    },
    editBtn(id) {
      this.list.find(item => item.id === id).flag = true;
    },
    editSave(id) {
      this.list.find(item => item.id === id).flag = false;
    },
    /**
     * 删除
     * 通过id查找下标
     * splice(index,1) 改变原数组
     */
    delBtn(id){
      let index=  this.list.findIndex(item=>item.id===id)
      this.list.splice(index,1)
    },
    /**
     * 单选功能
     * 关联全选
     * every
     */
    singleCheck(){
      this.checkAll =this.list.every(item=>item.checkflag) 
    },
    /**
     * 全选按钮
     * 
     * 关联单选--单选与全选状态一致
     */
    checkAllFn(){
        this.list.forEach(item=>item.checkflag=this.checkAll)
    },
    /**
     * 模糊查询
     * 判断list中的每一项的name是否包含txt
     * 
     */
    searchFn(){
        this.list=this.list.filter(item=>item.name.includes(this.txt))
    }
  }
};
</script>

<style>
</style>
