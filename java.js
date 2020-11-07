// here were going to create the click effect.. by making the select element 
// function
const selectElement = function (element) {
	return document.querySelector(element);
};
// below we're creating varibles... were pasing in the class we want to 
//select will be the menu toggle and body element
let menuToggler = selectElement('.menu-toggle');
let body = selectElement('body');

menuToggler.addEventListener('click' , function() {
	body.classList.toggle('open')
});

//scroll reveal ish
window.sr =ScrollReveal();

sr.reveal('.animate-left',{
	//the origin below is where the animation is comng from
	origin: 'left',
	//duration is in mili seconds
	duration: 1000,
	//how far its traveling from =disance
	distance: '25rem',
	dely: 300

})

sr.reveal('.animate-right',{
	//the origin below is where the animation is comng from
	origin: 'right',
	//duration is in mili seconds
	duration: 1000,
	//how far its traveling from =disance
	distance: '25rem',
	dely: 600

})

sr.reveal('.animate-top',{
	//the origin below is where the animation is comng from
	origin: 'top',
	//duration is in mili seconds
	duration: 1000,
	//how far its traveling from =disance
	distance: '25rem',
	dely: 600

})
sr.reveal('.animate-bottom',{
	//the origin below is where the animation is comng from
	origin: 'bottom',
	//duration is in mili seconds
	duration: 1000,
	//how far its traveling from =disance
	distance: '25rem',
	dely: 600

}) 