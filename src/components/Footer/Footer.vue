<script>
import logoSmallSvg from '@/assets/logo-sm.png';
import aiaLogo from '@/assets/aia-logo.png';

export default {
  name: 'app-footer',
  data() {
    return {
      aiaLogo,
      logoSmallSvg,
    };
  },
};
</script>

<template>
  <footer>
    <div :class="$style.logo">
      <img
        :src="logoSmallSvg"
        alt="Kohlmark Flach logo"
        aria-label="Kohlmark Flach logo"
        height="65"
        width="90"
      />
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
footer {
  align-items: center;
  box-sizing: border-box;
  background-color: var(--white);
  display: flex !important;
  flex-wrap: nowrap;
  font-size: 24px;
  height: 200px;
  justify-content: space-between;
  line-height: 1;
  padding: 0 100px;
}
.logo {
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
}
.companyName {
  color: var(--black);
  margin: 0 14px;
  text-transform: uppercase;
  letter-spacing: 1px;
}
.company {
  white-space: nowrap;
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
}
.phone {
  border-right: 0;
}
.aiaLogo {
  position: relative;
}
.aiaLogo a {
  border: 0;
}
</style>
