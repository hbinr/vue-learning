将数据和方法结合在一起

我们可以抽离处逻辑，将业务逻辑单独封装在`js`文件中，然后通过`import`导入到需要的 `.vue`文件中去


将下面逻辑单独抽离到`add.js`文件中去。

```js
import { reactive } from 'vue';

function useAddStudent (student) {
    let studentModel = reactive({
        id: '',
        name: '',
        age: '',
    })

    function addStudent (e) {
        // 阻止默认行为
        e.preventDefault();
        const stuCopy = Object.assign({}, studentModel)
        console.log('studentModel: ', studentModel);
        student.stus.push(stuCopy)
    }
    return {
        studentModel,
        addStudent
    }
}
export default useAddStudent;
```

使用的时候导入：
```js
// 导入函数，不需加{}，即{ useAddStudent} 会报错，因为只返回一个普通函数，不是对象
import useAddStudent from '../js/student/add'
```