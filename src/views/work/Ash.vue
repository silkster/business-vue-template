<script>
import ProjectContent from '@/components/ProjectContent/ProjectContent.vue';

import Ash1 from '@/assets/gallery/ash/ASH_01.jpg';
import Ash2 from '@/assets/gallery/ash/ASH_02.jpg';
import Ash3 from '@/assets/gallery/ash/ASH_03.jpg';
import Ash4 from '@/assets/gallery/ash/ASH_04.jpg';
import Ash5 from '@/assets/gallery/ash/ASH_05.jpg';
import Ash6 from '@/assets/gallery/ash/ASH_06.jpg';
import Ash7 from '@/assets/gallery/ash/ASH_07.jpg';
import Ash8 from '@/assets/gallery/ash/ASH_08.jpg';
import Ash9 from '@/assets/gallery/ash/ASH_09.jpg';
import Ash10 from '@/assets/gallery/ash/ASH_10.jpg';
import Ash11 from '@/assets/gallery/ash/ASH_11.jpg';
import Ash12 from '@/assets/gallery/ash/ASH_12.jpg';
import Ash13 from '@/assets/gallery/ash/ASH_13.jpg';
import Ash14 from '@/assets/gallery/ash/ASH_14.jpg';

export default {
  name: 'WorkAsh',
  components: {
    ProjectContent,
  },
  data() {
    return {
      photos: [
        { photo: Ash1, objectFit: 'cover' },
        { photo: Ash2, objectFit: 'cover' },
        { photo: Ash3, objectFit: 'cover' },
        { photo: Ash4, objectFit: 'cover' },
        { photo: Ash5, objectFit: 'cover' },
        { photo: Ash6, objectFit: 'cover' },
        { photo: Ash7, objectFit: 'cover' },
        { photo: Ash8, objectFit: 'cover' },
        { photo: Ash9, objectFit: 'cover' },
        { photo: Ash10, objectFit: 'cover' },
        { photo: Ash11, objectFit: 'cover' },
        { photo: Ash12, objectFit: 'scale-down' },
        { photo: Ash13, objectFit: 'scale-down' },
        { photo: Ash14, objectFit: 'scale-down' },
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
      This horse country estate has a rich history tracing back to 1790. In the
      1920’s, noted architect William Bottomley expanded the simple structure
      into a magnificent stone hunting lodge. However, in recent times, the
      house was unoccupied and fell into disrepair. Our clients purchased the
      structure with the goal of transforming the home into a summer retreat
      suited for large gatherings while still preserving the historic character
      and exterior of the home. The restoration involved complete new
      mechanical, electrical and plumbing systems as well as redesign of the
      spaces to accommodate a young family and their visitors.
    </p>
    <p>
      The original kitchen and garage wing were completely transformed into a
      new open kitchen, great room and laundry space. The courtyard wall of the
      garage was removed and replaced with large swinging glass panels. The
      panels are salvaged from an old factory in Philadelphia and transformed
      into a glass wall that can be completely opened to the courtyard in the
      summer.
    </p>
    <p>
      Original features such as the hand painted murals, gold leaf dome ceiling,
      woodwork and phone booth were restored or repurposed to serve the current
      needs of the client while retaining the historic artifacts.
    </p>
    <p>
      The floor plan was reimagined to create intimate spaces for the family and
      additional rooms to accommodate a large number of weekend visitors or
      parties. The right wing includes 3 bedrooms, the master suite and an
      informal kitchen, breakfast area and great room. What was originally a
      series of small rooms was reimagined as this space for the family to
      gather on weekends. The central wing includes the original parlor, a large
      formal dining room and a billiards space. The attic was converted into a
      bunk room for visitors. The second floor servant’s quarters was removed to
      create a dramatic dining space with cathedral ceilings.
    </p>
    <p>
      With respect for the historic significance of the structure, the home has
      been transformed and preserved to serve the needs of future generations.
    </p>
  </project-content>
</template>
