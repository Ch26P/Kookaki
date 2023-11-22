<?php
$args = array(
    'post_type' => 'characters',
    'posts_per_page' => -1,
    'meta_key'  => '_main_char_field',
    'orderby'   => 'meta_value_num',

);
$characters_query = new WP_Query($args);
?>


    <div class="swiper mySwiper">

        <div class="swiper-wrapper">
          
            <?php
            while ($characters_query->have_posts()) {
                $characters_query->the_post();
                echo '<div class="swiper-slide">';
                echo get_the_post_thumbnail(get_the_ID(), 'full');
                echo '<h4>';
                the_title();
                echo '</h4>';
                echo '</div>';
            }
            ?>
        </div>

        <!-- </div> -->
   
</div>