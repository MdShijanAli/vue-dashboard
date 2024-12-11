const isSidebarOpen = ref(true); // Use a global reactive state
const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value;
};

export function useSidebarToggle() {
  return { isSidebarOpen, toggleSidebar };
}
