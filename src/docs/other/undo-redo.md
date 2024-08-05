# Vue 3 中实现撤销和重做功能：从简单到复杂的演进

在开发过程中，撤销（Undo）和重做（Redo）功能是许多应用程序的常见需求。这篇博客将介绍如何在 Vue 3 中实现这一功能，我们将从一个简单的实现开始，然后逐步过渡到一个更复杂、更灵活的解决方案。

## 简单实现

首先，让我们看一个基础的实现方式：

```vue
<script setup>
import { ref, shallowReactive } from 'vue'

const history = shallowReactive([[]])
const index = ref(0)
const data = ref([])

function push() {
  data.value.push({ text: 1 })
  index.value++
  history.push(clone(data.value))
}

function undo() {
  data.value = clone(history[--index.value])
}

function redo() {
  data.value = clone(history[++index.value])
}

function clone(circles) {
  return circles.map(c => ({ ...c }))
}
</script>

<template>
  <div>
    <button @click="undo" :disabled="index <= 0">Undo</button>
    <button @click="redo" :disabled="index >= history.length - 1">Redo</button>
    <button @click="push">Add</button>
    <p>{{ history }}</p>
    <p>{{ data }}</p>
  </div>
</template>
```

这个简单的实现使用了一个数组来存储历史状态，并通过索引来跟踪当前状态。虽然这种方法对于简单的场景来说足够了，但当我们需要处理更复杂的操作时，它可能会变得难以维护。

## 复杂实现：命令模式

为了创建一个更灵活、可扩展的解决方案，我们可以使用命令模式。这种模式允许我们将每个操作封装为一个对象，使得撤销和重做变得更加简单和统一。

首先，让我们创建一个 `useHistory.js` 文件来实现我们的核心逻辑：

```js
class History {
  constructor() {
    this.undoStack = []
    this.redoStack = []
  }

  executeCommand(command) {
    command.execute()
    this.undoStack.push(command)
    this.redoStack.length = 0
  }

  undo() {
    const command = this.undoStack.pop()
    if (command) {
      command.undo()
      this.redoStack.push(command)
    }
  }

  redo() {
    const command = this.redoStack.pop()
    if (command) {
      command.execute()
      this.undoStack.push(command)
    }
  }
}

const useHistory = () => {
  const history = new History()
  const execute = command => {
    history.executeCommand(command)
  }
  const undo = () => {
    history.undo()
  }
  const redo = () => {
    history.redo()
  }
  return { history, undo, redo, execute }
}

export default useHistory
```

然后，在我们的 Vue 组件中使用这个 `useHistory` 函数：

```vue
<script setup>
import { ref } from 'vue'
import useHistory from './useHistory'

const data = ref([])
class AddCommand {
  constructor(item) {
    this.item = item
  }

  execute() {
    data.value.push(this.item)
  }

  undo() {
    data.value.pop()
  }
}

const { history, undo, redo, execute } = useHistory()
const add = () => {
  const command = new AddCommand('1')
  execute(command)
}
</script>

<template>
  <div>
    <button @click="undo" :disabled="history.undoStack.length === 0">Undo</button>
    <button @click="redo" :disabled="history.redoStack.length === 0">Redo</button>
    <button @click="add">Add</button>
    <p>{{ data }}</p>
  </div>
</template>
```

## 优势和考虑因素

1. **灵活性**：命令模式使我们能够轻松地添加新的操作类型，而无需修改核心的撤销/重做逻辑。

2. **可维护性**：每个命令都是自包含的，使得代码更容易理解和维护。

3. **状态管理**：这种方法可以更好地管理复杂的状态变化，特别是在处理多步骤操作时。

4. **性能考虑**：对于非常大的数据集或频繁的操作，可能需要考虑优化策略，如限制历史记录的大小或使用更高效的克隆方法。

5. **扩展性**：这种实现可以轻松扩展以支持更复杂的功能，如批量撤销/重做或保存/加载操作历史。

## 结论

通过从简单实现过渡到使用命令模式的更复杂解决方案，我们展示了如何在 Vue 3 中创建一个强大而灵活的撤销/重做系统。这种方法不仅适用于简单的数据操作，还可以扩展到更复杂的应用场景，为用户提供流畅的交互体验。