$(document).ready(function () {
    $('.select2').select2();
});
$(document).ready(function () {
    $('.select2bs4').select2();
});


$('.btn-tool[data-card-widget="collapse"]').click(function () {
    var $card = $(this).closest('.card');
    $card.toggleClass('collapsed');

    if ($card.hasClass('collapsed')) {
        $card.find('.card-body').slideUp(500);
        $card.find('.card-footer').hide();
    } else {
        $card.find('.card-body').slideDown(500);
        $card.find('.card-footer').show();
    }
});

$('.btn-tool[data-card-widget="remove"]').click(function () {
    var $card = $(this).closest('.card');
    $card.addClass('removing');
    setTimeout(function () {
        $card.remove();
    }, 500);
});

$(document).ready(function () {
    // Apply Inputmask to elements with data-mask attribute
    $(":input").inputmask();
});





// //theme change
// document.addEventListener('DOMContentLoaded', () => {
//     const themeToggle = document.getElementById('theme-toggle');
//     const currentTheme = localStorage.getItem('theme') || 'light';

//     if (currentTheme === 'dark') {
//         document.body.classList.add('dark-theme');
//     }

//     themeToggle.addEventListener('click', () => {
//         document.body.classList.toggle('dark-theme');
//         const theme = document.body.classList.contains('dark-theme') ? 'dark' : 'light';
//         localStorage.setItem('theme', theme);
//     });
// });


//bootstrap switch

$(document).ready(function () {
    $(".bootstrap-switch").bootstrapSwitch();
});

//date

// date and time picker


//date only
$(function () {
    $('#dateonly').datetimepicker({
        format: 'L'
    });
});

//time only
$(function () {
    $('#timepicker').datetimepicker({
        format: 'LT'
    });
});






