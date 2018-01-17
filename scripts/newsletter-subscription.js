$('.subscription-form').submit(e => {
    e.preventDefault();
    var form = $('.subscription-form');
    var feedback = $('.subscription-feedback');
    var email = $('.subscriber-email').val();

    form.fadeOut(250).promise().done(() => {
        feedback.show();
    });

    $.post('/newsletter/subscribe', {email}, res => {
        if (res.success)
            feedback.text('Thank you for subscribing');
        else {
            feedback.text('Subscription failed, please try again');
            feedback.addClass('subscription-feedback-fail');
        }

        setTimeout(() => {
            form.fadeIn(500);
            $('.subscriber-email').val('');
            feedback.hide();
            feedback.removeClass('subscription-feedback-fail');
        }, 5000);
    });
});
