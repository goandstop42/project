<template>
  <div
    :id="modalId"
    :aria-labelledby="`${modalId}Label`"
    aria-hidden="true"
    class="modal fade"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 :id="`${modalId}Label`" class="modal-title fs-5">
            <slot name="title"> </slot>
          </h1>
          <button
            aria-label="Close"
            class="btn-close"
            data-bs-dismiss="modal"
            type="button"
          ></button>
        </div>
        <div class="modal-body">
          <slot name="body"></slot>
        </div>
        <div class="modal-footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    modalId: {
      type: String,
      required: true // Ensure modalId is required
    }
  }
}
</script>

<style scoped></style>
