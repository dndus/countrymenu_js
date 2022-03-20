const wrapper = document.querySelector(".wrapper");
const selectBtn = wrapper.querySelector(".select-btn");

selectBtn.addEventListener("click", () => {
    wrapper.classList.toggle("active");
});