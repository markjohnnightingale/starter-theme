<?php 

// Set theme options page
add_filter('tr_theme_options_page', function() {
    return get_template_directory() . '/theme-options.php';
});

add_action( 'after_setup_theme', 'lockacademy_theme_setup' );
function lockacademy_theme_setup() {
    add_image_size( 'tease-img', 372, 363, true ); 
    add_image_size( 'slideshow-img', 1045, 700, true ); 
    add_image_size( 'slideshow-img-large', 1440, 977, true ); 
    add_image_size( 'slideshow-tease', 623, 418, true ); 

    load_theme_textdomain( 'lockacademy', get_template_directory() . '/languages' );
}