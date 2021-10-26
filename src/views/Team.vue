<script>
import AppContent from '@/components/Content/Content.vue';
import HeadShot from '@/components/HeadShot/HeadShot.vue';
import TomFlach from '@/assets/team/Tom_Flach.jpg';
import TraceyFlach from '@/assets/team/Tracey_Flach.jpg';
import ChrisChatfield from '@/assets/team/Chris_Chatfield.jpg';
import JeremyPotter from '@/assets/team/Jeremy_Potter.jpg';

export default {
  name: 'Team',
  components: {
    AppContent,
    HeadShot,
  },
  data() {
    return {
      bios: [
        {
          fullName: 'Thomas Flach, AIA',
          photo: TomFlach,
          title: 'President',
          id: 'president',
        },
        {
          fullName: 'Jeremy Potter, AIA',
          photo: JeremyPotter,
          title: 'Vice President',
          id: 'vice-president',
        },
        {
          fullName: 'Chris Chatfield',
          photo: ChrisChatfield,
          title: 'Architect',
          id: 'architect',
        },
        {
          fullName: 'Tracey Flach',
          photo: TraceyFlach,
          title: 'Studio Manager',
          id: 'studio-manager',
        },
      ],
    };
  },
  methods: {
    goToBio(name) {
      this.$router.push({ name });
    },
  },
};
</script>

<template>
  <app-content :class="$style.content">
    <div :class="$style.container">
      <head-shot
        v-for="bio in bios"
        :key="bio.id"
        :full-name="bio.fullName"
        :photoSrc="bio.photo"
        :title="bio.title"
        :class="$style.headShot"
        @click="goToBio(bio.id)"
      />
    </div>
  </app-content>
</template>

<style module>
.content {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 210px;
}
.container {
  position: relative;
  display: flex;
  max-width: 920px;
  flex-wrap: wrap;
  margin-bottom: 200px;
}
.headShot {
  cursor: pointer;
}
</style>
