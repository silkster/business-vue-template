<script>
import ProjectContent from '@/components/ProjectContent/ProjectContent.vue';

import wri1 from '@/assets/gallery/wri/WRI_01.jpg';
import wri2 from '@/assets/gallery/wri/WRI_02.jpg';
import wri3 from '@/assets/gallery/wri/WRI_03.jpg';
import wri4 from '@/assets/gallery/wri/WRI_04.jpg';
import wri5 from '@/assets/gallery/wri/WRI_05.jpg';

export default {
  name: 'WorkWri',
  components: {
    ProjectContent,
  },
  data() {
    return {
      photos: [
        { photo: wri1, objectFit: 'cover' },
        { photo: wri2, objectFit: 'cover' },
        { photo: wri3, objectFit: 'cover' },
        { photo: wri4, objectFit: 'scaled-down' },
        { photo: wri5, objectFit: 'scaled-down' },
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
      The existing three-bedroom home was originally constructed as a carriage
      house to serve a future estate and never intended to be a primary
      residence. Though full of charm, the small place lacked the space and
      functionality typically found in today's homes. With a growing family and
      defined limitations, the long-time owners wanted to remodel and expand.
    </p>
    <p>
      We were asked to design a new foyer, living room and master suite with
      adjacent study above grade and incorporate an exercise room and unfinished
      workspace in the basement. A constant consideration throughout the design
      process was to make sure all work seamlessly integrated with the original
      stone house. Equally challenging and important to the design was the
      home's location at the bottom of a steep rural site. A large swale located
      directly adjacent to the existing residence acted as a natural watershed
      for a large portion of the property. To address and overcome this
      challenge, we designed the living room as a bridge, literally spanning the
      existing swale and joining the carriage house with the new master bedroom
      wing.
    </p>
    <p>
      The final design incorporates a stone gatehouse with a copper
      standing-seam roof to act as the new foyer and features a cathedral
      ceiling with exposed beams. The adjacent living room bridges the carriage
      house with the new master bedroom wing and features the same cathedral
      ceiling and exposed beams found in the foyer. Abundant windows flood the
      space with light and the exposed stone and honey-colored hardwood floors
      create warmth.
    </p>
    <p>
      Outside, the entire master bedroom wing is constructed with stone that is
      a near perfect match to the original carriage house. A new deck with
      direct access to the living room runs from the entry foyer gatehouse to
      the master bedroom wing and features a delicate stainless steel cable rail
      system that maximizes visibility. The existing motor court was utilized as
      the patio for the front entry foyer and special lighting was incorporated
      to accent the entire home.
    </p>
  </project-content>
</template>
