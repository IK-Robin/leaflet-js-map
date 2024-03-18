<?php

// Define a function to handle the shortcode output
function my_shortcode_function() {
    // Start output buffering
    ob_start();
    ?>
    <!-- Output the <div> element with the specified ID "map" -->
    <div id="map">
        This is my map content.
    </div>
    <?php
    // Get the buffered output and clean (flush) the buffer
    return ob_get_clean();
}

// Register the shortcode
add_shortcode('ikr_leflet_map', 'my_shortcode_function');



?>