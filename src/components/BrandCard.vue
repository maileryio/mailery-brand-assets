<template>
  <div class="brand-card" v-on:mouseleave="handleMouseleave">
    <slot></slot>

    <div class="brand-card--btn-details">
      <b-dropdown ref="dropdown" size="lg" variant="link" right no-caret>
        <template v-slot:button-content>
          <slot name="dropdown-button-content"></slot>
        </template>
        <slot name="dropdown-button-items"></slot>
      </b-dropdown>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ui-brand-card',
    methods: {
      handleMouseleave () {
        this.$refs.dropdown.hide(true);
      }
    },
  }
</script>

<style>
  .dropdown-item-custom-link > .b-dropdown-text {
    margin: 0;
    padding: 0;
  }

  .dropdown-item-custom-link .btn-link {
    width: 100%;
    padding: .25rem 1.5rem;
    text-align: left;
  }
</style>

<style scoped>
  .brand-card--btn-details {
    /* display: none; */
    position: absolute;
    top: -0.5rem;
    right: -0.7rem;
    z-index: 1;
  }

  .brand-card {
    position: relative;
  }

  .brand-card:hover .brand-card--btn-details {
    display: block;
  }
</style>
