<template>
  <div></div>
</template>

<style scoped>
div {
  /* border-top:  2px solid white; */
  border-left: 3px solid white;

  aspect-ratio: 1 / 1;
  width: 1.2em;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
