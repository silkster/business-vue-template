<script>
import ProjectContent from '@/components/ProjectContent/ProjectContent.vue';

import mil1 from '@/assets/gallery/mil/MIL_01.jpg';
import mil2 from '@/assets/gallery/mil/MIL_02.jpg';
import mil3 from '@/assets/gallery/mil/MIL_03.jpg';
import mil4 from '@/assets/gallery/mil/MIL_04.jpg';
import mil5 from '@/assets/gallery/mil/MIL_05.jpg';
import mil6 from '@/assets/gallery/mil/MIL_06.jpg';
import mil7 from '@/assets/gallery/mil/MIL_07.jpg';
import mil8 from '@/assets/gallery/mil/MIL_08.jpg';
import mil9 from '@/assets/gallery/mil/MIL_09.jpg';
import mil10 from '@/assets/gallery/mil/MIL_10.jpg';

export default {
  name: 'WorkMil',
  components: {
    ProjectContent,
  },
  data() {
    return {
      photos: [
        { photo: mil1, objectFit: 'cover' },
        { photo: mil2, objectFit: 'cover' },
        { photo: mil3, objectFit: 'cover' },
        { photo: mil4, objectFit: 'cover' },
        { photo: mil5, objectFit: 'cover' },
        { photo: mil6, objectFit: 'cover' },
        { photo: mil7, objectFit: 'scaled-down' },
        { photo: mil8, objectFit: 'scaled-down' },
        { photo: mil9, objectFit: 'cover' },
        { photo: mil10, objectFit: 'cover' },
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
      The design of this home was driven by the owners' desire for a
      three-bedroom waterfront home that showcased the spectacular views and
      park-like setting. As nature lovers, they wanted their home to be organic,
      minimize any environmental impact on the sensitive site and embrace
      nature.
    </p>
    <p>
      This unique home is sited on a high ridge with a 45° slope to the water on
      the right and a deep ravine on the left. The five-acre site is completely
      wooded and tree preservation was a major emphasis. Very few trees were
      removed and special care was taken to protect the trees and environment
      throughout the project. To further minimize disturbance, grades were not
      changed and the home was designed to take full advantage of the site's
      natural topography. Oak from the home site was re-purposed for the mantle,
      powder room counter and select furniture.
    </p>
    <p>
      The visually powerful twin pavilions were born from the need for level
      ground and parking on an otherwise challenging site. Fill dirt excavated
      from the main home provided the foundation. All structures are anchored
      with a natural stone base and exterior materials include timber framing,
      fir ceilings, shingle siding, a partial metal roof and corten steel walls.
      Stone, wood, metal and glass transition the exterior to the interior and
      large wood windows flood the home with light and showcase the setting.
      Interior finishes include reclaimed heart pine floors, Douglas fir trim,
      dry-stacked stone, rustic cherry cabinets and soapstone counters.
    </p>
    <p>
      Exterior spaces include a timber-framed porch, stone patio with fire pit
      and commanding views of the Occoquan reservoir. A second porch overlooks
      the ravine and a breezeway connects the garage to the home.
    </p>
    <p>
      Numerous energy-saving features have been incorporated, including LED
      lighting, on-demand gas water heating and special insulation. Smart
      technology helps manage and control the entire house.
    </p>
  </project-content>
</template>
