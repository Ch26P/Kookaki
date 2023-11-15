
<?php
        $args = array(
            'post_type' => 'characters',
            'posts_per_page' => -1,
            'meta_key'  => '_main_char_field',
            'orderby'   => 'meta_value_num',

        );
        $characters_query = new WP_Query($args);
        ?>

<div class="story__swiper">
 <div class="swiper mySwiper">
 
      <div class="swiper-wrapper">
<!--   <swiper-container class="mySwiper">-->
      <?php
                while ($characters_query->have_posts()) {
                    $characters_query->the_post();
                    echo '<div class="swiper-slide">';
                   // echo '<figure>';
                    echo get_the_post_thumbnail(get_the_ID(), 'medium');
                  /*  echo '<figcaption>';
                    the_title();
                    echo '</figcaption>';
                    echo '</figure>';*/
                    echo '</div>';
                }
                ?>
    </div>
    <div class="swiper-pagination"></div>
 <!-- </div> -->
</div>
</div>
