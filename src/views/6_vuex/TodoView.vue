<template>
  <div>{{ todos }}</div>
  <div>할 일 목록 전체수 : {{ todosCount }}</div>
  <div>완료 목록 수 : {{ doneTodosCount }}</div>
  <div>미완료 목록 수 : {{ notDoneTodosCount }}</div>
  <div>
    <label class="form-label" for="">할일</label>
    <input id="todo" v-model="todo" class="form-control" type="text" />
    <button class="btn btn-primary" @click="addItem">추가(mutation)</button>
    <button class="btn btn-primary" @click="addItem2">추가(action)</button>
  </div>
  <div>
    <table class="table table-bordered table-striped">
      <thead>
        <tr>
          <th>Todo Id</th>
          <th>할일</th>
          <th>완료여부</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="todo in todos" :key="todo.id">
          <td>{{ todo.id }}</td>
          <td>{{ todo.title }}</td>
          <td>
            <div class="form-check form-switch">
              <input
                id="flexSwitchCheckDefault"
                :checked="!todo.done"
                class="form-check-input"
                role="switch"
                type="checkbox"
                @change="doneYN(todo.id, $event)"
              />
            </div>
          </td>
          <td>
            <button
              class="btn btn-danger btn-sm"
              @click="removeItem(todo.id)"
            />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: 'TodoView',
  data() {
    return { todo: '' }
  },
  computed: {
    todos() {
      return this.$store.state.todo.todos
    },
    todosCount() {
      return this.$store.getters['todo/todosCount']
    },
    doneTodosCount() {
      return this.$store.getters['todo/doneTodosCount']
    },
    notDoneTodosCount() {
      return this.$store.getters['todo/notDoneTodosCount']
    }
  },
  methods: {
    addItem() {
      this.$store.commit('todo/add', { id: 4, title: this.todo, done: false })
    },
    removeItem(id) {
      this.$store.commit('todo/remove', id)
    },
    doneYN(id, event) {
      this.$store.commit('todo/doneYN', { id: id, done: !event.target.checked })
    },
    addItem2() {
      this.$store.dispatch('todo/add', { id: 4, title: this.todo, done: false })
    }
  }
}
</script>

<style scoped></style>
