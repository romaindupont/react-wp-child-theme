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
	if(is_page('configurator')) {
	    var_dump(get_woocommerce_currency());
	}
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
	$explode = explode('-', $data->sku);
	$server_lang= filter_var($_SERVER['HTTP_ACCEPT_LANGUAGE'], FILTER_SANITIZE_STRING );
	$browserlang = substr($data->devise, 0, 2);
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
	register_rest_route( '/helmet', '/devise', array(
			'methods' => 'GET',
			'callback' => 'deviseName',
	) );
} );
function deviseName() {
	return get_woocommerce_currency();
}
add_filter( 'woocommerce_get_price_html', 'cw_change_product_price_display' );
function cw_change_product_price_display( $price ) {
	var_dump($price);
	/* $price = $cart_item['price']; */

	return $price;
}

add_action( 'rest_api_init', function () {
	register_rest_route( '/imageHandler/v1', '/upload', array(
			'methods' => 'POST',
			'callback' => 'uploadImage',
	) );
} );
add_action('rest_api_init', function () {
	//Example: wp-json/woocs/v3/products/eur/
	register_rest_route('wc/v3', '/products/(?P<currency>.+)', array(
			'methods' => 'GET',
			'callback' => function($request) {
				global $WOOCS;
				$currency = strtoupper(sanitize_key($request['currency']));
				switch ( $currency) {
					case 'EUR':
						$new_currency = 'EUR';
						break;
						case 'ZH':
							$new_currency = 'CNY';
							break;
							default:
							$new_currency = 'USD';
							break;
						}
						var_dump($new_currency);
						$settings = get_option( '_wcml_settings' );
						$currencies = $settings['currency_options'];
						$currency_codes = array_keys( $currencies );
						var_dump(in_array( $new_currency, $currency_codes ));
/* 						if( in_array( $new_currency, $currency_codes ) ) {
								return $new_currency;
						} */
					return $new_currency;
				}
					/* $products_ids = wc_get_products([
							'return' => 'ids',
					]);
					var_dump($currency);
					//***
					$res = [];
					if (!empty($products_ids)) {
						$_REQUEST['woocs_raw_woocommerce_price_currency'] = $currency;
						foreach ($products_ids as $product_id) {
							$product = wc_get_product($product_id);
								if ($WOOCS->default_currency === $currency) {
									$res[$product_id] = $product->get_price();
								} else {
									$res[$product_id] = $WOOCS->raw_woocommerce_price($product->get_price(), $product);
								}
							}
						}
						 */
						
						/* return 'ok'; */
			/* },
			'permission_callback' => '__return_true' */
	));
});
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
				$cart_item_data[] = array(
					'name' => __( 'Price' ),
					'value' =>  $cart_item['price'],
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
				$item->update_meta_data( 'Price',  $values['price'] );
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

// Set custom cart item price
add_action( 'woocommerce_before_calculate_totals', 'add_custom_price', 1000, 1);
function add_custom_price( $cart ) {
    // This is necessary for WC 3.0+
    if ( is_admin() && ! defined( 'DOING_AJAX' ) )
        return;

    // Avoiding hook repetition (when using price calculations for example | optional)
    if ( did_action( 'woocommerce_before_calculate_totals' ) >= 2 )
        return;

    // Loop through cart items
    foreach ( $cart->get_cart() as $cart_item ) {
			var_dump($cart_item['product_id']);
        $cart_item['data']->set_price( 100 );
    }
}

/* add_filter('wcml_client_currency', 'wcmlc');

function change_existing_currency_symbol($currency ) {
    switch( $currency ) {
        case 'US': return 'USD'; break;
        case 'EUR': return 'EUR'; break;
        case 'zh': return 'CNY'; break;
    }
} */

/* add_action( 'wcml_client_currency', 'ironikus_force_currency', 10 );
function ironikus_force_currency( $current_currency ){
    //We only want to force it within the frontend
    if( is_admin() ){
        return $current_currency;
    }

    global $woocommerce;

    //This is the current country code we force the currency to
    //You should get this value dynamically from wherever you want the currency to be forced from
    $new_country_code = $_GET['wcmlc'];

    //These are the currencies we redirect. In our example, we only have two.
    //Make sure you map the country to the language code you want to map it to.
    $multicurrencies = array(
        'DEFAULT' => 'USD',
        'EUR' => 'EUR',
        'ZH' => 'CNY',
				'US' => 'USD'
    );

    //Validate the new currency regarding its availability
    if( isset( $multicurrencies[ $new_country_code ] ) ){

        //To save performance, we only switch the language if the new one is not the current one
        if( $multicurrencies[ $new_country_code ] !== $current_currency ){

            $current_currency = $multicurrencies[ $new_country_code ]; // Set the current currency to the new one

            //$woocommerce->session->set( 'client_currency', $multicurrencies[ $new_country_code ] );
            //$woocommerce->session->set('client_currency_switched', true );

            // Other functions that might come handy
            // WC()->session->set('client_currency', $multicurrencies['DEFAULT']);
           // #$woocommerce->session->set( 'client_currency_language', $sitepress->get_current_language() );

        }

    }

    return $current_currency;
} */