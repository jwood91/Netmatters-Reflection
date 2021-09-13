<?php
$pageTitle = "Contact Us | Netmatters";
include "inc/header.php" ?>
<?php include "inc/function.php" ?>
<?php include "inc/cookie.php" ?>
<!-- offices boxes -->
<div id="office-outer">
  <div id="office-inner">
    <?php officeCard(); ?>
  </div>
</div>

<!-- comment form / email information -->
<?php include "inc/contact-form.php"?>
<!-- email signup box -->
<?php include "inc/newsletter.php" ?>


<?php include "inc/footer.php" ?>
