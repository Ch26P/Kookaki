<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Fleurs_d\'oranger_&_Chats_errants
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
	<a class="skip-link screen-reader-text" href="#primary"><?php esc_html_e( 'Skip to content', 'foce' ); ?></a>

	<header id="masthead" class="site-header">
		<nav id="site-navigation" class="main-navigation">
            <h1 class="site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></h1>
            <button class="menu-toggle" aria-controls="primary-menu" aria-expanded="false">
                <span id="line_1" class="line"></span>
                <span id="line_2" class="line"></span>
                <span id="line_3" class="line"></span>
            </button>
            <div class="burger_menu">
               <img class="burger_menu_logo" src="<?php echo get_template_directory_uri() . '/assets/images/logo.png'; ?> " alt="logo Fleurs d'oranger & chats errants">
                <ul>
                    <li class=story><a href="#story">Histoire</a></li>
                    <li class=characteres><a href="#characters">Personnages</a></li>
                    <li class=place><a href="#place">Lieu</a></li>
                    <li class=studio><a href="#studio">Studio Koukaki</a></li>
                </ul>
                <div class="burger_menu_bottom">
                    <a href="#">STUDIO KOUKAKI</a>
                </div>
            </div>
            
		</nav><!-- #site-navigation -->
	</header><!-- #masthead -->
