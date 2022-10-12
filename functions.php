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

function uploadImage($request/* , $cart_item */) {
	$upload_dir = wp_upload_dir();
	$upload_path = is_ssl() ? str_replace('http://', 'https://', $upload_dir['baseurl']) : $upload_dir['baseurl'];
	$base64Image = file_get_contents('php://input');
	$base64Image = str_replace('"', '', $base64Image);
	list($type, $base64Image) = explode(';', $base64Image);
	list(,$extension) = explode('/',$type);
	list(,$base64Image)      = explode(',', $base64Image);
	/* $fileName = uniqid().'.'.$extension; */
	$fileName ='motorBike.'.$extension;
	$imageData = base64_decode($base64Image);
	/* $src = get_stylesheet_directory_uri(). '.\assets\images\.' . uniqid().'.'.$extension;  */
	file_put_contents( $fileName, $imageData);
/* 	$cart_item['file_upload'] = array(
		'guid'      => $fileName, // Url
		'file_type' => $extension , // File type
		'file_name' => $fileName, // File name
		'title'     => $fileName, // Title
);*/
	var_dump(file_put_contents( $fileName, $imageData)); 
}
add_filter( 'woocommerce_store_api_disable_nonce_check', '__return_true' );

function custom_new_product_image($a, $cart_item, $cart_item_key) {	

	var_dump($request);
	$targeted_id = 200;
	/* $base64Image = file_get_contents('php://input'); */
/* 	$cart_item['file_upload'] = array(
		'guid'      => '', // Url
		'file_type' =>'' , // File type
		'file_name' => '', // File name
		'title'     => 'un titre', // Title
); */
	/* var_dump($base64Image); */
	if( $cart_item['product_id'] == $targeted_id || $cart_item['product_id'] == $targeted_id ){
		$class = 'attachment-shop_thumbnail wp-post-image'; // Default cart thumbnail class.
		$a = '<img';
		$a .= ' src="http://localhost:8080/essai/motorBike.png"';
		$a .= ' class="' . $class . '"';
		$a .= ' />';
		return $a;
	}
	return $a;
}

add_filter( 'woocommerce_cart_item_thumbnail', 'custom_new_product_image', 20, 3 );

/* add_filter( 'woocommerce_add_cart_item_data', 'add_custom_fields_data_as_custom_cart_item_data', 10, 2 );
function add_custom_fields_data_as_custom_cart_item_data( $cart_item, $product_id ){
		$targeted_id = 200;
    if( isset($_FILES['image']) && ! empty($_FILES['image']) ) {
				$upload       = wp_upload_bits( $_FILES['image']['name'], null, file_get_contents( $_FILES['image']['tmp_name'] ) );
        $filetype     = wp_check_filetype( basename( $upload['file'] ), null );
        $upload_dir   = wp_upload_dir();
        $upl_base_url = is_ssl() ? str_replace('http://', 'https://', $upload_dir['baseurl']) : $upload_dir['baseurl'];
        $base_name    = basename( $upload['file'] );
        $cart_item['file_upload'] = array(
            'guid'      => $upl_base_url .'/'. _wp_relative_upload_path( $upload['file'] ), // Url
            'file_type' => $filetype['type'], // File type
            'file_name' => $base_name, // File name
            'title'     => ucfirst( preg_replace('/\.[^.]+$/', '', $base_name ) ), // Title
        );
        $cart_item['unique_key'] = md5( microtime().rand() ); // Avoid merging items
    }
    return $cart_item;
} */
/* function add_order_item_meta($item_id, $values) {
	$key = ''; // Define your key here
	$value = $_POST['key_name']; // Get your value here
	woocommerce_add_order_item_meta($item_id, $key, $value);
}
add_action('woocommerce_add_order_item_meta', 'add_order_item_meta', 10, 2);


// Display additional product fields (+ jQuery code)
add_action( 'woocommerce_before_add_to_cart_button', 'njengah_additional_product_fields', 9 );
function njengah_additional_product_fields($image){
    ?>
    <p class="form-row validate-required" id="image" >
        <label for="file_field"><?php echo __("Upload Image") . ': '; ?>
            <input type='file' name='image' accept='image/*' value=''.$image.''>
        </label>
    </p>
    <?php
}
// Add custom fields data as the cart item custom data
add_filter( 'woocommerce_add_cart_item_data', 'add_custom_fields_data_as_custom_cart_item_data', 10, 2 );
function add_custom_fields_data_as_custom_cart_item_data( $cart_item, $product_id ){
		$base64Image = file_get_contents('php://input');
    if( isset($_FILES['image']) && ! empty($_FILES['image']) ) {
				$upload       = wp_upload_bits( $_FILES['image']['name'], null, file_get_contents( $_FILES['image']['tmp_name'] ) );
        $filetype     = wp_check_filetype( basename( $upload['file'] ), null );
        $upload_dir   = wp_upload_dir();
        $upl_base_url = is_ssl() ? str_replace('http://', 'https://', $upload_dir['baseurl']) : $upload_dir['baseurl'];
        $base_name    = basename( $upload['file'] );
        $cart_item['file_upload'] = array(
            'guid'      => $upl_base_url .'/'. _wp_relative_upload_path( $upload['file'] ), // Url
            'file_type' => $filetype['type'], // File type
            'file_name' => $base_name, // File name
            'title'     => ucfirst( preg_replace('/\.[^.]+$/', '', $base_name ) ), // Title
        );
        $cart_item['unique_key'] = md5( microtime().rand() ); // Avoid merging items
    }
    return $cart_item;
}
// Display custom cart item data in cart (optional)
add_filter( 'woocommerce_get_item_data', 'njengah_custom_item_data', 10, 2 );
function njengah_custom_item_data( $cart_item_data, $cart_item ) {
    if ( isset( $cart_item['file_upload']['title'] ) ){
        $cart_item_data[] = array(
            'name' => __( 'Image uploaded', 'woocommerce' ),
            'value' =>  str_pad($cart_item['file_upload']['title'], 16, 'X', STR_PAD_LEFT) . '…',
        );
    }
    return $cart_item_data;
}
// Save Image data as order item meta data
add_action( 'woocommerce_checkout_create_order_line_item', 'njengah_field_update_order_item_meta', 20, 4 );
function njengah_field_update_order_item_meta( $item, $cart_item_key, $values, $order ) {
    if ( isset( $values['file_upload'] ) ){
        $item->update_meta_data( '_img_file',  $values['file_upload'] );
    }
}
// Admin orders: Display a linked button + the link of the image file
add_action( 'woocommerce_after_order_itemmeta', 'njengah_image_link_after_order_itemmeta', 10, 3 );
function njengah_image_link_after_order_itemmeta( $item_id, $item, $product ) {
    // Only in backend for order line items (avoiding errors)
    if( is_admin() && $item->is_type('line_item') && $file_data = $item->get_meta( '_img_file' ) ){
        echo '<p><a href="'.$file_data['guid'].'" target="_blank" class="button">'.__("Open Image") . '</a></p>'; // Optional
        echo '<p><code>'.$file_data['guid'].'</code></p>'; // Optional
    }
}
// Admin new order email: Display a linked button + the link of the image file
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