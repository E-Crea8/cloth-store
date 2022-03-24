<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package cloth-store
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>

<head>
  <meta charset="<?php bloginfo( 'charset' ); ?>">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="profile" href="https://gmpg.org/xfn/11">

  <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
  <?php wp_body_open(); ?>
  <div id="page" class="site">
    <a class="skip-link screen-reader-text" href="#primary"><?php esc_html_e( 'Skip to content', 'cloth' ); ?></a>

    <!-- Start my header custom code here -->

    <header id="masthead" class="site-header">
      <div class="site-branding d-none d-lg-block">
        <div class="container-fluid logo-container d-flex justify-content-center align-items-center">
          <div class="row">
            <div class="col-md-12">
              <?php 

								// IF logo is not uploaded, Show site title
								$logo_id = get_theme_mod( 'custom_logo' );
								$logo_image = wp_get_attachment_image_src( $logo_id, 'full' );                  

								if ( ! empty( $logo_image ) ) : ?>
              <span class="site-logo"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><img
                    src="<?php echo esc_url( $logo_image[0] ); ?>" alt="<?php bloginfo( 'name' ); ?>" /></a></span>
              <?php else : ?>
              <h1 class="site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>"
                  rel="home"><?php bloginfo( 'name' ); ?></a></h1>
              <?php
								endif;
					
								?>
            </div>
          </div>

        </div>
      </div>


      <!-- <div class="site-branding"> -->
      <?php
							// the_custom_logo();
							// if ( is_front_page() && is_home() ) :
						?>
      <!-- <h1 class="site-title"><a href="<?php //echo esc_url( home_url( '/' ) ); ?>"
								rel="home"><?php //bloginfo( 'name' ); ?></a></h1> -->
      <?php
							// else :
						?>
      <!-- <p class="site-title"><a href="<?php //echo esc_url( home_url( '/' ) ); ?>"
								rel="home"><?php //bloginfo( 'name' ); ?></a></p> -->
      <?php
							// endif;
							// $cloth_description = get_bloginfo( 'description', 'display' );
							// if ( $cloth_description || is_customize_preview() ) :
						?>
      <!-- <p class="site-description">
							<?php //echo $cloth_description; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?></p> -->
      <?php //endif; ?>
      <!-- </div>.site-branding -->

      <nav id="site-navigation" class="main-navigation d-none d-lg-block">
        <div class="container ">
          <div class="row nav-container">
            <div class="col d-flex justify-content-center align-items-center icon-box">
              <a href="#search" class="search-form-tigger" data-toggle="search-form"><i class="bi bi-search"
                  aria-hidden="true"></i></a>
            </div>

            <!-- SEARCH FORM HERE -->
            <div class="search-form-wrapper">
              <?php aws_get_search_form( true ); ?>
            </div>
            <div class="col-md-10 d-flex justify-content-center align-items-center">
              <!-- <button class="menu-toggle" aria-controls="primary-menu"
                aria-expanded="false"><?php //esc_html_e( 'Primary Menu', 'cloth' ); ?></button> -->
              <?php
									wp_nav_menu(
										array(
											'theme_location' => 'menu-1',
											'menu_id'        => 'primary-menu',
										)
									);
								?>
            </div>

            <div class="col d-flex justify-content-center align-items-center icon-box">
              <a href="./cart"><i class="bi bi-cart"></i></a>
              <span class="total-cart-items">
                <a><?php echo WC()->cart->get_cart_contents_count(); ?></a>
              </span>
            </div>


          </div>
        </div>
      </nav><!-- #site-navigation -->


      <!-- MOBILE NAVBAR -->
      <nav class="navbar navbar-light menu-mobile shadow bg-light d-lg-none">
        <div class="container">
          <?php 

            // IF logo is not uploaded, Show site title
            $logo_id = get_theme_mod( 'custom_logo' );
            $logo_image = wp_get_attachment_image_src( $logo_id, 'full' );                  

              if ( ! empty( $logo_image ) ) : ?>
          <span class="site-logo"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><img
                src="<?php echo esc_url( $logo_image[0] ); ?>" alt="<?php bloginfo( 'name' ); ?>"
                class="img-fluid" /></a></span>
          <?php else : ?>
          <h1 class="site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>"
              rel="home"><?php bloginfo( 'name' ); ?></a></h1>
          <?php
endif;

?>
          <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="offcanvas offcanvas-end bg-mobile text-white" tabindex="-1" id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel">
            <div class="offcanvas-header">
              <div class=""></div>
              <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas"
                aria-label="Close"></button>
            </div>
            <div class="offcanvas-body text-center">
              <ul class="navbar-nav justify-content-center nav-link-text flex-grow-1 pe-3">
                <?php
									wp_nav_menu(
										array(
											'theme_location' => 'menu-1',
											'menu_id'        => 'primary-menu',
										)
									);
								?>
              </ul>
              <!-- SEARCH FORM HERE -->
              <div class="search-form-wrapper search-mobile">
                <?php aws_get_search_form( true ); ?>
              </div>

            </div>
          </div>
        </div>
      </nav>

    </header><!-- #masthead -->