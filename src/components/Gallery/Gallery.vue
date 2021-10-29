<script>
import GalleryItem from '@/components/GalleryItem/GalleryItem.vue';

export default {
  name: 'app-gallery',
  components: { GalleryItem },
  props: {
    sets: {
      type: Array,
    },
  },
  methods: {
    goto(id) {
      const name = id.toLowerCase();
      this.$router.push({ name });
    },
  },
};
</script>

<template>
  <div :class="$style.container" full-width="true">
    <div
      v-for="set in sets"
      :key="set.id"
      :class="$style.itemWrap"
      @click="goto(set.id)"
    >
      <gallery-item
        :photo="set.photo"
        :location="set.location"
        :title="set.title"
        @click="goto(set.id)"
      />
    </div>
  </div>
</template>

<style module>
.container {
  background-color: var(--white);
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  position: relative;
  row-gap: 3px;
  width: 100%;
}
.itemWrap {
  flex: 0 1 33.25%;
  position: relative;
  box-sizing: border-box;
  cursor: pointer;
}
</style>
