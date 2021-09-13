<!DOCTYPE HTML>

<html lang="en">
  <head>
    <meta charset="UTF-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"/>
    <link href="bootstrap/css/bootstrap.min.css" rel="stylesheet"/>
    <script src=bootstrap/js/bootstrap.min.js></script>
    <script src="https://kit.fontawesome.com/cd35332ff4.js"
      crossorigin="anonymous"></script>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;0,300;0,400;0,500;0,600;1,200;1,400;1,500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="output_css/style.css">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <title><?php echo $pageTitle; ?></title>
    <link rel="shortcut icon" type="image/ico" href="images/favicon.ico"/>

  </head>

    <body>
      <?php include "inc/side_menu_overlay.php" ?>
      <div id="wrapper">
        <?php include "inc/stickyheader.php" ?>
        <div id="scroll">
        <header id="scroll-header" class="visible">
              <div id="page-head">
                <img src="images/chat-icon.png" alt="chat icon" id="chat-icon">
                <div id="top-row">
                  <div id="logo-container">
                      <a href="#">
                        <img src="images/f-logo.png" alt="Netmatters logo" id="logo">
                      </a>
                    </div>
                  <div id= "menu-phone">
                    <div id="support-link" class="header-btn mp-item">
                      <a href="#"><i class="fas fa-mouse"></i>Support</a>
                    </div>
                    <div id="contact-link" class="header-btn mp-item">
                      <a href="#"
                      id="link-button"><i class="far fa-paper-plane"></i>Contact</a>
                    </div>
                    <div id="search-sm" class="mp-item">
                        <input placeholder="Search...">
                        <div class="search-icon-container">
                          <button id="search-button" type=submit><i class="fas fa-search"></i></button>
                        </div>
                    </div>
                    <div  id="phone-icon-container" class="hidden">
                      <a href="tel:01603704020" title="Call 01603704020" target="_blank"><img src="images/telephone.png" alt="phone icon image" id="phone-icon" ></a>
                    </div>

                    <div id="menu-button-container" onclick="toggleNav()">
                      <button id="hamburger" class="hamburger hamburger--spin" type="button">
                          <span class="hamburger-box">
                            <span class="hamburger-inner"></span>
                            <span id="title">Menu</span>
                          </span>

                        </button>
                      </div>
                  </div>
                  <div id="search-bar-container" class="hidden">
                    <input placeholder="Search..." id="search-input" class="hidden">
                    <div class="hidden search-icon-container">
                      <button type=submit class="hidden"><i class="fas fa-search"></i></button>
                    </div>
                  </div>
                </div>
              </div>

            <div id="navbar" class="nav sticker">
              <div id="nav-main">
                <ul id="nav-items">
                  <li class="nav-design navboth-design nav-item nav-left-end">
                    <a class="nav-link-item" href="#">
                      <span><i class="fas fa-code"></i></span>
                      <span><small>Web</small><br>Design</span>
                    </a>
                    <div class="nav-menu menu-design">
                      <ul class="menu-list">
                        <li><a href="#"><span>Stylish Websites</span></a></li>
                        <li><a href="#"><span>Ecommerce Stores</span></a></li>
                        <li><a href="#"><span>Branding</span></a></li>
                        <li><a href="#"><span>Apps</span></a></li>
                        <li><a href="#"><span>Web Hosting</span></a></li>
                        <li><a href="#"><span>Pay Monthly Websites</span></a></li>
                      </ul>
                    </div>
                  </li>

                  <li class="nav-it navboth-it nav-item">
                    <a class="nav-link-item" href="#">
                      <span><i class="fas fa-desktop"></i></span>
                      <span><small>IT</small><br>Support</span>
                      </a>
                    <div class="nav-menu menu-it">
                      <ul class="menu-list">
                        <li><a href="#"><span>Managed It</span></a></li>
                        <li><a href="#"><span>Business It</span></a></li>
                        <li><a href="#"><span>Office 365</span></a></li>
                        <li><a href="#"><span>Consultancy</span></a></li>
                        <li><a href="#"><span>Cloud Provider</span></a></li>
                        <li><a href="#"><span>Data Backup</span></a></li>
                      </ul>
                    </div>
                  </li>

                  <li class="nav-telecoms navboth-telecoms nav-item">
                    <a class="nav-link-item" href="#">
                      <span><i class="fas fa-phone-volume telephone"></i></span>
                      <span><small>Telecoms</small><br>Services</span>
                    </a>
                    <div class="nav-menu menu-telecoms">
                      <ul class="menu-list">
                        <li><a href="#"><span>Gigabit Voucher</span></a></li>
                        <li><a href="#"><span>Hosted VOIP</span></a></li>
                        <li><a href="#"><span>Business VIOP</span></a></li>
                        <li><a href="#"><span>Business Broadband</span></a></li>
                        <li><a href="#"><span>Leased Line</span></a></li>
                        <li><a href="#" class="last-item"><span>3CX Systems</span></a></li>
                      </ul>
                    </div>
                  </li>


                  <li class="nav-software navboth-software nav-item">
                    <a class="nav-link-item"  href="#">
                      <span><i class="fas fa-th"></i></span>
                      <span><small>Bespoke</small><br>Software</span>
                    </a>
                    <div class="nav-menu menu-software">
                        <ul class="menu-list">
                          <li><a href="#"><span>Workflow Automations</span></a></li>
                          <li><a href="#"><span>Automation</span></a></li>
                          <li><a href="#"><span>System Integration</span></a></li>
                          <li><a href="#"><span>Database Management</span></a></li>
                          <li><a href="#"><span>Sharepoint</span></a></li>
                          <li><a href="#"><span>ERP</span></a></li>
                        </ul>
                      </div>
                    </li>

                  <li class="nav-marketing navboth-marketing nav-item">
                    <a class="nav-link-item"  href="#">
                      <span><i class="fas fa-signal"></i></span>
                      <span><small>Digital</small><br>Marketing</span>
                    </a>
                    <div class="nav-menu menu-marketing">
                      <ul class="menu-list">
                        <li><a href="#"><span>Search (SEO)</span></a></li>
                        <li><a href="#"><span>Paid (PPC)</span></a></li>
                        <li><a href="#"><span>Conversion (CRO)</span></a></li>
                        <li><a href="#"><span>Email</span></a></li>
                        <li><a href="#"><span>Social Media</span></a></li>
                        <li><a href="#"><span>Content</span></a></li>
                      </ul>
                    </div>
                  </li>

                  <li class="nav-security navboth-security nav-item nav-right-end">
                    <a class="nav-link-item"  href="#">
                      <span><i class="fas fa-shield-alt"></i></span>
                      <span><small>Cyber</small><br>Security</span>
                    </a>
                    <div class="nav-menu menu-security">
                      <ul class="menu-list">
                        <li><a href="#"><span>Assessment</span></a></li>
                        <li><a href="#"><span>Management</span></a></li>
                        <li><a href="#"><span>Penetration Testing</span></a></li>
                        <li><a href="#"><span>Cyber Essentials</span></a></li>
                        <li><a href="#"><span>PCI/DSS</span></a></li>
                        <li><a href="#"><span>Hacker Prevention</span></a></li>
                      </ul>
                    </div>
                </li>
              </ul>
              </div>
            </div>
          </header>
