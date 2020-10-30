<template>
<h1>{{mytitle}}</h1>
<button @click='myFn'>按钮</button>
<div>

    <ul>
        <li v-for="(stu,index) in student.stus" :key="stu.id">
            {{stu.id}}----{{stu.name}}----{{stu.age}}
        </li>
    </ul>

    <div>
        <form>
            <input type="text" v-model="studentModel.id">
            <input type="text" v-model="studentModel.name">
            <input type="text" v-model="studentModel.age">
            <input type="submit" @click="addStudent">
        </form>
    </div>
</div>
</template>

<script>
import {
    ref,
    reactive
} from 'vue';
// 导入内容，不需加{}，即{useAddStudent} 会报错
import useAddStudent from '../js/student/add'
export default {
    name: 'Demo01',
    setup() {
        const {
            mytitle,
            myFn
        } = TitleService()
        const student = ShowStudent()
        const {
            studentModel,
            addStudent
        } = useAddStudent(student)
        return {
            mytitle,
            myFn,
            student,
            studentModel,
            addStudent
        }
    }

}

// 数据和业务分离
function TitleService() {
    // ref函数只能监听简单类型的变化，不能监听复杂类型(数组、对象)
    let mytitle = ref('test')

    function myFn() {
        mytitle.value = '测试'
    }
    //  return方式1：如果接收方是解构语法，那么一定要加 {}，返回的是一个对象
    return {
        mytitle,
        myFn
    }
}

function ShowStudent() {
    // reactive函数用来监听复杂类型的变化
    let student = reactive({
        stus: [{
                id: 1,
                name: 'zhangsan',
                age: 18
            },
            {
                id: 2,
                name: 'lishi',
                age: 28
            },
            {
                id: 3,
                name: 'wangsu',
                age: 38
            },

        ]
    })
    //  return方式2：如果接收方是基本赋值，那么直接返回值即可，不需{}包裹
    return student
}
/*
改为通过js导入useAddStudent
function useAddStudent(student) {
    let studentModel = reactive({
        id: '',
        name: '',
        age: '',
    })

    function addStudent(e) {
        e.preventDefault();
        console.log('studentModel: ', studentModel);
        student.stus.push(stuCopy)
    }
    return {
        studentModel,
        addStudent
    }
}

*/
</script>

<style>
</style>
