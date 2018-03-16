<?php 
/**
 * Enqueue scripts and styles.
 */
function enqueue_scripts() {
    wp_enqueue_style( 'style-bundle', get_template_directory_uri() . '/dist/main.bundle.css' );
	wp_enqueue_script( 'modernizr', get_template_directory_uri() . '/dist/modernizr-bundle.js' );    
	wp_enqueue_script( 'script-bundle', get_template_directory_uri() . '/dist/main.bundle.js', array('jquery'), '20151215' );

}
add_action( 'wp_enqueue_scripts', 'enqueue_scripts' );