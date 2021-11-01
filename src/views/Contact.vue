<script>
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
      <div :class="$style.contactInfo">
        <div :class="$style.addressLine1">12644 Chapel Road | Suite 209</div>
        <div :class="$style.city">Clifton | Virginia 20124</div>
        <div :class="$style.phone">703.932.2775</div>
      </div>
      <div :class="$style.form">
        <h1>Inquire</h1>
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
            <app-button @click="sendMessage" size="large">Submit</app-button>
          </div>
        </div>
      </div>
    </div>
  </app-content>
</template>

<style module>
.content {
  padding-right: 210px;
  padding-left: 210px;
  max-width: unset;
}
.container {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 160px;
  text-align: left;
}
.container h1 {
  font-size: 48px;
  margin-top: 0;
  text-align: left;
  margin-bottom: 34px;
}
.form {
  width: 100%;
}
.contactInfo {
  display: flex;
  flex-direction: column;
  color: var(--gray-dark);
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 80px;
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
.contactForm {
  position: relative;
}
.field,
.field input,
.field textarea {
  width: 100%;
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
.buttonContainer {
  padding: 0 0 200px;
}
</style>
