<template>
  <div class="container">
    <nav>
      <h1>todo list</h1>
		<div class="menu" @click="menuShow = !menuShow"  title="Все заметки"
			:class="{activeMenu: menuShow === true}">
			<div class="block_1" 
				:class="{activeBox1: menuShow === true}"></div>
			<div class="block_2" 
				:class="{activeBox2: menuShow === true}"></div>
			<div class="block_3" 
				:class="{activeBox3: menuShow === true}"></div>
		</div>
    </nav>

	<div class="content">

		<list :menuShow="menuShow">
			<div class="task-form" v-if="!taskForm">
				Задачи 
				<div class="task-plus" @click="taskForm = !taskForm" title="Добавить задачу">
					<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.49 2 2 6.49 2 12s4.49 10 10 10h8c1.1 0 2-.9 2-2v-8c0-5.51-4.49-10-10-10zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>
				</div>
			</div>
			<div class="task-create" v-if="taskForm">
				<create-task 
				@submit-newtask="createTask"
				:listTask='listTask'
				@create-task-close="createTaskClose"
				>

				</create-task>
			</div>
			<task v-for="(item,index) in listTask" 
				
				:key="index"
				:item="item"
				:selectedTask="selectedTask"
				
				@choice-task="choiseTask"
				@remove-task="removeTask"	
				
				>

			<add-child-task  v-if="false"
				:selectedTask="selectedTask"
				@submit-child="submitChild"
				><!-- @push-child-arr="pushChildArr" -->
			</add-child-task>  <!-- eslint-disable-line no-mixed-spaces-and-tabs -->

			</task>
		</list>

		<div class="placeholder" v-if="listTask.length < 1">
			Создайте задачу
		</div>
		<div class="placeholder" v-else-if="!selectedTask">
			{{placeholder}}
		</div>
		
		<todo-list v-if="selectedTask && listTask.length > 0">


			
				<enter-todo 
					:menuShow="menuShow"
					:selectedTask="selectedTask"
					:todoArray="todoArray"
					@submit-newTodo="newToCreate" >

				</enter-todo>
			

			<todo-item 
				v-for="item in todoArray.slice().reverse()" 
				:key="item.id"
				:item="item"
				:selectedTask="selectedTask"
				@done-submit="doneSubmit"
				@remove-todo="removeTodo"
				>			
			</todo-item>
		</todo-list>
		
	</div>

		<!-- <div>
			<my-button @click="previous()">назад</my-button>
				{{todoArray[number]}}
			<my-button @click="next()">вперед</my-button>

		</div> -->
    
  </div>
</template>

<script>
import TodoList from '@/components/TodoList.vue'
import TodoItem from '@/components/TodoItem.vue'
// import MyButton from '@/components/UI/MyButton.vue'
import EnterTodo from '@/components/EnterTodo.vue'
import List from '@/components/List.vue'
import Task from '@/components/Task.vue'
import CreateTask from '@/components/CreateTask.vue'
import AddChildTask from '@/components/AddChildTask.vue'
// @ is an alias to /src


