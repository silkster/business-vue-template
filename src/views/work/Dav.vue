<script>
import ProjectContent from '@/components/ProjectContent/ProjectContent.vue';

import dav1 from '@/assets/gallery/dav/DAV_01.jpg';
import dav2 from '@/assets/gallery/dav/DAV_02.jpg';
import dav3 from '@/assets/gallery/dav/DAV_03.jpg';
import dav4 from '@/assets/gallery/dav/DAV_04.jpg';
import dav5 from '@/assets/gallery/dav/DAV_05.jpg';

export default {
  name: 'WorkDav',
  components: {
    ProjectContent,
  },
  data() {
    return {
      photos: [
        { photo: dav1, objectFit: 'cover' },
        { photo: dav2, objectFit: 'cover' },
        { photo: dav3, objectFit: 'cover' },
        { photo: dav4, objectFit: 'cover' },
        { photo: dav5, objectFit: 'cover' },
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
      Our clients saw potential in this worn out post and beam house on a
      dramatic steep site. The previous owners had raised seven children in the
      house and everything from the kitchen cabinets, to the doors, to the
      bathrooms needed to be replaced. However, the location on a hillside above
      the Potomac River with 4 stories of glass walled views provided
      inspiration for the restoration. The house is entered from the street on
      the third level with one level above and 2 levels below. This created a
      challenge to reassign awkward spaces and distinguish between public and
      private spaces while maximizing views from important rooms. The goal was
      to transform this worn out house with lower end finishes and fixtures into
      a state of the art piece of modern design with full security, whole house
      audio and cat5 networking. The post and beam design with lock deck floors
      and ceilings allowed no chases or space between floors. Particular
      attention had to be given to relocating plumbing and mechanical as well as
      wiring for whole house audio.
    </p>
    <p>
      In addition, the entire project had to be designed, permitted, and built
      in six months. At a certain point in the project, the painters lived in
      the house and took breaks only to eat and sleep in sleeping bags on the
      floor. Some long lead items had to be ordered before the architectural
      drawings were even completed.
    </p>
    <p>
      All interior doors and trim were removed and replaced with natural maple
      one panel doors offset by very minimalist mahogany base and casing. The
      contrast of the natural maple and dark mahogany was meant to complement
      and update the existing dark beams and wood ceilings. Carpet was replaced
      with environmentally friendly bamboo flooring. The outdated kitchen
      suffered from low dark ceilings and poor florescent lighting. To visually
      raise the ceilings, the beams were painted white, and cable track lighting
      was installed up and between the beams. African slate flooring was
      installed throughout the foyer and kitchen to complement the bamboo
      flooring in the great room and dining room. The library and a guest
      bedroom were reconfigured and added to the small master bedroom to create
      a grand master suite with closet systems and a fireplace.
    </p>
    <p>
      The house suffered from one major traffic flow and design issue involving
      the foyer and main stair. Upon entering the house, the view was blocked
      and the foyer was cramped by a large stair. By relocating the stair to the
      endwall of the great room, the foyer was opened to the view, and the stair
      became a design opportunity. A custom designed maple and mahogany stair
      serves as a sculptural element on what was a blank wall at the end of the
      great room. A floor to ceiling glass panel was added at the bottom of the
      stairs to take advantage of hidden views of the river. A spiral staircase
      was added to the solarium to provide public circulation from the living
      room above without needing to pass through the master bedroom below.
    </p>
  </project-content>
</template>
