<template>
  <div class="about">
    <input type='text' v-model="text" @keydown="addFn" />
    <ul>
        <li v-for='(item,index) in list' :key='item.id'>
            <span> {{index++}}.{{item.title}}</span>
            <span @click='bjFn'>编辑</span>
            <span @click='delFn'>删除</span>
        </li>
    </ul>
  </div>
</template>
<script>
export default {
  data(){
    return {
      text:'',
      list:[]
    }
  },
  methods:{
    addFn(e){
      if(e.keyCode===13){
        let obj = {
            title:this.text,
            flag:false,
            id:new Date()*1
        }
        // console.log(obj)
        this.list.push(obj)
        this.text='  '
      }
    },
    bjFn(){

    },
    delFn(){

    }
  }
}
</script>