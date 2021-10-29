<script>
import AppGallery from '@/components/Gallery/Gallery.vue';

import albPhoto from '@/assets/gallery/in-progress/gallery-sm-alb.jpg';
import fliPhoto from '@/assets/gallery/in-progress/gallery-sm-fli.jpg';
import kinPhoto from '@/assets/gallery/in-progress/gallery-sm-kin.jpg';
import lonPhoto from '@/assets/gallery/in-progress/gallery-sm-lon.jpg';
import nibPhoto from '@/assets/gallery/in-progress/gallery-sm-nib.jpg';
import rohPhoto from '@/assets/gallery/in-progress/gallery-sm-roh.jpg';

export default {
  name: 'Work',
  components: {
    AppGallery,
  },
  data() {
    return {
      sets: [
        {
          title: 'Browntown, VA',
          photography: 'Alexander Nicholson',
          id: 'ROH',
          photo: rohPhoto,
        },
        {
          title: 'Vienna, VA',
          photography: 'Greg Hadley',
          id: 'NIB',
          photo: nibPhoto,
        },
        {
          title: 'Charlottesville, VA',
          photography: 'Greg Hadley',
          id: 'LON',
          photo: lonPhoto,
        },
        {
          title: 'McLean, VA',
          photography: 'Greg Hadley',
          id: 'KIN',
          photo: kinPhoto,
        },
        {
          title: 'Middleburg, VA',
          photography: 'Greg Hadley',
          id: 'ALB',
          photo: albPhoto,
        },
        {
          title: 'Vienna, VA',
          photography: 'Michael Johnson, Mt. Carroll, IL',
          id: 'FLI',
          photo: fliPhoto,
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
