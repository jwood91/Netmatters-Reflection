<?php
    // query to get all news card information
    function full_news_array() {
        include("connection.php");
        try {
          $results = $db->query("SELECT * FROM news");
          $results->setFetchMode(PDO::FETCH_ASSOC);
            // echo "<br>Retrieved Results";

        } catch (Exception $e) {
            echo "<br>Unable to retrieve results";
            exit;
          }


        while ($item = $results->fetch()):
    ?>



              <div class="card <?= $item['card_number']; ?>" style="width: 90.5%;">
                <div class="image-hover-zoom">
                    <a class="mini-link <?= $item['btn_class']; ?>" href="#"><?= $item['category']; ?></a>
                    <a href="#" class="news-card-image"><img src= "<?= $item['image_file']; ?>" class="card-img-top" alt="Office administrator vacancy at Netmatters"></a>
                </div>
                <div class="card-body">
                    <a href="#"><h5 class="<?= $item['ttle_class']; ?>"><?= $item['title']; ?></h5></a>
                    <p class="card-text"><?= $item['info_text']; ?></p>
                    <a id="vacancy-button" class="btn <?= $item['btn_class']; ?> btn-lg btn-txt" href="#" role="button">READ MORE</a>
                </div>
                <div class="card-footer d-inline-flex flex-direction-row align-items-center bg-white">
                    <img src="images/netmatters-ltd-VXAv.png" alt="Netmatters Logo Small">
                    <div class="card-text-container mt-3 ms-4 ">
                      <h6> Posted by Netmatters Ltd</h6>
                      <p class="text-muted"><?= $item['post_date'] ?></p>
                    </div>
                </div>
              </div>

    <?php endwhile; }; ?>

<?php
    function officeCard() {
      try {
        $offices = json_decode(file_get_contents("data/offices.json"));

        if (is_object($offices->offices[0])){
          foreach($offices->offices as $office) {
            echo getOfficeHtml($office);
        }
      }
    } catch(ErrorException $e) {
      //show blank section
    }
  }
  ?>




<?php
function getOfficeHtml($office) {
  $html = " <div class='office card'>
              <div class='office-image-div'>
                  <a class='office-link' href='{$office->officeLink}'><img src= '{$office->imageFile}' class='office-image' alt='office image'></a>
                </div>
                <div class='office-body'>
                  <a href=' '><h5 class='office-name'><h5>{$office->location}</h5></a>
                  <p class='office-address'>{$office->address}</p>
                  <h3 id='office-phone' class='crd-ttl-purp'>{$office->phone}</h2>
                  <a id='office-button' class='btn btn-purple' href='' role='button'>VIEW MORE</a>
                  </div>
                  <div class='office-map-outer'>
                    <img class='office-map' src='{$office->map}'/>
                  </div>
              </div>";

    return $html;
  }
 ?>


 <?php
 // define variables and set to empty values
 include("connection.php");
 $nameErr = $emailErr = $phoneErr = $subjectErr = $messageErr = "";
 $name = $email = $phone = $subject = $message = "";

   if ($_SERVER["REQUEST_METHOD"] == "POST") {
     if (empty($_POST["name"])) {
       $nameErr = "fail";
     } else {
       $name = test_input($_POST["name"]);
       // check if name only contains letters and whitespace
       if (!preg_match("/^[a-zA-Z-' ]*$/",$name)) {
         $nameErr = "fail";
       }
     }

     if (empty($_POST["email"])) {
       $emailErr = "fail";
     } else {
       $email = test_input($_POST["email"]);
       // check if e-mail address is well-formed
       if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
         $emailErr = "fail";
       }
     }

     if (empty($_POST["phone"])) {
       $phoneErr = "fail";
     } else {
       $phone = test_input($_POST["phone"]);
       // check if URL address syntax is valid
       if (!preg_match("/^(\+1|001)?\(?([0-9]{3})\)?([ .-]?)([0-9]{3})([ .-]?)([0-9]{4})/", $phone)) {
         $phoneErr = "fail";
       }
     }

     if (empty($_POST["subject"])) {
       $subjectErr = "fail";
     } else {
       $subject = test_input($_POST["subject"]);
     }

     if (strlen($_POST["message"]) <= 5) {
       $messageErr = "fail";
     } else {
       $message = test_input($_POST["message"]);
     }
     if ($nameErr == "" && $emailErr == "" && $phoneErr == "" && $subjectErr == "" && $messageErr == "") {

       $sql = "INSERT INTO contact (name, email, phone, subject, message)
       VALUES (? , ? , ? , ? , ?)";
       $db->prepare($sql)->execute([$name, $email, $phone, $subject, $message]);
       $was_submited = true;
     } else {
       $was_submited = false;
     }

   }



   function test_input($data) {
     $data = trim($data);
     $data = stripslashes($data);
     $data = htmlspecialchars($data);
     return($data);
   }
 ?>
