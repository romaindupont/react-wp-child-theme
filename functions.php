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
	register_rest_route( '/helmet', '/price', array(
			'methods' => 'POST',
			'callback' => 'priceTest',
	) );
} );

function priceTest($request) {
	$json = file_get_contents('php://input');
	$data = json_decode($json);
	$explode = explode('-', $data);
	$server_lang= filter_var($_SERVER['HTTP_ACCEPT_LANGUAGE'], FILTER_SANITIZE_STRING );
	$browserlang = substr($server_lang, 0, 2);
	$price690 = 690;
	$price150 = 150;
	$price35 = 35;
	$price10 = 10;
	$price125 = 125;
	$price95 = 95;
	$price70 = 70;
	$price115 = 115;
	$price50 = 50;
	$price20 = 20;
	$price10 = 10;
	$price30 = 30;
	if( $browserlang == "us" ){
		$set_lang = 'us_US';
		$price690 = 690;
		$price150 = 150;
		$price125 = 125;
		$price115 = 115;
		$price95 = 95;
		$price70 = 70;
		$price50 = 50;
		$price35 = 35;
		$price30 = 30;
		$price20 = 20;
		$price10 = 10;
	}
	if( $browserlang == "zh" ) {
		$set_lang = 'zh_CN';
		$price690 = 4020;
		$price150 = 1000;
		$price125 = 810;
		$price115 = 790;
		$price95 = 660;
		$price70 = 460;
		$price50 = 330;
		$price35 = 240;
		$price30 = 200;
		$price20 = 130;
		$price10 = 60;
	}
	else {
		$price690 = 690;
		$price150 = 150;
		$price125 = 125;
		$price115 = 115;
		$price95 = 95;
		$price70 = 70;
		$price50 = 50;
		$price35 = 35;
		$price30 = 30;
		$price20 = 20;
		$price10 = 10;
	}
	$total = 0;
	$position1 = $explode[0];
	if ($position1 === 'ht') {
		$total += $price690;
	}
	$position2 = $explode[1];
	if ($position2 === 'ch') {
		$total += $price150;
	}
	if ($position2 === 'xx') {
		$total += 0;
	}
	$position3 = $explode[2];
	if ($position3 === 'xx') {
		$total += 0;
	}
	if ($position3 === 'vb') {
		$total += $price35;
	}
	if ($position3 === 'vw') {
		$total += $price35;
	}
	if ($position3 === 'vp') {
		$total += $price10;
	}
	if ($position3 === 'vs') {
		$total += $price125;
	}
	if ($position3 === 'vl') {
		$total += $price95;
	}
	$position4 = $explode[3];
	if ($position4 === 'xx') {
		$total += 0;
	}
	if ($position4 === 'hg') {
		$total += $price70;
	}
	$position5 = $explode[4];
	if ($position5 === 'xx') {
		$total += 0;
	}
	if ($position5 === 'hk') {
		$total += $price70;
	}
	if ($position5 === 'hr') {
		$total += $price70;
	}
	if ($position5 === 'hc') {
		$total += $price115;
	}
	if ($position5 === 'ht') {
		$total += $price115;
	}
	if ($position5 === 'hd') {
		$total += $price115;
	}
	if ($position5 === 'he') {
		$total += $price115;
	}
	if ($position5 === 'hg') {
		$total += $price115;
	}
	if ($position5 === 'hh') {
		$total += $price115;
	}
	if ($position5 === 'hz') {
		$total += $price115;
	}
	if ($position5 === 'hb') {
		$total += $price115;
	}
	if ($position5 === 'ho') {
		$total += $price115;
	}
	if ($position5 === 'hp') {
		$total += $price115;
	}
	if ($position5 === 'hs') {
		$total += $price115;
	}
	if ($position5 === 'hv') {
		$total += $price115;
	}
	$position6 = $explode[5];
	if ($position6 === 'xxx') {
		$total += 0;
	}
	if ($position6 === 'htl') {
		$total += $price50;
	}
	$position7 = $explode[6];
	if ($position7 === 'xxx') {
		$total += 0;
	}
	if ($position7 === 'til') {
		$total += $price150;
	}
	if ($position7 === 'hif') {
		$total += $price115;
	}
	$position8 = $explode[7];
	if ($position8 === 'xx') {
		$total += 0;
	}
	if ($position8 === 'pl') {
		$total += $price20;
	}
	$position9 = $explode[8];
	if ($position9 === 'xx') {
		$total += 0;
	}
	if ($position9 === 'wl') {
		$total += $price10;
	}
	$position10 = $explode[9];
	if ($position10 === 'xx') {
		$total += 0;
	}
	if ($position10 === 'ng') {
		$total += $price50;
	}
	$position11 = $explode[10];
	if ($position11 === 'xx') {
		$total += 0;
	}
	if ($position11 === 'nd') {
		$total += $price50;
	}
	$position12 = $explode[11];
	if ($position12 === 'xx') {
		$total += 0;
	}
	if ($position12 === 'nb') {
		$total += $price50;
	}
	$position13 = $explode[12];
	if ($position13 === 'x') {
		$total += 0;
	}
	if ($position13 === 'e') {
		$total += $price20;
	}
	$position14 = $explode[13];
	if ($position14 === 'xx') {
		$total += 0;
	}
	if ($position14 === 'cg') {
		$total += $price70;
	}
	$position15 = $explode[14];
	if ($position15 === 'xxx') {
		$total += 0;
	}
	if ($position15 === 'ctl') {
		$total += $price50;
	}
	$position16 = $explode[15];
	if ($position16 === 'xxx') {
		$total += 0;
	}
	if ($position16 === 'cif') {
		$total += $price30;
	}
	if ($position16 === 'cil') {
		$total += $price150;
	}
	$position17 = $explode[16];
	if ($position17 === 'xx') {
		$total += 0;
	}
	if ($position17 === 'ck') {
		$total += $price20;
	}
	if ($position17 === 'cr') {
		$total += $price20;
	}
	if ($position17 === 'cc') {
		$total += $price30;
	}
	if ($position17 === 'cd') {
		$total += $price30;
	}
	if ($position17 === 'cu') {
		$total += $price30;
	}
	if ($position17 === 'ce') {
		$total += $price30;
	}
	if ($position17 === 'cg') {
		$total += $price30;
	}
	if ($position17 === 'ch') {
		$total += $price30;
	}
	if ($position17 === 'cz') {
		$total += $price30;
	}
	if ($position17 === 'cb') {
		$total += $price30;
	}
	if ($position17 === 'co') {
		$total += $price30;
	}
	if ($position17 === 'cp') {
		$total += $price30;
	}
	if ($position17 === 'cs') {
		$total += $price30;
	}
	if ($position17 === 'cv') {
		$total += $price30;
	}
	
	return $total;
}

add_action( 'rest_api_init', function () {
	register_rest_route( '/imageHandler/v1', '/upload', array(
			'methods' => 'POST',
			'callback' => 'uploadImage',
	) );
} );

function uploadImage($request) {
	$upl_base_url = is_ssl() ? str_replace('http://', 'https://', $_SERVER['SERVER_NAME']. '/essai') : $_SERVER['SERVER_NAME']. '/essai';
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
		$upl_base_url = is_ssl() ? str_replace('http://', 'https://', $_SERVER['SERVER_NAME']. '/essai') : $_SERVER['SERVER_NAME']. '/essai';
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
	$targeted_id = 226;
	$upl_base_url = is_ssl() ? str_replace('http://', 'https://', $_SERVER['SERVER_NAME']. '/essai') : $_SERVER['SERVER_NAME']. '/essai';
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
	$upl_base_url = is_ssl() ? str_replace('http://', 'https://', $_SERVER['SERVER_NAME']. '/essai') : $_SERVER['SERVER_NAME']. '/essai';
    if( is_admin() && $item->is_type('line_item') && $file_data = $item  ){
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