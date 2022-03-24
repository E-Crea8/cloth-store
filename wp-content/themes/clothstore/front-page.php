<?php
/**
 * The template for displaying all pages
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site may use a
 * different template.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package cloth-store
 */

get_header();
?>

<main id="primary" class="site-main">

  <!-- Start slider section here -->
  <section>
    <div class="container-fluid home-slider">
      <div class="row">
        <div class="col-md-12 px-0">

          <?php if(function_exists('avartanslider')) avartanslider('home-slider'); ?>

        </div>
      </div>
    </div>
  </section>

  <!-- START WOOCOMMERCE LATEST PRODUCT HERE -->
  <section>
    <div class="container latest-product">
      <div class="row">
        <div class="col">
          <h1>What's New?</h1>
        </div>
      </div>

      <div class="row">
        <div class="col text-center">
          <?php echo do_shortcode( '[products limit="4" columns="4" orderby="id" order="DESC" visibility="visible"]' ); ?>
        </div>
      </div>
    </div>
  </section>


  <!-- START WOOCOMMERCE BEST SELLERS HERE -->
  <section>
    <div class="container best-selling">
      <div class="row">
        <div class="col-md-12">
          <h1>best sellers</h1>
        </div>
      </div>


      <!-- BEST SELLER === TRUE -->
      <div class="row">
        <div class="col-md-12 text-center">
          <?php echo do_shortcode( '[products limit="4" columns="4" best_selling="true"]' ); ?>
        </div>
      </div>

      <div class="row">
        <div class="col-md-12 text-center">
          <?php echo do_shortcode( '[products limit="4" columns="4" best_selling="true"]' ); ?>
        </div>
      </div>


    </div>
  </section>


  <!-- START BLOG SECTION -->
  <section>
    <div class="container blog-post">
      <div class="row">
        <div class="col">
          <h1>Latest Blog</h1>
        </div>
      </div>

      <?php
        $args = array(
          'post_type' => 'post',
          'post_per_page' => 3
        );
        $_posts = new WP_Query($args);
        
      ?>
      <?php if($_posts->have_posts()):?>

      <div class="row">
        <?php while ($_posts->have_posts()): $_posts->the_post(); ?>
        <div class="col-md-4 post">
          <?php if(has_post_thumbnail()): ?>
          <img src="<?php the_post_thumbnail_url('small_image'); ?>" class="img-fluid">
          <?php else  : ?>
          <div class="custom-col img-fluid text-center">
            <h2 class="text-uppercase">shoptica refers to all kinds of market place businesses that needs a feature rich
              and beautiful presence online.</h2>

            <button class="more-btn">more</button>

          </div>
          <?php endif; ?>
          <div class="post__date"><?php echo get_the_date( 'j F Y' ); ?></div>

          <a href="<?php the_permalink(); ?>" class="post__title">
            <h4><?php the_title(); ?></h4>
          </a>


        </div>
        <?php endwhile; ?>
      </div>
      <?php endif; ?>
    </div>
  </section>




  <?php
		// while ( have_posts() ) :
		// 	the_post();

		// 	get_template_part( 'template-parts/content', 'page' );

		// 	// If comments are open or we have at least one comment, load up the comment template.
		// 	if ( comments_open() || get_comments_number() ) :
		// 		comments_template();
		// 	endif;

		// endwhile; // End of the loop.
		?>

</main><!-- #main -->

<?php
// get_sidebar();
get_footer();