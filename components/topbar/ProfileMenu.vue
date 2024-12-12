<template>
  <div class="profile-menu" ref="profileMenu">
    <img
      :src="image"
      alt="Profile"
      class="profile-icon"
      @click="toggleMenu"
    />
    <!-- Transition wrapper for dropdown -->
    <transition name="dropdown">
      <div v-show="isMenuOpen" class="dropdown-menu" ref="dropdownMenu">
        <ul>
          <li>My Account</li>
          <li>Edit Password</li>
          <li>Change Photo</li>
          <li @click="logout">Logout</li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from "vue";
import image from "~/assets/images/shijan.jpg";

const isMenuOpen = ref(false);
const profileMenu = ref(null);
const dropdownMenu = ref(null);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

// Close the dropdown if the user clicks outside
const closeOnClickOutside = (event) => {
  if (
    profileMenu.value && !profileMenu.value.contains(event.target) &&
    dropdownMenu.value && !dropdownMenu.value.contains(event.target)
  ) {
    isMenuOpen.value = false;
  }
};

const logout = () => {
  alert("Logging out...");
};

onMounted(() => {
  document.addEventListener("click", closeOnClickOutside);
});

onBeforeUnmount(() => {
  // Cleanup event listener when the component is unmounted
  document.removeEventListener("click", closeOnClickOutside);
});
</script>

<style scoped>
.profile-menu {
  position: relative;
}
.profile-icon {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
}

/* Transition effects for the dropdown menu */
.dropdown-menu {
  position: absolute;
  top: 60px;
  right: 0;
  width: 200px;
  background-color: white;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  overflow: hidden;
  max-height: 0; /* Initially collapsed */
  opacity: 0; /* Initially hidden */
  transition: max-height 0.3s ease, opacity 0.3s ease;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

li {
  padding: 0.5rem 1rem;
  cursor: pointer;
}

li:hover {
  background-color: #f5f5f5;
}

/* Transition classes */
.dropdown-enter-active,
.dropdown-leave-active {
  transition: max-height 0.3s ease, opacity 0.3s ease;
}
.dropdown-enter, .dropdown-leave-to {
  max-height: 0;
  opacity: 0;
}
.dropdown-enter-to, .dropdown-leave {
  max-height: 300px;
  opacity: 1;
}
</style>
