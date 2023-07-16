/** ===== Smooth Scrolling code ===== */
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

/** ===== Loader Code ===== */
let timeline = gsap.timeline();

timeline.to("body", {
    y: "100vh",
    scale: 0.8,
    duration: 0
});
timeline.to("body", {
    y: "25vh",
    scale: 0.5,
    duration: 1,
    delay: 0
});
timeline.to("body",{
    y:"0vh",
    rotate:-360,
    scale:1,
    duration:0.8
});