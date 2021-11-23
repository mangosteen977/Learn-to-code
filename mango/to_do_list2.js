let all_li = {template:`<li>1</li>`}
let yet_li = {template:`<li v-for="lis in arr" :class="lis[1]">
    <span class="check" @click="imdone(lis[2])"></span>
    <label>{{lis[0]}}</label>
    <button type="button" @click="del_todo(lis[2])">DEL</button>
</li>`
}
let done_li = {template:`<li v-for="lis in arr" :class="lis[1]">
    <span class="check" @click="imdone(lis[2])"></span>
    <label>{{lis[0]}}</label>
    <button type="button" @click="del_todo(lis[2])">DEL</button>
</li>`
}
let rou = new VueRouter({
    routes:[
        {
            path:"/all",
            components:{list_li:{template:'<li>all</li>'}}
        },
        {
            path:"/yet",
            components:{list_li:yet_li}
        },
        {
            path:"/done",
            components:{list_li:{template:'<li>done</li>'}}
            
        }
    ]
});
let todos = new Vue({
    router:rou,
    el:"#todobox",
    data:{
        arr:[],
        num_id:0,
        todo_text:"",
        btn1:'<button type="button">ALL</button>',
        btn2:'<button type="button">YET</button>',
        btn3:'<button type="button">DONE</button>'
    },
    methods:{
        add_todos(){
            if(!this.todo_text){
                alert("please add To Do List");
                this.$refs.f_text.focus();
            }
            else{
                this.arr.push([this.todo_text, "yet", this.num_id]);
                this.todo_text="";
                this.num_id++;
            }
        },
        imdone(nid){
            this.arr.filter(function(array,node,all){
                let ser = array.indexOf(nid);
                if(ser!=-1){
                    if(array[1] == "yet"){
                        document.getElementById("dotolist").childNodes[node].className = "done";
                        return array[1] = "done";
                    }
                    else{
                        document.getElementById("dotolist").childNodes[node].className = "yet";
                        return array[1] = "yet";
                    }
                }
            });
        },
        del_todo(nid){
            this.arr.filter(function(array,node,all){
                let ser = array.indexOf(nid);
                if(ser!=-1){
                   todos.arr.splice(node,1);
                }
            });
        },
        del_all(){
            this.arr=[];
        }
    },
    computed:{

    }
});