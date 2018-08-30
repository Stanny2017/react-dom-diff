# diff 简介

## 目标

- 理解 virtual dom 工作原理
- 理解 key 属性的作用

## 问题

react 为什么不提倡 {isEdit ? div :''}  这种写法。

```html
    <div className="wrapper">
        <div className="A" style={{ display: `${shouldShow === true ? 'block' : 'none'}` }}>
            <div className="C">
                <div className="D"></div>
            </div>
        </div>
        <div className="B"></div>
    </div>


    <div className="wrapper">
        {
            shouldShow
                ?
                <div className="A">
                    <div className="C">
                        <div className="D"></div>
                    </div>
                </div>
                :
                ''
        }
        <div className="B"></div>
    </div>
```

为什么 react 这么流行---性能好

为什么性能高？ 关键点就在于虚拟 DOM 和 DOM diff
先来说明一下什么是虚拟 DOM

## virtual DOM 

JSX 的运行基础 

jsx 为我们做了什么，我之前只知道他的特点 可以将 js 和 html 

我的理解就是没有插入真实的 DOM 的 DOM 节点
类似于 
```js
var div = document.createElement('div')
...
// document.body.appendChild(div)
```

## 组件重新渲染的机制

![image](https://upload-images.jianshu.io/upload_images/1814354-4bf62e54553a32b7.png?imageMogr2/auto-orient/)

## diff

比较两棵树的不同，找到最小的转换步骤。

react 组件内部维护了一套虚拟 dom 的状态，状态变化的时候，产生新的虚拟 dom ，对比新旧两套虚拟，计算 diff，然后 只是把 diff 的部分用一种高效的方式更新到了真实 dom。

![image](https://segmentfault.com/img/bVuHXW)

传统比较两颗树 diff 的算法的时间复杂度是 O(n^3)

react-diff:广度优先遍历 遇见交换顺序的就换顺序（需要有唯一的标识），遇见不一样的子节点，直接删掉，再 append 新的节点。
节点跨层移动的时候，看似 react-diff 算法性能不高，但是 UI 的特点是 DOM 结构相对稳定，要么换了位置，要么直接删掉，要么属性发生了一些变化。

### 虚拟DOM 的两个假设

1. 结构相对稳定
2. 相同类型的节点唯一 key 标识

如果没有 key ，想节点顺序变动的时候，react 可能并不会做实际的交换顺序这个操作，而是做一些开销更大的工作，例如让属性发生变化使得节点一致，后面又做相同的工作。

如果有多个同级节点只是交换了顺序，加 key 值是对性能的优化。

### 总结

1. 回顾 react 组件生命周期。
2. react-diff 广度优先遍历的流程。
3. key 的作用。
4. render 写法对比思考

### 一些疑问

1. react-diff 是否只改进了 重排
2. 传统的 diff 算法复杂度到底为什么是 O(n^3)
3. 虚拟 dom diff 在什么阶段执行


### reference

1. [虚拟DOM Diff算法解析](http://www.infoq.com/cn/articles/react-dom-diff)
2. [不可思议的 react diff](https://zhuanlan.zhihu.com/p/20346379)
3. [如何实现一个虚拟 DOM](https://segmentfault.com/a/1190000004029168)
4. [How to write your own Virtual DOM](https://medium.com/@deathmood/how-to-write-your-own-virtual-dom-ee74acc13060)
