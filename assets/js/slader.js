var slides = document.querySelectorAll('#slides .slide');
                var currentSlide = 0;
                var slideInterval = setInterval(nextSlide,3000);

                function nextSlide(){
                slides[currentSlide].className = 'slide';
                currentSlide++; 
                if(currentSlide >= slides.length){ 
                currentSlide = 0; 
                }
                slides[currentSlide].className = 'slide showing';
                }