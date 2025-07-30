document.addEventListener('DOMContentLoaded', () => {
    const testimonialSlider = document.querySelector('.testimonial-slider');
    const prevArrow = document.querySelector('.prev-arrow');
    const nextArrow = document.querySelector('.next-arrow');
    const testimonialItem = document.querySelector('.testimonial-item');

    if (testimonialSlider && prevArrow && nextArrow && testimonialItem) {


        prevArrow.addEventListener('click', () => {
            console.log('Previous testimonial clicked');

        });

        nextArrow.addEventListener('click', () => {
            console.log('Next testimonial clicked');
        });
    }


});
document.addEventListener('DOMContentLoaded', () => {
    const testimonialSlider = document.querySelector('.testimonial-slider');
    const prevArrow = document.querySelector('.prev-arrow');
    const nextArrow = document.querySelector('.next-arrow');
    const testimonialItem = document.querySelector('.testimonial-item');

    if (testimonialSlider && prevArrow && nextArrow && testimonialItem) {
        prevArrow.addEventListener('click', () => {
            console.log('Previous testimonial clicked');
        });

        nextArrow.addEventListener('click', () => {
            console.log('Next testimonial clicked');
        });
    }

    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            const icon = question.querySelector('.faq-icon');

            faqQuestions.forEach(otherQuestion => {
                if (otherQuestion !== question && otherQuestion.classList.contains('active')) {
                    otherQuestion.classList.remove('active');
                    otherQuestion.querySelector('.faq-icon').textContent = '+';
                    otherQuestion.nextElementSibling.classList.remove('active');
                }
            });

            question.classList.toggle('active');
            answer.classList.toggle('active');

            if (question.classList.contains('active')) {
                icon.textContent = 'x';
            } else {
                icon.textContent = '+';
            }
        });
    });

});