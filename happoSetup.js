// Global styles in styled-components are removed as part of unmounting a
// component. We can disable unmounting to work around the issue.
window.happoCleanup = () => null;
