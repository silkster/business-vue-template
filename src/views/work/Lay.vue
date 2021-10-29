<script>
import ProjectContent from '@/components/ProjectContent/ProjectContent.vue';

import lay1 from '@/assets/gallery/lay/LAY_01.jpg';
import lay2 from '@/assets/gallery/lay/LAY_02.jpg';
import lay3 from '@/assets/gallery/lay/LAY_03.jpg';
import lay4 from '@/assets/gallery/lay/LAY_04.jpg';
import lay5 from '@/assets/gallery/lay/LAY_05.jpg';
import lay6 from '@/assets/gallery/lay/LAY_06.jpg';

export default {
  name: 'WorkLay',
  components: {
    ProjectContent,
  },
  data() {
    return {
      photos: [
        { photo: lay1, objectFit: 'cover' },
        { photo: lay2, objectFit: 'cover' },
        { photo: lay3, objectFit: 'cover' },
        { photo: lay4, objectFit: 'cover' },
        { photo: lay5, objectFit: 'scale-down' },
        { photo: lay6, objectFit: 'cover' },
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
      This 1980's contemporary had great curb appeal and proportions, but
      contained many awkward and poorly designed spaces. While the primary focus
      was to address the design deficiencies with additions and a more livable
      and useful floor plan, extensive work was done to transform the interior
      and exterior into a more traditional craftsman-style cottage.
    </p>
    <p>
      The addition to the right of the house addressed the need for a main level
      garage with an in-law suite above. By moving the garage out of the
      basement, space became available for a billiard room and allowed the lower
      level to open to the rear yard. The laundry was relocated to the addition,
      and the old dark kitchen was expanded and relocated to the outside corner
      walls to allow for more windows and natural light.
    </p>
    <p>
      A rear addition expanded the dining room to a more suitable size for
      entertaining and increased the size of a small second floor bedroom. The
      third addition created a sitting room and transformed the long, narrow and
      small master bedroom into a well-proportioned and inviting master suite.
    </p>
    <p>
      The exterior was in reasonable good shape. The stone and cedar siding were
      in excellent condition, but the windows needed to be replaced. Through
      careful design, new windows, and modifications to the cornice and rake
      details, the very dated 1980s exterior was transformed into the storybook
      cottage you see today.
    </p>
    <p>
      To complete the transformation, all interior birch veneer doors and trim
      were replaced with traditional raised panel doors and generous colonial
      baseboard. Originally drywall, the stair well and foyer now feature
      wrought iron railings, oak wainscoting and recessed oak panels. Even the
      ceilings received attention. The once textured ceilings are now smooth.
      The kitchen and bathrooms were all renovated and updated.
    </p>
  </project-content>
</template>
