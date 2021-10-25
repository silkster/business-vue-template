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

export default {
  name: 'app-gallery',
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
          title: 'Milleens: Waterfront Timber Frame',
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
      <div :class="$style.item">
        <div :class="$style.photo">
          <img :src="set.photo" :alt="set.title" />
        </div>
        <div :class="$style.caption">
          <h2>{{ set.title }}</h2>
          <p>{{ set.location }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style module>
.container {
  display: flex;
  flex-wrap: wrap;
  position: relative;
  width: 100%;
}
.itemWrap {
  position: relative;
  background-color: brown;
  flex-basis: 33.333%;
  padding-top: 20%;
  border: 2px solid var(--white);
  box-sizing: border-box;
  cursor: pointer;
}
.item {
  width: 100%;
  padding-top: 15%;
  overflow: hidden;
}
.photo {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.photo img {
  width: 100%;
  height: 100%;
}
.caption {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.55);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
  color: var(--white);
}
.caption:hover {
  opacity: 1;
}
.caption h2 {
  color: var(--white);
  font-weight: var(--font-weight-bold);
  font-size: var(--font-size-med);
  text-align: center;
  margin: 0;
}
.caption p {
  color: var(--white);
  font-weight: var(--font-weigh-light);
  font-size: var(--font-size-small);
  text-align: center;
  margin: 4px 0 0 0;
}
</style>
