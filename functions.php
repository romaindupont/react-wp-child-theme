<?php
add_action( 'wp_enqueue_scripts', 'my_theme_enqueue_styles' );
function my_theme_enqueue_styles() {
 
  wp_enqueue_script(
    'my-theme-frontend',
    get_stylesheet_directory_uri() . '/build/index.js',
    ['wp-element'],
    time(), true //For production use wp_get_theme()->get('Version')        
  );
	wp_enqueue_style(
		'veldt-style',
		get_stylesheet_directory_uri() . '/build/style-index.css',
		[],
		'20220413'
	); 
}

function remove_admin_login_header() {
	remove_action('wp_head', '_admin_bar_bump_cb');
}
add_action('get_header', 'remove_admin_login_header');

add_filter( 'show_admin_bar', '__return_false' );

function get_menu() { 
	return wp_get_nav_menu_items('main-menu');
} 

add_action( 'rest_api_init', function () {
	register_rest_route( '/imageHandler/v1', '/upload', array(
			'methods' => 'POST',
			'callback' => 'uploadImage',
	) );
} );

function uploadImage($request) {
	$upl_base_url = is_ssl() ? str_replace('http://', 'https://', $_SERVER['SERVER_NAME']. ':8080/essai') : $_SERVER['SERVER_NAME']. ':8080/essai';
	$upload_dir   = wp_upload_dir();
	$base64Image = file_get_contents('php://input');
	$base64Image = str_replace('"', '', $base64Image);
	list($type, $base64Image) = explode(';', $base64Image);
	list(,$extension) = explode('/',$type);
	list(,$base64Image)      = explode(',', $base64Image);
	$fileName = 'motorBike.'.$extension;
	$imageData = base64_decode($base64Image);
	file_put_contents( $fileName, $imageData);
	$newName = 'motorBike' . uniqid() . '.png';
	copy($fileName, $newName);
	$src = urldecode($newName);
	return $src;
}
add_filter( 'woocommerce_store_api_disable_nonce_check', '__return_true' );

add_filter( 'woocommerce_add_cart_item_data', 'add_custom_fields_data_as_custom_cart_item_data', 10, 2 );
function add_custom_fields_data_as_custom_cart_item_data( $cart_item_data, $product_id ) {
		$upl_base_url = is_ssl() ? str_replace('http://', 'https://', $_SERVER['SERVER_NAME']. ':8080/essai') : $_SERVER['SERVER_NAME']. ':8080/essai';
		$configuration = file_get_contents('php://input');
		$data = json_decode($configuration);
    if( isset($_GET['image']) && ! empty($_GET['image']) ) {
				$productName = stripslashes($_GET['image']);
				$productName = str_replace('"', "'", $productName);
				file_put_contents($productName . '.txt', print_r($data, true));
				$cart_item_data['imageToFollow'] = ($productName);
				$cart_item_data['configuration'] = ($productName . '.txt');
        $cart_item_data['unique_key'] = md5( microtime().rand() );
    }
    return $cart_item_data;
}

add_filter( 'woocommerce_get_item_data', 'display_custom_item_data', 10, 2 );
function display_custom_item_data( $cart_item_data, $cart_item ) {
    if ( isset( $cart_item['imageToFollow'] ) ) {
        $cart_item_data[] = array(
            'name' => __( 'ImageUploaded' ),
            'value' =>  $cart_item['imageToFollow'],
        );
				$cart_item_data[] = array(
					'name' => __( 'Config' ),
					'value' =>  $cart_item['configuration'],
			);
    }
    return $cart_item_data;
}

// Save Image data as order item meta data
add_action( 'woocommerce_checkout_create_order_line_item', 'add_custom_note_order_item_meta', 20, 4 );
function add_custom_note_order_item_meta( $item, $cart_item_key, $values, $order ) {
    if ( isset( $values['imageToFollow'] ) ) {
        $item->update_meta_data( 'ImageUploaded',  $values['imageToFollow'] );
				$item->update_meta_data( 'Config',  $values['configuration'] );
    }
}
function custom_new_product_image($a, $cart_item, $cart_item_key) {	
	$targeted_id = 200;
	$upl_base_url = is_ssl() ? str_replace('http://', 'https://', $_SERVER['SERVER_NAME']. ':8080/essai') : $_SERVER['SERVER_NAME']. ':8080/essai';
	if( $cart_item['product_id'] == $targeted_id || $cart_item['product_id'] == $targeted_id ) {
		$src = 'http://' . $upl_base_url . '/' . $cart_item['imageToFollow'];
		$class = 'attachment-shop_thumbnail wp-post-image';
		$a = '<img';
		$a .= ' src="' . $src . '"';
		$a .= ' class="' . $class . '"';
		$a .= ' />';
		return $a;
	}
	return $a;
}
add_filter( 'woocommerce_cart_item_thumbnail', 'custom_new_product_image', 20, 3 );

add_action( 'woocommerce_after_order_itemmeta', 'image_link_after_order_itemmeta', 10, 3 );
function image_link_after_order_itemmeta( $item_id, $item, $product ) {
	$upl_base_url = is_ssl() ? str_replace('http://', 'https://', $_SERVER['SERVER_NAME']. ':8080/essai') : $_SERVER['SERVER_NAME']. ':8080/essai';
    if( is_admin() && $item->is_type('line_item') && $file_data = $item->get_meta( 'ImageUploaded' ) ){
			$src = 'http://' . $upl_base_url . '/' . $file_data;
        echo '<p><a href="'.$src.'" target="_blank" class="button">'.__("Open Image") . '</a></p>';
			$srcText = 'http://' . $upl_base_url . '/' . $item->get_meta( 'Config' );
				echo '<p><a href="'.$srcText.'" target="_blank" class="button">'.__("Open Config") . '</a></p>';
    }
}

/*// Admin new order email: Display a linked button + the link of the image file
add_action( 'woocommerce_email_after_order_table', 'njengah_email_new_order_custom_meta_data', 10, 4);
function njengah_email_new_order_custom_meta_data( $order, $sent_to_admin, $plain_text, $email ){
    // On "new order" email notifications
    if ( 'new_order' === $email->id ) {
        foreach ($order->get_items() as $item ) {
            if ( $file_data = $item->get_meta( '_img_file' ) ) {
                echo '<p>
                    <a href="'.$file_data['guid'].'" target="_blank" class="button">'.__("Download Image") . '</a><br>
                    <pre><code style="font-size:12px; background-color:#eee; padding:5px;">'.$file_data['guid'].'</code></pre>
                </p><br>';
            }
        }
    }
} */