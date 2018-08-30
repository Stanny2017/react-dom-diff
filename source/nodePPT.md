title: nodeppt react-dom-diff 分享
speaker: stanny
url: http://git.lianjia.com/daipeng001/react-diff-sharing
transition: slide3
theme: dark
usemathjax: yes

[slide]

<div style="font-size:70px;margin-top:100px">react-dom-diff</div>

<br/>

<img style="height:300px;width:300px;margin:0 auto" src="http://www.runoob.com/wp-content/uploads/2016/02/react.png"/>

<br/>
<h2>speaker:stanny</h2>

[slide]

# Aim 
----

- 理解 virtual dom 工作原理
- 理解 key 属性的作用

[slide]

# Question

- code1 🆚 code2

<img src="https://note.youdao.com/yws/api/personal/file/WEBe0d7d3b62d8c3e8124dc3775d6e3ceb6?method=download&shareKey=54665dab5249cf7dec9c33edbf6a2e88">


[slide]

<img  src="https://note.youdao.com/yws/api/personal/file/WEB2b3eae87596ef0b9c2e625efb2cf09f5?method=download&shareKey=d6feb91cbcb6c50477549eff8968b48d">
----
* 这两段代码对于 react 来言有何不同 {:&.rollIn}
* 😄

[slide]

## 回顾·组件生命周期 & 何时重新渲染

![image](https://upload-images.jianshu.io/upload_images/1814354-4bf62e54553a32b7.png?imageMogr2/auto-orient/)

[slide]

# Virtual DOM 

<br>

- 我的理解就是没有插入真实的 DOM 的节点

```js
var div = document.createElement('div')
...
// document.body.appendChild(div)
```

- JSX 的运行基础
- react 优秀性能的关键

[slide]

# Virtual DOM 工作机制
----

<img style="width:900px" src="https://image-static.segmentfault.com/321/760/321760932-5707797107835_articlex"/>
<br/>
* react 组件内部维护了一套虚拟 dom 的状态，状态变化的时候，产生新的虚拟 dom ，对比新旧两套虚拟，计算 diff，然后 只是把 diff 的部分用一种高效的方式更新到了真实 dom {:&.rollIn}

[slide]

# diff

找两棵树的不同，找到最小的转换步骤

[slide]

# 传统 diff 算法

- 循环递归对节点进行依次对比，效率低下
- 时间复杂度 O(n^3) 

[slide]
# react-diff

* 时间复杂度优化至 O(n)
* shouldComponentUpdate() 返回 true 后准备调用 diff

[slide]

# react-diff 工作原理

* 广度优先遍历 {:&.rollIn}
* 当发现节点已经不存在，直接删除，不会再递归对比
* 兄弟节点调换顺序依赖唯一 key 属性

[slide]

# 画个图解释一下过程

- 类型相同的兄弟节点交换顺序
![image](https://note.youdao.com/yws/api/personal/file/WEBb118f19ee937ac176f7da158e49824f3?method=download&shareKey=eb616b50ce628abaddea5fe18014264c)


[slide]

* 节点跨层移动 {:&.rollIn}
![image](https://note.youdao.com/yws/api/personal/file/WEBb9a0120bc0b6dd54d2dcfa23cdd4fda3?method=download&shareKey=3783aa27c0df6f89ceff5a92445fad03)
* 节点跨层移动效率低？

[slide]

# react-diff 的两个假设

<br>
1. 组件 DOM 结构相对稳定，很少出现跨层移动的现象（UI 的特点） {:&.rollIn}
<br>
2. 同一层级的一组子节点有唯一 key 属性 

[slide]


# 空说无凭

[跑一段代码 看实例]

[slide]

# 小结

1. 算法复杂度为 O(n) 
2. 虚拟 DOM 如何计算 diff 
3. key 属性的作用
4. 保持稳定的 DOM 有利于性能提升

