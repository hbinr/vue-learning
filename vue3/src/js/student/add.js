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