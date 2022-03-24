<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package cloth-store
 */

?>

<footer id="colophon" class="site-footer">
  <div class="container footer-container">
    <div class="row">
      <div class="col-sm-6 col-md-3">
        <?php dynamic_sidebar( 'footer-widget-col-one' ); ?>
      </div>
      <div class="col-sm-6 col-md-3">
        <?php dynamic_sidebar( 'footer-widget-col-two' ); ?>
      </div>
      <div class="col-sm-6 col-md-3">
        <?php dynamic_sidebar( 'footer-widget-col-three' ); ?>
      </div>
      <div class="col-sm-6 col-md-3">
        <?php dynamic_sidebar( 'footer-widget-col-four' ); ?>
      </div>
    </div>


  </div>
  <section class="copyright-section">
    <div class="container">
      <div class="row">
        <div class="col-md-9">
          <p>
            Copyright &copy; <?php echo date('Y'); ?> <?php bloginfo( 'name' ); ?>. All Rights Reserved
          </p>

        </div>
        <div class="col-md-3">Designed by <a href="#" target="_blank">Solwin Infotech</a></div>
      </div>
    </div>
  </section>

</footer><!-- #colophon -->
</div><!-- #page -->

<?php wp_footer(); ?>

</body>

</html>