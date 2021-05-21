<?php
session_start();

$Client_ID = 'CLIENT_ID';
$Client_Secret = 'CLIENT_SECRET';
$Redirect_URL = 'REDIRECT_URL';

if(isset($_GET['code'])){
    $basic = base64_encode($Client_ID.':'.$Client_Secret);

    $curl = curl_init();

    curl_setopt_array($curl, array(
        CURLOPT_URL => "https://zoom.us/oauth/token?grant_type=authorization_code&code={$_GET['code']}&redirect_uri=$Redirect_URL",
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_ENCODING => "",
        CURLOPT_MAXREDIRS => 10,
        CURLOPT_TIMEOUT => 30,
        CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
        CURLOPT_CUSTOMREQUEST => "POST",
        CURLOPT_HTTPHEADER => array(
            "authorization: Basic $basic"
        ),
    ));

    $response = curl_exec($curl);
    $err = curl_error($curl);

    curl_close($curl);

    if ($err) {
        echo "cURL Error #:" . $err;
    } else {
        echo $response;
    }
}else{
    echo 'Authorization Error';
}
