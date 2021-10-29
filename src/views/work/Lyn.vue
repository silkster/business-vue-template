<script>
import ProjectContent from '@/components/ProjectContent/ProjectContent.vue';

import lyn1 from '@/assets/gallery/lyn/LYN_01.jpg';
import lyn2 from '@/assets/gallery/lyn/LYN_02.jpg';
import lyn3 from '@/assets/gallery/lyn/LYN_03.jpg';
import lyn4 from '@/assets/gallery/lyn/LYN_04.jpg';
import lyn5 from '@/assets/gallery/lyn/LYN_05.jpg';
import lyn6 from '@/assets/gallery/lyn/LYN_06.jpg';
import lyn7 from '@/assets/gallery/lyn/LYN_07.jpg';

export default {
  name: 'WorkLyn',
  components: {
    ProjectContent,
  },
  data() {
    return {
      photos: [
        { photo: lyn1, objectFit: 'cover' },
        { photo: lyn2, objectFit: 'cover' },
        { photo: lyn3, objectFit: 'cover' },
        { photo: lyn4, objectFit: 'cover' },
        { photo: lyn5, objectFit: 'scaled-down' },
        { photo: lyn6, objectFit: 'scaled-down' },
        { photo: lyn7, objectFit: 'cover' },
      ],
      ratioInfo: {
        width: 1920,
        height: 1280,
      },
    };
  },
};
</script>

<template>
  <project-content :photos="photos" :ratio-info="ratioInfo">
    <p>
      The Owners of this riverfront property requested a home that was designed
      to showcase the spectacular setting while remaining comfortable for large
      parties or just two people. Every major room features magnificent water
      views and the generous use of rich woods, stone, color and scale create
      warm and inviting spaces despite the size.
    </p>
    <p>
      High winds, humidity, and intense reflective sun are some of the unique
      challenges of living on the river and needed to be addressed. To overcome
      these, tinted windows, spray foam insulation, whole house radiant heat,
      and VRF cooling were incorporated to make the house energy efficient and
      comfortable year round.
    </p>
    <p>
      Evidence of superior craftsmanship is everywhere. Extensive custom
      mantles/built-ins along with elegant moldings, coffered ceilings and a
      spectacular cherry vaulted ceiling with accent lighting are just a few of
      the noteworthy details.
    </p>
    <p>
      Clay soils and gypcrete subflooring with hardwood floors were among many
      challenges.
    </p>
  </project-content>
</template>
