<template>
  <div>
    <div>
      <label class="form-label" for="email">이메일 주소</label>
      <input id="email" v-focus class="form-control" type="email" />
    </div>
    <div>
      <label class="form-label" for="pw">비밀번호</label>
      <input id="pw" class="form-control" type="password" />
    </div>
    <div>
      <button class="btn btn-primary">로그인</button>
    </div>
    <div v-color="color" style="height: 50px"></div>
    <div>
      <input v-lowercase class="form-control" type="text" />
    </div>
  </div>
</template>
<script>
export default {
  name: 'CustomDirectiveView',
  directives: {
    focus: {
      mounted(el) {
        // console.log(el, binding)
        el.focus()
      }
    },
    color: {
      mounted(el, binding) {
        console.log(el, binding.value)
        el.style.backgroundColor = binding.value
      }
    },
    lowercase: {
      mounted(el) {
        el.addEventListener('input', (event) => {
          event.target.value = event.target.value.toLowerCase()
        })
      }
    }
  },
  data() {
    return {
      color: 'gray'
    }
  }
}
</script>

<style scoped></style>
<script setup></script>
