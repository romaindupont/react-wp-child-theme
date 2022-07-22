
<!DOCTYPE html>
<html <?php language_attributes(); ?> >
<head>
	<meta charset="<?php bloginfo('charset'); ?>">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<?php wp_head(); ?>
</head>
<main id="site-content" role="main">
	<div id="root"></div>
</main>
<?php get_template_part( 'template-parts/footer-menus-widgets' ); ?>
<?php wp_footer();  ?>