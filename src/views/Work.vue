<script>
import AppGallery from '@/components/Gallery/Gallery.vue';

import deuPhoto from '@/assets/gallery/landing/gallery-sm-deu.jpg';
import ashPhoto from '@/assets/gallery/landing/gallery-sm-ash.jpg';
import bhuPhoto from '@/assets/gallery/landing/gallery-sm-bhu.jpg';
import davPhoto from '@/assets/gallery/landing/gallery-sm-dav.jpg';
import kuzPhoto from '@/assets/gallery/landing/gallery-sm-kuz.jpg';
import layPhoto from '@/assets/gallery/landing/gallery-sm-lay.jpg';
import loePhoto from '@/assets/gallery/landing/gallery-sm-loe.jpg';
import lynPhoto from '@/assets/gallery/landing/gallery-sm-lyn.jpg';
import milPhoto from '@/assets/gallery/landing/gallery-sm-mil.jpg';
import parPhoto from '@/assets/gallery/landing/gallery-sm-par.jpg';
import stoPhoto from '@/assets/gallery/landing/gallery-sm-sto.jpg';
import wriPhoto from '@/assets/gallery/landing/gallery-sm-wri.jpg';

export default {
  name: 'Work',
  components: {
    // AppContent,
    AppGallery,
  },
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
};
</script>

<template>
  <div :class="$style.container">
    <app-gallery :sets="sets" />
  </div>
</template>

<style module>
.content {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--white);
}
.container {
  position: relative;
}
</style>
