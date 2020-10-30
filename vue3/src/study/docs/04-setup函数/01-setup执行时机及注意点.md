`setup()` 函数是 vue3 中，专门为组件提供的新属性。它为我们使用 vue3 的 `Composition API` 新特性提供了统一的入口。其是在`beforeCreate`之前，`created`之后执行。

因此, vue3也是取消了这两个钩子，统一用`setup`代替, 该函数相当于一个生命周期函数，vue中过去的`data，methods，watch`等全部都用对应的新增api写在`setup()`函数中


### setup执行时机
`beforeCreate`:表示组件刚刚被创建出来，组件的data和methods还没有初始化好
`setup`
`Created`:表示组件刚刚被创建出来，并且组件的data和methods已经初始化好
### setup注意点
- 由于在执行setup函数的时候，还没有执行Created生命周期方法，所以在setup函数中，是无法使用data和methods
- 由于我们不能在setup函数中使用data和methods,所以Vue为了避免我们错误的使用，它直接将setup函数中this修改成了undefined
- setup函数只能是同步的不能是异步的