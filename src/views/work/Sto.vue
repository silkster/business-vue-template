<script>
import AppButton from '@/components/Button/Button.vue';
import AppSlider from '@/components/Slider/Slider.vue';
import AppContent from '@/components/Content/Content.vue';
import PhotoInfo from '@/components/PhotoInfo/PhotoInfo.vue';

import sto1 from '@/assets/gallery/sto/STO_01.jpg';
import sto2 from '@/assets/gallery/sto/STO_02.jpg';
import sto3 from '@/assets/gallery/sto/STO_03.jpg';
import sto4 from '@/assets/gallery/sto/STO_04.jpg';
import sto5 from '@/assets/gallery/sto/STO_05.jpg';
import sto6 from '@/assets/gallery/sto/STO_06.jpg';
import sto7 from '@/assets/gallery/sto/STO_07.jpg';
import sto8 from '@/assets/gallery/sto/STO_08.jpg';
import sto9 from '@/assets/gallery/sto/STO_09.jpg';
import sto10 from '@/assets/gallery/sto/STO_10.jpg';
import sto11 from '@/assets/gallery/sto/STO_11.jpg';
import sto12 from '@/assets/gallery/sto/STO_12.jpg';

export default {
  name: 'WorkSto',
  components: {
    AppButton,
    AppContent,
    AppSlider,
    PhotoInfo,
  },
  data() {
    return {
      photos: [
        { photo: sto1, objectFit: 'cover' },
        { photo: sto2, objectFit: 'cover' },
        { photo: sto3, objectFit: 'scaled-down' },
        { photo: sto4, objectFit: 'scaled-down' },
        { photo: sto5, objectFit: 'cover' },
        { photo: sto6, objectFit: 'cover' },
        { photo: sto7, objectFit: 'scaled-down' },
        { photo: sto8, objectFit: 'scaled-down' },
        { photo: sto9, objectFit: 'cover' },
        { photo: sto10, objectFit: 'scaled-down' },
        { photo: sto11, objectFit: 'cover' },
        { photo: sto12, objectFit: 'scale-down' },
      ],
      ratioInfo: {
        width: 1920,
        height: 1280,
      },
    };
  },
  computed: {
    title() {
      return this.$router.currentRoute.value.meta.title;
    },
    location() {
      return this.$router.currentRoute.value.meta.location;
    },
    photoCredit() {
      return this.$router.currentRoute.value.meta.photography;
    },
    editorial() {
      return this.$router.currentRoute.value.meta.editorial;
    },
    isFixed() {
      return true;
    },
  },
};
</script>

