<template>
  <div>
    <button
      class="btn btn-primary"
      data-bs-target="#userModal"
      data-bs-toggle="modal"
    >
      Show Modal
    </button>
    <SlotModal modal-id="userModal">
      <template v-slot:title>모달창 타이틀</template>
      <template v-slot:body>
        <div class="row gy-2">
          <div class="col-3">
            <label class="form-label">이메일</label>
          </div>
          <div class="col-9">
            <input class="form-control" type="email" />
          </div>
          <div class="col-3">
            <label class="form-label" for="">주소</label>
          </div>
          <div class="col-9">
            <input class="form-control" type="text" />
          </div>
        </div>
      </template>
      <template v-slot:footer>
        <button class="btn btn-secondary" data-bs-dismiss="modal" type="button">
          Close
        </button>
        <button class="btn btn-primary" type="button">Save changes</button>
      </template>
    </SlotModal>
  </div>
</template>

<script>
import SlotModal from '@/components/fragments/SlotModal.vue'

export default {
  components: { SlotModal },
  data() {
    return {
      userModal: 'userModal'
    }
  }
}
</script>

<style scoped></style>
