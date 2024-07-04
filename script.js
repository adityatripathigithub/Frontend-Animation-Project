gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();





gsap.from(".page1 #page1-image2", {
  x: 800,
  duration: 0.9,
  delay: 0.2,
})

gsap.from(".page1 h1", {
  y: 100,
  duration: 1,
  opacity: 0,
})


gsap.from(".page2 .box", {
  y: 100,
  duration: 1,
  opacity: 0,
  scrollTrigger: {
    trigger: ".box",
    scroller: "#main",
    start: "top 80%",
    // markers: true,
  }
})

gsap.from(".page2 #page2-image2", {
  x: -400,
  duration: 0.9,
  opacity: 0,
  scrollTrigger: {
    trigger: "#page2-image2",
    scroller: "#main",
    start: "top 70%",
    // markers: true,
  }
})



gsap.from(".page2 #page2-heding", {
  y: 100,
  duration: 0.9,
  opacity: 0,
  stagger: 0.2,
  scrollTrigger: {
    trigger: "#page2-heding",
    scroller: "#main",
    start: "top 75%",
    // markers: true,
  }
})


gsap.from(".page3 #page3-heding", {
  y: 100,
  duration: 0.6,
  opacity: 0,
  stagger: 0.2,
  scrollTrigger: {
    trigger: "#page3-heding",
    scroller: "#main",
    start: "top 90%",
    // markers: true,
  }
})

gsap.from(".page3 #page3-box1", {
  y: 200,
  duration: 0.5,
  opacity: 0,
  scrollTrigger: {
    trigger: "#page3-box1",
    scroller: "#main",
    start: "top 90%",
    // markers: true,
  }
})

gsap.from(".page3 #page3-box2", {
  y: 200,
  duration: 0.5,
  opacity: 0,
  scrollTrigger: {
    trigger: "#page3-box2",
    scroller: "#main",
    start: "top 90%",
    // markers: true,
  }
})