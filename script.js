$(document).ready(function() {
    // Toggle responsive menu visibility when the menu toggle button is clicked
    $("#menutoggle").click(function() {
        // Toggle the 'displaynone' class on the xs-menu to show/hide it
        $('.xs-menu').toggleClass('displaynone');
    });

    // Add 'active' class to clicked menu item and remove it from others
    $('ul li').click(function(e) {
        e.preventDefault(); // Prevent default action (e.g., link redirection)
        $('li').removeClass('active'); // Remove 'active' class from all list items
        $(this).addClass('active'); // Add 'active' class to the clicked list item
    });

    // Show mega-menu on hover over dropdown
    $(".drop-down").hover(function() {
        $('.mega-menu').addClass('display-on'); // Show mega-menu by adding 'display-on' class
    });

    // Hide mega-menu when the mouse leaves the dropdown area
    $(".drop-down").mouseleave(function() {
        $('.mega-menu').removeClass('display-on'); // Hide mega-menu by removing 'display-on' class
    });
});
