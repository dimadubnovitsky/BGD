<?php

$file = "subscribers.json";
$arr_data = array();

try {
    // Get data
    $data = array(
        'email' => $_POST['email'],
    );

    // Get data from existing json file
    $jsondata = file_get_contents($file);

    // Converts json data into array
    $arr_data = json_decode($jsondata, true);

    // Push user data to array
    array_push($arr_data, $data);

    // Convert updated array to JSON
    $jsondata = json_encode($arr_data, JSON_PRETTY_PRINT);

    // Write json data into data.json file
    if (file_put_contents($file, $jsondata)) {
        echo 'Data successfully saved';
    } else
        echo "error";

} catch (Exception $e) {
    echo 'Caught exception: ', $e->getMessage(), "\n";
}

/*
// *  CONFIGURE EVERYTHING HERE
// */
//// MailChimp API credentials and Audience ID
//$apiKey = 'c501ea31729eaec84f86a04c93c675c5-us4';
//$audienceID = 'a893bc91fd';
//// Message that will be displayed when everything is OK :)
//$okMessage = 'You\'ve successfully signed up. Thank you!';
//// If something goes wrong, we will display this message.
//$errorMessage = 'There was an error while submitting the form. Please try again later';
///*
// *  LET'S SUBMIT EVERYTHING TO MAILCHIMP
// */
//echo $_POST['email'];
//try {
//    if (!empty($_POST)) {
//        //Grab post data from form
//        $postEmail = $_POST['email'];
//
//// Build the MailChimp API URL
//        $dataCenter = substr($apiKey,strpos($apiKey,'-')+1);
//        $url = 'https://' . $dataCenter . '.api.mailchimp.com/3.0/lists/' . $audienceID . '/members';
//
//        // User Information to sent to MailChimp
//        $json = json_encode([
//            'email_address' => $postEmail,
//            'status'        => 'subscribed'
//        ]);
//
//        // send a HTTP POST request with curl to MailChimp
//        $ch = curl_init($url);
//        curl_setopt($ch, CURLOPT_USERPWD, 'user:' . $apiKey);
//        curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type: application/json']);
//        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
//        curl_setopt($ch, CURLOPT_TIMEOUT, 10);
//        curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'PUT');
//        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
//        curl_setopt($ch, CURLOPT_POSTFIELDS, $json);
//        $result = curl_exec($ch);
//        $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
//        curl_close($ch);
//
//
//        $responseArray = array('type' => 'success', 'message' => $okMessage);
//    }
//} catch (\Exception $e) {
//    $responseArray = array('type' => 'danger', 'message' => $e->getMessage());
//}
//// If requested by AJAX request return JSON response
//if (!empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest') {
//    $encoded = json_encode($responseArray);
//    header('Content-Type: application/json');
//    echo $encoded;
//}
//// Else just display the message
//else {
//    echo $responseArray['message'];
//}

//---------------------------------------------------------------------------------------------------------------------

//$list_id = 'a893bc91fd';
//$authToken = 'c501ea31729eaec84f86a04c93c675c5-us4';
//// The data to send to the API
//
//$postData = array(
//    "email_address" => $_POST["email"],
//    "status" => "subscribed"
//);
//
//// Setup cURL
//$ch = curl_init('https://us20.api.mailchimp.com/3.0/lists/'.$list_id.'/members/');
//curl_setopt_array($ch, array(
//    CURLOPT_POST => TRUE,
//    CURLOPT_RETURNTRANSFER => TRUE,
//    CURLOPT_HTTPHEADER => array(
//        'Authorization: apikey '.$authToken,
//        'Content-Type: application/json'
//    ),
//    CURLOPT_POSTFIELDS => json_encode($postData)
//));
//// Send the request
//$response = curl_exec($ch);
