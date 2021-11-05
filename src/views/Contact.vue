<script>
import { mapState } from 'vuex';
import AppContent from '@/components/Content/Content.vue';
import AppButton from '@/components/Button/Button.vue';
import AppSlider from '@/components/Slider/Slider.vue';
import bannerJpg from '@/assets/banners/contact.jpg';

export default {
  name: 'Contact',
  components: {
    AppContent,
    AppButton,
    AppSlider,
  },
  data() {
    return {
      photos: [bannerJpg],
      ratioInfo: {
        height: 700,
        width: 1920,
      },
    };
  },
  computed: {
    ...mapState(['fontScaleStyle']),
  },
  methods: {
    sendMessage() {},
  },
};
</script>

<template>
  <app-slider
    :nav-container-class="$style.sliderNavContainer"
    :photos="photos"
    :ratio-dimensions="ratioInfo"
  />
  <app-content :class="$style.content">
    <div :class="$style.container">
      <div :class="$style.contactInfo" :style="fontScaleStyle">
        <div :class="$style.addressLine1">12644 Chapel Road | Suite 209</div>
        <div :class="$style.city">Clifton | Virginia 20124</div>
        <div :class="$style.phone">703.932.2775</div>
      </div>
      <div :class="$style.form">
        <h1 :class="$style.containerHeading">Inquire</h1>
        <div :class="$style.contactForm">
          <div :class="$style.field">
            <input
              type="text"
              id="name"
              required
              :class="$style.fieldName"
              placeholder="Name (required)"
            />
          </div>
          <div :class="$style.field">
            <input
              type="tel"
              id="phone"
              :class="$style.fieldPhone"
              placeholder="Phone"
            />
          </div>
          <div :class="$style.field">
            <input
              type="email"
              id="email"
              required
              placeholder="Email (required)"
              :class="$style.fieldEmail"
            />
          </div>
          <div :class="$style.field">
            <textarea
              id="message"
              :class="$style.fieldMessage"
              placeholder="Message"
            ></textarea>
          </div>
          <div :class="$style.buttonContainer">
            <app-button @click="sendMessage" size="large" label="Submit" />
          </div>
        </div>
      </div>
    </div>
  </app-content>
</template>

<style module>
.content {
  max-width: unset;
}
h1.containerHeading {
  margin-bottom: 34px;
}
.contactInfo {
  display: none;
}
.form {
  width: 100%;
}
.contactForm {
  position: relative;
}
.field,
.field input,
.field textarea {
  width: 100%;
  box-sizing: border-box;
}
.field input,
.field textarea {
  font-family: var(--font-family);
  font-size: 24px;
  font-weight: var(--font-weight-regular);
  border: none;
  background-color: var(--white);
  margin-bottom: 25px;
  height: 42px;
  max-width: 964px;
}
.field textarea {
  height: 100px;
}
@media screen and (min-width: 768px) {
  .content {
    padding-right: 10.9375vw;
    padding-left: 10.9375vw;
  }
  .container {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 8.3333vw;
    text-align: left;
  }
  h1.containerHeading {
    margin-top: 0;
    text-align: left;
    margin-bottom: 34px !important;
  }
  .contactInfo {
    display: flex;
    flex-direction: column;
    color: var(--gray-dark);
    justify-content: flex-start;
    align-items: flex-start;
    margin-top: 80px;
    font-size: var(--font-scale);
  }
  .addressLine1,
  .addressLine2,
  .city,
  .state,
  .phone {
    padding: 0;
    line-height: 1.5;
    letter-spacing: 1px;
    white-space: nowrap;
  }
  .phone {
    border-right: 0;
  }
}
@media screen and (min-width: 1920px) {
  .content {
    padding-right: 210px;
    padding-left: 210px;
  }
  .container {
    gap: 160px;
  }
}
</style>
