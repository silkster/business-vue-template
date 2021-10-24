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
          <span :class="$style.flach">FLACH</span></span
        >
        ARCHITECTS
      </div>
    </div>
    <div :class="$style.contactInfo">
      <div :class="$style.addressLine1">12644 Chapel Road</div>
      <div :class="$style.addressLine2">Suite 209</div>
      <div :class="$style.city">Clifton</div>
      <div :class="$style.state">Virginia</div>
      <div :class="$style.phone">703.932.2775</div>
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
  background-color: var(--white);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
  height: 200px;
  padding: 0 100px;
  box-sizing: border-box;
}
.logo {
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
}
.companyName {
  color: var(--black);
  font-weight: var(--font-weight-light);
  margin: 0 10px;
  text-transform: uppercase;
}
.company {
  white-space: nowrap;
}
.kohlmark {
  color: var(--gray-med);
}
.flach {
  font-weight: var(--font-weight-bold);
}
.contactInfo {
  display: flex;
  white-space: nowrap;
  color: var(--gray-med);
}
.addressLine1,
.addressLine2,
.city,
.state,
.phone {
  padding: 0 18px;
  border-right: 1.5px solid var(--orange);
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