<template>
  <app-slider
    :photos="photos"
    :is-fixed="isFixed"
    :container-class="$style.paralaxed"
    :nav-container-class="$style.sliderNavContainer"
  />
  <div :class="$style.container">
    <div :class="$style.paralaxedSpace"></div>
    <div :class="$style.topContent">
      <photo-info :credit="photoCredit" />

      <app-content>
        <h1>{{ title }}</h1>
        <h2>{{ location }}</h2>
        <h3 v-if="editorial">By {{ editorial }}</h3>
        <div :class="$style.content">
          <h2>
            <i
              >Life of the Party: A retired couple upsizes to a new
              Oakton,Virginia, home built for year-round entertaining</i
            >
          </h2>
          <p>
            Tom and Nancy Stout have always loved hosting parties, but it wasn't
            easy in the Oakton home they shared for 18 years, where typical
            gatherings of extended family and friends meant moving furniture and
            setting out multiple coolers. "Neither one of us wanted to leave
            Oakton," Nancy says, but the spread they envisioned didn't seem
            possible in an established suburb.
          </p>
          <p>
            Serendipity struck one day in 2013 when Nancy came across a lot for
            sale that backed up to Fairfax County parkland. The owner lived on
            the adjacent lot—and promised to sell them her remaining parcel when
            she retired.
          </p>
          <p>
            They waited two years to acquire the second lot that gave them two
            acres of forest-lined land, all the while assembling ideas for their
            new home and party compound—and the team to make it happen. "They
            had a unique opportunity to do something really special," says their
            architect, Tom Flach.
          </p>
          <p>
            High on the Stouts' wish list was a pool and pool house, a spacious
            screened porch and a lower-level play space for all ages complete
            with table games, a sophisticated wine room, a bar and a
            golf-simulation center—a top priority for Tom Stout, a former
            corporate controller for AOL.
          </p>
          <p>
            In his plan, Flach set out to relate the home to the context of the
            neighborhood and provide visual and physical connections to the
            landscape. Meeting his clients' requirement for plenty of
            entertaining space, he says, "The challenge was creating a house
            that was comfortable for two people but scalable for 20 to stay
            over—or a party for 100." Despite the home's 11,800-square-foot
            size, he designed clearly defined public rooms that don't feel
            cavernous when visitors are not around and a master wing on the main
            level that serves as the Stouts' private retreat.
          </p>
          <p>
            The overall architecture was influenced by both Shingle-style and
            Arts and Crafts abodes. "I find inspiration in the material palette,
            the complex roof lines and the scale of these homes," says Flach. "I
            wanted the house to evoke memories of more traditional homes while
            feeling comfortable in a suburban neighborhood."
          </p>
          <p>
            Interior designer Sandra Meyers came on board early to ensure that
            everything from the interior architecture to the furnishings and
            décor suited the couple's aesthetic. "They wanted a casual but
            sophisticated house," she explains. "Everything is user-friendly,
            everything is easy—and coming to visit for the weekend is like going
            to a resort."
          </p>
          <p>
            Meyers chose elements that are attractive yet durable, such as
            distressed-finish cabinetry and stain-resistant fabrics. The Stouts
            had asked for a mostly gray palette, but Meyers broke it up with
            shots of black and white. Wood and heritage metalworks imparted
            warmth and a sense of timelessness. She selected walnut ceiling
            beams and built-in shelving to add character to the family room and
            chose exposed-steel I-beams instead of drywall on structural-support
            columns in the basement. "When you mix materials," the designer
            comments, "it creates longevity that you don't get when you walk one
            style line."
          </p>
          <p>
            If one color stands out from the mix, it's the teal cabinetry in the
            pantry at the heart of the main level—easily accessible from every
            interior space and the outdoor grilling area. "It's basically a
            Tiffany box," says Nancy Stout, a former member of AOL's marketing
            team. Since the pantry is so central, it allowed Meyers to extend
            shades of teal and turquoise outward into the kitchen's seating
            area, on accent pillows in the family room and onto the dining-room
            rug.
          </p>
          <p>
            Also critical to the design was maintaining a seamless transition
            between indoors and out. Flach worked closely with landscape
            architect Howard Cohen to achieve that goal. "It's one of the most
            comprehensive processes I've ever gone through for a landscape,"
            Cohen reports, noting that his team helped site the house and
            engineered grading on the property in addition to designing the pool
            house and pool. "The landscape is in scale with the house," he says.
            "You want the house to have a nice presence on its site."
          </p>
          <p>
            Meanwhile, builder Arjay West found a way to make Nancy's beloved
            screened porch an integral part of its surroundings: Both
            motor-controlled screens and clear vinyl panels designed for cooler
            weather roll up to create a covered terrace that perches over the
            pool. Beside it, a picturesque fountain sends water running down
            over a black-granite boulder. "The porch might be Nancy's favorite
            space," West says. "It really can be a four-season room—we installed
            infrared heaters on three sides and electric floor heat."
          </p>
          <p>
            West takes pride in the quality of the home's construction, noting
            small details that have big impact such as the slender steel collar
            ties supporting the pitched roof in the master-suite library, which
            appear as decorative metal rods in the wood-paneled ceiling. The
            wine room's glass wall panels were embedded in the floor and ceiling
            to avoid visible tracks or brackets. And when closed, a sliding door
            to the master bathroom is indistinguishable from the bedroom's wall
            paneling. "It's the most complete and fantastic project I've ever
            been involved with," West says.
          </p>
          <p>
            Behind the scenes, the energy-efficient home boasts an extensive,
            remote-controlled network of lighting, sound and video systems both
            inside and out. Says Atlantic Multimedia principal Thomas Rogers,
            who installed the system, "There's a lot of electronics and
            engineering in this house that you don't notice."
          </p>
          <p>
            In fact, all the Stouts notice these days is their ease of living
            and entertaining—whether it's family gatherings at holiday time,
            when 20 or more spend the weekend, or their grandchildren's
            basketball and soccer team parties. "We keep telling everyone, ‘Yes,
            we'll host your party,'" says Nancy. "That's our purpose in life!"
          </p>
          <p>
            Architecture: Thomas Flach, AIA, Kohlmark Flach Architects, Burke,
            Virginia. Interior Design: Sandra Meyers, Sandra Meyers Design
            Studio, Rockville, Maryland. Kitchen Design: Patty Whitman, Reico
            Kitchen & Bath, Springfield, Virginia. Builder: Arjay West, West
            Homes LLC, Falls Church, Virginia. Home Automation: Thomas Rogers,
            Atlantic Multimedia, Fairfax, Virginia. Landscape Architecture:
            Howard Cohen, Surrounds Landscape Architecture + Construction,
            Sterling, Virginia.
          </p>
        </div>
        <app-button :class="$style.inquireButton" size="large"
          >Inquire</app-button
        >
      </app-content>
    </div>
  </div>
</template>

<style module>
.container {
  width: 100% !important;
  z-index: 100;
}
.inquireButton {
  margin: 0 auto;
}
.content {
  margin-bottom: 60px;
}
.content p {
  text-align: left !important;
}
.photoCredit {
  padding: 10px;
  text-align: right;
  font-weight: var(--font-weight-bold);
}
.paralaxed {
  z-index: -2;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 54px;
}
.paralaxedSpace {
  height: calc(100vh - 54px);
  pointer-events: none;
}
.topContent {
  background-color: #fff !important;
}
.sliderNavContainer {
  position: absolute;
  z-index: 1000;
  top: calc(100vh - 110px);
  left: 50%;
  transform: translateX(-50%);
}
</style>
