<script>
import deuPhoto from '@/assets/gallery/deu/DEU_01.jpg';
import ashPhoto from '@/assets/gallery/ash/ASH_01.jpg';
import bhuPhoto from '@/assets/gallery/bhu/BHU_01.jpg';
import davPhoto from '@/assets/gallery/dav/DAV_01.jpg';
import kuzPhoto from '@/assets/gallery/kuz/KUZ_01.jpg';
import layPhoto from '@/assets/gallery/lay/LAY_01.jpg';
import loePhoto from '@/assets/gallery/loe/LOE_01.jpg';
import lynPhoto from '@/assets/gallery/lyn/LYN_01.jpg';
import milPhoto from '@/assets/gallery/mil/MIL_01.jpg';
import parPhoto from '@/assets/gallery/par/PAR_01.jpg';
import stoPhoto from '@/assets/gallery/sto/STO_01.jpg';
import wriPhoto from '@/assets/gallery/wri/WRI_01.jpg';
import GalleryItem from '@/components/GalleryItem/GalleryItem.vue';

export default {
  name: 'app-gallery',
  components: { GalleryItem },
  data() {
    return {
      sets: [
        {
          title: 'Barn Transformation',
          location: 'Charlottesville, VA',
          photography: 'Alexander Nicholson',
          id: 'DEU',
          photo: deuPhoto,
        },
        {
          title: 'Clifton Farmhouse',
          location: 'Clifton, VA',
          photography: 'Greg Hadley',
          id: 'KUZ',
          photo: kuzPhoto,
        },
        {
          title: 'Milleens',
          location: 'Occoquan, VA',
          photography: 'Greg Hadley',
          id: 'MIL',
          photo: milPhoto,
        },
        {
          title: 'Craftsman Inspired Waterfront',
          location: 'Mason Neck, VA',
          photography: 'Greg Hadley',
          id: 'LYN',
          photo: lynPhoto,
        },
        {
          title: 'Contemporary Solar Home',
          location: 'Potomac, MD',
          photography: 'Greg Hadley',
          editorial: 'Sharon Jaffe Dan',
          id: 'LOE',
          photo: loePhoto,
        },
        {
          title: 'Deck House',
          location: 'Arlington, VA',
          photography: 'Michael Johnson, Mt. Carroll, IL',
          id: 'DAV',
          photo: davPhoto,
        },
        {
          title: 'Farmhouse Transformation',
          location: 'Waterford, VA',
          photography: 'Greg Hadley',
          id: 'PAR',
          photo: parPhoto,
        },
        {
          title: 'Ashland Farm',
          location: 'Middleburg, VA',
          photography: 'Greg Hadley',
          id: 'ASH',
          photo: ashPhoto,
          zoomIn: true,
        },
        {
          title: 'Storybrook Cottage',
          location: 'Great Falls, VA',
          photography: 'Greg Hadley',
          id: 'LAY',
          photo: layPhoto,
        },
        {
          title: 'Bridge House',
          location: 'Clifton, VA',
          photography: 'Greg Hadley',
          id: 'WRI',
          photo: wriPhoto,
        },
        {
          title: 'Contemporary Pool House',
          location: 'Vienna, VA',
          photography: 'Greg Hadley',
          id: 'BHU',
          photo: bhuPhoto,
        },
        {
          title: 'Shingle-Style Estate',
          location: 'Oakton, VA',
          photography: 'Maxine Schnitzer',
          editorial: 'Jennifer Sergent',
          id: 'STO',
          photo: stoPhoto,
        },
      ],
    };
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
        :zoom-in="set.zoomIn"
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
  row-gap: 8px;
  width: 100%;
}
.itemWrap {
  flex: 0 1 33%;
  position: relative;
  box-sizing: border-box;
  cursor: pointer;
}
</style>
