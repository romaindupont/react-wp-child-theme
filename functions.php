<?php
add_action( 'wp_enqueue_scripts', 'my_theme_enqueue_styles' );
function my_theme_enqueue_styles() {
	$current_url = get_permalink( get_the_ID() );
	if($current_url === 'http://localhost/essai/configurator/' || $current_url === 'https://veldt.fr/fr/casque-de-moto/configurateur/' || $current_url === 'https://veldt.fr/es/marca-1/configurador/' || $current_url === 'https://veldt.fr/zh-hans/%e6%a0%87%e8%ae%b0-1/%e9%85%8d%e7%bd%ae%e5%99%a8/') {
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
	if(is_page('configurator')) {
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
	$price200 = 200;
	$price150 = 150;
	$price35 = 35;
	$price10 = 10;
	$price130 = 130;
	$price125 = 125;
	$price95 = 95;
	$price80 = 80;
	$price70 = 70;
	$price115 = 115;
	$price50 = 50;
	$price20 = 20;
	$price10 = 10;
	$price30 = 30;
	$price40 = 40;
	if( $browserlang == "us" ){
		$set_lang = 'us_US';
		$price690 = 690;
		$price200 = 200;
		$price150 = 150;
		$price130 = 130;
		$price125 = 125;
		$price115 = 115;
		$price95 = 95;
		$price80 = 80;
		$price70 = 70;
		$price50 = 50;
		$price40 = 40;
		$price35 = 35;
		$price30 = 30;
		$price20 = 20;
		$price10 = 10;
	}
	if( $browserlang == "CNY" ) {
		$set_lang = 'zh_CN';
		$price690 = 4020;
		$price200 = 1400;
		$price150 = 1000;
		$price130 = 900;
		$price125 = 810;
		$price115 = 790;
		$price95 = 660;
		$price80 = 500;
		$price70 = 460;
		$price50 = 330;
		$price40 = 260;
		$price35 = 240;
		$price30 = 200;
		$price20 = 130;
		$price10 = 60;
	}
	else {
		$price690 = 690;
		$price200 = 200;
		$price150 = 150;
		$price130 = 130;
		$price125 = 125;
		$price115 = 115;
		$price95 = 95;
		$price80 = 80;
		$price70 = 70;
		$price50 = 50;
		$price40 = 40;
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
		$total += $price200;
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
		$total += $price115;
	}
	if ($position5 === 'hr') {
		$total += $price115;
	}
	if ($position5 === 'hc') {
		$total += $price70;
	}
	if ($position5 === 'ht') {
		$total += $price115;
	}
	if ($position5 === 'hd') {
		$total += $price70;
	}
	if ($position5 === 'he') {
		$total += $price70;
	}
	if ($position5 === 'hg') {
		$total += $price115;
	}
	if ($position5 === 'hh') {
		$total += $price70;
	}
	if ($position5 === 'hz') {
		$total += $price70;
	}
	if ($position5 === 'hb') {
		$total += $price70;
	}
	if ($position5 === 'ho') {
		$total += $price70;
	}
	if ($position5 === 'hp') {
		$total += $price70;
	}
	if ($position5 === 'hs') {
		$total += $price115;
	}
	if ($position5 === 'hv') {
		$total += $price70;
	}
	$position6 = $explode[5];
	if ($position6 === 'xxx') {
		$total += 0;
	}
	if ($position6 === 'htl') {
		$total += $price80;
	}
	$position7 = $explode[6];
	if ($position7 === 'xxx') {
		$total += 0;
		if ($position2 !== 'xx') {
			$total += $price130;
		}
	}
	if ($position7 === 'til') {
		$total += $price150;
		if ($position2 !== 'xx') {
			$total += $price40;
		}
	}
	if ($position7 === 'hif') {
		$total += $price115;
		if ($position2 !== 'xx') {
			$total += $price130;
		}
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
		$total += $price20;
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
		$total += $price30;
	}
	if ($position17 === 'cr') {
		$total += $price30;
	}
	if ($position17 === 'cc') {
		$total += $price20;
	}
	if ($position17 === 'cd') {
		$total += $price20;
	}
	if ($position17 === 'cu') {
		$total += $price20;
	}
	if ($position17 === 'ce') {
		$total += $price20;
	}
	if ($position17 === 'cg') {
		$total += $price30;
	}
	if ($position17 === 'ch') {
		$total += $price20;
	}
	if ($position17 === 'cz') {
		$total += $price30;
	}
	if ($position17 === 'cb') {
		$total += $price20;
	}
	if ($position17 === 'co') {
		$total += $price20;
	}
	if ($position17 === 'cp') {
		$total += $price20;
	}
	if ($position17 === 'cs') {
		$total += $price30;
	}
	if ($position17 === 'cv') {
		$total += $price30;
	}
	$position18 = $explode[17];
	if ($position18 === 'xx') {
		$total += 0;
	}
	$position18 = $explode[17];
	if ($position18 === 'sv') {
		$total += $price10;
	}
	$position18 = $explode[17];
	if ($position18 === 'sp') {
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
						$settings = get_option( '_wcml_settings' );
						$currencies = $settings['currency_options'];
						$currency_codes = array_keys( $currencies );
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
add_action( 'rest_api_init', function () {
	register_rest_route( '/', 'replay', array(
			'methods' => 'POST',
			'callback' => 'replayLink',
	) );
} );
function replayLink($request) {
	$upl_base_url = is_ssl() ? str_replace('http://', 'https://', $_SERVER['SERVER_NAME']. '/essai') : $_SERVER['SERVER_NAME']. '/essai';
	$upload_dir = $_GET['link'];
	
	return $upload_dir;
}

add_filter( 'woocommerce_add_cart_item_data', 'add_custom_fields_data_as_custom_cart_item_data', 10, 2 );
function add_custom_fields_data_as_custom_cart_item_data( $cart_item_data, $product_id ) {
	$upl_base_url = is_ssl() ? str_replace('http://', 'https://', $_SERVER['SERVER_NAME']) : $_SERVER['SERVER_NAME'];
	$configuration = file_get_contents('php://input');
	$data = json_decode($configuration);
	if( isset($_GET['image']) && ! empty($_GET['image']) ) {
	$productName = stripslashes($_GET['image']);
		$productName = str_replace('"', "'", $productName);
		file_put_contents($productName . 'save.txt', print_r($data, true));
		$cart_item_data['imageToFollow'] = ($productName);
	$cart_item_data['configuration'] = ($productName . '.txt');
	$cart_item_data['price'] = $_GET['price'];
	$cart_item_data['link'] =  $_GET['shortLink'];
			$cart_item_data['unique_key'] = md5( microtime().rand() );
		$cart_item_data['Helmet-Aeration'] = $data->Helmet->Helmet_aeration === 'true' ? 'Yes' : 'No';
		$cart_item_data['Helmet-Interior'] = $data->Helmet->Interior;
		$cart_item_data['Helmet-Logo'] = $data->Helmet->Logo;
		$cart_item_data['Helmet-MainColor'] = $data->Helmet->Helmet_first_color;
		$cart_item_data['Helmet-Number-Back'] = $data->Helmet->BackNumber->Apply === 'true' ? $data->Helmet->BackNumber->Configuration->Text : 'None';
		$cart_item_data['Helmet-Number-Left'] = $data->Helmet->LeftNummber->Apply === 'true' ? $data->Helmet->LeftNummber->Configuration->Text : 'None';
		$cart_item_data['Helmet-Number-Right'] = $data->Helmet->RightNummber->Apply === 'true' ? $data->Helmet->RightNummber->Configuration->Text : 'None';
		//if($cart_item_data['Helmet-PaintDesign']) {
				$cart_item_data['Helmet-PaintDesign'] = $data->Helmet->Helmet_design === '' ? ' ' : $data->Helmet->Helmet_design;
				$cart_item_data['Helmet-PatternColor'] = $data->Helmet->Helmet_design_type;
	//	}

		$cart_item_data['Helmet-PullingFlap'] = $data->Helmet->flap;
		$cart_item_data['Helmet-RearEngraving'] = $data->Helmet->Engraving->Apply === 'true' ? $data->Helmet->Engraving->Configuration->Text : 'None';
		$cart_item_data['Helmet-Screws'] = $data->Screws->ScrewsPosition . ' ' . $data->Screws->Screws_finition;
		$cart_item_data['Helmet-Trim'] = $data->Helmet->Trim ? $data->Helmet->Trim : 'None';
		$cart_item_data['Helmet-Varnish'] = $data->Helmet->Varnish === 'true' ? 'Glossy' : 'Mat';
		$cart_item_data['Size'] = (($data->Helmet->Size === 'M') ? 'M/L' : (($data->Helmet->Size === 'S') ? 'XS/S' : 'XL/XXL'));
			 
	if($data->Chinguard->With_Chin === 'true'){
			$cart_item_data['Chinguard-With'] = $data->Chinguard->With_Chin;
		$cart_item_data['Chinguard-Aeration'] = $data->Chinguard->Chinguard_aeration === 'true' ? 'Yes' : 'No';
		$cart_item_data['Chinguard-MainColor'] = $data->Chinguard->Chinguard_first_color;
		$cart_item_data['Chinguard-PaintDesign'] = $data->Chinguard->Chinguard_design;
		$cart_item_data['Chinguard-Trim'] = $data->Chinguard->Trim;
		$cart_item_data['Chinguard-Varnish'] = $data->Chinguard->Varnish === 'true' ? 'Glossy' : 'Mat';
	}	
	if($data->Visor->With_Visor === 'true') {
			$cart_item_data['Visor-With'] = $data->Visor->With_Visor;
			$cart_item_data['Visor-Type'] = $data->Visor->Visor_type;
			if($cart_item_data['Visor-Type'] === 'peak_visor'){
					$cart_item_data['Visor-Peak_Color'] = $data->Visor->Visor_peak_color;
			}
			else {
					$cart_item_data['Visor-Frame'] = $data->Visor->Frame;
					$cart_item_data['Visor-Color'] = $data->Visor->visor_Color;
			}
			
			
	}
	
	}
	file_put_contents($productName . '.txt', print_r($cart_item_data, true));
	return $cart_item_data;
}


add_filter( 'woocommerce_get_item_data', 'display_custom_item_data', 10, 2 );
function display_custom_item_data( $cart_item_data, $cart_item ) {
    if ( isset( $cart_item['imageToFollow'] ) ) {
		$cart_item_data[] = array(
			'name' => __( 'Helmet - Aeration' ),
			'value' =>  $cart_item['Helmet-Aeration'],
	    );
		$cart_item_data[] = array(
			'name' => __( 'Helmet - Interior' ),
			'value' =>  $cart_item['Helmet-Interior'],
	    );
		$cart_item_data[] = array(
			'name' => __( 'Helmet - Logo' ),
			'value' =>  $cart_item['Helmet-Logo'],
	    );
		$cart_item_data[] = array(
			'name' => __( 'Helmet - Main color' ),
			'value' =>  $cart_item['Helmet-MainColor'],
	    );
		$cart_item_data[] = array(
			'name' => __( 'Helmet - Numbering - Back - Your Number' ),
			'value' =>  $cart_item['Helmet-Number-Back'],
	    );
		$cart_item_data[] = array(
			'name' => __( 'Helmet - Numbering - Left side - Your Number' ),
			'value' =>  $cart_item['Helmet-Number-Left'],
	    );
		$cart_item_data[] = array(
			'name' => __( 'Helmet - Numbering - Right side - Your Number' ),
			'value' =>  $cart_item['Helmet-Number-Right'],
	    );
			if(isset($cart_item_data['Helmet-PaintDesign'])) {
     		$cart_item_data[] = array(
    			'name' => __( 'Helmet - Paint design' ),
    			'value' =>  $cart_item['Helmet-PaintDesign'],
    	    );
    		$cart_item_data[] = array(
    			'name' => __( 'Helmet - Pattern color' ),
    			'value' =>  $cart_item['Helmet-PatternColor'],
    	    );
			}

		$cart_item_data[] = array(
			'name' => __( 'Helmet - Pulling flap' ),
			'value' =>  $cart_item['Helmet-PullingFlap'],
	    );
		$cart_item_data[] = array(
			'name' => __( 'Helmet - Rear engraving' ),
			'value' =>  $cart_item['Helmet-RearEngraving'],
	    );
		$cart_item_data[] = array(
			'name' => __( 'Helmet - Screws' ),
			'value' =>  $cart_item['Helmet-Screws'],
	    );
		$cart_item_data[] = array(
			'name' => __( 'Helmet - Trim' ),
			'value' =>  $cart_item['Helmet-Trim'],
	    );	    
		$cart_item_data[] = array(
			'name' => __( 'Helmet - Varnish' ),
			'value' =>  $cart_item['Helmet-Varnish'],
	    );
		$cart_item_data[] = array(
			'name' => __( 'Size' ),
			'value' =>  $cart_item['Size'],
	    );
 	    if($cart_item['Chinguard-With'] === 'true'){
         	$cart_item_data[] = array(
    			'name' => __( 'Chinguard - Aeration' ),
    			'value' =>  $cart_item['Chinguard-Aeration'] ? $cart_item['Chinguard-Aeration'] : 'None',
    	    );
    		$cart_item_data[] = array(
    			'name' => __( 'Chinguard - MainColor' ),
    			'value' =>  $cart_item['Chinguard-MainColor'] ? $cart_item['Chinguard-MainColor'] : 'None',
    	    );
    	    $cart_item_data[] = array(
    			'name' => __( 'Chinguard - PaintDesign' ),
    			'value' =>  $cart_item['Chinguard-PaintDesign'] ? $cart_item['Chinguard-PaintDesign'] : 'None',
    	    );
       	    $cart_item_data[] = array(
    			'name' => __( 'Chinguard - Trim' ),
    			'value' =>  $cart_item['Chinguard-Trim'] ? $cart_item['Chinguard-Trim'] : 'None',
    	    );
   	        $cart_item_data[] = array(
    			'name' => __( 'Chinguard - Varnish' ),
    			'value' =>  $cart_item['Chinguard-Varnish'] ? $cart_item['Chinguard-Varnish'] : 'None',
    	    );
	    }
	    if(isset($cart_item['Visor-With']) && $cart_item['Visor-With'] == 'true'){
   	        $cart_item_data[] = array(
    			'name' => __( 'Visor - Type' ),
    			'value' =>  $cart_item['Visor-Type'] ? $cart_item['Visor-Type'] : 'None',
    	    );
    	    if(isset($cart_item_data['Visor-Type']) && $cart_item_data['Visor-Type'] === 'peak_visor'){
    	        $cart_item_data[] = array(
    			'name' => __( 'Visor - Peak Color' ),
    			'value' =>  $cart_item['Visor-Peak_Color'] ? $cart_item['Visor-Peak_Color'] : 'None',
    	    );
    	    }
    	    else {
 	            $cart_item_data[] = array(
        			'name' => __( 'Visor - Frame' ),
        			'value' =>  $cart_item['Visor-Frame'] ? $cart_item['Visor-Frame'] : 'None',
        	    ); 
 	            $cart_item_data[] = array(
        			'name' => __( 'Visor - Color' ),
        			'value' =>  $cart_item['Visor-Color'] ? $cart_item['Visor-Color'] : 'None',
        	    ); 
    	    }
	    }
		$cart_item_data[] = array(
			'name' => __( 'Replay link' ),
			'value' => $cart_item['link'],
	    );
    }
		/* var_dump($cart_item); */
    return $cart_item_data;
}
// Save Image data as order item meta data
add_action( 'woocommerce_checkout_create_order_line_item', 'add_custom_note_order_item_meta', 20, 4 );
function add_custom_note_order_item_meta( $item, $cart_item_key, $values, $order ) {
    if ( isset( $values['imageToFollow'] ) ) {
        $item->update_meta_data( 'ImageUploaded',  $values['imageToFollow'] );
				$item->update_meta_data( 'Config',  $values['configuration'] );
				$item->update_meta_data( 'Price',  $values['price'] );
				$item->update_meta_data( 'Link',  $values['link'] );
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
	global $woocommerce;
    // This is necessary for WC 3.0+
    if ( is_admin() && ! defined( 'DOING_AJAX' ) )
        return;

    // Avoiding hook repetition (when using price calculations for example | optional)
    if ( did_action( 'woocommerce_before_calculate_totals' ) >= 2 )
        return;

    // Loop through cart items
    foreach ( $cart->get_cart() as $cart_item ) {
        if($cart_item['product_id'] === 226){
            if(get_woocommerce_currency_symbol() === '&yen;') {

                $cart_item['data']->set_price(changeDollarToYen($cart_item['price']));
            }
            else {
                $cart_item['data']->set_price($cart_item['price'] );
            }
        }
        
    }
}
function changeDollarToYen($price) {
	if($price === '690') { 
			return '4020';
	 }
	if($price === '4020') { 
			return '4020';
	 }
	 if($price === '700') { 
			return '4080';
	 }
	 if($price === '4080') { 
			return '4080';
	 }
	 if($price === '710') { 
			return '4150';
	 }
	 if($price === '4150') { 
			return '4150';
	 }
	 if($price === '720') { 
			return '4210';
	 }
	 if($price === '725') { 
			return '4260';
	 }
	 if($price === '730') { 
			return '4280';
	 }
	 if($price === '735') { 
			return '4320';
	 }
	 if($price === '740') { 
			return '4350';
	 }
	 if($price === '745') { 
			return '4390';
	 }
	 if($price === '750') { 
			return '4410';
	 }
	 if($price === '755') { 
			return '4450';
	 }
	 if($price === '760') { 
			return '4480';
	 }
	 if($price === '765') { 
			return '4520';
	 }
	 if($price === '770') { 
			return '4540';
	 }
	 if($price === '775') { 
			return '4590';
	 }
	 if($price === '780') { 
			return '4610';
	 }
	 if($price === '785') { 
			return '4680';
	 }
	 if($price === '790') { 
			return '4700';
	 }
	 if($price === '795') { 
			return '4740';
	 }
	 if($price === '800') { 
			return '4760';
	 }
	 if($price === '805') { 
			return '4810';
	 }
	 if($price === '810') { 
			return '4830';
	 }
	 if($price === '815') { 
			return '4870';
	 }
	 if($price === '820') { 
			return '4900';
	 }
	 if($price === '825') { 
			return '4940';
	 }
	 if($price === '830') { 
			return '4960';
	 }
	 if($price === '835') { 
			return '5010';
	 }
	 if($price === '840') { 
			return '5050';
	 }
	 if($price === '845') { 
			return '5070';
	 }
	 if($price === '850') { 
			return '5110';
	 }
	 if($price === '855') { 
			return '5140';
	 }
	 if($price === '860') { 
			return '5180';
	 }
	 if($price === '865') { 
			return '5200';
	 }
	 if($price === '870') { 
			return '5240';
	 }
	 if($price === '875') { 
			return '5270';
	 }
	 if($price === '880') { 
			return '5310';
	 }
	 if($price === '885') { 
			return '5340';
	 }
	 if($price === '890') { 
			return '5380';
	 }
	 if($price === '895') { 
			return '5400';
	 }
	 if($price === '900') { 
			return '5470';
	 }
	 if($price === '905') { 
			return '5500';
	 }
	 if($price === '910') { 
			return '5530';
	 }
	 if($price === '915') { 
			return '5570';
	 }
	 if($price === '920') { 
			return '5600';
	 }
	 if($price === '925') { 
			return '5620';
	 }
	 if($price === '930') { 
			return '5660';
	 }
	 if($price === '935') { 
			return '5680';
	 }
	 if($price === '940') { 
			return '5730';
	 }
	 if($price === '945') { 
			return '5740';
	 }
	 if($price === '950') { 
			return '5800';
	 }
	 if($price === '955') { 
			return '5840';
	 }
	 if($price === '960') { 
			return '5860';
	 }
	 if($price === '965') { 
			return '5900';
	 }
	 if($price === '970') { 
			return '5930';
	 }
	 if($price === '975') { 
			return '5970';
	 }
	 if($price === '980') { 
			return '5990';
	 }
	 if($price === '985') { 
			return '6030';
	 }
	 if($price === '990') { 
			return '6060';
	 }
	 if($price === '995') { 
			return '6100';
	 }
	 if($price === '1000') { 
			return '6130';
	 }
	 if($price === '1005') { 
			return '6170';
	 }
	 if($price === '1010') { 
			return '6190';
	 }
	 if($price === '1015') { 
			return '6260';
	 }
	 if($price === '1020') { 
			return '6290';
	 }
	 if($price === '1025') { 
			return '6320';
	 }
	 if($price === '1030') { 
			return '6350';
	 }
	 if($price === '1035') { 
			return '6390';
	 }
	 if($price === '1040') { 
			return '6410';
	 }
	 if($price === '1045') { 
			return '6450';
	 }
	 if($price === '1050') { 
			return '6470';
	 }
	 if($price === '1055') { 
			return '6520';
	 }
	 if($price === '1060') { 
			return '6530';
	 }
	 if($price === '1065') { 
			return '6590';
	 }
	 if($price === '1070') { 
			return '6600';
	 }
	 if($price === '1075') { 
			return '6650';
	 }
	 if($price === '1080') { 
			return '6660';
	 }
	 if($price === '1085') { 
			return '6720';
	 }
	 if($price === '1090') { 
			return '6730';
	 }
	 if($price === '1095') { 
			return '6780';
	 }
	 if($price === '1100') { 
			return '6800';
	 }
	 if($price === '1105') { 
			return '6850';
	 }
	 if($price === '1110') { 
			return '6860';
	 }
	 if($price === '1115') { 
			return '6920';
	 }
	 if($price === '1120') { 
			return '6930';
	 }
	 if($price === '1125') { 
			return '6980';
	 }
	 if($price === '1130') { 
			return '6990';
	 }
	 if($price === '1135') { 
			return '7050';
	 }
	 if($price === '1140') { 
			return '7060';
	 }
	 if($price === '1145') { 
			return '7110';
	 }
	 if($price === '1150') { 
			return '7130';
	 }
	 if($price === '1155') { 
			return '7180';
	 }
	 if($price === '1160') { 
			return '7190';
	 }
	 if($price === '1165') { 
			return '7260';
	 }
	 if($price === '1170') { 
			return '7280';
	 }
	 if($price === '1175') { 
			return '7320';
	 }
	 if($price === '1180') { 
			return '7340';
	 }
	 if($price === '1185') { 
			return '7390';
	 }
	 if($price === '1190') { 
			return '7400';
	 }
	 if($price === '1195') { 
			return '7450';
	 }
	 if($price === '1200') { 
			return '7470';
	 }
	 if($price === '1205') { 
			return '7520';
	 }
	 if($price === '1210') { 
			return '7530';
	 }
	 if($price === '1215') { 
			return '7590';
	 }
	 if($price === '1220') { 
			return '7600';
	 }
	 if($price === '1225') { 
			return '7650';
	 }
	 if($price === '1230') { 
			return '7660';
	 }
	 if($price === '1235') { 
			return '7720';
	 }
	 if($price === '1245') { 
			return '7780';
	 }
	 if($price === '1250') { 
			return '7800';
	 }
	 if($price === '1255') { 
			return '7850';
	 }
	 if($price === '1260') { 
			return '7860';
	 }
	 if($price === '1265') { 
			return '7920';
	 }
	 if($price === '1270') { 
			return '7930';
	 }
	 if($price === '1275') { 
			return '7980';
	 }
	 if($price === '1280') { 
			return '7990';
	 }
	 if($price === '1285') { 
			return '8050';
	 }
	 if($price === '1290') { 
			return '8060';
	 }
	 if($price === '1295') { 
			return '8110';
	 }
	 if($price === '1300') { 
			return '8130';
	 }
	 if($price === '1305') { 
			return '8180';
	 }
	 if($price === '1310') { 
			return '8190';
	 }
	 if($price === '1315') { 
			return '8250';
	 }
	 if($price === '1320') { 
			return '8260';
	 }
	 if($price === '1325') { 
			return '8310';
	 }
	 if($price === '1330') { 
			return '8320';
	 }
	 if($price === '1335') { 
			return '8380';
	 }
	 if($price === '1340') { 
			return '8390';
	 }
	 if($price === '1345') { 
			return '8440';
	 }
	 if($price === '1350') { 
			return '8460';
	 }
	 if($price === '1355') { 
			return '8510';
	 }
	 if($price === '1360') { 
			return '8520';
	 }
	 if($price === '1365') { 
			return '8570';
	 }
	 if($price === '1370') { 
			return '8590';
	 }
	 if($price === '1375') { 
			return '8640';
	 }
	 if($price === '1380') { 
			return '8650';
	 }
	 if($price === '1385') { 
			return '8710';
	 }
	 if($price === '1390') { 
			return '8720';
	 }
	 if($price === '1395') { 
			return '8770';
	 }
	 if($price === '1400') { 
			return '8780';
	 }
	 if($price === '1405') { 
			return '8840';
	 }
	 if($price === '1410') { 
			return '8850';
	 }
	 if($price === '1415') { 
			return '8900';
	 }
	 if($price === '1420') { 
			return '8920';
	 }
	 if($price === '1425') { 
			return '8970';
	 }
	 if($price === '1430') { 
			return '8980';
	 }
	 if($price === '1435') { 
			return '9030';
	 }
	 if($price === '1440') { 
			return '9050';
	 }
	 if($price === '1445') { 
			return '9100';
	 }
	 if($price === '1450') { 
			return '9110';
	 }
	 if($price === '1455') { 
			return '9170';
	 }
	 if($price === '1460') { 
			return '9180';
	 }
	 if($price === '1465') { 
			return '9230';
	 }
	 if($price === '1470') { 
			return '9240';
	 }
	 if($price === '1475') { 
			return '9300';
	 }
	 if($price === '1480') { 
			return '9310';
	 }
	 if($price === '1485') { 
			return '9360';
	 }
	 if($price === '1490') { 
			return '9380';
	 }
	 if($price === '1495') { 
			return '9430';
	 }
	 if($price === '1500') { 
			return '9440';
	 }
	 if($price === '1505') { 
			return '9490';
	 }
	 if($price === '1510') { 
			return '9510';
	 }
	 if($price === '1515') { 
			return '9530';
	 }
	 if($price === '1520') { 
			return '9570';
	 }
	 if($price === '1525') { 
			return '9630';
	 }
	 if($price === '1535') { 
			return '9690';
	 }
	 if($price === '1545') { 
			return '9760';
	 }
	 if($price === '1550') { 
			return '9790';
	 }
	 if($price === '1555') { 
			return '9820';
	 }
	 if($price === '1560') { 
			return '9840';
	 }
	 if($price === '1565') { 
			return '9860';
	 }
	 if($price === '1570') { 
			return '9900';
	 }
	 if($price === '1575') { 
			return '9910';
	 }
	 if($price === '1580') { 
			return '9970';
	 }
	 if($price === '1585') { 
			return '9990';
	 }
	 if($price === '1590') { 
			return '10030';
	 }
	 if($price === '1600') { 
			return '10050';
	 }
	 if($price === '1610') { 
			return '10120';
	 }
	 if($price === '1620') { 
			return '10180';
	 }
	 if($price === '4210') { 
			return '4210';
	 }
	 if($price === '4260') { 
			return '4260';
	 }
	 if($price === '4280') { 
			return '4280';
	 }
	 if($price === '4320') { 
			return '4320';
	 }
	 if($price === '4350') { 
			return '4350';
	 }
	 if($price === '4390') { 
			return '4390';
	 }
	 if($price === '4410') { 
			return '4410';
	 }
	 if($price === '4450') { 
			return '4450';
	 }
	 if($price === '4480') { 
			return '4480';
	 }
	 if($price === '4520') { 
			return '4520';
	 }
	 if($price === '4540') { 
			return '4540';
	 }
	 if($price === '4590') { 
			return '4590';
	 }
	 if($price === '4610') { 
			return '4610';
	 }
	 if($price === '4680') { 
			return '4680';
	 }
	 if($price === '4700') { 
			return '4700';
	 }
	 if($price === '4740') { 
			return '4740';
	 }
	 if($price === '4760') { 
			return '4760';
	 }
	 if($price === '4810') { 
			return '4810';
	 }
	 if($price === '4830') { 
			return '4830';
	 }
	 if($price === '4870') { 
			return '4870';
	 }
	 if($price === '4900') { 
			return '4900';
	 }
	 if($price === '4940') { 
			return '4940';
	 }
	 if($price === '4960') { 
			return '4960';
	 }
	 if($price === '5010') { 
			return '5010';
	 }
	 if($price === '5050') { 
			return '5050';
	 }
	 if($price === '5070') { 
			return '5070';
	 }
	 if($price === '5110') { 
			return '5110';
	 }
	 if($price === '5140') { 
			return '5140';
	 }
	 if($price === '5180') { 
			return '5180';
	 }
	 if($price === '5200') { 
			return '5200';
	 }
	 if($price === '5240') { 
			return '5240';
	 }
	 if($price === '5270') { 
			return '5270';
	 }
	 if($price === '5310') { 
			return '5310';
	 }
	 if($price === '5340') { 
			return '5340';
	 }
	 if($price === '5380') { 
			return '5380';
	 }
	 if($price === '5400') { 
			return '5400';
	 }
	 if($price === '5470') { 
			return '5470';
	 }
	 if($price === '5500') { 
			return '5500';
	 }
	 if($price === '5530') { 
			return '5530';
	 }
	 if($price === '5570') { 
			return '5570';
	 }
	 if($price === '5600') { 
			return '5600';
	 }
	 if($price === '5620') { 
			return '5620';
	 }
	 if($price === '5660') { 
			return '5660';
	 }
	 if($price === '5680') { 
			return '5680';
	 }
	 if($price === '5730') { 
			return '5730';
	 }
	 if($price === '5740') { 
			return '5740';
	 }
	 if($price === '5800') { 
			return '5800';
	 }
	 if($price === '5840') { 
			return '5840';
	 }
	 if($price === '5860') { 
			return '5860';
	 }
	 if($price === '5900') { 
			return '5900';
	 }
	 if($price === '5930') { 
			return '5930';
	 }
	 if($price === '5970') { 
			return '5970';
	 }
	 if($price === '5990') { 
			return '5990';
	 }
	 if($price === '6030') { 
			return '6030';
	 }
	 if($price === '6060') { 
			return '6060';
	 }
	 if($price === '6100') { 
			return '6100';
	 }
	 if($price === '6130') { 
			return '6130';
	 }
	 if($price === '6170') { 
			return '6170';
	 }
	 if($price === '6190') { 
			return '6190';
	 }
	 if($price === '6260') { 
			return '6260';
	 }
	 if($price === '6290') { 
			return '6290';
	 }
	 if($price === '6320') { 
			return '6320';
	 }
	 if($price === '6350') { 
			return '6350';
	 }
	 if($price === '6390') { 
			return '6390';
	 }
	 if($price === '6410') { 
			return '6410';
	 }
	 if($price === '6450') { 
			return '6450';
	 }
	 if($price === '6470') { 
			return '6470';
	 }
	 if($price === '6520') { 
			return '6520';
	 }
	 if($price === '6530') { 
			return '6530';
	 }
	 if($price === '6590') { 
			return '6590';
	 }
	 if($price === '6600') { 
			return '6600';
	 }
	 if($price === '6650') { 
			return '6650';
	 }
	 if($price === '6660') { 
			return '6660';
	 }
	 if($price === '6720') { 
			return '6720';
	 }
	 if($price === '6730') { 
			return '6730';
	 }
	 if($price === '6780') { 
			return '6780';
	 }
	 if($price === '6800') { 
			return '6800';
	 }
	 if($price === '6850') { 
			return '6850';
	 }
	 if($price === '6860') { 
			return '6860';
	 }
	 if($price === '6920') { 
			return '6920';
	 }
	 if($price === '6930') { 
			return '6930';
	 }
	 if($price === '6980') { 
			return '6980';
	 }
	 if($price === '6990') { 
			return '6990';
	 }
	 if($price === '7050') { 
			return '7050';
	 }
	 if($price === '7060') { 
			return '7060';
	 }
	 if($price === '7110') { 
			return '7110';
	 }
	 if($price === '7130') { 
			return '7130';
	 }
	 if($price === '7180') { 
			return '7180';
	 }
	 if($price === '7190') { 
			return '7190';
	 }
	 if($price === '7260') { 
			return '7260';
	 }
	 if($price === '7280') { 
			return '7280';
	 }
	 if($price === '7320') { 
			return '7320';
	 }
	 if($price === '7340') { 
			return '7340';
	 }
	 if($price === '7390') { 
			return '7390';
	 }
	 if($price === '7400') { 
			return '7400';
	 }
	 if($price === '7450') { 
			return '7450';
	 }
	 if($price === '7470') { 
			return '7470';
	 }
	 if($price === '7520') { 
			return '7520';
	 }
	 if($price === '7530') { 
			return '7530';
	 }
	 if($price === '7590') { 
			return '7590';
	 }
	 if($price === '7600') { 
			return '7600';
	 }
	 if($price === '7650') { 
			return '7650';
	 }
	 if($price === '7660') { 
			return '7660';
	 }
	 if($price === '7720') { 
			return '7720';
	 }
	 if($price === '7780') { 
			return '7780';
	 }
	 if($price === '7800') { 
			return '7800';
	 }
	 if($price === '7850') { 
			return '7850';
	 }
	 if($price === '7860') { 
			return '7860';
	 }
	 if($price === '7920') { 
			return '7920';
	 }
	 if($price === '7930') { 
			return '7930';
	 }
	 if($price === '7980') { 
			return '7980';
	 }
	 if($price === '7990') { 
			return '7990';
	 }
	 if($price === '8050') { 
			return '8050';
	 }
	 if($price === '8060') { 
			return '8060';
	 }
	 if($price === '8110') { 
			return '8110';
	 }
	 if($price === '8130') { 
			return '8130';
	 }
	 if($price === '8180') { 
			return '8180';
	 }
	 if($price === '8190') { 
			return '8190';
	 }
	 if($price === '8250') { 
			return '8250';
	 }
	 if($price === '8260') { 
			return '8260';
	 }
	 if($price === '8310') { 
			return '8310';
	 }
	 if($price === '8320') { 
			return '8320';
	 }
	 if($price === '8380') { 
			return '8380';
	 }
	 if($price === '8390') { 
			return '8390';
	 }
	 if($price === '8440') { 
			return '8440';
	 }
	 if($price === '8460') { 
			return '8460';
	 }
	 if($price === '8510') { 
			return '8510';
	 }
	 if($price === '8520') { 
			return '8520';
	 }
	 if($price === '8570') { 
			return '8570';
	 }
	 if($price === '8590') { 
			return '8590';
	 }
	 if($price === '8640') { 
			return '8640';
	 }
	 if($price === '8650') { 
			return '8650';
	 }
	 if($price === '8710') { 
			return '8710';
	 }
	 if($price === '8720') { 
			return '8720';
	 }
	 if($price === '8770') { 
			return '8770';
	 }
	 if($price === '8780') { 
			return '8780';
	 }
	 if($price === '8840') { 
			return '8840';
	 }
	 if($price === '8850') { 
			return '8850';
	 }
	 if($price === '8900') { 
			return '8900';
	 }
	 if($price === '8920') { 
			return '8920';
	 }
	 if($price === '8970') { 
			return '8970';
	 }
	 if($price === '8980') { 
			return '8980';
	 }
	 if($price === '9030') { 
			return '9030';
	 }
	 if($price === '9050') { 
			return '9050';
	 }
	 if($price === '9100') { 
			return '9100';
	 }
	 if($price === '9110') { 
			return '9110';
	 }
	 if($price === '9170') { 
			return '9170';
	 }
	 if($price === '9180') { 
			return '9180';
	 }
	 if($price === '9230') { 
			return '9230';
	 }
	 if($price === '9240') { 
			return '9240';
	 }
	 if($price === '9300') { 
			return '9300';
	 }
	 if($price === '9310') { 
			return '9310';
	 }
	 if($price === '9360') { 
			return '9360';
	 }
	 if($price === '9380') { 
			return '9380';
	 }
	 if($price === '9430') { 
			return '9430';
	 }
	 if($price === '9440') { 
			return '9440';
	 }
	 if($price === '9490') { 
			return '9490';
	 }
	 if($price === '9510') { 
			return '9510';
	 }
	 if($price === '9530') { 
			return '9530';
	 }
	 if($price === '9570') { 
			return '9570';
	 }
	 if($price === '9630') { 
			return '9630';
	 }
	 if($price === '9690') { 
			return '9690';
	 }
	 if($price === '9760') { 
			return '9760';
	 }
	 if($price === '9790') { 
			return '9790';
	 }
	 if($price === '9820') { 
			return '9820';
	 }
	 if($price === '9840') { 
			return '9840';
	 }
	 if($price === '9860') { 
			return '9860';
	 }
	 if($price === '9900') { 
			return '9900';
	 }
	 if($price === '9910') { 
			return '9910';
	 }
	 if($price === '9970') { 
			return '9970';
	 }
	 if($price === '9990') { 
			return '9990';
	 }
	 if($price === '10030') { 
			return '10030';
	 }
	 if($price === '10050') { 
			return '10050';
	 }
	 if($price === '10120') { 
			return '10120';
	 }
	 if($price === '10180') { 
			return '10180';
	 }
}