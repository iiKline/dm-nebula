<template>
  <transition name="fade">
    <nav class="mobile" v-if="show">
      <div class="header">
        <router-link to="/" class="logo">
          <div class="icon"></div>
          <p><span>DM-Nebula</span></p>
        </router-link>
        <IconComponent name="times" @click="$emit('toggleMobileNavigation')" />
      </div>
      <div>
        <router-link to="/">{{ $t('general.multiplayer') }}</router-link>
        <router-link to="/zombies">{{ $t('general.zombies') }}</router-link>
        <router-link to="/campaign">{{ $t('general.campaign') }}</router-link>
      </div>
      <div class="footer">
        <router-link to="/settings">{{ $tc('general.setting', 2) }}</router-link>
        <router-link to="/about">{{ $t('general.about') }}</router-link>
        <router-link to="/requirements">{{ $tc('general.requirement', 2) }}</router-link>
        <a href="https://github.com/iiKline/dm-nebula/issues/new?title=[Bug]%20" target="_blank">
          {{ $t('general.report_an_issue') }}
        </a>
        <a href="https://github.com/iiKline/dm-nebula">
          <IconComponent name="github" />
          GitHub
        </a>
      </div>
    </nav>
  </transition>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
