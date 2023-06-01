
setTimeout( ()=>{
    document.getElementById('loading-page').className += 'loaded'; // igual que hacer: classList.add('loaded);
    document.getElementById('loader').className += 'opzero';
    document.getElementById('lastray').className += ' finalray';
    document.body.className += "whitebk";
},3500);


gsap.to("#bg",{
    scrollTrigger:{
        scrub:1
    },
    scale:1.5
})
gsap.to("#man",{
    scrollTrigger:{
        scrub:1
    },
    scale:0.5
})
gsap.to("#clouds1",{
    scrollTrigger:{
        scrub:1
    },
    scale:1.5,
    x:200
})
gsap.to("#clouds2",{
    scrollTrigger:{
        scrub:1
    },
    scale:1.5,
    x:-200
})
gsap.to("#text",{
    scrollTrigger:{
        scrub:3
    },
    scale:2,
    y:500
})