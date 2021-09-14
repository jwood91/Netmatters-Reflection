<?php
$pageTitle = "Contact Us | Netmatters";
include "inc/header.php" ?>
<?php include "inc/function.php" ?>
<?php include "inc/cookie.php" ?>
<!-- offices boxes -->
<div id="breadcrumbs-contact">
  <div id="breadcrumbs-contact-inner">
    <span><a href="index.php">Home</a> / Our Offices</span>
  </div>
</div>
<div id="offices-header">
  <div id="offices-header-inner">
    <h1>Our Offices</h1>
  </div>
</div>
<div id="office-outer">

  <div id="office-inner">
    <?php officeCard(); ?>
  </div>
</div>

<!-- comment form / email information -->
<?php include "inc/contact-form.php"?>
<!-- email signup box -->
<?php include "inc/newsletter.php" ?>

<script src="js/contact.js"></script>
<?php include "inc/footer.php" ?>
