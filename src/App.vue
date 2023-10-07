<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <nav>
    <RouterLink to="/">Privacy Policy</RouterLink>
    <RouterLink to="/terms-and-conditions">Terms & Conditions</RouterLink>
    <RouterLink to="/disclaimer">Disclaimer</RouterLink>
    <RouterLink to="/cookie-policy">Cookie Policy</RouterLink>
    <RouterLink to="/eula">EULA</RouterLink>
    <RouterLink to="/return-and-refund">Return & Refund Policy</RouterLink>
  </nav>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  width: 100%;
  font-size: 12px;
  text-align: center;
}

nav a.router-link-exact-active {
  color: #e5ab50;
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

/* @media (min-width: 1024px) { */
header {
  display: flex;
  place-items: center;
  padding-right: calc(var(--section-gap) / 2);
}

.logo {
  margin: 0 2rem 0 0;
}

header .wrapper {
  display: flex;
  place-items: flex-start;
  flex-wrap: wrap;
}

nav {
  text-align: left;
  font-size: 1rem;

  padding: 1rem 0;
}

/* } */
</style>
