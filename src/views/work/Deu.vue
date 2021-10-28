<script>
import AppButton from '@/components/Button/Button.vue';
import AppSlider from '@/components/Slider/Slider.vue';
import AppContent from '@/components/Content/Content.vue';
import PhotoInfo from '@/components/PhotoInfo/PhotoInfo.vue';

import deu1 from '@/assets/gallery/deu/DEU_01.jpg';
import deu2 from '@/assets/gallery/deu/DEU_02.jpg';
import deu3 from '@/assets/gallery/deu/DEU_03.jpg';
import deu4 from '@/assets/gallery/deu/DEU_04.jpg';
import deu5 from '@/assets/gallery/deu/DEU_05.jpg';
import deu6 from '@/assets/gallery/deu/DEU_06.jpg';

export default {
  name: 'WorkDeu',
  components: {
    AppButton,
    AppContent,
    AppSlider,
    PhotoInfo,
  },
  data() {
    return {
      photos: [
        { photo: deu1, objectFit: 'cover' },
        { photo: deu2, objectFit: 'cover' },
        { photo: deu3, objectFit: 'cover' },
        { photo: deu4, objectFit: 'cover' },
        { photo: deu5, objectFit: 'cover' },
        { photo: deu6, objectFit: 'scale-down' },
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
          <p>
            There's something about Charlottesville. Once you've lived here,
            walked the Lawn, and seen the Blue Ridge, you're part of a
            community, and you'll always be able to call this place home. It's a
            story we hear from so many clients. They came back to raise a
            family. They came back for retirement. Or they never left. They feel
            a connection to Virginia, to Charlottesville, and to the red brick,
            the standing seam, the rustic barn, or the front porch. The enduring
            architecture that dots our landscape is part of the experience. It's
            a unique blend of southern gentility, rural vernacular style, and
            local creative initiative.
          </p>
          <p>
            In the Spring of 2020, a new client reached out to us with a
            familiar vision. They'd bought a farm west of town. They wanted to
            turn it into a "generational property." Somewhere their family could
            always call home.
          </p>
          <p>
            It just so happened that their new farm was already a generational
            property for Alexander Nicholson. Thirty years ago, our founders
            added a farm manager's apartment onto an old horse barn set in the
            rolling hills of the property.
          </p>
          <p>
            <b
              >Now, the new owners saw potential in the original section of the
              barn.</b
            >
            With a little work, they knew it could be a gathering place for
            their grown children and extended family - a place to drink, eat,
            sleep, read, and be together for the holidays. In this new golden
            age of Virginia libations, party barns and event barns are de
            rigueur - Alexander Nicholson has built several - but this would be
            our most ambitious barn conversion yet. The clients were passionate
            about preserving the historic character and rustic feel of the barn
            while seamlessly integrating luxurious finishes, light-filled
            spaces, and modern amenities.
          </p>
          <p>
            When an owner has such a bold vision - that creative spark so often
            found in Charlottesville - the selection of a good architect is
            imperative. Design professionals partner with you to capture your
            dreams, and partner with us to bring them to fruition. For this
            project, the owners selected Tom Flach of Kohlmark Flach Architects
            - someone we hadn't worked with before. With creative input from the
            owners every step of the way, Tom drew brilliant plans for a
            restored barn with hidden rooms, salvaged wood, and dramatic
            expanses of glass. There would be a room for whiskey, a room for
            wine, and room for the whole family to gather.
          </p>
          <p>
            Such a detailed project demanded skilled hands and traditional
            construction experience; we brought in Garrett Irwin as
            Superintendent and Max Henderson as Project Manager. Garrett is a
            master carpenter and conscientious team leader. Max has a lifetime
            of experience managing the construction of homes in Virginia.
            Together, they helped guide the owners through the entire renovation
            process. For Garrett and Max, every detail had to exceed the owner's
            expectations, as well as those they set for themselves.
          </p>
          <p>
            <b
              >The project started with an entire week of concrete
              demolition.</b
            >
            Garrett and his team took three hour shifts on the jackhammer,
            removing an 8-inch thick slab of concrete on the ground floor. Next
            came the careful removal of the original siding, as well as the 1¾"
            thick oak boards that lined the interior of the barn. We saved both
            for re-use. With the barn down to its frame, we could fully assess
            its structural integrity.
          </p>
          <p>
            As with any historic building, oddities and out-of-date building
            techniques had to be sympathetically addressed. With the help of
            Steve Barber of DMWPV Engineers, we removed and replaced both gable
            ends of the barn, and reframed the entire second floor hayloft to
            create the family's new gathering space. A structural collar was
            added, belting in the weight of the new second floor. Structural
            beams and columns were installed to make way for massive new window
            openings.
          </p>
          <p>
            With the barn stabilized, cleaned, and inspected, it was time for
            the owners' vision to come to life. New glass entry doors let light
            in from each end of the barn, which is refracted through the dark
            bars and beams of the original horse stalls. We poured and polished
            a new concrete slab on the first floor - a classed-up homage to the
            original. The entryway opens into a hallway of original horse
            stalls, which define the new floor plan. To the left, a floating
            stairway is made from massive reclaimed wooden beams. Above, the
            original hay bale loft was repurposed as a balcony, complete with
            its original bale lift pulley as a decorative element.
          </p>
          <p>
            Down the hall and behind an original sliding door, one horse stall
            became a whiskey room. It features a copper sink, copper shelving,
            and a private bar built from reclaimed wood. Opposite is the "tack
            room," an elegant restroom with equestrian inspiration and custom
            cabinetry built from more reclaimed wood. In the back, there's a
            guest bedroom with bunks made from salvaged structural beams,
            closets behind hidden doors, and a wine cellar in the hallway.
            Throughout the entire first floor, walls are covered with the thick
            oak boards we salvaged at the beginning of the project. Instead of
            putting them back exactly as we found them, we flipped them over,
            concealing the worn, painted, horse-kicked side and revealing
            beautiful raw patinated wood that'd been preserved behind the wall
            for 70 years.
          </p>
          <p>
            On the second floor, the dark, whiskey-tinged tones of aged wood
            give way to a bright, airy living loft with space for the entire
            family. White clapboards cover the walls and roof eaves. It's a
            dramatically light-filled room interspersed with rustic details.
            Reclaimed floors from The Heartpine Company match a few original
            structural timbers at the edges of the space. The entire loft is
            open, flowing out into the landscape at each gable-end through
            massive arched windows.
          </p>
          <p>
            Under one roof eave, facing you as you reach the top of the stairs,
            there's a lush kitchen in shades of white, cream, and gold. Beyond
            the antique dining table in the center of the room, a wood stove and
            small sitting area are tucked into a triple dormer window. On the
            opposite side, two sets of French doors open onto a pair of
            crows-nest balconies that overlook the property. Between the two
            balconies is one of the owner's most ingenious ideas: a jewel-box
            powder room disguised as a fresh stack of birch firewood.
          </p>
          <p>
            For a single open loft, the owner and architect managed to create
            intimate spaces for every family member and for every situation.
            Refuge from the weather by a fire, outlook over the landscape,
            tucked-away nooks for reading, and the reassuring feeling of being
            sheltered by the strong, traditional frame of the barn roof.
            Combined with the highly detailed first floor, the space offers a
            rich experience for an individual or a large group. It demands that
            time be spent exploring and enjoying the architecture and the land.
            It's a fitting landmark on a property that the family hopes to
            always call home.
          </p>
          <p>
            Every detail of this project required the exacting attention of our
            team and our subcontractors. Unusual materials, tight spaces,
            complicated framing, and massive windows made for daily challenges
            and daily rewards for everyone involved. We are proud of our work,
            stand by our craftsmanship, and wish the family generations spent
            together in their beautiful barn.
          </p>
          <p>
            As a Charlottesville community builder, we are passionate about
            creating special spaces for local families. If you're interested in
            starting your own project, please reach out to us. We'd be honored
            to help you every step of the way.
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
