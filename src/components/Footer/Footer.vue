<script>
import logoSmallSvg from '@/assets/logo-sm.svg';
import aiaLogo from '@/assets/aia-logo.png';
import InlineSvg from 'vue-inline-svg';

export default {
  name: 'app-footer',
  components: { InlineSvg },
  data() {
    return {
      aiaLogo,
      logoSmallSvg,
    };
  },
};
</script>

<template>
  <footer :class="$style.container">
    <div :class="$style.logo">
      <router-link to="/contact">
        <inline-svg
          :src="logoSmallSvg"
          alt="Contact Kohlmark Flach"
          aria-label="Contact Kohlmark Flach"
          height="65"
          width="90"
        />
      </router-link>
      <div :class="$style.companyName">
        <span :class="$style.company">
          <span :class="$style.kohlmark">KOHLMARK</span>
          <span :class="$style.flach"> FLACH</span></span
        >
        ARCHITECTS
      </div>
    </div>
    <div :class="$style.contactInfo">
      <span :class="$style.addressLine1">12644 Chapel Road</span>
      <span :class="$style.separator"> | </span>
      <span :class="$style.addressLine2">Suite 209</span>
      <span :class="$style.separator"> | </span>
      <span :class="$style.city">Clifton</span>
      <span :class="$style.separator"> | </span>
      <span :class="$style.state">Virginia</span>
      <span :class="$style.separator"> | </span>
      <span :class="$style.phone">703.932.2775</span>
    </div>

    <div :class="$style.aiaLogo">
      <a href="https://aia.org" target="blank">
        <img :src="aiaLogo" alt="Go to AIA website" />
      </a>
    </div>
  </footer>
</template>

<style module>
.container {
  align-items: center;
  box-sizing: border-box;
  background-color: var(--white);
  display: flex !important;
  flex-wrap: nowrap;
  height: 200px;
  justify-content: space-evenly;
  line-height: 1;
  padding: 0 100px;
}
.logo {
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  cursor: pointer;
}
.companyName {
  color: var(--black);
  font-size: 24px;
  margin: 0 14px;
  text-transform: uppercase;
  letter-spacing: 1px;
}
.company {
  white-space: nowrap;
  font-size: 24px;
}
.kohlmark {
  color: var(--gray-med);
}
.flach {
  font-weight: var(--font-weight-medium);
}
.contactInfo {
  display: flex;
  white-space: nowrap;
  color: var(--gray-med);
  align-items: center;
}
.separator {
  font-size: 18px;
  font-weight: var(--font-weight-black);
}
.addressLine1,
.addressLine2,
.city,
.state,
.phone {
  padding: 0 18px;
  font-size: 24px;
}
.phone {
  border-right: 0;
}
.aiaLogo {
  position: relative;
  width: 15%;
  display: flex;
  justify-content: flex-end;
}
.aiaLogo a {
  border: 0;
}
</style>