export default {
	name: 'Home',
	components: {
		TodoList,
		TodoItem,
		// MyButton,
		EnterTodo,
		List,
		Task,
		CreateTask,
		AddChildTask
	},
	data(){
		return{
			todoArray: [],
			listTask: [],
			number: 0,
			selectedTask: undefined,
			placeholder: 'Выбери задачу',
			taskForm: false,
			task: '',
			menuShow: false
		}
	},
	methods: {
		previous(){
			this.number = this.number - 1
			if( this.number < 0){
				this.number = this.todoArray.length - 1
			}
		},
		next(){
			this.number = this.number + 1
			if(this.number === this.todoArray.length ){
				this.number = 0
			}
		},

		newToCreate(newTodo){
			this.todoArray.push(newTodo)
		},
		createTask(newTask){
			this.listTask.push(newTask)
			this.selectedTask = newTask
			this.taskForm = false
		},
		choiseTask(item){
			this.selectedTask = item
		},
		doneSubmit(item){
			item.done = !item.done
		},
		createTaskClose(){
			this.taskForm = false
		},
		removeTodo(item){
			this.todoArray = this.todoArray.filter((todo) => todo.id !== item.id)
		},
		removeTask(item){
			this.listTask = this.listTask.filter((task) => task.id !== item.id)
			this.todoArray = this.todoArray.filter((todo) => todo.task !== item.id)
		},
		// submitChild(newchild){
		// 	this.listTask[this.selectedTask.id] = newchild
		// 	console.log(this.listTask[this.selectedTask.id]["child"])
		// },

		submitChild(newchild){
			// this.listTask[this.selectedTask.id]["child"] = []
			this.listTask[this.selectedTask.id].child.push(newchild)
		}
	},
	
	watch: {
		todoArray:{
			handler(newValue){
				localStorage.todoArray = JSON.stringify(newValue)
			},
			deep: true
		},
		listTask:{
			handler(newValue){
				localStorage.listTask = JSON.stringify(newValue)
			},
			deep: true
		},
	},
	mounted() {
		if (localStorage.listTask ) {
		  this.listTask = JSON.parse(localStorage.listTask) // eslint-disable-line no-mixed-spaces-and-tabs
		}
		if (localStorage.todoArray ) {
        this.todoArray = JSON.parse(localStorage.todoArray)
      }
		
	},

}
</script>



<style lang="scss">
// .gradient {
// 	display: inline-block;
// 	position: relative;    
// 	line-height: 0;
// }
// .gradient:after {
// 	content: "";
// 	display: block;    
// 	width: 100%;
// 	height: 100%;    
// 	position: absolute;
// 	top: 0;      
// 	left: 0;   
// 	background: transparent;
// 	background-image: linear-gradient(to left, #11de93, #0e7ad6);
// 	opacity: 0.8;
// }


.content{
	display: grid;
	min-height: 500px;
	grid-template-columns: 1fr 2fr;
	column-gap: 10px;
	min-height: 1vh;
	
}
.list-create{
	display: flex;
}
.placeholder{
	font-size: 30px;
    margin-top: 50px;
    border: 1px solid #000;
    border-radius: 10px;
    box-shadow: 3px 3px 0px #10525f, 0px -1px 5px #0d765d;
	padding: 50px 0 50px 0;
}

.task-form{
	display: flex;
	font-size: 30px;
	column-gap: 5px;
}
.task-plus{
	margin-top: 2px;
	cursor: pointer;
	svg{
		fill: #0b8a5c;
	}
}
.menu{
    position: fixed;
    display: none;
    justify-content: space-between;
    top: 45px;
    width: 45px;
    height: 25px;
    flex-direction: column;
	z-index: 10;
}
.block_1{
    background: #fff;
    width: 45px;
    height: 3px;box-shadow: 3px 3px 3px #0f555e;
	transition: 0.7s all;
	&.activeBox1{
		transform: rotateZ(-40deg);
		width: 30px;
		background: #0b8a5c;
	}
}
.block_2{
    background: #fff;
    width: 35px;
    height: 3px;box-shadow: 3px 3px 3px #0f555e;
	transition: 0.7s all;
	&.activeBox2{
		transform: translateX(2px);
		width: 45px;
		background: #0b8a5c;
	}
}
.block_3{
    background: #fff;
    width: 45px;
    height: 3px;box-shadow: 3px 3px 3px #0f555e;
	transition: 0.7s all;
	&.activeBox3{
		transform: rotateZ(40deg);
		width: 30px;
		background: #0b8a5c;
	}
}

input{
	border: none;
	border-radius: 5px;
	background: #0b8a5c;
	padding: 0 10px;
	color: #fff;
}
::-webkit-scrollbar {
    width: 4px; /* ширина для вертикального скролла */
    height: 8px; /* высота для горизонтального скролла */
    background-color: #113c60;
}
::-webkit-scrollbar-thumb {
    background-color: #0c7e5d;
    border-radius: 9em;
    box-shadow: inset 1px 1px 10px #113c60;
}
</style>