
<div id="contact-section">
    <div id="contact-form-container-outer">
      <div id="address-container">
        <div id="address-inner">
          <ul id="address">
            <li><p>Email Us On:</p></li>
            <li><h5>sales@netmatters.com</h5></li>
            <li><p>Business Hours:</p></li>
            <li><p>Monday - Friday 7:00 - 18:00</p></li>
            <li><p>Out of Hours IT Support</p></li>
          </ul>
        </div>
      </div>
      <div id="contact-form-container" class="form-container">

        <div id="contact-success" name="success" class="contact-notify alert-success
        <?php
        if ($was_submited) {
          echo 'alert-display';
        } else { echo 'alert-hide'; }

        ?>" >
            <span>Your message has been sent!</span>
            <button type="close" class="close-button" onclick="closeSubmit()" >
                <i class='fas fa-times'></i>
            </button>
          </div>


        <div id="phone-fail" class="contact-notify alert-danger alert-hide">
            <span>Telephone number is invaild</span>
            <button type="close" class="close-button" onclick="closeSubmit()">
                <i class='fas fa-times'></i>
            </button>
        </div>


        <div id="message-fail" class="contact-notify alert-danger alert-hide">
          <span>The message must be at least 5 characters</span>
          <button type="close" class="close-button" onclick="closeSubmit()">
              <i class='fas fa-times'></i>
          </button>
          </div>


        <form id="contact-form" method="POST"
          action="#"
          accept-charset="UTF-8" id="sign-up" name="contactForm">
          <div id= "contact-sign-up-inputs"class="sign-up-inputs">
            <div id="contact-name-input" class='form-input'>
                <label for="contact-name-entry" class="input-label"> Your Name <span class="ast-red">&#42;</span></label>
                <input id="contact-name-entry" class=" <?php
                    if ($nameErr == "fail"){
                      echo ("input-invalid");
                    } else {
                      echo ("input-area");
                    };?>"
                    name="name" type="text" value="<?php
                      if(isset($_POST['name'])) echo $_POST['name'];
                      ?>"/>
            </div>
            <div id="contact-email-input" class="form-input">
                <label for="contact-email-entry" class="input-label"> Your Email <span class="ast-red">&#42;</span></label>
                <input id="contact-email-entry"  class="<?php
                    if ($emailErr == "fail"){
                      echo ("input-invalid");
                    } else {
                      echo ("input-area");
                    };?>" name="email" type="text" value="<?php if(isset($_POST['email'])) echo $_POST['email']; ?>"/>
            </div>
          </div>

            <div id="contact-phone-input" class='form-input'>
                <label for="contact-phone-entry" class="input-label"> Your Telephone Number <span class="ast-red">&#42;</span></label>
                <input id="contact-phone-entry"  class="<?php
                    if ($phoneErr == "fail"){
                      echo ("input-invalid");
                    } else {
                      echo ("input-area");
                    };?>" name="phone" type="text" value="<?php if(isset($_POST['phone'])) echo $_POST['phone']; ?>"/>
            </div>
            <div id="contact-subject-input" class='form-input'>
                <label for="contact-subject-entry" class="input-label"> Subject <span class="ast-red">&#42;</span></label>
                <input id="contact-subject-entry" class="<?php
                    if ($subjectErr == "fail"){
                      echo ("input-invalid");
                    } else {
                      echo ("input-area");
                    };?>" name="subject" type="text" value="<?php if(isset($_POST['subject'])) echo $_POST['subject'];?>"/>
            </div>
            <div id="contact-message-input" class='form-input'>
                <label for="contact-message-entry" class="input-label"> Message <span class="ast-red">&#42;</span></label>
                <input id="contact-message-entry" class="<?php
                    if ($messageErr == "fail"){
                      echo ("input-invalid");
                    } else {
                      echo ("input-area");
                    };?>" name="message" cols="50" type="textarea" value="<?php if(isset($_POST['message'])) echo $_POST['message']; ?>"/>
            </div>


            <div id="contact-checkbox-container" class="checkbox-container">
                <input id="contact-chkbox" type="checkbox" value=" " <?php if(isset($_POST['contact-chkbox'])) echo "checked='checked'"; ?> />
                <div class="icon-checkbox-checked"></div>
                <label for="contact-chkbox" id="chckbox-label">Please tick this box if you wish to
                  receive marketing information from us. Please see our <a href="#">Privacy Policy</a> for more information on how we use your data.
                  </label>
             </div>
             <input id="enquiry-btn" type="submit" value="SEND ENQUIRY" name="contact-submit" class="btn btn-purple">
         </form>
      </div>
    </div>
</div>
